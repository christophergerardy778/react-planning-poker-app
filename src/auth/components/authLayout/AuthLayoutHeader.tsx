export const AuthLayoutHeader = () => {
  return (
    <div className={'px-4 py-5 w-full z-[1] bg-white sticky top-0'}>
      <div className={'container mx-auto'}>
        <div className={'flex justify-between items-center'}>
          <div className={'flex items-center gap-x-4'}>
            <img
              alt="icon"
              src="/favicon.png"
              className={'max-h-[48px]'}
            />
            
            <div className={'flex flex-col'}>
              <h3 className={'text-2xl font-semibold'}>
                Poker planning
              </h3>

              <span className={'text-blue-500 text-xs font-normal'}>
              Creado para equipos agiles
            </span>
            </div>
          </div>

          <div>ES</div>
        </div>
      </div>
    </div>
  );
}