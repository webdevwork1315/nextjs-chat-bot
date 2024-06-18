import Image from 'next/image';

export default function Chatbot() {
  return (
    <div>
      <div className="bg-custom-blue text-gray-50 p-2 rounded-md flex items-center">
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
    </div>
  );
}
