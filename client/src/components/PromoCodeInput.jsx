import { useState } from 'react';

export default function PromoCodeInput() {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleApply = () => {
    // TODO: отправить на бэкенд
    if (code.trim() === 'TEST500') {
      setMessage('Промокод активирован! +500 монет');
    } else {
      setMessage('Неверный промокод');
    }
    setCode('');
  };

  return (
    <div className="mx-5 mt-6 bg-gray-900/50 border border-gray-800 rounded-xl p-4">
      <div className="text-sm text-gray-400 mb-2">Промокод</div>
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={e => setCode(e.target.value.toUpperCase())}
          placeholder="Введите промокод"
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00ff9d]"
        />
        <button
          onClick={handleApply}
          className="bg-[#00ff9d] text-black font-medium px-5 py-2 rounded-lg hover:bg-[#00e68c] transition"
        >
          Применить
        </button>
      </div>
      {message && <div className="mt-2 text-sm text-center">{message}</div>}
    </div>
  );
}