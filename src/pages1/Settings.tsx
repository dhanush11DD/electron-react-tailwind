export default function Settings() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Theme</label>
            <select className="w-full p-2 border rounded">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save Settings
          </button>
        </div>
      </div>
    );
  }