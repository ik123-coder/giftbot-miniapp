export default function Header({ firstName, balance, photoUrl }) {
  return (
    <div className="relative px-4 pt-4 pb-2 flex items-center justify-between">
      {/* Левая часть: текст */}
      <div className="flex flex-col">
        <div className="text-sm opacity-80">Добро пожаловать,</div>
        <div className="text-lg font-semibold">{firstName}</div>
      </div>

      {/* Аватар по центру сверху */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4">
        <div className="relative">
          {/* Внешнее зелёное свечение и градиентная рамка */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff9d] via-[#00e68c] to-[#00ff9d] blur-md opacity-70"></div>
          
          {/* Сам аватар с чёрной внутренней обводкой */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-black bg-black shadow-[0_0_20px_rgba(0,255,157,0.6)]">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-2xl text-white">
                👤
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Правая часть: баланс */}
      <div className="flex items-center gap-1 bg-gray-800 px-3 py-1.5 rounded-full border border-green-600">
        <span className="text-green-400 text-lg">$</span>
        <span className="font-bold">{balance}</span>
      </div>
    </div>
  );
}