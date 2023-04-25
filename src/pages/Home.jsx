import { useContext, useMemo, useState } from "react";
import { PageContext } from "../App";
import { AuthContext } from "../utils/auth";
import { RandomEmoji } from "../components";

const Home = () => {
  const [emojiToggle, setEmojiToggle] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const { page, setPage } = useContext(PageContext);
  const isCurrent = useMemo(() => page === "home", [page]);

  const randomizeEmoji = () => {
    setEmojiToggle((v) => !v);
  };

  return (
    <section
      className={`w-screen bg-black text-white absolute left-0 z-10 ${
        isCurrent ? "h-screen top-0" : "h-[0vh] top-full"
      } transition-all duration-500 flex justify-center items-center overflow-hidden`}
    >
      <div className="lg:w-2/3 flex flex-col lg:flex-row justify-between">
        <div className="space-y-4 flex-1">
          <div
            className={`${
              isCurrent
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            } transition-all delay-500 duration-500 flex flex-col items-center lg:items-start`}
          >
            <h1 className="text-white text-left text-2xl font-light w-fit">
              Welcome,
            </h1>
            <h1 className="text-white font-bold text-4xl w-fit">
              {user?.firstName} {user?.lastName}
            </h1>
          </div>
          <div
            className={`${
              isCurrent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all delay-500 duration-500 flex justify-center lg:justify-start lg:space-x-4`}
          >
            <button
              type="button"
              onClick={() => {
                setPage("login");
                let temp = setTimeout(
                  function () {
                    logout();
                    clearTimeout(temp);
                  },
                  [500]
                );
              }}
              className={`w-fit px-5 text-center py-2 text-lg font-bold text-black bg-white rounded-md border-2 border-transparent hover:bg-black hover:border-white hover:duration-100 hover:delay-0 hover:text-white transition-all`}
            >
              Log Out
            </button>
            <button
              type="button"
              onClick={randomizeEmoji}
              className={`hidden lg:block w-fit px-5 text-center py-2 text-lg font-bold text-black bg-white rounded-md border-2 border-transparent hover:bg-black hover:border-white hover:duration-100 hover:delay-0 hover:text-white transition-all`}
            >
              Random Emoji
            </button>
          </div>
        </div>
        <div
          className={`${
            isCurrent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } transition-all delay-500 duration-500 relative flex-1`}
        >
          <RandomEmoji
            visible={true}
            onlyOne
            animateExit
            toggler={emojiToggle}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
