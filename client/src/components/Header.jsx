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
      <div className="flex items-center gap-2 bg-[#1c1f24] px-5 py-2 rounded-full border border-[#2a2f36] shadow-lg shadow-[#00ff9d]/5 hover:shadow-[0_0_12px_rgba(0,255,157,0.15)] transition-all duration-300">
  <span className="text-[#00ff9d] text-xl drop-shadow-[0_0_6px_rgba(0,255,157,0.5)]">$</span>
  <span className="font-bold text-white text-lg">{balance.toLocaleString()}</span>
</div>
    </div>
  );
}