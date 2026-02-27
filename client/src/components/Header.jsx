export default function Header({ firstName, balance, photoUrl }) {
  return (
    <div className="relative px-5 pt-6 pb-4 flex items-center justify-between bg-gradient-to-b from-black to-transparent">
      <div>
        <div className="text-sm text-gray-400">Добро пожаловать,</div>
        <div className="text-xl font-bold">{firstName}</div>
      </div>

      {/* Аватар по центру сверху */}
      <div className="absolute left-1/2 top-4 -translate-x-1/2">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt=""
            className="w-20 h-20 rounded-full border-4 border-[#00ff9d]/30 object-cover shadow-lg shadow-[#00ff9d]/20"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-4xl border-4 border-gray-700">
            👤
          </div>
        )}
      </div>

      {/* Баланс */}
      <div className="flex items-center gap-2 bg-gray-900/80 px-4 py-2 rounded-full border border-[#00ff9d]/40 backdrop-blur-sm">
        <span className="text-[#00ff9d] text-xl">♢</span>
        <span className="font-bold text-lg">{balance.toLocaleString()}</span>
      </div>
    </div>
  );
}