import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate saving data to localStorage
    if (localStorage.getItem(formData.email)) {
      setMessage("This email is already registered.");
    } else {
      localStorage.setItem(formData.email, JSON.stringify(formData));
      setMessage("Signup successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Half with Image */}
      <div style={styles.imageContainer}>
        <img
          src="https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg" // Replace with your image URL
          alt="Signup Visual"
          style={styles.image}
        />
      </div>

      {/* Right Half with Form */}
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Signup</h1>
        {message && (
          <p
            style={message.includes("success")
              ? styles.successMessage
              : styles.errorMessage}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    flexWrap: "wrap", // Allow the items to wrap on small screens
  },
  imageContainer: {
    flex: 1,
    overflow: "hidden",
    position: "relative",
    minWidth: "300px", // Prevent image from shrinking too much
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  formContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: "20px",
    minWidth: "300px", // Prevent form from shrinking too much
  },
  title: {
    marginBottom: "20px",
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    paddingBottom: "30px",
  },
  input: {
    display: "block",
    width: "100%",
    margin: "10px 0",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    backgroundColor: "black",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
  link: {
    color: "rgb(11, 5, 122)",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  successMessage: {
    color: "green",
    fontWeight: "bold",
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
  },
};

export default Signup;
