import { CheckCircle } from 'lucide-react';

const TaskCard = ({ task, completed, onComplete, onCheck }) => {
  const isCompleted = completed.includes(task.id);

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-5 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold text-lg">{task.title}</div>
          <div className="text-gray-400 text-sm mt-1">{task.description}</div>
        </div>
        {isCompleted && <CheckCircle className="text-green-500 w-8 h-8" />}
      </div>

      <div className="mt-4 h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-green-500 w-full rounded-full" />
      </div>

      {!isCompleted && (
        <div className="mt-4 flex gap-3">
          {task.type === 'link' && (
            <button
              onClick={() => window.open(task.link, '_blank')}
              className="flex-1 bg-gray-800 hover:bg-gray-700 py-3 rounded-xl"
            >
              Перейти
            </button>
          )}
          <button
            onClick={task.type === 'check_subscription' ? onCheck : onComplete}
            className="flex-1 bg-green-500 hover:bg-green-600 py-3 rounded-xl font-medium"
          >
            Проверить
          </button>
        </div>
      )}
      {isCompleted && <div className="text-green-500 text-center mt-3 font-medium">Выполнено +{task.reward} монет</div>}
    </div>
  );
};

export default TaskCard;