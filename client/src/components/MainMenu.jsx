import Icon from './Icon';

export default function MainMenu({ setPage }) {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 px-5">
      <button
        onClick={() => setPage('tasks')}
        className="bg-card-bg border border-border-dark rounded-large p-8 flex flex-col items-center gap-4 transition-all active:scale-98 hover:shadow-glow"
      >
        <Icon name="tasks" />
        <div className="text-lg font-medium text-white">Задания</div>
        <div className="text-sm text-text-dim text-center leading-tight">
          Выполняй и<br />зарабатывай
        </div>
      </button>

      <button
        onClick={() => setPage('shop')}
        className="bg-card-bg border border-border-dark rounded-large p-8 flex flex-col items-center gap-4 transition-all active:scale-98 hover:shadow-glow"
      >
        <Icon name="shop" />
        <div className="text-lg font-medium text-white">Магазин</div>
        <div className="text-sm text-text-dim text-center leading-tight">
          Трать<br />монеты
        </div>
      </button>

      <button
        onClick={() => setPage('giveaways')}
        className="bg-card-bg border border-border-dark rounded-large p-8 flex flex-col items-center gap-4 transition-all active:scale-98 hover:shadow-glow"
      >
        <Icon name="giveaways" />
        <div className="text-lg font-medium text-white">Розыгрыши</div>
        <div className="text-sm text-text-dim text-center leading-tight">
          Испытай<br />удачу
        </div>
      </button>

      <button
        onClick={() => setPage('referrals')}
        className="bg-card-bg border border-border-dark rounded-large p-8 flex flex-col items-center gap-4 transition-all active:scale-98 hover:shadow-glow"
      >
        <Icon name="referrals" />
        <div className="text-lg font-medium text-white">Рефералы</div>
        <div className="text-sm text-text-dim text-center leading-tight">
          Приглашай<br />друзей
        </div>
      </button>
    </div>
  );
}