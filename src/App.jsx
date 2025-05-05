import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComboBox from "./components/combobox/ComboBox";
import TwitterPostBar from "./components/twitterPostBar/TwitterPostBar";
import MeetingCards from "./components/MeetingCards/MeetingCards";
import ExpenseCard from "./components/Expense Card/ExpenseCard";
import TagBox from "./components/TagBox/TagBox";
import GeneralWorkflow from "./components/generalWorkflow/GeneralWorkflow";
import ImageUploader from "./components/ImageUploader/ImageUploader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <ImageUploader />
    </div>
  );
}

export default App;
