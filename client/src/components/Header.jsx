export default function Header({ firstName, balance, photoUrl }) {
  return (
    <div className="relative px-5 pt-6 pb-4 flex items-center justify-between">
      {/* Левая часть: аватарка (уменьшена в 2 раза) */}
      <div className="flex items-center">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-[#00ff9d]/50 object-cover shadow-lg shadow-[#00ff9d]/20"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-2xl border-2 border-[#00ff9d]/30">
            👤
          </div>
        )}
      </div>

      {/* Правая часть: текст + имя + баланс */}
      <div className="flex flex-col items-end gap-1">
        <div className="text-sm text-gray-400">Добро пожаловать,</div>
        
        {/* Имя с градиентом */}
        <div className="text-xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#00e68c] bg-clip-text text-transparent">
          {firstName}
        </div>

        {/* Баланс в овальной капсуле */}
        <div className="flex items-center gap-2 bg-[#0f1115]/80 px-4 py-1.5 rounded-full border border-[#00ff9d]/40 backdrop-blur-sm mt-1">
          <span className="text-[#00ff9d] text-xl">♢</span>
          <span className="font-bold text-lg">{balance.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}