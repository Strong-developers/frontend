import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getItem, clearItem } from "../storage/customStorage";

const Logout = () => {
  useEffect(() => {
    getItem() && clearItem();
  }, []);
  return <Navigate to="/" replace={true} />;
};

export default Logout;
