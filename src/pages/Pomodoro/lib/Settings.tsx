
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
            case "work":
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;

            case "short":
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;

            case "long":
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            default:
                break
        }
        // console.log(newTimer);
    }

    function handleSubmit(event){
        event.preventDefault();
        updateExecute(newTimer);
    }

    return (<div className="flex flex-col bg-white items-center p-6">
            <form noValidate className="space-y-4 w-full max-w-sm">
                <div className="flex flex-col">
                    <label htmlFor="work" className="text-gray-700 font-medium ">Work Time:</label>
                    <input
                        className="border rounded p-2"
                        name="work"
                        onChange={handleChange}
                        value={newTimer.work}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="short" className="text-gray-700 font-medium">Short Break:</label>
                    <input
                        className="border rounded p-2"
                        name="short"
                        onChange={handleChange}
                        value={newTimer.short}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="long" className="text-gray-700 font-medium">Long Break:</label>
                    <input
                        className="border rounded p-2"
                        name="long"
                        onChange={handleChange}
                        value={newTimer.long}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded p-2 w-full"
                    onClick={handleSubmit}
                >
                    Set
                </button>
            </form>
        </div>


    );
};


export default Settings;
