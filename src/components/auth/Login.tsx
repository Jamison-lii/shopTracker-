"use client";
import React, { useState } from "react";
import InputField from "../inputField/InputField";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


    const handleSave = () => {
    // 🔎 Basic validation checks
    if (!email || !password) {
      alert("⚠️ Please fill in both email and password.");
      return;
    }

    // 📧 Email format validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    // 💾 Save to localStorage if validation passes
   const user = localStorage.getItem("userData");
   if (user) {
     const userData = JSON.parse(user);

      if (userData.email !== email || userData.password !== password) {

        alert("❌ Invalid email or password.");
        return;
      }else{

    alert("Login Successfull");
    router.push("/dashboard");

      }

   }
  };

  


  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col w-xl">
        <div className="flex flex-col">
          <InputField
            label="Email or Username"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex pt-4 flex-col">
          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSave} className="bg-[#007A54] text-white h-12 rounded-md mt-6 font-semibold hover:bg-[#3b8e76] transition duration-300">
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;
