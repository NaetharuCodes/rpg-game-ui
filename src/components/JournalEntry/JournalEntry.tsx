interface JournalEntryProps {
  date: string;
  title: string;
  content: string[];
}

const JournalEntry = ({ date, title, content }: JournalEntryProps) => {
  return (
    <div className="">
      <div className="flex py-2 bg-slate-800 text-white p-4">
        <h2 className="flex-grow">{title}</h2>
        <div>{date}</div>
      </div>
      <div className="bg-slate-200 pt-4">
        {content.map((text) => (
          <p className="px-4 pb-4 text-justify">{text}</p>
        ))}
      </div>
    </div>
  );
};

export default JournalEntry;
