// client/src/components/Header.jsx
export default function Header({ firstName, balance, photoUrl }) {
  return (
    <div className="relative px-5 pt-6 pb-4 flex items-center justify-between">
      {/* Левая часть: текст */}
      <div className="flex flex-col">
        <div className="text-sm text-gray-400">Добро пожаловать,</div>
        <div className="text-xl font-bold text-white">
          {firstName}
        </div>
      </div>

      {/* Аватар по центру сверху — с неоновой рамкой и свечением */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#00ff9d] via-[#00e68c] to-[#00ff9d] p-[3px] shadow-[0_0_20px_rgba(0,255,157,0.5)]">
          {/* Внутренний чёрный круг для обводки */}
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-1">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl text-white">
                👤
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Правая часть: баланс */}
      <div className="flex items-center gap-2 bg-gray-900/70 px-4 py-2 rounded-full border border-[#00ff9d]/40 backdrop-blur-sm">
        <span className="text-[#00ff9d] text-xl drop-shadow-[0_0_6px_rgba(0,255,157,0.5)]">$</span>
        <span className="font-bold text-lg text-white">{balance.toLocaleString()}</span>
      </div>
    </div>
  );
}