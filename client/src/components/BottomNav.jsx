import Icon from './Icon';

export default function BottomNav({ currentPage, setPage }) {
  const navItems = [
    { id: 'main', label: 'Главная', icon: 'home' },
    { id: 'tasks', label: 'Задания', icon: 'tasks' },
    { id: 'shop', label: 'Магазин', icon: 'shop' },
    { id: 'referrals', label: 'Друзья', icon: 'referrals' },
    { id: 'profile', label: 'Профиль', icon: 'profile' },
  ];

  return (
    <nav className="bg-[#0b0e12] border-t border-border-dark py-3 px-2 flex justify-around items-center">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => setPage(item.id)}
          className={`flex flex-col items-center gap-1 px-3 py-1 rounded-full transition-all ${
            currentPage === item.id
              ? 'text-accent-green bg-accent-green/10'
              : 'text-text-dim hover:text-white'
          }`}
        >
          <Icon name={item.icon} className="w-7 h-7" />
          <span className="text-xs font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}