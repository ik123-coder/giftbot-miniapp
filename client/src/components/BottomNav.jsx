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
      {/* Тонкий овал, как на твоём скрине */}
      <nav className="bg-black/85 border border-gray-700/70 rounded-full py-2.5 px-10 flex justify-between items-center shadow-2xl shadow-black/60 backdrop-blur-xl min-w-[340px] max-w-[90%] w-full">
        {navItems.map(item => {
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className="relative flex flex-col items-center gap-0.5 px-3 min-w-[60px] transition-all"
            >
              {/* Круглое свечение под иконкой (как в карточках меню) */}
              <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 pointer-events-none z-0 ${
                isActive ? 'bg-[#00ff9d]/40 scale-125 opacity-100' : 'opacity-0 scale-90'
              }`}></div>

              {/* Иконка сверху свечения */}
              <Icon 
                name={item.icon} 
                className={`w-7 h-7 relative z-10 transition-all duration-200 ${
                  isActive 
                    ? 'text-[#00ff9d] drop-shadow-[0_0_12px_rgba(0,255,157,0.9)] scale-110' 
                    : 'text-gray-400'
                }`} 
              />

              {/* Текст под иконкой */}
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