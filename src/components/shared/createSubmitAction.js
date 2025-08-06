import { ToastContainer, toast } from "react-toastify";
const sleep = async (ms) => new Promise((res) => setTimeout(res, ms));
export const createSubmitAction = ({ url, successMessage, onSuccess }) => {
  return async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await fetch(url, {
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
      toast(successMessage);
      await sleep(3000);
      onSuccess(data);
    } catch (error) {
      console.error(error);
    }
  };
};
