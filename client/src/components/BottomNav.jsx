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

  const handleClick = (id) => {
    // Мягкая вибрация как на iPhone (тихий отклик клавиатуры)
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
      // Альтернативы, если 'soft' покажется не тем:
      // 'light' — ещё легче и короче
      // 'rigid' — чуть жёстче
    }

    setPage(id);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0c10] border-t border-[#1a1f25] py-3 px-2 flex justify-around items-center z-50">
      {navItems.map(item => {
        const isActive = currentPage === item.id;

        return (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
              isActive
                ? 'text-[#00ff9d] bg-[#00ff9d]/10'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <Icon 
              name={item.icon} 
              className={`w-7 h-7 ${
                isActive ? 'text-[#00ff9d] drop-shadow-[0_0_8px_rgba(0,255,157,0.6)]' : 'text-gray-500'
              }`} 
            />
            <span className={`text-xs font-medium ${isActive ? 'text-[#00ff9d]' : 'text-gray-500'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}