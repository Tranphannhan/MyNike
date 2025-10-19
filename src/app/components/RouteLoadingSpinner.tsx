
const RouteLoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-r-black border-b-transparent border-l-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default RouteLoadingSpinner;
