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
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-6">
      {/* Liquid glass овал — полупрозрачный серый с сильным размытием и глянцем */}
      <nav className="bg-gray-900/25 backdrop-blur-2xl border border-white/10 rounded-full py-2.5 px-10 flex justify-start items-center pl-6 shadow-2xl shadow-black/50 overflow-hidden min-w-[340px] max-w-[90%] w-full">
        {/* Внутренняя глянцевая подсветка (лёгкий белый градиент сверху) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none z-0"></div>

        {navItems.map(item => {
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`relative flex flex-col items-center gap-0.5 px-4 min-w-[60px] transition-all ${
                isActive ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {/* Очень лёгкое внутреннее свечение при активной вкладке */}
              <div className={`absolute inset-0 rounded-full bg-white/5 blur-md transition-all duration-300 pointer-events-none z-0 ${
                isActive ? 'opacity-70 scale-110' : 'opacity-0 scale-100'
              }`}></div>

              <Icon 
                name={item.icon} 
                className={`w-7 h-7 relative z-10 transition-all duration-200 ${
                  isActive 
                    ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] scale-110' 
                    : 'drop-shadow-sm'
                }`} 
              />

              <span className={`text-[10px] font-medium whitespace-nowrap relative z-10 ${
                isActive ? 'text-white' : 'text-gray-300'
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