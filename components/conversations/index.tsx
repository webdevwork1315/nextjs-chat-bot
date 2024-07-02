'use client';
import { toogleConversationRecordPopup } from '@/features/ui/uiSlice';
import { useAppDispatch } from '@/store/hooks';
import ConversationRecord from './conversation-record';

export default function Conversations() {
  const dispatch = useAppDispatch();
  return (
    <div className="">
      <div className="bg-custom-blue text-gray-50 p-5 rounded-md flex justify-between">
        <h1>Conversations</h1>
        <button
          className="hover:text-gray-300 duration-300"
          onClick={() => {
            dispatch(toogleConversationRecordPopup());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="bg-custom-gray h-[70vh] rounded-md mt-2 shadow-md">
        <ConversationRecord />
      </div>
    </div>
  );
}
