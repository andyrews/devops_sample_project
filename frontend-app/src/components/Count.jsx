import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import "../App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchUserClick = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/clicks/3`);
        console.log(response.data)
        setCount(response.data.click);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserClick();
  }, []);

  const sendClick = async () => {
    setCount((count) => count + 1)
    try {
      await axios.post(
        "http://localhost:8000/clicks",
        { uid: "3" },
      );
      console.log("click sent");
    } catch (error) {
      console.error(error);
    }

  };
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1>Click the Button</h1>
        <div className="card">
          <button onClick={ sendClick }>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
