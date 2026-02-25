import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const PromoCode = () => {
  const { user, updateUser, API_URL } = useContext(UserContext);
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');

  const apply = async () => {
    if (!code) return;
    try {
      const res = await axios.post(`${API_URL}/api/promo/apply`, {
        initData: window.Telegram.WebApp.initData,
        code
      });
      updateUser({ balance: res.data.newBalance });
      setStatus('✅ Успешно!');
      setCode('');
    } catch (e) {
      setStatus(e.response?.data?.error || 'Ошибка');
    }
  };

  return (
    <div className="p-4 border-t border-gray-800">
      <div className="text-sm text-gray-400 mb-2">Промокод</div>
      <div className="flex gap-2">
        <input
          value={code}
          onChange={e => setCode(e.target.value.toUpperCase())}
          placeholder="Введите промокод"
          className="flex-1 bg-[#1a1a1a] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
        />
        <button onClick={apply} className="bg-green-500 hover:bg-green-600 px-6 rounded-xl font-medium">Применить</button>
      </div>
      {status && <div className="text-center mt-2 text-sm">{status}</div>}
    </div>
  );
};

export default PromoCode;