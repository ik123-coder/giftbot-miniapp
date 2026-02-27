// client/src/components/Icon.jsx

// Импортируем все иконки как модули (Vite сам обработает пути и хэши в билде)
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

  return (
    <img
      src={src}
      alt={name}
      className={className}
      style={{ 
        filter: 'drop-shadow(0 0 8px rgba(0, 255, 157, 0.6)) brightness(1.8)'
      }}
    />
  );
}