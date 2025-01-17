
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login by checking data in localStorage
    const storedUser = localStorage.getItem(formData.email);

    if (!storedUser) {
      setMessage("This email is not registered. Please sign up first.");
    } else {
      const user = JSON.parse(storedUser);
      if (user.password === formData.password) {
        setMessage("Login successful! Redirecting to Home...");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage("Incorrect password. Please try again.");
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Half with Image */}
      <div style={styles.imageContainer}>
        {!imageLoaded && <div style={styles.imagePlaceholder}>Loading Image...</div>}
        <img
          src="https://cdn.pixabay.com/photo/2019/12/14/08/36/shopping-4694470_1280.jpg" // Replace with your image URL
          alt="Login Visual"
          style={styles.image}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Right Half with Form */}
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Login</h1>
        {message && (
          <p
            style={
              message.includes("successful")
                ? styles.successMessage
                : styles.errorMessage
            }
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            required
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Create an account here
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
    height: "500px",
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
    height: "650px",
    objectFit: "cover",
  },
  imagePlaceholder: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#999",
    fontSize: "18px",
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

export default Login;
