// client/src/pages/Profile.jsx
export default function Profile() {
  return (
    <div className="p-6 pt-10 pb-24">
      {/* Большая карточка в сером стиле, как в главном меню */}
      <div className="bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-8 shadow-lg shadow-[#00ff9d]/10 hover:shadow-[0_0_20px_rgba(0,255,157,0.15)] transition-all duration-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#00ff9d] mb-8">
            ПРОФИЛЬ
          </h1>

          <p className="text-3xl text-white mb-6 font-medium">
            Страница профиля будет скоро!
          </p>

          <p className="text-xl text-gray-300 mb-8">
            В разработке...
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            Промокоды, реф. система и<br />
            прочее.
          </p>
        </div>
      </div>
    </div>
  );
}