import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-32 inset-x-20 px-4">
        <div
          className="fixed flex flex-wrap justify-center gap-3
  shadow-lg bg-white rounded-xl p-5
  "
        >
          <button
            onClick={() => setcolor("red")}
            className="p-2 outline-none shadow-2xl rounded-full text-white text-2xl font-bold
            animate-bounce 
            "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setcolor("green")}
            className="p-2 outline-none shadow-2xl rounded-full text-white text-2xl font-bold"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setcolor("yellow")}
            className="p-2 outline-none shadow-2xl rounded-full text-black font-bold text-2xl"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setcolor("Pink")}
            className="p-2 outline-none font-bold shadow-2xl rounded-full text-black text-2xl"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
