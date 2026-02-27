// client/src/components/BottomNav.jsx
import Icon from './Icon';

export default function BottomNav({ currentPage, setPage }) {
  const navItems = [
    { id: 'main',     label: 'Главная',   icon: 'home'     },
    { id: 'tasks',    label: 'Задания',   icon: 'tasks'    },
    { id: 'shop',     label: 'Магазин',   icon: 'shop'     },
    { id: 'referrals',label: 'Друзья',    icon: 'referrals' },
    { id: 'profile',  label: 'Профиль',   icon: 'profile'  },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-50 px-6">
      {/* Овальная панель посередине, не до краёв экрана */}
      <nav className="bg-[#0a0c10] border border-[#1a1f25] rounded-full py-4 px-8 flex justify-around items-center shadow-xl shadow-black/50 backdrop-blur-md max-w-[90%] w-full">
        {navItems.map(item => {
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-1 rounded-full transition-all ${
                isActive
                  ? 'text-[#00ff9d] bg-[#00ff9d]/10'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon 
                name={item.icon} 
                className={`w-7 h-7 ${
                  isActive ? 'text-[#00ff9d] drop-shadow-[0_0_8px_rgba(0,255,157,0.6)]' : 'text-gray-400'
                }`} 
              />
              <span className={`text-xs font-medium ${isActive ? 'text-[#00ff9d]' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}