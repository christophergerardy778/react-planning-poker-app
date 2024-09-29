import { TextField } from '../../main/components/TextField.tsx';
import { Btn } from '../../main/components/Btn.tsx';
import { InputRadio } from '../../main/components/InputRadio.tsx';

export const CreateNewGame = () => {
  return (
    <div className={'container mx-auto px-4'}>
      <div className={'max-w-[500px] mx-auto flex flex-col gap-y-6'}>
        <h1>
          Crear un juego nuevo
        </h1>

        <p>
          Free / Open source Planning Poker Web App to estimate user stories for your Agile/Scrum teams. Create a session and invite your team members to estimate user stories efficiently.
        </p>

        <TextField
          label={'Nombre del juego'}
          value={''}
          onChange={() => {}}
        />

        <InputRadio
          label={'Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89)'}
          value={'1'}
          checked={false}
          onChange={() => null}
        />

        <InputRadio
          label={'Short Fibonacci (0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100)'}
          value={'1'}
          checked={true}
          onChange={() => null}
        />

        <InputRadio
          label={'T-Shirt (XXS, XS, S, M, L, XL, XXL)'}
          value={'1'}
          checked={false}
          onChange={() => null}
        />

        <InputRadio
          label={'T-Shirt & Numbers (S, M, L, XL, 1, 2, 3, 4, 5)'}
          value={'1'}
          checked={false}
          onChange={() => null}
        />

        <Btn className={'ripple-bg-blue-500 text-white w-full'}>
          Crear juego
        </Btn>
      </div>
    </div>
  )
}