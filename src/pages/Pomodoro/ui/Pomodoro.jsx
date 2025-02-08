import { PomodoroPage } from "./PomodoroPage.jsx";
import SettingsContextProvider from "../lib/SettingsContext.jsx";

export const Pomodoro = () => {
  return (
    <SettingsContextProvider>
      <PomodoroPage />
    </SettingsContextProvider>
  );
};
