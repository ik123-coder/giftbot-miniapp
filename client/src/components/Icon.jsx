export default function Icon({ name, className = "w-14 h-14" }) {
  const iconMap = {
    tasks: "/assets/icons/check-outline.svg",
    shop: "/assets/icons/cart-outline.svg",
    giveaways: "/assets/icons/gift-outline.svg",
    referrals: "/assets/icons/users-outline.svg",
    home: "/assets/icons/home-outline.svg",
    profile: "/assets/icons/profile-outline.svg",
  };

  const src = iconMap[name];
  if (!src) return <div className="w-14 h-14 bg-gray-700 rounded-full" />;

  return (
    <img
      src={src}
      alt={name}
      className={`${className} text-[#00ff9d]`}
      style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 157, 0.6)) brightness(1.5)' }}
    />
  );
}