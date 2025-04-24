import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComboBox from "./components/combobox/ComboBox";
import TwitterPostBar from "./components/twitterPostBar/TwitterPostBar";
import MeetingCards from "./components/MeetingCards/MeetingCards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MeetingCards />
    </>
  );
}

export default App;
