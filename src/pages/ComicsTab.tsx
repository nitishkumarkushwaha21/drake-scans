import Seperator1 from "@/components/ui/Seperator1";
import { btns } from "@/config/comicdata";
import { cardData } from "@/config/comicdata";
import { Star } from "lucide-react";

export default function ComicsTab() {
  return (
    <div className="bg-zinc-900 flex justify-between">
      <div className="bg-zinc-800 flex flex-col w-5/6 mx-auto">

        <div className="text-white font-bold p-3">Manga List</div>
        <Seperator1 />

        <div className="flex justify-evenly flex-wrap gap-2 p-3" id="btns">
          {btns.map((data: string) => (
            <button
              key={data}
              className="text-white px-10 py-1 bg-zinc-700 hover:bg-zinc-300 rounded text-sm"
            >
              {data}
            </button>
          ))}
        </div>
        <Seperator1 />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mt-5 p-6">
          {cardData.map((item: any, idx: number) => (
            <div key={idx} className="flex flex-col">
              <img src={item.image} className="h-60 rounded md:w-50" />
              <p className="text-sm mx-auto font-bold text-white p-2 hover:text-blue-600">
                {item.title}
              </p>
              <p className="text-sm font-bold text-white p-1">
                {item.chapters}
              </p>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  <Star fill="yellow" className="h-4 w-4 stroke-0" />
                  <Star fill="yellow" className="h-4 w-4 stroke-0" />
                  <Star fill="yellow" className="h-4 w-4 stroke-0" />
                  <Star fill="yellow" className="h-4 w-4 stroke-0" />
                  <Star fill="yellow" className="h-4 w-4 stroke-0" />
                </div>
                <p className="text-xs text-gray-400 italic">8.0</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
