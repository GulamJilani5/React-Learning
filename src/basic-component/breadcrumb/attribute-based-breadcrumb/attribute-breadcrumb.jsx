import { MdKeyboardArrowRight } from "react-icons/md";

export default function AttributeBreadcrumb({ sizeFilter, colorFilter }) {
  return (
    <div className="mb-4 bg-gray-200 rounded-md ">
      <ul className="   flex items-center  text-xl text-[#2E4053] text-left">
        <li className={`cursor-pointer p-4 rounded-md `}>All</li>

        {sizeFilter && (
          <>
            <MdKeyboardArrowRight />

            <li className={`cursor-pointer p-4 rounded-md capitalize`}>
              {sizeFilter}
            </li>
          </>
        )}
        {colorFilter && (
          <>
            <MdKeyboardArrowRight />

            <li className={`cursor-pointer p-4 rounded-md capitalize`}>
              {colorFilter}
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
