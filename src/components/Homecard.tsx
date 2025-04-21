import { HomeCardData } from "../config/body2_3data";

const Homecard = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {HomeCardData.map((item: any, index: number) => (
        <div key={index} className="mt-3">
          <img
            src={item.image}
            className="mb-2 transition-transform duration-300 hover:scale-110 h-50 md:h-60 md:w-89 rounded"
          />
          <h5 className=" mb-2 text-sm mx-auto font-bold text-gray-300">{item.title}</h5>

          <div className="flex justify-between p-2 rounded mb-2 bg-zinc-700 hover:bg-blue-600 text-white text-sm">
            <h5>{item.label1}</h5>
            <h5>{item.time1}</h5>
          </div>
          <div className="flex justify-between p-2 rounded bg-zinc-700 hover:bg-blue-600 text-white text-sm">
            <h5>{item.label2}</h5>
            <h5>{item.time2}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homecard;
