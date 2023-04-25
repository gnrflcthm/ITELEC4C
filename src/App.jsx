import React, { useState, useRef, useEffect } from "react";
import folder from "./assets/folder.webp";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [closed, setClosed] = useState(false);

  const [dragging, setDragging] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [folderClicked, setFolderClicked] = useState(false);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const form = useRef(null);

  const update = (field, value) => {
    switch (field) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted((v) => !v);
  };

  const close = () => {
    setClosed(true);
  };

  const onMouseDown = (e) => {
    setDragging(true);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const onMouseUp = () => {
    setDragging(false);
    setCursorPos({ x: 0, y: 0 });
    setFolderClicked(false);
  };

  const onMouseMove = (e) => {
    if (dragging) {
      let x = cursorPos.x - e.clientX;
      let y = cursorPos.y - e.clientY;
      setCursorPos({ x: e.clientX, y: e.clientY });
      if (form.current) {
        form.current.style.top = form.current.offsetTop - y + "px";
        form.current.style.left = form.current.offsetLeft - x + "px";
      }
    }
  };

  return (
    <main
      className="w-full h-screen bg-[url(https://www.newegg.com/insider/wp-content/uploads/windows_xp_bliss-wide.jpg)] flex"
      onMouseUp={onMouseUp}
    >
      <div className="absolute w-full bottom-0 flex justify-between items-stretch bg-[#235DDB] border-[1px] border-[#3E90E3]">
        <a href="" className="px-4 rounded-r-[0.5rem] relative bg-[#45AB45] text-white font-bold text-2xl">
          <span className="block absolute top-0 w-[90%] h-[3px] bg-[#76B579] left-0" />
          start
        </a>
        <div className="bg-[#0E9DED] p-2 text-white border-l-[#0E2D7B] border-l-2">
          {new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            hours12: true,
            minute: "2-digit",
          }).format(time)}
        </div>
      </div>
      <div
        className={`flex flex-col items-center text-white w-[50px] relative object-contain m-8 mt-16 text-center h-fit`}
        onClick={() => setFolderClicked(true)}
        onDoubleClick={() => setClosed(false)}
      >
        <img src={folder} alt="folder" />
        <span>Enter Name</span>
        <div
          className={`absolute w-full h-full bg-[#0B61FF] ${
            folderClicked ? "bg-opacity-50" : "bg-opacity-0"
          }`}
        />
      </div>
      {!closed && (
        <form
          ref={form}
          onSubmit={(e) => onSubmit(e)}
          className="w-[250px] flex flex-col items-center bg-[#ECE9D8] p-4 pt-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border-[#026AFE] border-[2px] overflow-hidden"
        >
          <div
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            className="w-full text-start absolute top-0 select-none rounded-t-md py-1 pl-2 text-white font-bold bg-[#0056E8] flex items-center justify-between"
          >
            <div className="flex items-center h-full">
              <img src={folder} alt="folder" className="h-[20px]" />
              <span className="ml-1">Enter Your Name</span>
            </div>
            <button
              className="bg-[#E6521E] rounded-sm h-full w-7 mr-1 flex flex-col text-center relative border-white border-[1px] group"
              type="button"
              onClick={() => close()}
            >
              &#8203;
              <span className="absolute -top-[0.11rem] left-1/2 -translate-x-1/2">
                &#9587;
              </span>
              <div className="z-100 absolute hidden top-0 left-0 w-full h-full group-hover:block bg-lightGradient group-active:bg-darkGradient" />
            </button>
          </div>
          {submitted ? (
            <h1>
              Welcome{" "}
              {lastName || firstName ? `${firstName} ${lastName}` : "Stranger"}
            </h1>
          ) : (
            <>
              <div className="flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <input
                  value={firstName}
                  className="border-t-[#807D71] border-l-[#807D71] border-r-[#FBFBF8] border-b-[#FBFBF8] border-2 px-1 outline-none"
                  type="text"
                  name="fname"
                  onChange={(e) => update("firstName", e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  value={lastName}
                  className="border-t-[#807D71] border-l-[#807D71] border-r-[#FBFBF8] border-b-[#FBFBF8] border-2 px-1 outline-none"
                  type="text"
                  name="lname"
                  onChange={(e) => update("lastName", e.target.value)}
                />
              </div>
            </>
          )}
          <div className="flex justify-end items-center w-full">
            <button
              type="submit"
              className="mt-2 border-[1.5px] p-[2px] border-black text-center relative group"
            >
              <span className="block px-4 pb-[0.12rem] border-dotted border-[1px] border-black text-xs relative">
                {submitted ? "Edit" : "Save"}
              </span>
              <div className="absolute top-0 left-0 h-full w-full border-b-[#9D9A8C] border-r-[#9D9A8C] border-2 group:border-b-[#55534B] group:border-r-[#55534B] group-active:border-l-[#9D9A8C] group-active:border-t-[#9D9A8C]" />
            </button>
          </div>
        </form>
      )}
    </main>
  );
}

export default App;
