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
      {/* Длинный тонкий овал, как на втором скрине */}
      <nav className="bg-[#0a0c10]/95 border border-[#1a1f25] rounded-full py-3 px-10 flex justify-around items-center shadow-2xl shadow-black/60 backdrop-blur-lg min-w-[320px] max-w-[380px] w-full">
        {navItems.map(item => {
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex flex-col items-center gap-0.5 px-4 transition-all ${
                isActive
                  ? 'text-[#00ff9d]'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {/* Иконки — серые по умолчанию, зелёные при активной */}
              <Icon 
                name={item.icon} 
                className={`w-7 h-7 transition-all duration-200 ${
                  isActive 
                    ? 'text-[#00ff9d] drop-shadow-[0_0_8px_rgba(0,255,157,0.7)] scale-110' 
                    : 'text-gray-400'
                }`} 
              />
              {/* Текст под иконкой — маленький, как на скрине */}
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