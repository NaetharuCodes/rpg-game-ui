import type { MouseEventHandler } from "react";

interface ExploreButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ExploreButton = ({ text, onClick }: ExploreButtonProps) => {
  return (
    <button
      className="cursor-pointer bg-gray-200 hover:bg-gray-400"
      onClick={onClick}
    >
      <div className="h-[64px] w-[64px] bg-green-600 m-2">
        <img src="" alt="" />
      </div>
      <div>{text}</div>
    </button>
  );
};

export default ExploreButton;
