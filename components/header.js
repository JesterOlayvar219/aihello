export default function Header() {
  return (
    <div className="h-16 flex items-center justify-between px-6 border-b">
      <div className="flex items-center space-x-4">
        <button className="text-blue-600">Get Specialist Help</button>
        <div className="flex items-center space-x-2">
          <img src="/us-flag.svg" alt="US" className="w-5 h-5" />
          <span>Natural Things Main (US)</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div>Aug 6, 2024 - Sep 5, 2024</div>
        <div className="flex items-center space-x-2">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span>Qasin Rai</span>
        </div>
      </div>
    </div>
  );
}
