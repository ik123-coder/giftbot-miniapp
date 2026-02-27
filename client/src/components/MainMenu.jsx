import Icon from './Icon';

export default function MainMenu({ setPage }) {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 px-5 pb-20">
      {/* Задания */}
      <button
        onClick={() => setPage('tasks')}
        className="relative bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-6 flex flex-col items-center gap-3 overflow-hidden active:scale-95 transition-all duration-200"
      >
        {/* Убрал мигающий фон — он был на всю карточку */}
        <div className="relative">
          {/* Круглое мягкое свечение только вокруг иконки */}
          <div className="absolute inset-[-6px] rounded-full bg-[#00ff9d]/20 blur-lg pointer-events-none z-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          <Icon 
            name="tasks" 
            className="w-6 h-6 text-[#00e68c] drop-shadow-[0_0_6px_rgba(0,230,140,0.4)] relative z-10" 
          />
        </div>
        <span className="text-lg font-medium text-white relative z-10">Задания</span>
        <span className="text-sm text-gray-400 text-center leading-tight relative z-10">
          Выполняй и<br />зарабатывай
        </span>
      </button>

      {/* Магазин */}
      <button
        onClick={() => setPage('shop')}
        className="relative bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-6 flex flex-col items-center gap-3 overflow-hidden active:scale-95 transition-all duration-200"
      >
        <div className="relative">
          <div className="absolute inset-[-6px] rounded-full bg-[#00ff9d]/20 blur-lg pointer-events-none z-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          <Icon 
            name="shop" 
            className="w-6 h-6 text-[#00e68c] drop-shadow-[0_0_6px_rgba(0,230,140,0.4)] relative z-10" 
          />
        </div>
        <span className="text-lg font-medium text-white relative z-10">Магазин</span>
        <span className="text-sm text-gray-400 text-center leading-tight relative z-10">
          Трать<br />монеты
        </span>
      </button>

      {/* Розыгрыши */}
      <button
        onClick={() => setPage('giveaways')}
        className="relative bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-6 flex flex-col items-center gap-3 overflow-hidden active:scale-95 transition-all duration-200"
      >
        <div className="relative">
          <div className="absolute inset-[-6px] rounded-full bg-[#00ff9d]/20 blur-lg pointer-events-none z-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          <Icon 
            name="giveaways" 
            className="w-6 h-6 text-[#00e68c] drop-shadow-[0_0_6px_rgba(0,230,140,0.4)] relative z-10" 
          />
        </div>
        <span className="text-lg font-medium text-white relative z-10">Розыгрыши</span>
        <span className="text-sm text-gray-400 text-center leading-tight relative z-10">
          Испытай<br />удачу
        </span>
      </button>

      {/* Рефералы */}
      <button
        onClick={() => setPage('referrals')}
        className="relative bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-6 flex flex-col items-center gap-3 overflow-hidden active:scale-95 transition-all duration-200"
      >
        <div className="relative">
          <div className="absolute inset-[-6px] rounded-full bg-[#00ff9d]/20 blur-lg pointer-events-none z-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
          <Icon 
            name="referrals" 
            className="w-6 h-6 text-[#00e68c] drop-shadow-[0_0_6px_rgba(0,230,140,0.4)] relative z-10" 
          />
        </div>
        <span className="text-lg font-medium text-white relative z-10">Рефералы</span>
        <span className="text-sm text-gray-400 text-center leading-tight relative z-10">
          Приглашай<br />друзей
        </span>
      </button>
    </div>
  );
}