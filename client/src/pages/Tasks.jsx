// client/src/pages/Tasks.jsx
import { useState } from 'react';

export default function Tasks({ balance, setBalance }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTask, setActiveTask] = useState(null);
  const [tasksCompleted, setTasksCompleted] = useState({
    telegram: false, // Подписка на тг-канал
    chat: false,     // Вступить в чат
  });

  const tasks = [
    {
      id: 'telegram',
      title: 'Подписка на ТГ',
      description: 'Подпишись на тг @broketalking',
      reward: 500,
      link: 'https://t.me/broketalking',
      status: tasksCompleted.telegram ? 'Выполнено' : 'Не выполнено',
    },
    {
      id: 'chat',
      title: 'Вступить в чат',
      description: '💬 Вступи в чат Satanic',
      reward: 500,
      link: 'https://t.me/drainself',
      status: tasksCompleted.chat ? 'Выполнено' : 'Не выполнено',
    },
  ];

  const openModal = (task) => {
    setActiveTask(task);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveTask(null);
  };

  const handleSubscribe = () => {
    if (activeTask?.link) {
      window.open(activeTask.link, '_blank');
    }
  };

  const handleClaimReward = () => {
    if (activeTask) {
      setBalance(prev => prev + activeTask.reward);
      setTasksCompleted(prev => ({
        ...prev,
        [activeTask.id]: true,
      }));
      closeModal();
    }
  };

  return (
    <div className="p-6 pt-10">
      <h1 className="text-3xl font-bold text-[#00ff9d] mb-8 text-center">Задания</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tasks.map(task => (
          <button
            key={task.id}
            onClick={() => openModal(task)}
            className="relative bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-6 flex flex-col items-center gap-3 overflow-hidden active:scale-95 transition-all duration-200 shadow-lg shadow-black/30"
          >
            {/* Фон карточки */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff9d]/8 via-transparent to-[#00ff9d]/5 blur-xl pointer-events-none"></div>

            <div className="relative z-10 w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-4xl">
              {task.id === 'telegram' ? '📱' : '🎥'}
            </div>

            <span className="text-xl font-medium text-white relative z-10">{task.title}</span>

            <span className={`text-sm font-medium px-4 py-1 rounded-full relative z-10 ${
              task.status === 'Выполнено' ? 'bg-green-600/30 text-green-400' : 'bg-red-600/30 text-red-400'
            }`}>
              {task.status}
            </span>

            <span className="text-sm text-gray-400 text-center relative z-10">
              +{task.reward} монет
            </span>
          </button>
        ))}
      </div>

      {/* Модальное окно (плавно снизу) */}
      {modalOpen && activeTask && (
        <div className="fixed inset-0 bg-black/70 flex items-end z-50 animate-fadeIn">
          <div className="bg-[#1c1f24] rounded-t-3xl w-full max-h-[80vh] overflow-y-auto animate-slideUp">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">{activeTask.title}</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-white text-xl">✕</button>
              </div>

              <p className="text-gray-300 mb-6">{activeTask.description}</p>

              <div className="flex flex-col gap-4">
                {tasksCompleted[activeTask.id] ? (
                  <button
                    disabled
                    className="bg-green-600/30 text-green-400 font-medium py-4 rounded-xl cursor-not-allowed"
                  >
                    Награда получена
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSubscribe}
                      className="bg-[#00ff9d] text-black font-medium py-4 rounded-xl hover:bg-[#00e68c] transition"
                    >
                      {activeTask.id === 'telegram' ? 'Подписаться на ТГ' : 'Вступить в чат'}
                    </button>

                    <button
                      onClick={handleClaimReward}
                      className="bg-gray-700 text-white font-medium py-4 rounded-xl hover:bg-gray-600 transition"
                    >
                      Получить {activeTask.reward} монет
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}