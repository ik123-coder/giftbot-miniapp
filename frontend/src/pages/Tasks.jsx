import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import TaskCard from '../components/TaskCard';
import axios from 'axios';

const tasksList = [
  {
    id: 'join_chat',
    title: 'Вступить в чат',
    description: '💬 Наш чат',
    reward: 500,
    type: 'link',
    link: 'https://t.me/drainself' // ← замени
  },
  {
    id: 'subscribe_channel',
    title: 'Подпишись на тг @broketalking',
    description: 'Вступи в канал, участвуй в розыгрышах и получай призы!',
    reward: 500,
    type: 'check_subscription'
  }
];

const Tasks = () => {
  const { user, updateUser, API_URL } = useContext(UserContext);
  const [completed, setCompleted] = useState(user?.completedTasks || []);

  const completeTask = async (taskId) => {
    try {
      const res = await axios.post(`${API_URL}/api/tasks/complete`, {
        initData: window.Telegram.WebApp.initData,
        taskId
      });
      updateUser({ balance: res.data.newBalance });
      setCompleted([...completed, taskId]);
    } catch (e) {}
  };

  const checkSubscription = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/tasks/check-subscription`, {
        initData: window.Telegram.WebApp.initData
      });
      updateUser({ balance: res.data.newBalance });
      setCompleted([...completed, 'subscribe_channel']);
    } catch (e) {}
  };

  return (
    <div className="p-5 pb-24">
      <div className="text-3xl font-bold mb-8">Задания</div>
      <div className="text-sm text-gray-400 mb-6">Больше заданий появляется во время конкурса</div>

      {tasksList.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          completed={completed}
          onComplete={() => completeTask(task.id)}
          onCheck={task.type === 'check_subscription' ? checkSubscription : null}
        />
      ))}
    </div>
  );
};

export default Tasks;