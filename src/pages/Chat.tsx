import ChatButton from "../components/ChatButton/ChatButton";

const Chat = () => {
  return (
    <div className="flex bg-red-200 h-full justify-center items-center">
      <div className="bg-red-400 h-[600px] w-[400px] p-4">CharacterImage</div>
      <div className="mx-4 p-4 h-[600px] w-[400px] flex flex-col bg-slate-300">
        <p className="bg-slate-400 p-4 flex-grow">
          This is the main character dialogue that we see on the screen...
        </p>
        <div className="flex justify-items-stretch bg-slate-800 p-4 text-white">
          <ChatButton text="Option 1" onClick={() => {}} />
          <ChatButton text="Option 1" onClick={() => {}} />
          <ChatButton text="Option 1" onClick={() => {}} />
          <ChatButton text="Option 1" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
