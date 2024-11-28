import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  // Form validation schemas
  const signUpSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const signInSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Form submission handlers
  const handleSignUp = (values) => {
    axios
      .post("http://localhost:5000/api/signup", values)
      .then(() => {
        toast.success("Sign up successful!");
        setIsSignUp(false);
      })
      .catch((error) => toast.error("Sign up failed: " + error.message));
  };

  const handleSignIn = (values) => {
    axios
      .post("http://localhost:5000/api/signin", values)
      .then((response) => {
        if (response.data.success) {
          toast.success("Sign in successful!");
          navigate("/home"); // Redirect to home page
        } else {
          toast.error("User not found!");
        }
      })
      .catch((error) => toast.error("Sign in failed: " + error.message));
  };

  return (
    <div>
      <ToastContainer />
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

      {isSignUp ? (
        <Formik
          initialValues={{ name: "", phone: "", email: "", password: "" }}
          validationSchema={signUpSchema}
          onSubmit={handleSignUp}
        >
          <Form>
            <div>
              <label>Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label>Phone:</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" />
            </div>

            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Sign Up</button>
            <button type="button" onClick={() => setIsSignUp(false)}>
              Already have an account? Sign In
            </button>
          </Form>
        </Formik>
      ) : (
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={handleSignIn}
        >
          <Form>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Sign In</button>
            <button type="button" onClick={() => setIsSignUp(true)}>
              Don't have an account? Sign Up
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default Login;

