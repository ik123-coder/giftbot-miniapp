export default function Header({ firstName, balance, photoUrl }) {
  return (
    <div className="relative px-4 pt-4 pb-2 flex items-center justify-between">
      {/* Левая часть: текст */}
      <div className="flex flex-col">
        <div className="text-sm opacity-80">Добро пожаловать,</div>
        {/* Имя пользователя с градиентом и свечением */}
        <div className="text-lg font-semibold bg-gradient-to-r from-[#00cc88] to-[#00ff9d] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,255,157,0.6)]">
          {firstName}
        </div>
      </div>

      {/* Аватар по центру сверху */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt="avatar"
            className="w-14 h-14 rounded-full border-2 border-green-500 object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
            👤
          </div>
        )}
      </div>

      {/* Правая часть: баланс */}
      <div className="flex items-center gap-1 bg-gray-800 px-3 py-1.5 rounded-full border border-green-600">
        <span className="text-green-400 text-lg">$</span>
        <span className="font-bold">{balance}</span>
      </div>
    </div>
  );
}