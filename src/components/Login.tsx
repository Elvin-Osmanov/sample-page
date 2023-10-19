"use client";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "@/styles/components/login.module.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Validate username
    if (!formData.username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    // Validate confirmPassword
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        setFormData({
          fullName: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        handleClose();

        // Clear the form data
      } else {
        const error = await response.json();
        toast.error(error.message);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-md-2 col-8 d-flex justify-content-end">
      <ToastContainer />
      <button
        onClick={handleShow}
        type="button"
        className={`btn btn-info ${styles.login_button}`}
      >
        Login
      </button>
      <Modal show={show} onHide={handleClose} className={styles.login_modal}>
        <Modal.Header closeButton>
          <Modal.Title>Login information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
              />
              {errors.email && (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
              />
              {errors.username && (
                <Form.Text className="text-danger">{errors.username}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="Fullname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="text"
                placeholder="Enter full name"
                name="fullName"
                value={formData.fullName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
              />
              {errors.password && (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="Confirmpassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={handleInputChange}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
              />
              {errors.confirmPassword && (
                <Form.Text className="text-danger">
                  {errors.confirmPassword}
                </Form.Text>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" className="text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
