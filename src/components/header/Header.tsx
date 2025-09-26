import Image from 'next/image'
import React from 'react'
import logo1 from "../../../public/Design/logo1.png"
import default1 from "../../../public/vercel.svg"
import useUser from '@/hooks/useUser';
const Header = () => {
      const user = useUser();
      console.log("User from useUser:", user);


  return (
    

    <div
     className="bg-[#F7FCFA] h-full flex flex-col"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex justify-between items-center px-4">
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
            <ul style={{ fontFamily: "Inter, sans-serif" }} className='flex space-x-10 font-bold text-[19px] list-none'>
              <li>Footfall </li>
              <li>Promotions</li>
              <li>Advanced Analytics</li>
             </ul>
             
         
  {user?.image ? (
    <Image
      src={user.image}
      alt="User Avatar"
      className="w-10  rounded-full object-cover"
      width={10}
      height={10}
    />
  ) : (
    <Image
      src={default1} // put a default image in /public
      alt="Default Avatar"
      className=" rounded-full object-cover"
      width={10}
      height={10}
    />
  )}


            
        </div>
            <hr className="border-gray-300 mt-1" />
      
    </div>
  )
}

export default Header