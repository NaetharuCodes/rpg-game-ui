import type { MouseEventHandler } from "react";

interface ChatButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ChatButton = ({ text, onClick }: ChatButtonProps) => {
  return (
    <button className="p-2 hover:bg-slate-700 cursor-pointer" onClick={onClick}>
      {text}
    </button>
  );
};

export default ChatButton;
