import React, { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import styles from "./pageModule/Login.module.css"


const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
  }, []);

  // Form validation schemas
  const signUpSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const signInSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Form submission handlers
  const handleSignUp = (values) => {
    axios
      .post("http://localhost:4000/api/user/register", values)
      .then(() => {
        toast.success("Sign up successful!");
        setIsSignUp(false);
      })
      .catch((error) => toast.error("Sign up failed: " + error.message));
  };

  const handleSignIn = (values) => {
    axios
      .post("http://localhost:4000/api/user/login", values)
      .then((response) => {
        if (response.data.success) {
          toast.success("Sign in successful!");
          
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("userName", response.data.user.name);






        // Fetch protected data using the token
        const token = localStorage.getItem("authToken");
        
        // Example of fetching a protected route after successful login
        axios
          .get("http://localhost:4000/protected-route", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((protectedResponse) => {
            console.log("Protected Data:", protectedResponse.data);
            // Handle the protected data here
          })
          .catch((error) => {
            toast.error("Failed to fetch protected data: " + error.message);
          });

        // Optionally, navigate to another page
        navigate("/home");








        } else {
          toast.error("User not found!");
        }
      })
      .catch((error) => toast.error("Sign in failed: " + error.message));
  };

  return (
    <div className={styles.mainContainer}>
        <div className={styles.loginContainer}> 
      <ToastContainer />
      {/* <h2>{isSignUp ? "" : ""}</h2> */}

      {isSignUp ? (
        <Formik
          initialValues={{ name: "", phone: "", email: "", password: "" }}
          validationSchema={signUpSchema}
          onSubmit={handleSignUp}
        >
          <Form className={styles.signUpForm}>
          <div className={styles.logo}>
                <img src="./assets/logo.png" alt="logo" />
            </div>
            <div>
                <h1>Welcome 👋</h1>
                <p>Today is a new day. It's your day. You shape it. 
                Sign up to start ordering.</p>
            </div>
            <div>
              <label>Name:</label>
              <Field placeholder="eg. John A" className={styles.inputField} type="text" name="name" />
              <span className={styles.errorField}>
              <ErrorMessage name="name" component="div" />
              </span>
            </div>

            <div>
              <label>Phone:</label>
              <Field placeholder="Enter your 10 digit mobile number" className={styles.inputField} type="text" name="phone" />
              <span className={styles.errorField}>
              <ErrorMessage name="phone" component="div" />
              </span>
            </div>

            <div>
              <label>Email:</label>
              <Field placeholder="Example@email.com"  className={styles.inputField} type="email" name="email" />
              <span className={styles.errorField}>
              <ErrorMessage name="email" component="div" />
              </span>
            </div>

            <div>
              <label>Password:</label>
              <Field placeholder="At least 8 characters"  className={styles.inputField} type="password" name="password" />
              <span className={styles.errorField}>
              <ErrorMessage name="password" component="div" />
              </span>
            </div>

            <button className={styles.submitButton} type="submit">Sign Up</button>
            <div className={styles.logo}>
            <span>Already have an account? </span>
            <button className={styles.switchButton} type="button" onClick={() => setIsSignUp(false)}>
              Sign In
            </button>
            </div>
          </Form>
        </Formik>
      ) : (
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={handleSignIn}
        >
          <Form className={styles.signInForm}>
            <div className={styles.logo}>
                <img src="./assets/logo.png" alt="logo" />
            </div>
            <div>
                <h1>Welcome Back 👋</h1>
                <p>Today is a new day. It's your day. You shape it. 
                Sign up to start ordering.</p>
            </div>
            <div>
              <label>Email </label><br />
              <Field placeholder="Example@email.com" className={styles.inputField} type="email" name="email" />
              <span className={styles.errorField}>
              <ErrorMessage name="email" component="div" />
              </span>
            </div>

            <div>
              <label>Password </label><br />
              <Field placeholder="At least 8 characters" className={styles.inputField} type="password" name="password" />
              <span className={styles.errorField}>
              <ErrorMessage name="password" component="div" />
              </span>
            </div>

            <button className={styles.submitButton} type="submit">Sign In</button>
            <span className={styles.errorField}></span>
            <div className={styles.logo}> 
            <span>Don't you have an account?</span>
            <button className={styles.switchButton} type="button" onClick={() => setIsSignUp(true)}>
               Sign Up
            </button>
            </div>
          </Form>
        </Formik>
      )}
      </div>
      <div className={styles.rightHalfContainer}>
        <img src="./assets/rectangle.png" alt="image" />
      </div>
    </div>
  );
};

export default Login;

