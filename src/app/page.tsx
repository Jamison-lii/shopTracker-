import Welcome from "@/components/welcome/Welcome";
import Image from "next/image";
import logo1 from "../../public/Design/logo1.png"
import Login from "@/components/login/Login";

export default function Home() {
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
      <Login/>
    </div>
  );
}
