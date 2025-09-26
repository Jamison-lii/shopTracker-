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
  const [image, setImage] = useState<string | null>(null); // Base64 image
  const router = useRouter();

  const handleSignup = () => {
    // Basic validation
    if (!fullName || !email || !storeName || !password || !confirmPassword) {
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

    // Save to localStorage (for now)
    const userData = { fullName, storeName, email, password, image };
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("✅ Account created successfully!");
    router.push("/dashboard");
  };

  // Convert image to Base64 before saving
  // Handle image selection
const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string); // store base64 string
    };
    reader.readAsDataURL(file); // convert file to base64
  }
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

        {/* Upload Image */}
        <div className="flex pt-4 flex-col">
          <label className="font-semibold mb-2">Upload Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border rounded-md p-2"
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-4 w-32 h-32 object-cover rounded-md border"
            />
          )}
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSignup}
          className="bg-[#007A54] text-white h-12 rounded-md mt-6 font-semibold hover:bg-[#3b8e76] transition duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
