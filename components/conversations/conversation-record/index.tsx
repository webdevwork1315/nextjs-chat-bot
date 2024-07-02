'use client';
import { toogleConversationRecordPopup } from '@/features/ui/uiSlice';
import { useAppSelector, useAppDispatch } from '@/store/hooks';

export default function ConversationRecord() {
  const dispatch = useAppDispatch();
  const conversationRecordPopup = useAppSelector(
    (state) => state.ui.conversationRecordPopup,
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <div
      className={` backdrop-blur-md opacity-0 flex justify-center items-center m-auto duration-300 rounded-md top-0 right-0 left-0 bottom-0 shadow-md absolute z-10 ${
        conversationRecordPopup ? 'visible opacity-100' : 'invisible'
      }`}
    >
      <div className=" bg-custom-gray shadow-md rounded-md text-sm">
        <div className="flex justify-between border-b p-3 items-center">
          <h1 className="">Conversations</h1>
          <button
            onClick={() => {
              dispatch(toogleConversationRecordPopup());
            }}
            className="bg-red-500 p-1 rounded-md text-white"
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5">
          <div className="flex flex-col">
            <label htmlFor="" className="">
              Title:
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="mt-2 p-2 outline-none"
              required
            />
          </div>
          <div className="text-center mt-3">
            <button className="bg-custom-violet text-white px-2 py-1 rounded-md">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
