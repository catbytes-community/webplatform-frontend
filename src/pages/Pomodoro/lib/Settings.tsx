
import {useContext, useState} from "react";
import {SettingContext} from "./SettingsContext.tsx";

const Settings = () => {

    const {updateExecute} = useContext(SettingContext);

    const [newTimer, setNewTimer] = useState({
        work: 5,
        short: 1,
        long: 3,
        active: 'work'
    });

    function handleChange(event){
        const {name, value} = event.target;

        switch (name){
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;

            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;

            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            default:
                break
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        updateExecute(newTimer);
    }

    return (<div className="flex flex-col bg-white items-center p-6">
            <form noValidate className="space-y-4 w-full max-w-sm">
                <div className="flex flex-col">
                    <p className="text-gray-700 font-medium ">Work Time:</p>
                    <input
                        className="border rounded p-2"
                        name="work"
                        onChange={handleChange}
                        value={newTimer.work}
                    />
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-700 font-medium">Short Break:</p>
                    <input
                        className="border rounded p-2"
                        name="shortBreak"
                        onChange={handleChange}
                        value={newTimer.short}
                    />
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-700 font-medium">Long Break:</p>
                    <input
                        className="border rounded p-2"
                        name="longBreak"
                        onChange={handleChange}
                        value={newTimer.long}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded p-2 w-full"
                    onClick={handleSubmit}
                >
                    Save settings
                </button>
            </form>
        </div>
    );
};


export default Settings;
