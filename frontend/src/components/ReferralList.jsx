const ReferralList = ({ referredUsers }) => {
  if (referredUsers.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <div className="text-5xl mb-4">👥</div>
        <div className="font-medium">Пока нет рефералов</div>
        <div className="text-sm mt-1">Поделитесь ссылкой с друзьями, чтобы заработать монеты</div>
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {referredUsers.map((ref, i) => (
        <div key={i} className="bg-[#1a1a1a] rounded-2xl p-4 flex items-center gap-4">
          <img src={ref.photoUrl || 'https://via.placeholder.com/48'} className="w-12 h-12 rounded-full" />
          <div>
            <div className="font-medium">{ref.firstName}</div>
            <div className="text-gray-400 text-sm">@{ref.username}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReferralList;