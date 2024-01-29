import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const styles = {
  loginPage: {
    display: "flex",
  },
  login: {
    width: "35%",
    height: "100vh",
    background: "#FFF",
    padding: "70px",
  },
  loginTitle: {
    textAlign: "center",
  },
  notice: {
    fontSize: "13px",
    textAlign: "center",
    color: "#666",
  },
  formLogin: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
  },
  label: {
    textAlign: "left",
    fontSize: "13px",
    marginTop: "10px",
    marginLeft: "20px",
    display: "block",
    color: "#666",
  },
  inputEmail: {
    width: "100%",
    background: "#ededed",
    borderRadius: "15px",
    margin: "4px 0 10px 0",
    padding: "5px",
    display: "flex",
  },
  icon: {
    padding: "4px",
    color: "#666",
    minWidth: "30px",
    textAlign: "center",
    marginTop: "8px",
    fontSize: "25px",
  },
  inputField: {
    width: "100%",
    border: "0",
    background: "none",
    fontSize: "16px",
    padding: "4px 0",
    outline: "none",
  },
  submitButton: {
    width: "100%",
    border: "0",
    borderRadius: "25px",
    padding: "10px",
    background: "#008552",
    color: "#FFF",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
    transition: "ease all 0.3s",
  },
  background: {
    width: "70%",
    padding: "30px",
    height: "100vh",
    background:
      "linear-gradient(60deg, rgba(158, 189, 19, 0.5), rgba(0, 133, 82, 0.7)), url('https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg') center no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignContent: "center",
    flexDirection: "row",
  },
  backgroundH1: {
    maxWidth: "420px",
    color: "#FFF",
    textAlign: "right",
    padding: "0",
    margin: "0",
  },
};

function AdminTab() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    password: "",
    role:"admin",
    username: ""
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post( "http://localhost:5000/admin/auth/login",formData);

      navigate('/admin/home')
      console.log("Server response:", response.data);
    } catch (error) {
      alert('Denied Login')
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div id="login-page" style={styles.loginPage}>
      <div className="login" style={styles.login}>
        <h2 className="login-title" style={styles.loginTitle}>
          Login
        </h2>
        <p className="notice" style={styles.notice}>
          Please login to access the system
        </p>
        <form className="form-login" style={styles.formLogin}>
          <label htmlFor="User Name" style={styles.label}>
            username
          </label>
          <div className="input-email" style={styles.inputEmail}>
            <i class="fas fa-user-circle icon" style={styles.icon} />
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              required
              style={styles.inputField}
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <div className="input-password" style={styles.inputEmail}>
            <i class="fas fa-lock icon" style={styles.icon} />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              required
              style={styles.inputField}
              onChange={handleChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="remember">
              <input
                type="checkbox"
                name="remember"
                value={formData.remember}
                onChange={handleChange}
              />
              Remember me
            </label>
          </div>
          <button
            type="submit"
            style={styles.submitButton}
            onClick={handleSubmit}
          >
            <i class="fas fa-door-open">Sign In</i>
          </button>
        </form>
      </div>
      <div className="background" style={styles.background}>
        <h1 style={styles.backgroundH1}>
          Behind every successful system is a vigilant admin.
        </h1>
      </div>
    </div>
  );
}

export default AdminTab;
