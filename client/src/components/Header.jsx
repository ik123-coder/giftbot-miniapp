export default function Header({ firstName, balance, photoUrl }) {
  return (
    <div className="relative px-4 pt-4 pb-2 flex items-center justify-between">
      {/* Левая часть: теперь аватарка (был текст) */}
      <div className="flex items-center">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt="avatar"
            className="w-14 h-14 rounded-full border-2 border-green-500 object-cover"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
            👤
          </div>
        )}
      </div>

      {/* Центр: теперь текст (был аватар) */}
      <div className="absolute left-1/2 -translate-x-[70%] top-4 flex flex-col items-center">
        <div className="text-sm opacity-80">Добро пожаловать,</div>
        <div className="text-lg font-semibold">{firstName}</div>
      </div>

      {/* Правая часть: баланс */}
      <div className="flex items-center gap-1 bg-gray-800 px-3 py-1.5 rounded-full border border-green-600">
        <span className="text-green-400 text-lg">$</span>
        <span className="font-bold">{balance}</span>
      </div>
    </div>
  );
}