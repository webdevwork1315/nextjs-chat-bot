'use client';
import { useAppSelector, useAppDispatch } from '@/store/hooks';

export default function ConversationRecordLoading() {
  const conversationRecordPopup = useAppSelector(
    (state) => state.ui.conversationRecordPopup,
  );

  return (
    <div
      className={` backdrop-blur-sm opacity-0 flex justify-center items-center m-auto duration-300 rounded-md top-0 right-0 left-0 bottom-0 shadow-md absolute z-10 ${
        conversationRecordPopup ? 'visible opacity-100' : 'invisible'
      }`}
    >
      <div className="text-xs">
        <div className="w-14 h-14 border-l-4 border-t-4 border-r-4 border-b-4 border-b-custom-gray border-r-custom-gray border-l-custom-gray  animate-spin border-custom-violet rounded-full flex justify-center items-center"></div>
      </div>
    </div>
  );
}
