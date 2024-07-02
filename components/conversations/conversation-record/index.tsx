'use client';
import { toogleConversationRecordPopup } from '@/features/ui/uiSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';

export default function ConversationRecord() {
  const dispatch = useAppDispatch();
  const conversationRecordPopup = useAppSelector(
    (state) => state.ui.conversationRecordPopup,
  );
  return (
    <div
      className={` backdrop-blur-md opacity-0 flex justify-center items-center m-auto duration-300 rounded-md mt-2 top-0 right-0 left-0 bottom-0 shadow-md absolute z-10 ${
        conversationRecordPopup ? 'visible opacity-100' : 'invisible'
      }`}
    >
      <div className="p-5 bg-custom-gray shadow-md rounded-md">
        <div className="flex justify-between">
          <h1>Conversations</h1>
          <button
            onClick={() => {
              dispatch(toogleConversationRecordPopup());
            }}
          >
            Close
          </button>
        </div>
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="" className="">
              Title:
            </label>
            <input type="text" placeholder="enter title" className="mt-2" />
          </div>
          <div className="text-center mt-3">
            <button className="bg-custom-blue text-white px-2 py-1 rounded-md">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
