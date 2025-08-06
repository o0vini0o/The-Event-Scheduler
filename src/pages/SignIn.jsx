import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
const SignIn = () => {
  const { setIsLogIn } = useAuth();
  const navigate = useNavigate();
  const sleep = async (ms) => new Promise((res) => setTimeout(res, ms));
  const submitAction = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.error);
        return;
      }
      const data = await res.json();
      const token = data.token;
      setIsLogIn(true);
      localStorage.setItem("token", JSON.stringify(token));
      toast("Anmeldung erfolgreich");
      await sleep(5000);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 flex flex-col items-center">
      <form action={submitAction} className="grid grid-cols-1 gap-2 ">
        <label className="validator">
          <span className=" flex font-bold"> Email: </span>
          <input
            className="input w-64"
            type="email"
            name="email"
            placeholder="excample@email.com"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
        <label className="validator">
          <span className=" flex font-bold"> Password: </span>
          <input
            className="input w-64"
            type="password"
            name="password"
            required
            placeholder="Password"
            minLength="8"
            title="Must be more than 8 characters"
          />
        </label>
        <p className="validator-hint hidden">Must be more than 8 characters</p>
        <Link to="/signUp" className="link text-blue-500 text-sm ">
          Neu Konto erstellen!
        </Link>
        <button type="submit" className="btn btn-accent w-64">
          anmelden
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
