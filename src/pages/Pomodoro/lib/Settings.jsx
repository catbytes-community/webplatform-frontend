import { useContext, useState } from "react";
import { SettingContext } from "./SettingsContext.jsx";

const Settings = () => {
  const { updateExecute } = useContext(SettingContext);

  const [newTimer, setNewTimer] = useState({
    work: 5,
    short: 1,
    long: 3,
    active: "work",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;

      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;

      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateExecute(newTimer);
  }

  return (
    <div className="flex flex-col text-gray-900 items-center p-6 min-h-screen">
      <form
        noValidate
        className="border border-rose-300 space-y-6 bg-rose-50 w-full max-w-sm p-6 rounded-lg shadow-2xl"
      >
        <div className="flex flex-col ">
          <p className="text-gray-700 font-medium">Work:</p>
          <input
            className="border border-pink-500 bg-white text-gray-900 rounded p-2 focus:ring focus:ring-pink-400 focus:outline-none"
            name="work"
            type="number"
            onChange={handleChange}
            value={newTimer.work}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-gray-700 font-medium">Short Break:</p>
          <input
            className="border border-pink-500 bg-white text-gray-900 rounded p-2 focus:ring focus:ring-pink-500 focus:outline-none"
            name="shortBreak"
            type="number"
            onChange={handleChange}
            value={newTimer.short}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-gray-700 font-medium">Long Break:</p>
          <input
            className="border border-pink-500 bg-white text-gray-900 rounded p-2 focus:ring focus:ring-pink-500 focus:outline-none"
            name="longBreak"
            type="number"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white rounded p-2 w-full transition-colors focus:ring focus:ring-purple-300"
          onClick={handleSubmit}
        >
          Save settings
        </button>
      </form>
    </div>
  );
};
export default Settings;
