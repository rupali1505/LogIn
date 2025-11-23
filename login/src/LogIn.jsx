import { useState } from "react";

export default function LogIn() {
  const [logInForm, setLogInForm] = useState({
    username: "",
    password: "",
  });
  const [valid, setValid] = useState(false);
  const [err,setErr]=useState(false);

  const handleChange = (e) => {
    setLogInForm({
      ...logInForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInput(logInForm);
  };

  const validateInput = (data) => {
    if (data.username === "user" && data.password === "password") {
      setValid(true);
    }else{
      setErr(true)
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {valid ? (
        <p>Welcome,user</p>
      ) : (
        <>
          {err && <p>Invalid username or password</p>}
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
              type="text"
              required
              name="username"
              value={logInForm.username}
              onChange={(e) => handleChange(e)}
            />
            <br />

            <label>Password</label>

            <input
              type="password"
              required
              name="password"
              value={logInForm.password}
              onChange={(e) => handleChange(e)}
            />
            <br />

            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}
