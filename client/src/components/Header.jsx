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
      <div
        className="
          flex items-center gap-1
          px-4 py-2
          rounded-full
          bg-[#2b2b2b]
          text-white
          shadow-[0_0_8px_rgba(34,197,94,0.7),0_0_20px_rgba(34,197,94,0.4)]
        "
      >
        <span className="text-green-400 text-lg">$</span>
        <span className="font-bold">{balance}</span>
      </div>
    </div>
  );
}