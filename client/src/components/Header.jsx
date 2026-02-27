export default function Header({ firstName, balance, photoUrl }) {
  return (
    <div className="relative px-4 pt-4 pb-2 flex items-center justify-between">
      {/* Левая часть: текст */}
      <div className="flex flex-col">
        <div className="text-sm opacity-80">Добро пожаловать,</div>
        <div className="text-lg font-semibold">{firstName}</div>
      </div>

      {/* Аватар по центру сверху */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4">
        <div className="relative w-16 h-16">
          {/* Самое внешнее свечение (размытое, небольшой диапазон) */}
          <div className="absolute inset-[-6px] rounded-full bg-gradient-to-r from-[#00ff9d]/40 via-[#00e68c]/30 to-[#00ff9d]/40 blur-lg opacity-80 pointer-events-none"></div>

          {/* Зелёная неоновая обводка (градиент) */}
          <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#00ff9d] via-[#00e68c] to-[#00ff9d] p-[2px] pointer-events-none">
            {/* Чёрная обводка (основная, толще) */}
            <div className="w-full h-full rounded-full border-4 border-black bg-black">
              {/* Тонкая серая внутренняя обводка */}
              <div className="w-full h-full rounded-full border border-gray-600 overflow-hidden">
                {/* Сама аватарка */}
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-3xl text-white">
                    👤
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Правая часть: баланс */}
      <div className="flex items-center gap-1 bg-gray-800 px-3 py-1.5 rounded-full border border-green-600">
        <span className="text-green-400 text-lg">$</span>
        <span className="font-bold">{balance}</span>
      </div>
    </div>
  );
}