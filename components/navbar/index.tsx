export default function Navbar() {
  return (
    <nav className="flex justify-between py-3 px-8 items-center border-b">
      <div className="bg-violet-600 text-gray-50 w-16 h-16 flex justify-center items-center p-2 text-xs rounded-lg">
        <h1 className="uppercase">Chatbot</h1>
      </div>
      <div>
        <button className="bg-violet-700 p-2 text-gray-50 px-7 rounded-md">
          Log out
        </button>
      </div>
    </nav>
  );
}
