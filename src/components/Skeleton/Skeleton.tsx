const SkeletonCard = () => {
  return (
    <div className="bg-gray-200 animate-pulse rounded-lg shadow-md w-full h-60">
      <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-2 bg-gray-300 rounded w-5/6 mb-1"></div>
      <div className="h-2 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
