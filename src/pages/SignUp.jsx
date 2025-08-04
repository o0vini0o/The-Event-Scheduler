import { useActionState } from "react";
import useUsers from "../hooks/useUsers";
import { toast } from "react-toastify";

const SignUp = () => {
  const users = useUsers();
  const submitAction = async (prevState, formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(name);

    const existUser = users.find((prop) => prop.email === email);
    if (existUser) {
      return { error: " the user is exist" };
    } else {
      try {
        const res = await fetch("http://localhost:3001/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        });
        if (!res.ok) {
          const errorData = await res.json();
          return {
            error: errorData.message || "Failed to register user",
          };
        }
        const data = await res.json();
        return { success: true, user: data };
      } catch (error) {
        return { error: error.message || "Unexpected error" };
      }
    }
  };
  const [state, formAction, isPending] = useActionState(submitAction, {});
  if (state.success) toast.success("Successfully registered");
  return (
    <div className="max-w-md mx-auto mt-20 flex flex-col items-center">
      <form action={formAction} className="grid grid-cols-1 gap-2 w-full">
        <label className="validator">
          <p className="font-bold"> Name: </p>
          <input
            className="input w-64"
            type="text"
            name="name"
            required
            placeholder="Your Name"
          />
        </label>
        <p className="validator-hint hidden">
          Must be 3 to 30 characters
          <br />
          containing only letters, numbers or dash
        </p>
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
        <button
          type="submit"
          className="btn btn-accent w-64"
          disabled={isPending}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUp;
