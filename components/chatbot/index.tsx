import Image from 'next/image';

export default function Chatbot() {
  return (
    <div>
      <div className="bg-custom-blue text-gray-50 p-3 rounded-md flex items-center">
        <div className="mr-3">
          <Image
            src="/images/demo-avatar.png"
            alt="Chatbot"
            width={100}
            height={100}
            className="object-cover h-full w-full"
          />
        </div>
        <h1>Chatbot</h1>
      </div>
      <div className="bg-custom-gray h-[60vh] rounded-md mt-2"></div>
      <div className="relative">
        <input
          className="bg-custom-gray h-[9vh] rounded-full px-10 mt-2 w-full outline-none text-lg"
          type="text"
          name=""
          id=""
          placeholder="Reply to chat"
        />
        <button>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            strokeWidth={1.5}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5716 2.42859L13.5716 19.5714L9.28585 12.7143L2.42871 8.42859L19.5716 2.42859Z"
              stroke="white"
              stroke-width="2.05714"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
