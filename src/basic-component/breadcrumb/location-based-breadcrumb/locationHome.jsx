import LocationBreadcrumb from "./locationBreadcrumb";
import { Outlet } from "react-router-dom";
export default function LocationHome() {
  return (
    <div className=" h-[100dvh] bg-gray-200">
      <div className="flex flex-col items-center gap-8 ">
        <h1 className=" text-4xl text-[#2E4053 ] mt-20">
          My Breadcrumb Component 🍞
        </h1>
          <LocationBreadcrumb />
          <Outlet/>
      </div>
    </div>
  );
}
