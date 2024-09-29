const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#330c2f] via-[#cfbff7] to-[#cfb1b7]">
      <div className="relative flex items-center justify-center mb-4">
        {/* Outer Spinner */}
        <div className="w-28 h-28 border-8 border-periwinkle border-t-transparent rounded-full animate-spin shadow-xl transition-transform duration-300 ease-in-out hover:scale-110">
          <div className="absolute inset-0 border-4 border-teaRoseRed rounded-full opacity-60 animate-pulse"></div>
        </div>
        {/* Inner Spinner */}
        <div className="absolute w-24 h-24 border-4 border-r-transparent border-[#7b287d] rounded-full animate-spin-slow"></div>
      </div>
      <div className="text-center">
        <p className="text-white text-2xl font-bold">Loading...</p>
        <p className="text-white text-md mt-2">
          Please wait while we fetch your data.
        </p>
      </div>
    </div>
  );
};

export default Spinner;
