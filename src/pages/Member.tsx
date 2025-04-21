import medusa2 from "../assets/medusa2.png";

export default function Member() {
  return (
    <div className="bg-zinc-900 h-screen text-gray-300 flex flex-col  p-4">
      <p  >......Coming soon ☺️</p>
      <div className="w-1/3 h-[90vh] mx-auto   ">
        <img
          src={medusa2}
          alt="medusa"
          className="w-full h-full object-contain "
        />
      </div>
    </div>
  );
}
