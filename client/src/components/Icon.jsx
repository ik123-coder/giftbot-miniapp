// client/src/components/Icon.jsx

import checkOutline from '../assets/icons/check-outline.svg';
import cartOutline from '../assets/icons/cart-outline.svg';
import giftOutline from '../assets/icons/gift-outline.svg';
import usersOutline from '../assets/icons/users-outline.svg';
import homeOutline from '../assets/icons/home-outline.svg';
import profileOutline from '../assets/icons/profile-outline.svg';

const iconMap = {
  tasks: checkOutline,
  shop: cartOutline,
  giveaways: giftOutline,
  referrals: usersOutline,
  home: homeOutline,
  profile: profileOutline,
};

export default function Icon({ name, className = "w-16 h-16" }) {
  const src = iconMap[name];

  if (!src) {
    return <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white text-xl">?</div>;
  }

  return (
    <img
      src={src}
      alt={name}
      className={`${className} transition-all duration-300`}
      style={{
        filter: 'brightness(0) saturate(100%) invert(68%) sepia(100%) saturate(1234%) hue-rotate(92deg) brightness(95%) contrast(110%) drop-shadow(0 0 12px rgba(0, 255, 157, 0.8))',
      }}
    />
  );
}