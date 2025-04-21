import { Star } from "lucide-react";
import { useState } from "react";
import Seperator1 from "./ui/Seperator1";

import { mangaList1, mangaList2, mangaList3 } from "@/config/body2_3data";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<"one" | "two" | "three">("one");

  return (
    <div className="md:w-82">
      <div className="flex flex-wrap justify-between gap-2 mb-5 text-sm bg-zinc-800 px-3 py-2 rounded">
        <button
          onClick={() => setActiveTab("one")}
          className={`px-4 py-2 rounded text-xs sm:text-sm ${
            activeTab === "one"
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-white"
          }`}
        >
          Weekly
        </button>
        <button
          onClick={() => setActiveTab("two")}
          className={`px-4 py-2 rounded text-xs sm:text-sm ${
            activeTab === "two"
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setActiveTab("three")}
          className={`px-4 py-2 rounded text-xs sm:text-sm ${
            activeTab === "three"
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-white"
          }`}
        >
          All
        </button>
      </div>
      <Seperator1 />

      {/* Conditional Content */}
      <div className="py-3 bg-zinc-800 rounded mt-5">
        {activeTab === "one" && (
          <div className="py-1">
            {mangaList1.map((item: any, index: number) => (
              <div>
                <div className="flex items-center gap-3 px-3 mb-3">
                  <div className="border rounded py-1 px-3 text-gray-400 border-gray-400">
                    {index + 1}
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-20 w-16 bg-gray-600 rounded">
                      <img
                        src={item.img}
                        className="w-full h-full object-contain "
                      />
                    </div>
                    <div>
                      <h1 className="text-sm font-medium text-gray-300 mb-1">{item.title}</h1>
                      <div className="flex  items-center gap-1">
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
                  </div>
                </div>
                <Seperator1 />
              </div>
            ))}
          </div>
        )}
        {activeTab === "two" && (
          <div className="py-1">
            {mangaList2.map((item: any, index: number) => (
              <div>
                <div className="flex items-center gap-3 px-3 mb-3">
                  <div className="border rounded py-1 px-3 text-gray-400 border-gray-400">
                    {index + 1}
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-20 w-16 bg-gray-600 rounded">
                      <img
                        src={item.img}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h1 className="text-sm font-medium text-gray-300 mb-1">{item.title}</h1>
                      <div className="flex  items-center gap-1">
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
                  </div>
                </div>
                <Seperator1 />
              </div>
            ))}
          </div>
        )}

        {activeTab === "three" && (
          <div>
            {mangaList3.map((item: any, index: number) => (
              <div className="py-1">
                <div className="flex items-center gap-3 px-3 mb-3">
                  <div className="border rounded py-1 px-3 text-gray-400 border-gray-400">
                    {index + 1}
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-20 w-16 bg-gray-600 rounded">
                      <img
                        src={item.img}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h1 className="text-sm font-medium text-gray-300 mb-1">{item.title}</h1>
                      <div className="flex  items-center gap-1">
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
                  </div>
                </div>
                <Seperator1 />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
