export const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-white text-white w-screen bottom-0 fixed shadow-md border-1 shadow-slate-500">
      <hr className="bg-gray-100 w-full" />
      <div className="flex md:flex-row flex-col  w-full p-2 items-start justify-start">
        <span className="text-lg flex flex-col text-black">
          <span className="ml-10">Developed by Kevin Uehara</span>
        </span>
      </div>
    </footer>
  );
};
