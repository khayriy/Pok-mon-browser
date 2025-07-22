const Skeleton = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 rounded-lg p-4">
      <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded mt-4 w-20 mx-auto"></div>
      <div className="h-3 bg-gray-300 rounded mt-2 w-12 mx-auto"></div>
    </div>
  </div>
);

export default Skeleton;
