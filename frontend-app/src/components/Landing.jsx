import { useEffect, useState } from "react";
import axios from "axios";

function Landing() {
  const [userboard, setUserboard] = useState([]);
  useEffect(() => {
    const fetchUserboard = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/leaderboard`);
        console.log(response.data)
        setUserboard(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserboard();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-3 overflow-y-auto pb-5">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-justify">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Click click click!</h1>
              <p className="mb-5">
                takes.takes.takes.takes.takes.takes.takes.takes.takes.takes.takes.takes.takes.takes.takes.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col jusitfy-center gap-2 items-center">
          <h1>Leaderboards</h1>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Number of Clicks</th>
                </tr>
              </thead>
              <tbody>
                {userboard.map((user, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{user.uid}</td>
                    <td>{user.click}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
