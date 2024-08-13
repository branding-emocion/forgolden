import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-gradient-to-br from-[#246b81] to-[#246b82] flex items-center min-h-screen w-full overflow-auto">
      <div className="container  max-w-xl mx-auto   bg-transparent rounded-2xl    ">
        <div className=" flex justify-center items-center  flex-col pt-4 relative z-30 ">
          <Image
            src={"/Logo.jpeg"}
            width={300}
            height={300}
            alt="Logo"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 absolute z-50">
          <a
            href="https://wa.link/cli62i"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-green-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-green-200 hover:before:animate-ping transition-all duration-300  ">
              <span className="relative">lavado de cochones</span>
            </button>
          </a>

          <a
            href="https://wa.link/7287o0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-green-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-green-200 hover:before:animate-ping transition-all duration-300  ">
              <span className="relative">lavado de sofás</span>
            </button>
          </a>
        </div>
        <div className="hidden sm:block opacity-50 z-0">
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-72 " />
          <div className="shadow-2xl w-96 h-96 rounded-full -mt-96  " />
          <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96  " />
        </div>
      </div>
    </main>
  );
}
