const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-slate-50 h-32 w-full">
      <div className="w-full max-w-6xl flex justify-between">
        <div>
          Missing a library? Add it to the{" "}
          <a href="https://github.com/isaced/cocoa.directory#how-do-i-add-a-library">directory</a>.
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Vercel
        </a>
      </div>
    </footer>
  );
};

export default Footer;
