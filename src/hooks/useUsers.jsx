import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      try {
        const res = await fetch("http://localhost:3001/api/users", {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`response is not ok! Status: ${res.status}`);
        }
        const data = await res.json();

        setUsers(data.results);
      } catch (e) {
        if (e.name === "AbortError") {
          console.info("Fetch aborted");
        } else {
          console.error(e);
        }
      }
    };
    fetchData();
  }, []);

  return users;
};
export default useUsers;
