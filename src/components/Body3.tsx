import Homecard from "./Homecard";
import Sidebar from "./Sidebar";

const Body3 = () => {
  return (
    <div className="bg-zinc-900 py-4 px-2 sm:px-4 lg:px-8 max-w-screen-xl mx-auto">
      <div className=" text-gray-400  p-4  rounded mb-6 text-sm sm:text-base lg:text-lg leading-relaxed animate-pulse border-4 border-red-700  shadow-md shadow-red-700">
        <div className="font-bold" >Tired of ads?</div>
        Become a member today and enjoy an uninterrupted experience with
        exclusive benefits, early access to new chapters, and more!
        <p>.</p>
        <p>Here’s what you get:</p>
        <p>🌌 Ad-Free Browsing – Pure, uninterrupted focus.</p>
        <p>💖 Support the Cause – Your membership helps us grow and stay independent.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4">
          <Homecard />
        </div>
        <div className="w-full lg:w-1/4 ">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Body3;
