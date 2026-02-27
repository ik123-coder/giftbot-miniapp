// client/src/pages/Profile.jsx
export default function Profile() {
  return (
    <div className="p-6 pt-10 text-center">
      <h1 className="text-4xl font-bold mb-8 text-[#00ff9d]">Профиль</h1>
      <div className="bg-[#0f1115] border border-[#00ff9d]/30 rounded-3xl p-8">
        <p className="text-2xl text-white mb-4">Здесь будет твой профиль</p>
        <p className="text-xl text-gray-300">Баланс: (n) монет</p>
        <p className="text-lg text-gray-400 mt-6">Пока всё в разработке, но страница работает!</p>
      </div>
    </div>
  );
}