import { useState, useEffect, useCallback } from "react";
import useCheckUserAuth from "../utils";
import axios from "axios";

const useUserData = () => {
  const { userData, authloading } = useCheckUserAuth();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = useCallback(async () => {
    if (!userData?.id) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/user/${userData.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userData]);

  useEffect(() => {
    if (!authloading) {
      fetchUserData();
    }
  }, [authloading, fetchUserData]);

  return { user, loading, error, fetchUserData };
};

export default useUserData;
