import React from "react";

const Login = () => {
  return(
   <div className="flex justify-center items-center mt-16">
     <div className="flex flex-col w-xl">
        <div className="flex flex-col">
            <div className="text-sm font-semibold ml-1">Email or Username</div>
            <input
              type="text"
              className="border h-12  border-[#CCEBE0] rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#45A185]"
              placeholder="Enter your email or username"
            />
        </div>
     </div>
  </div>
  )
};

export default Login;
