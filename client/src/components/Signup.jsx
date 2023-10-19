import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom"; 

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cohort, setCohort] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password, email, cohort };
      const response = await fetch("http://localhost:5001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        navigate("/profile");
      } else {
        console.log("Signup failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div>
        <div className="cyf-social">
          <span className="c">C</span>
          <span className="y">Y</span>
          <span className="f">F</span>
          <span className="space"> </span>
          <span className="s">S</span>
          <span className="o">O</span>
          <span className="c2">C</span>
          <span className="i">I</span>
          <span className="a">A</span>
          <span className="l">L</span>
        </div>
      </div>

      <div className="signup">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control input"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control input"
              placeholder="Enter your cohort"
              value={cohort}
              onChange={(e) => setCohort(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary form-control">
            Signup
          </button>
          <p className="line"></p>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
