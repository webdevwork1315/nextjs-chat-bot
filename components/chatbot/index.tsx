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
      <div className="bg-custom-gray h-[60vh] rounded-md mt-2 shadow-md"></div>
      <div className="relative">
        <input
          className="bg-custom-gray h-[9vh] rounded-full px-10 mt-2 w-full outline-none text-lg shadow-md"
          type="text"
          name=""
          id=""
          placeholder="Reply to chat"
        />
        <button className="absolute top-2 bottom-0 right-6 ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            color="white"
            className="bg-custom-violet h-12 w-12 p-2 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5718 3.42859L10.2861 13.7143"
              stroke="white"
              strokeWidth="2.05714"
              strokeMiterlimit="10"
            />
            <path
              d="M20.5716 3.42859L14.5716 20.5714L10.2859 13.7143L3.42871 9.42859L20.5716 3.42859Z"
              stroke="white"
              strokeWidth="2.05714"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
