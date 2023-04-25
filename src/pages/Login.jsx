import { useState, useContext, useMemo, useEffect } from "react";
import { FormInput, RandomEmoji } from "../components";
import { AuthContext } from "../utils/auth";
import { PageContext } from "../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, user } = useContext(AuthContext);
  const { page, setPage } = useContext(PageContext);
  const isCurrent = useMemo(() => page === "login", [page]);

  const [error, setError] = useState("");

  const onSubmit = (e) => {
    setError("");
    e.preventDefault();
    try {
      if (login(email, password)) {
        setPage("home");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  useEffect(() => {
    if (user) {
      clearForm();
      setPage("home");
    }
  }, [user]);

  return (
    <section
      className={`${
        isCurrent
          ? "h-full w-full lg:w-5/12"
          : "h-[0%] w-full lg:w-7/12 lg:h-full"
      } bg-white relative transition-all duration-500`}
    >
      <form
        onSubmit={onSubmit}
        className={`flex flex-col justify-center h-full w-4/5 m-auto space-y-4 ${
          !isCurrent && "opacity-0 pointer-events-none"
        } transition-all duration-300`}
      >
        <h1 className="font-bold text-4xl">Login</h1>
        <h2 className="text-md text-gray-500">
          Please enter your credentials to continue.
        </h2>
        <FormInput
          label={"Email"}
          value={email}
          setValue={setEmail}
          name={"email"}
          disabled={!isCurrent}
        />
        <FormInput
          label={"Password"}
          value={password}
          setValue={setPassword}
          name={"password"}
          type={"password"}
          disabled={!isCurrent}
        />
        <button
          type="submit"
          className="w-full text-center py-2 text-lg font-bold text-white bg-black rounded-md border-2 border-transparent hover:bg-white hover:border-black hover:text-black transition-all"
        >
          Login
        </button>
        <div className="flex items-center justify-between">
          <span>
            Don&apos;t have an account?{" "}
            <button
              type="button"
              className="border-none outline-none font-bold relative group"
              onClick={() => {
                clearForm();
                setPage("register");
              }}
            >
              Register Now
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300" />
            </button>
          </span>
          {error && <span className="text-red-400">{error}</span>}
        </div>
      </form>
      <RandomEmoji visible={!isCurrent} />
    </section>
  );
};

export default Login;
