'use client';
import { setChatbotMessages } from '@/features/chatbot/chatbotSlice';
import { toggleLoading } from '@/features/ui/uiSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ChatLoading from '../loading';

const getChatbotMsg = async (
  convoId: string | null,
  message: string | null,
  authToken: string | null,
  dispatch: any,
) => {
  try {
    console.log({ convoId });
    if (message === '') return;
    const response = await axios.post(
      'https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/chat',
      {
        conversation_id: convoId,
        message,
        created_at: 'now',
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    const data = await response.data;
    dispatch(setChatbotMessages(data));
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    dispatch(toggleLoading());
  }
};

export default function Chatbot() {
  const chatbotMessages = useAppSelector(
    (state) => state.chatbot.chatbotMessages,
  );
  const conversationId = useAppSelector(
    (state) => state.chatbot.conversation_id,
  );
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const chatbotContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatbotContainerRef.current) {
      chatbotContainerRef.current.scrollTop =
        chatbotContainerRef.current.scrollHeight;
    }
  }, [chatbotMessages]);

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
      <div
        ref={chatbotContainerRef}
        className="bg-custom-gray h-[60vh] overflow-y-auto rounded-md mt-2 shadow-md"
      >
        <ChatLoading isLoading={isLoading} />
        {chatbotMessages.map((message: any, index: any) => (
          <div
            key={index}
            className="border-b p-3 mt-3 bg-[#DEE1E6] rounded-lg text-gray-900"
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="relative">
        <input
          className="bg-custom-gray h-[9vh] rounded-full px-10 mt-2 w-full outline-none text-lg shadow-md"
          type="text"
          name=""
          id=""
          placeholder="Reply to chat"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="absolute top-2 bottom-0 right-6 "
          onClick={async () => {
            setIsLoading(true);
            await getChatbotMsg(
              conversationId.toString(),
              message,
              localStorage.getItem('token'),
              dispatch,
            );
            setIsLoading(false);
            setMessage('');
          }}
        >
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
