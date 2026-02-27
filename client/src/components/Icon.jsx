// client/src/components/Icon.jsx

// Импортируем SVG как модули (Vite сам обработает хэш в билде)
import checkOutline from '../assets/icons/check-outline.svg';
import cartOutline from '../assets/icons/cart-outline.svg';
import giftOutline from '../assets/icons/gift-outline.svg';
import usersOutline from '../assets/icons/users-outline.svg';
import homeOutline from '../assets/icons/home-outline.svg';
import profileOutline from '../assets/icons/profile-outline.svg';

const iconMap = {
  tasks:     checkOutline,
  shop:      cartOutline,
  giveaways: giftOutline,
  referrals: usersOutline,
  home:      homeOutline,
  profile:   profileOutline,
};

export default function Icon({ name, className = "w-14 h-14" }) {
  const src = iconMap[name];

  if (!src) {
    return <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white">?</div>;
  }

  // Определяем, является ли это иконкой нижней панели (по размеру или классу)
  const isBottomNav = className.includes('w-7') || className.includes('w-[28px]');

  return (
    <img
      src={src}
      alt={name}
      className={className}
      style={{
        filter: isBottomNav
          ? className.includes('text-[#00ff9d]') 
            ? 'brightness(0) saturate(100%) invert(68%) sepia(100%) saturate(1234%) hue-rotate(92deg) brightness(95%) contrast(110%) drop-shadow(0 0 8px rgba(0,255,157,0.6))'
            : 'brightness(0.5) grayscale(1) contrast(0.8)' // серый для неактивных в BottomNav
          : 'brightness(0) saturate(100%) invert(68%) sepia(100%) saturate(1234%) hue-rotate(92deg) brightness(95%) contrast(110%) drop-shadow(0 0 12px rgba(0,255,157,0.7))' // ярко-зелёный для главного меню
      }}
    />
  );
}