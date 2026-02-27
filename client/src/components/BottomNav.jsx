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
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-8">
      {/* Длинный тонкий овал с отступами от краёв */}
      <nav className="bg-black/80 border border-gray-800/60 rounded-full py-3 px-10 flex justify-between items-center shadow-2xl shadow-black/60 backdrop-blur-xl min-w-[340px] max-w-[420px] w-full">
        {navItems.map(item => {
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 min-w-[60px] transition-all ${
                isActive ? 'text-[#00ff9d]' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon 
                name={item.icon} 
                className={`w-7 h-7 transition-all duration-200 ${
                  isActive 
                    ? 'text-[#00ff9d] drop-shadow-[0_0_10px_rgba(0,255,157,0.8)] scale-110' 
                    : 'text-gray-400'
                }`} 
              />
              <span className={`text-[10px] font-medium whitespace-nowrap ${
                isActive ? 'text-[#00ff9d]' : 'text-gray-400'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}