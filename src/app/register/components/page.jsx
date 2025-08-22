"use client";
import React, { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2"; // Import SweetAlert2
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/components/SocialLogin";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false); // State to handle loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true while the request is in progress

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Call the server action and get the result
    const result = await registerUser({ name, email, password });
    
    setLoading(false); // Reset loading state

    if (result && result.error) {
      // If there's an error, show a SweetAlert with the error message
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: result.error,
      });
    } else {
      // If registration is successful, show a success SweetAlert
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "You have been registered successfully. Please log in.",
      }).then(() => {
        // You can optionally redirect the user after they click "OK"
        // window.location.href = '/login'; 
      });

      // Clear the form fields after successful registration
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="name"
          required
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Email</span>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Type here"
          className="input input-bordered w-full"
          required
        />
      </label>
      <label className="form-control w-full">
        <div className="label w-full">
          <span className="label-text font-bold">Password</span>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full"
          required
        />
      </label>
      <button
        type="submit"
        className={`w-full h-12 bg-orange-500 text-white font-bold ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={loading}
      >
        {loading ? "Registering..." : "Sign Up"}
      </button>
      <p className="text-center">Or Sign In with</p>
      {/* SocialLogin */}
      <SocialLogin></SocialLogin>
      <p className="text-center">
        Don't Have an account?{" "}
        <Link href="/login" className="text-orange-500 font-bold">
          Login
        </Link>
      </p>
    </form>
  );
}