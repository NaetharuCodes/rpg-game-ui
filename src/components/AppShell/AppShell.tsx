interface AppShellProps {
  children: React.ReactNode;
}

const Header = () => {
  return <header className="h-[64px] bg-slate-900">This is the header</header>;
};

const SideBar = () => {
  return <div className="bg-slate-500 p-4">This is the sidebar</div>;
};

const Footer = () => {
  return <footer className="h-[64px] bg-slate-900">This is the footer</footer>;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="flex flex-col bg-slate-800 text-slate-200 min-h-screen">
      <Header />
      <div className="flex-grow flex">
        <SideBar />
        <div className="bg-slate-100 flex-grow text-black p-4">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AppShell;
