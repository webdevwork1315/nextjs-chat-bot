import Chatbot from '@/components/chatbot';
import Conversations from '@/components/conversations';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Conversations />
      <Chatbot />
    </div>
  );
}
