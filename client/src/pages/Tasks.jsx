// client/src/pages/Tasks.jsx
import { useState } from 'react';
import checkIcon from '../assets/icons/check.svg';
import crossIcon from '../assets/icons/cross.svg';
import telegramIcon from '../assets/icons/telegram.svg';
import dangerIcon from '../assets/icons/danger.svg';

export default function Tasks({ balance, setBalance, userId }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  const isCompleted = tasksCompleted?.telegram;

  const task = {
    title: 'Подписка на ТГ',
    description: 'Подпишись на тг @broketalking',
    reward: 500,
    link: 'https://t.me/broketalking',
    chatId: '@broketalking',
    errorText: 'Вы не подписаны',
    status: isCompleted ? 'Выполнено' : 'Не выполнено',
    icon: telegramIcon,
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubscribe = () => {
    if (task.link) {
      window.open(task.link, '_blank');
    }
  };

  const handleCheck = async () => {
    if (!userId) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    try {
      const response = await fetch('https://server-production-b06a.up.railway.app/api/checkMembership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chatId: task.chatId, userId }),
      });

      const data = await response.json();

      if (data.subscribed) {
        setBalance(prev => prev + task.reward);
        setIsCompleted(true);
        closeModal();
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="p-6 pt-10 min-h-screen">
      <h1 className="text-3xl font-bold text-[#00ff9d] mb-8 text-center">Задания</h1>

      {/* Одна карточка — уменьшенная, по центру */}
      <div className="max-w-[85%] mx-auto">
        <button
          onClick={openModal}
          className="relative bg-[#1c1f24] border border-[#2a2f36] rounded-2xl p-5 flex flex-col items-center gap-3 overflow-hidden active:scale-95 transition-all duration-200 shadow-lg shadow-black/30 w-full"
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
      </div>

      {/* Модальное окно в центре с плавным появлением */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div 
            className="bg-[#1c1f24] rounded-3xl w-[85%] max-w-[360px] p-6 animate-popIn"
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-white">{task.title}</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white text-xl">✕</button>
            </div>

            <p className="text-gray-300 mb-5 text-sm">{task.description}</p>

            <div className="flex flex-col gap-3">
              {isCompleted ? (
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
                    Подписаться на ТГ
                  </button>

                  <button
                    onClick={handleCheck}
                    className="bg-gray-700 text-white font-medium py-3 rounded-xl hover:bg-gray-600 transition flex items-center justify-center gap-2"
                  >
                    Проверить
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Уведомление сверху при ошибке — овальное, с отступами от краёв */}
      {showError && (
        <div className="fixed top-4 left-4 right-4 z-50 flex justify-center animate-slideDownFadeOut">
          <div className="bg-yellow-800/90 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 max-w-[90%] mx-auto border border-yellow-600/50">
            <img src={dangerIcon} alt="danger" className="w-6 h-6" />
            <span className="text-sm font-medium">Вы не подписаны</span>
          </div>
        </div>
      )}
    </div>
  );
}