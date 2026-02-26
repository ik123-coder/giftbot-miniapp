import { CheckCircle } from 'lucide-react';

const Tasks = () => {
  // Пример данных (замени на реальные из backend, если есть)
  const tasks = [
    {
      id: 'join_chat',
      title: 'Вступить в чат',
      description: 'https://t.me/drainself',
      reward: 500,
      completed: false,
      progress: 0,
      max: 1
    },
    {
      id: 'subscribe_channel',
      title: 'Подпишись на тг @broketalking',
      description: 'Подписывайся на канал и участвуй в розыгрышах!',
      reward: 500,
      completed: false,
      progress: 0,
      max: 1
    }
  ];

  return (
    <div className="p-6 pb-32">
      <h1 className="text-3xl font-bold text-white mb-4">Задания</h1>
      <p className="text-white/70 mb-8">
        Больше заданий появляется во время конкурса
      </p>

      <div className="space-y-6">
        {tasks.map(task => (
          <div key={task.id} className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-green-500/20 shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
                <p className="text-white/80">{task.description}</p>
              </div>
              {task.completed && (
                <div className="bg-green-500/20 p-3 rounded-full">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
              )}
            </div>

            <div className="mt-6">
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-500"
                  style={{ width: `${(task.progress / task.max) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-white/80">{task.progress}/{task.max}</span>
                {task.completed ? (
                  <span className="text-green-500 font-bold">Выполнено</span>
                ) : (
                  <div className="flex gap-3">
                    <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl text-sm">
                      Перейти
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-sm">
                      Проверить
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;