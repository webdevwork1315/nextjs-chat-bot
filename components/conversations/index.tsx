'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { addAllConversationsRecords } from '@/features/conversations/convoSlice';
import { toggleLoading, toggleReFetchData } from '@/features/ui/uiSlice';
import ChatLoading from '../loading';
import { setChatbotMessages } from '@/features/chatbot/chatbotSlice';

const getConversationRecord = async (
  authToken: string | null,
  dispatch: any,
) => {
  try {
    dispatch(toggleLoading());
    const response = await axios.get(
      'https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/conversation',
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    const data = await response.data;
    dispatch(toggleLoading());
    return data;
  } catch (error) {
    console.error(error);
    dispatch(toggleLoading());
  }
};

const createNewConversationRecord = async (
  authToken: string | null,
  userId: string | null,
  dispatch: any,
) => {
  try {
    console.log({ authToken, userId });
    const response = await axios.post(
      'https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/conversation',
      {
        id: userId,
        user_id: userId,
        label: 'string',
        created_at: 'now',
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    const data = await response.data;
    dispatch(toggleLoading());
    dispatch(toggleReFetchData());
    return data;
  } catch (error) {
    console.error(error);
    dispatch(toggleLoading());
  }
};

const deleteConversatoinRecord = async (
  authToken: string | null,
  conversationId: string | null,
  dispatch: any,
) => {
  try {
    dispatch(toggleLoading());
    const response = await axios.delete(
      `https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/conversation/${conversationId}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    const data = await response.data;
    dispatch(toggleLoading());
    dispatch(toggleReFetchData());
    return data;
  } catch (error) {
    console.error(error);
    dispatch(toggleLoading());
  }
};

const getChatbotMsg = async (
  convoId: string | null,
  authToken: string | null,
  dispatch: any,
) => {
  try {
    console.log({ convoId });
    const response = await axios.get(
      'https://x8ki-letl-twmt.n7.xano.io/api:SSOLzzIz/conversation/' + convoId,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    const data = await response.data;
    dispatch(toggleLoading());
    dispatch(setChatbotMessages(data));
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    dispatch(toggleLoading());
  }
};

export default function Conversations() {
  const allConversationRecords = useAppSelector(
    (state) => state.convo.conversations,
  );
  const reFetchData = useAppSelector((state) => state.ui.reFetchData);

  const conversationRecordLoading = useAppSelector((state) => state.ui.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getConversationRecord(localStorage.getItem('token'), dispatch).then(
      (data) => {
        dispatch(addAllConversationsRecords(data));
      },
    );
  }, [dispatch, reFetchData]);

  return (
    <div className="">
      <div className="bg-custom-blue text-gray-50 p-5 rounded-md flex justify-between">
        <h1>Conversations</h1>
        <button
          className="hover:text-gray-300 duration-300"
          onClick={async () => {
            dispatch(toggleLoading());
            await createNewConversationRecord(
              localStorage.getItem('token'),
              localStorage.getItem('userId'),
              dispatch,
            );
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
      <div className="bg-custom-gray relative h-[70vh] overflow-y-scroll rounded-md mt-2 shadow-md">
        <ChatLoading isLoading={conversationRecordLoading} />
        {/* Conversations */}
        <div className=" mt-5">
          {allConversationRecords &&
            allConversationRecords.map((record, index) => (
              <div
                key={index}
                className="border-b cursor-pointer p-3 mt-3 bg-[#DEE1E6] rounded-lg text-gray-900 flex items-center justify-between"
                onClick={() => {
                  console.log('Conversation Record:', record);
                  dispatch(toggleLoading());
                  getChatbotMsg(
                    record.id,
                    localStorage.getItem('token'),
                    dispatch,
                  );
                }}
              >
                <h1>Conversation {record.id}</h1>
                <button
                  onClick={async () => {
                    await deleteConversatoinRecord(
                      localStorage.getItem('token'),
                      record.id,
                      dispatch,
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
