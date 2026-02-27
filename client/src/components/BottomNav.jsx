import Icon from './Icon';

export default function BottomNav({ currentPage, setPage }) {
  const navItems = [
    { id: 'main',     label: 'Главная',  icon: 'home'     },
    { id: 'tasks',    label: 'Задания',  icon: 'tasks'    },
    { id: 'shop',     label: 'Магазин',  icon: 'shop'     },
    { id: 'referrals',label: 'Друзья',   icon: 'referrals' },
    { id: 'profile',  label: 'Профиль',  icon: 'profile'  },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0c10] border-t border-[#1a1f25] py-3 px-2 flex justify-around items-center z-50">
      {navItems.map(item => {
        const isActive = currentPage === item.id;
        const isDisabled = ['tasks', 'shop', 'giveaways', 'referrals'].includes(item.id);

        return (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            disabled={isDisabled}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-200 ${
              isActive
                ? 'text-[#00ff9d] bg-[#00ff9d]/10'
                : isDisabled
                ? 'text-gray-600 cursor-not-allowed opacity-50'
                : 'text-gray-400 hover:text-white active:text-white'
            }`}
          >
            <Icon name={item.icon} className={`w-7 h-7 ${isActive ? 'text-[#00ff9d]' : ''}`} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}