// client/src/pages/Profile.jsx
export default function Profile() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-5xl font-bold text-[#00ff9d] mb-8">ПРОФИЛЬ</h1>
      <div className="bg-[#0f1115] border border-[#00ff9d]/50 rounded-3xl p-10 max-w-md mx-auto">
        <p className="text-3xl text-white mb-6">Страница профиля работает!</p>
        <p className="text-xl text-gray-300">Если ты видишь это — значит переход на Профиль успешен.</p>
        <p className="text-lg text-gray-400 mt-8">Теперь можно добавлять реальный контент</p>
      </div>
    </div>
  );
}