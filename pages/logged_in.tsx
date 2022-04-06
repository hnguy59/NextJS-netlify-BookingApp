import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/authUserContext";

const LoggedIn = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  return <div></div>;
};

export default LoggedIn;
