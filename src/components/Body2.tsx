import { popularData } from "@/config/body2_3data";

const Body2 = () => {
  return (
    <div className="bg-zinc-900 py-4">
      {/* 🔵 Blue Header Bar */}
      <div className="w-full max-w-screen-xl mx-auto px-4 mb-4">
        <div className="bg-blue-500 text-white text-lg sm:text-xl font-semibold px-4 py-2 w-fit">
          Popular Today
        </div>
      </div>

      {/* 📦 Card Grid */}
      <div className="bg-zinc-800 w-full max-w-screen-xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {popularData.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-zinc-900 border border-gray-700 p-2 hover:scale-105 transition-transform duration-300 text-white flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 sm:h-44 md:h-52 lg:h-64 object-cover"
            />
            <div className="mt-2 font-semibold text-sm hover:text-blue-400">
              {item.title}
            </div>
            <div className="text-sm p-1 text-gray-400"> Ch {item.chapter} </ div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body2;
