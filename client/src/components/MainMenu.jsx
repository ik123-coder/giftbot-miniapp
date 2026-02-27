import Icon from './Icon';

export default function MainMenu({ setPage }) {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 px-5 pb-20">
      {/* Задания */}
      <button
        onClick={() => setPage('tasks')}
        className="bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-6 flex flex-col items-center gap-3 active:scale-[0.97] transition-all duration-150 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]"
      >
        <Icon name="tasks" className="w-16 h-16 text-[#00ff9d] drop-shadow-[0_0_12px_rgba(0,255,157,0.7)]" />
        <span className="text-lg font-semibold text-white">Задания</span>
        <span className="text-sm text-gray-400 text-center leading-tight">
          Выполняй и<br />зарабатывай
        </span>
      </button>

      {/* Магазин */}
      <button
        onClick={() => setPage('shop')}
        className="bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-6 flex flex-col items-center gap-3 active:scale-[0.97] transition-all duration-150 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]"
      >
        <Icon name="shop" className="w-16 h-16 text-[#00ff9d] drop-shadow-[0_0_12px_rgba(0,255,157,0.7)]" />
        <span className="text-lg font-semibold text-white">Магазин</span>
        <span className="text-sm text-gray-400 text-center leading-tight">
          Трать<br />монеты
        </span>
      </button>

      {/* Розыгрыши */}
      <button
        onClick={() => setPage('giveaways')}
        className="bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-6 flex flex-col items-center gap-3 active:scale-[0.97] transition-all duration-150 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]"
      >
        <Icon name="giveaways" className="w-16 h-16 text-[#00ff9d] drop-shadow-[0_0_12px_rgba(0,255,157,0.7)]" />
        <span className="text-lg font-semibold text-white">Розыгрыши</span>
        <span className="text-sm text-gray-400 text-center leading-tight">
          Испытай<br />удачу
        </span>
      </button>

      {/* Рефералы */}
      <button
        onClick={() => setPage('referrals')}
        className="bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-6 flex flex-col items-center gap-3 active:scale-[0.97] transition-all duration-150 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]"
      >
        <Icon name="referrals" className="w-16 h-16 text-[#00ff9d] drop-shadow-[0_0_12px_rgba(0,255,157,0.7)]" />
        <span className="text-lg font-semibold text-white">Рефералы</span>
        <span className="text-sm text-gray-400 text-center leading-tight">
          Приглашай<br />друзей
        </span>
      </button>
    </div>
  );
}