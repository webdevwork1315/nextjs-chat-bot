'use client';

export default function ChatLoading({ isLoading }: { isLoading: boolean }) {
  return (
    <div
      className={` backdrop-blur-sm opacity-0 flex justify-center items-center m-auto duration-300 rounded-md h-full w-full top-0 right-0 left-0 bottom-0 shadow-md fixed z-10 ${
        isLoading ? 'visible opacity-100' : 'invisible'
      }`}
    >
      <div className="text-xs">
        <div className="w-14 h-14 border-l-4 border-t-4 border-r-4 border-b-4 border-b-custom-gray border-r-custom-gray border-l-custom-gray  animate-spin border-custom-violet rounded-full flex justify-center items-center"></div>
      </div>
    </div>
  );
}
