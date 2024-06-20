import Chatbot from '@/components/chatbot';
import Conversations from '@/components/conversations';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-3 max-w-6xl m-auto mt-6">
        <div className="grid-cols-1 mr-5">
          <Conversations />
        </div>
        <div className="w-full col-span-2">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}
