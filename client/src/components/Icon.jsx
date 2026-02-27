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
  if (!src) return null;

  return (
    <img
      src={src}
      alt=""
      className={`${className} invert-[.25] brightness-200`}  // делает любой SVG зелёным неоновым
      style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 157, 0.6))' }}
    />
  );
}