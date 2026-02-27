export default function Shop() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="text-8xl mb-8">🔒</div>
      <h1 className="text-4xl font-bold text-red-600 mb-6">Пока недоступно!</h1>
      <p className="text-gray-300 text-xl max-w-md">
        Магазин находится в разработке.<br />
        Скоро появятся товары.
      </p>
    </div>
  );
}