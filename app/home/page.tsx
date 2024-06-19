import Chatbot from '@/components/chatbot';
import Conversations from '@/components/conversations';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center max-w-6xl m-auto mt-6">
        <div className="w-1/2 mr-5">
          <Conversations />
        </div>
        <div className="w-full">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}
