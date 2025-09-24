"use client";
import React, { useState } from "react";
import InputField from "../inputField/InputField";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    // Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    // Password match check
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match.");
      return;
    }

    // Save to localStorage
    const userData = { fullName, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("✅ Account created successfully!");
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col w-xl">
        {/* Full Name */}
        <InputField
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
       {/* Store Name */}
        <InputField
          label="Store Name"
          placeholder="Enter your Store name"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />

        {/* Email */}
        <div className="flex pt-4 flex-col">
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="flex pt-4 flex-col">
          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <div className="flex pt-4 flex-col">
          <InputField
            label="Confirm Password"
            placeholder="Re-enter your password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSignup}
          className="bg-[#007A54] text-white h-12 rounded-md mt-6 font-semibold hover:bg-[#3b8e76] transition duration-300"
        >
          Sign Up
        </button>

        {/* Redirect to Login */}
     
      </div>
    </div>
  );
};

export default Signup;
