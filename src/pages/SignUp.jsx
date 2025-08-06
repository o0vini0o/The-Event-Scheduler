import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const submitAction = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const sleep = async (ms) => new Promise((res) => setTimeout(res, ms));
    try {
      const res = await fetch("http://localhost:3001/api/users/", {
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
        toast(errorData.error);
        return;
      }
      const data = await res.json();
      await sleep(1000);
      navigate("/signin");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 flex flex-col items-center">
      <form action={submitAction} className="grid grid-cols-1 gap-2 w-full">
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
        <button type="submit" className="btn btn-accent w-64">
          registeren
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
export default SignUp;
