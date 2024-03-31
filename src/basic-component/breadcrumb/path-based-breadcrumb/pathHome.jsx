import PathBreadcrumb from "./pathBreadcrumb";
import { Link, Outlet } from "react-router-dom";
export default function PathHome() {
  return (
    // <div className=" h-[100dvh] bg-gray-200">
    <div>
      <div className="flex flex-col items-center gap-8 ">
        <h1 className=" text-4xl text-[#2E4053 ] mt-20">
          My Breadcrumb Component 🍞
        </h1>
        <PathBreadcrumb />
        <Outlet />
        <div className="flex gap-4 p-2 ">
          <Link
            to="products"
            className="no-underline rounded-md p-2 bg-[#777] text-white"
          >
            Products
          </Link>
          <Link
            to="products/1"
            className="no-underline rounded-md p-2 bg-[#777] text-white"
          >
            Single Product
          </Link>
        </div>
      </div>
    </div>
  );
}
