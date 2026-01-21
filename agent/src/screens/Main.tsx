import { useEffect, useState } from "react";

const Main = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    window.electronAPI.onInputData((receivedData) => {
      setEvents((prev) => [...prev, receivedData]);
    });
  }, []);

  return (
    <div className="max-w-screen min-h-screen bg-gray-500 p-4">
      <h1 className="text-white text-xl mb-4">Input Tracker</h1>
      <div className="text-white mb-2">Events: {events.length}</div>
      <div className="h-96 overflow-y-auto bg-gray-700 p-2 rounded">
        {events.map((event, i) => (
          <pre key={i} className="text-white text-xs">
            {JSON.stringify(event)}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default Main;
