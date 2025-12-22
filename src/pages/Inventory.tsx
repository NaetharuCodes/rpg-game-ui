const Inventory = () => {
  const items = [
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-[1200px]">
        <div className="bg-slate-900 text-white p-4">
          <h1>Inventory</h1>
        </div>
        <div className="grid grid-flow-row grid-cols-4 gap-4 bg-green-200 p-4">
          {items.map((item) => (
            <div className="flex items-center justify-center">
              <div className="bg-orange-500 h-[128px] w-[128px]">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
