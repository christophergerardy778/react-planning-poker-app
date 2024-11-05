import './Game.css';
import { useGame } from '../../hooks/useGame.ts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GameVotingCards } from '../../components/gameVotingCard/GameVotingCards.tsx';
import { GameIssueCardList } from '../../components/gameIssueCard/gameIssueCardList/GameIssueCardList.tsx';
import { GameIssueSelection } from '../../components/GameIssueSelection.tsx';
import { socket, useSocket } from '../../hooks/useSocket.ts';
import { useAuth } from '../../../auth/hooks/useAuth.ts';

export const Game = () => {
  const { joinToRoom } = useSocket();
  const { authSelector } = useAuth();
  const [participants, setParticipants] = useState([]);
  const params = useParams();

  const {
    gameSelector,
    findGameById,
    getGameIssuesByGameId,
    getAllIssueVotes
  } = useGame();

  const handleClose = (e: any) => {
    socket.emit('leave-room', {
      roomId: params.id,
      userId: authSelector.user.id,
    });

    socket.disconnect();

    e.preventDefault();
    e.returnValue = '';
  }

  const handlePageShow = (event: any) => {
    if (event.persisted) {
      window.location.reload();
    }
  }

  useEffect(() => {
    if (!gameSelector.game) {
      findGameById(params.id!);
      getGameIssuesByGameId(params.id!);
    }

    joinToRoom();

    window.addEventListener('beforeunload', handleClose)
    window.addEventListener('pageshow', handlePageShow)

    socket.on("fetch-game-data", () => {
      findGameById(params.id!);
      getGameIssuesByGameId(params.id!);

      if (gameSelector.game?.selectedIssueId) {
        getAllIssueVotes(gameSelector.game.selectedIssueId)
      }
    });

    socket.on("user-joined", (users: any) => {
      setParticipants(users);
    })

    return () => {
      window.removeEventListener('beforeunload', handleClose)
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [params.id]);

  useEffect(() => {
    if (gameSelector.game?.selectedIssueId) {
      getAllIssueVotes(gameSelector.game.selectedIssueId)
    }
  }, [gameSelector.game]);

  return (
    <div className={'container mx-auto px-4 game-height-wrapper'}>
      <div className={'grid grid-cols-12 gap-x-8 game-height-wrapper'}>
        <div className={'col-start-1 col-end-4'}>
          <h1 className={'text-2xl font-semibold'}>
            Participantes
          </h1>

          <div className={'mt-2'}>
            {participants.map((participant: any) => (
              <div
                className={
                  'py-4 flex items-center gap-3 border-b-gray-300 border-b'
                }
                key={participant.userId}
              >
                <div
                  className={'p-4 w-[10px] h-[10px] bg-gray-300 rounded-full'}
                />
                {participant.name}
              </div>
            ))}
          </div>
        </div>

        <div className={'col-start-4 col-end-10'}>
          <div className={'flex flex-col h-full justify-between'}>
            <h1 className={'text-4xl font-semibold mb-7'}>
              {gameSelector.game?.name}
            </h1>

            <GameIssueSelection />

            <div
              className={'flex w-full h-full justify-center items-center'}
            />

            <GameVotingCards
              visible={!!gameSelector.game?.selectedIssueId}
              voteSystem={gameSelector.game?.voting_system}
            />
          </div>
        </div>

        <div className={'col-start-10 col-end-13'}>
          <GameIssueCardList />
        </div>
      </div>
    </div>
  );
}