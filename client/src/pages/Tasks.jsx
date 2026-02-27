// client/src/pages/Tasks.jsx
import { useState } from 'react';
import checkIcon from '../assets/icons/check.svg';
import crossIcon from '../assets/icons/cross.svg';
import telegramIcon from '../assets/icons/telegram.svg';
import chatIcon from '../assets/icons/chat.svg';

export default function Tasks({ balance, setBalance, tasksCompleted, setTasksCompleted }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTask, setActiveTask] = useState(null);

  const tasks = [
    {
      id: 'telegram',
      title: 'Подписка на ТГ',
      description: 'Подпишись на тг @broketalking',
      reward: 500,
      link: 'https://t.me/broketalking',
      status: tasksCompleted.telegram ? 'Выполнено' : 'Не выполнено',
      icon: telegramIcon,
    },
    {
      id: 'chat',
      title: 'Вступить в чат',
      description: 'Вступи в чат Satanic',
      reward: 500,
      link: 'https://t.me/drainself',
      status: tasksCompleted.chat ? 'Выполнено' : 'Не выполнено',
      icon: chatIcon,
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
    <div className="p-6 pt-10 min-h-screen">
      <h1 className="text-3xl font-bold text-[#00ff9d] mb-8 text-center">Задания</h1>

      {/* Карточки заданий */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[85%] mx-auto">
        {tasks.map(task => (
          <button
            key={task.id}
            onClick={() => openModal(task)}
            className="relative bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-5 flex flex-col items-center gap-3 overflow-hidden active:scale-95 transition-all duration-200 shadow-lg shadow-black/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff9d]/8 via-transparent to-[#00ff9d]/5 blur-xl pointer-events-none"></div>

            <div className="relative z-10 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={task.icon}
                alt={task.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            <span className="text-lg font-medium text-white relative z-10">{task.title}</span>

            <div className={`flex items-center gap-2 px-4 py-1 rounded-full relative z-10 ${
              task.status === 'Выполнено' ? 'bg-green-600/30 text-green-400' : 'bg-red-600/30 text-red-400'
            }`}>
              <img 
                src={task.status === 'Выполнено' ? checkIcon : crossIcon} 
                alt="status" 
                className="w-5 h-5" 
              />
              <span className="text-sm font-medium">{task.status}</span>
            </div>

            <span className="text-sm text-gray-400 relative z-10">
              +{task.reward} монет
            </span>
          </button>
        ))}
      </div>

      {/* Модальное окно в центре */}
      {modalOpen && activeTask && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div 
            className="bg-[#1c1f24] rounded-3xl w-[85%] max-w-[360px] max-h-[70vh] overflow-y-auto animate-popIn touch-pan-y"
            onTouchStart={(e) => {
              const startY = e.touches[0].clientY;
              const handleTouchMove = (e) => {
                if (e.touches[0].clientY - startY > 80) {
                  closeModal();
                  document.removeEventListener('touchmove', handleTouchMove);
                }
              };
              document.addEventListener('touchmove', handleTouchMove, { passive: true });
              e.currentTarget.addEventListener('touchend', () => {
                document.removeEventListener('touchmove', handleTouchMove);
              }, { once: true });
            }}
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-bold text-white">{activeTask.title}</h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-white text-xl">✕</button>
              </div>

              <p className="text-gray-300 mb-5 text-sm">{activeTask.description}</p>

              <div className="flex flex-col gap-3">
                {tasksCompleted[activeTask.id] ? (
                  <button
                    disabled
                    className="bg-gray-700 text-gray-400 font-medium py-3 rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <img src={checkIcon} alt="check" className="w-5 h-5" />
                    Награда получена
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSubscribe}
                      className="bg-[#00ff9d] text-black font-medium py-3 rounded-xl hover:bg-[#00e68c] transition flex items-center justify-center gap-2"
                    >
                      {activeTask.id === 'telegram' ? 'Подписаться на ТГ' : 'Вступить в чат'}
                    </button>

                    <button
                      onClick={handleClaimReward}
                      className="bg-gray-700 text-white font-medium py-3 rounded-xl hover:bg-gray-600 transition flex items-center justify-center gap-2"
                    >
                      Проверить
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