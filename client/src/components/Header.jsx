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
          bg-white/10
          backdrop-blur-md
          border border-white/20
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
          text-white
        "
      >
        <span className="text-green-400 text-lg">$</span>
        <span className="font-bold">{balance}</span>
      </div>
    </div>
  );
}