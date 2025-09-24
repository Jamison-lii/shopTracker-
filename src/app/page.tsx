"use client";
import { useState } from "react";
import Welcome from "@/components/welcome/Welcome";
import Image from "next/image";
import logo1 from "../../public/Design/logo1.png"
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/SignUp";

export default function Home() {
  
  const [showSignup, setShowSignup] = useState(false);
  const toggleSignup = () => setShowSignup(!showSignup);

  return (
    <div
      className="bg-[#F7FCFA] h-full flex flex-col"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex  items-center">
        <Image
          src={logo1}
          alt="ShopTracker Logo"
          width={45}
          
        />
      <div className="my-3 text-xl text-center font-semibold">
        ShopTracker
      </div>
      </div>
      <hr className="border-gray-300 mt-1" />

      <Welcome />
      { !showSignup ? (
   <>   <Login/>

      <div className="text-sm text-center text-[#45A185] mt-7">Don't have an account ?  <span onClick={toggleSignup} className="cursor-pointer font-semibold">Sign Up</span> </div></>
    ):(
      <>  <Signup/>
           <div className="text-sm text-center text-[#45A185] mt-7">
          Already have an account?{" "}
          <span
            className="cursor-pointer font-semibold hover:underline"
            onClick={toggleSignup}
          >
            Login
          </span>
        </div>
        </>
      )
      }
      
        <div className="text-sm text-center text-[#45A185] mt-7">Forgot password ?</div>
        
    </div>
  );
}
