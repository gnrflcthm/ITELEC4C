import { useContext, useMemo, useState } from "react";
import { FormInput, RandomEmoji } from "../components";
import { AuthContext } from "../utils/auth";
import { PageContext } from "../App";

const Register = () => {
  // Form Fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const { createUser } = useContext(AuthContext);
  const { page, setPage } = useContext(PageContext);
  const isCurrent = useMemo(() => page === "register", [page]);

  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    try {
      if (password !== confirmPassword)
        throw new Error("Passwords Do Not Match");
      createUser(firstName, lastName, gender, email, password);
      clearForm();
      setPage("login");
    } catch (e) {
      setError(e.message);
    }
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setGender("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <section
      className={`${
        isCurrent
          ? "h-full w-full lg:w-5/12"
          : "h-[0%] w-full lg:w-7/12 lg:h-full"
      } bg-black relative transition-all duration-500`}
    >
      <form
        onSubmit={onSubmit}
        className={`flex flex-col justify-center h-full w-4/5 m-auto space-y-4 ${
          !isCurrent && "opacity-0 pointer-events-none"
        } transition-all duration-300`}
      >
        <h1 className="font-bold text-4xl text-white">Register</h1>
        <h2 className="text-md text-gray-500">
          Please enter your personal information.
        </h2>
        <FormInput
          value={firstName}
          setValue={setFirstName}
          label={"First Name"}
          name={"firstName"}
          dark
          disabled={!isCurrent}
        />
        <FormInput
          value={lastName}
          setValue={setLastName}
          label={"Last Name"}
          name={"lastName"}
          dark
          disabled={!isCurrent}
        />
        <FormInput
          value={gender}
          setValue={setGender}
          label={"Gender Identity"}
          name={"gender"}
          type={"text"}
          dark
          disabled={!isCurrent}
        />
        <FormInput
          value={email}
          setValue={setEmail}
          label={"Email Address"}
          name={"email"}
          type={"text"}
          dark
          disabled={!isCurrent}
        />
        <FormInput
          value={password}
          setValue={setPassword}
          label={"Password"}
          name={"password"}
          type={"password"}
          dark
          disabled={!isCurrent}
        />
        <FormInput
          value={confirmPassword}
          setValue={setConfirmPassword}
          label={"Confirm Password"}
          name={"confirmPassword"}
          type={"password"}
          dark
          disabled={!isCurrent}
        />
        <button
          type="submit"
          className="w-full text-center py-2 text-lg font-bold text-black bg-white rounded-md border-2 border-transparent hover:bg-black hover:border-white hover:text-white transition-all"
        >
          Register
        </button>
        <div className="flex items-center justify-between">
          <span className="text-white">
            Already have an account?{" "}
            <button
              type="button"
              className="border-none outline-none relative font-bold group"
              onClick={() => {
                clearForm();
                setPage("login");
              }}
            >
              Login Here
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-300" />
            </button>
          </span>
          {error && <span className="text-red-400">{error}</span>}
        </div>
      </form>
      <RandomEmoji visible={!isCurrent} />
    </section>
  );
};

export default Register;
