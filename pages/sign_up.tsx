import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/authUserContext";
import { Button, TextField } from "@material-ui/core";
import { Alert } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null);
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
        .then((authUser) => {
          console.log("Success. The user is created in Firebase");
          router.push("/logged_in");
        })
        .catch((error) => {
          // An error occurred. Set error message to be displayed to user
          setError(error.message);
        });
    else setError("Password do not match");
    event.preventDefault();
  };

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <form className="sign-up__form" onSubmit={onSubmit}>
          {error && <Alert color="error">{Error}</Alert>}
          <TextField
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            id="signUpEmail"
            label="Email"
            variant="outlined"
          ></TextField>
          <TextField
            type="password"
            value={passwordOne}
            onChange={(event) => setPasswordOne(event.target.value)}
            name="passwordOne"
            id="signUpPassword"
            label="Password"
            variant="outlined"
          ></TextField>
          <TextField
            type="password"
            value={passwordTwo}
            onChange={(event) => setPasswordTwo(event.target.value)}
            name="passwordTwo"
            id="signUpPasswordTwo"
            label="Password"
            variant="outlined"
          ></TextField>
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
