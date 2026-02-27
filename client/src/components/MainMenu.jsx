import Icon from './Icon';

export default function MainMenu({ setPage }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8 px-4 pb-24">
      {/* Задания */}
      <button
        onClick={() => setPage('tasks')}
        className="bg-[#1c1f24] border border-[#2a2f36] rounded-xl p-4 flex flex-col items-center gap-2 active:scale-[0.97] transition-all duration-150 hover:shadow-[0_0_12px_rgba(0,255,157,0.15)]"
      >
        <Icon name="tasks" className="w-10 h-10 text-[#00ff9d] drop-shadow-[0_0_10px_rgba(0,255,157,0.6)]" />
        <span className="text-base font-medium text-white">Задания</span>
        <span className="text-xs text-gray-400 text-center leading-tight">
          Выполняй и<br />зарабатывай
        </span>
      </button>

      {/* Магазин */}
      <button
        onClick={() => setPage('shop')}
        className="bg-[#1c1f24] border border-[#2a2f36] rounded-xl p-4 flex flex-col items-center gap-2 active:scale-[0.97] transition-all duration-150 hover:shadow-[0_0_12px_rgba(0,255,157,0.15)]"
      >
        <Icon name="shop" className="w-10 h-10 text-[#00ff9d] drop-shadow-[0_0_10px_rgba(0,255,157,0.6)]" />
        <span className="text-base font-medium text-white">Магазин</span>
        <span className="text-xs text-gray-400 text-center leading-tight">
          Трать<br />монеты
        </span>
      </button>

      {/* Розыгрыши */}
      <button
        onClick={() => setPage('giveaways')}
        className="bg-[#1c1f24] border border-[#2a2f36] rounded-xl p-4 flex flex-col items-center gap-2 active:scale-[0.97] transition-all duration-150 hover:shadow-[0_0_12px_rgba(0,255,157,0.15)]"
      >
        <Icon name="giveaways" className="w-10 h-10 text-[#00ff9d] drop-shadow-[0_0_10px_rgba(0,255,157,0.6)]" />
        <span className="text-base font-medium text-white">Розыгрыши</span>
        <span className="text-xs text-gray-400 text-center leading-tight">
          Испытай<br />удачу
        </span>
      </button>

      {/* Рефералы */}
      <button
        onClick={() => setPage('referrals')}
        className="bg-[#1c1f24] border border-[#2a2f36] rounded-xl p-4 flex flex-col items-center gap-2 active:scale-[0.97] transition-all duration-150 hover:shadow-[0_0_12px_rgba(0,255,157,0.15)]"
      >
        <Icon name="referrals" className="w-10 h-10 text-[#00ff9d] drop-shadow-[0_0_10px_rgba(0,255,157,0.6)]" />
        <span className="text-base font-medium text-white">Рефералы</span>
        <span className="text-xs text-gray-400 text-center leading-tight">
          Приглашай<br />друзей
        </span>
      </button>
    </div>
  );
}