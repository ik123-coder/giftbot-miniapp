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
    <nav className="bg-black/80 border border-gray-800/70 rounded-full py-2.5 px-10 flex justify-start items-center pl-6 shadow-2xl shadow-black/60 backdrop-blur-xl min-w-[340px] max-w-[90%] w-full">
      {/* Тонкий овал */}
      <nav className="bg-black/85 border border-gray-700/70 rounded-full py-2.5 px-10 flex justify-between items-center shadow-2xl shadow-black/60 backdrop-blur-xl min-w-[340px] max-w-[90%] w-full">
        {navItems.map(item => {
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className="relative flex flex-col items-center gap-0.5 px-3 min-w-[60px] transition-all"
            >
              {/* Круглое мягкое свечение только вокруг иконки */}
              <div className={`absolute inset-[-5px] rounded-full bg-[#00ff9d]/18 blur-lg transition-all duration-300 pointer-events-none z-0 ${
                isActive ? 'opacity-80 scale-110' : 'opacity-0 scale-90'
              }`}></div>

              {/* Иконка */}
              <Icon 
                name={item.icon} 
                className={`w-7 h-7 relative z-10 transition-all duration-200 ${
                  isActive 
                    ? 'text-[#00ff9d] drop-shadow-[0_0_5px_rgba(0,255,157,0.35)] scale-105' 
                    : 'text-gray-400'
                }`} 
              />

              {/* Текст */}
              <span className={`text-[10px] font-medium whitespace-nowrap relative z-10 ${
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