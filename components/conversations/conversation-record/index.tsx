'use client';
import { useAppSelector } from '@/store/hooks';

export default function ConversationRecord() {
  const conversationRecordPopup = useAppSelector(
    (state) => state.ui.conversationRecordPopup,
  );
  return (
    <div className="bg-custom-gray h-[70vh] rounded-md mt-2 shadow-md">
      {conversationRecordPopup ? 'True' : 'False'}
    </div>
  );
}
