import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function LogoAvatar({name,size,loading}:any){
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
      const navigate=useNavigate();
    return(
        <div className="relative">
            
<button id="dropdownUserAvatarButton"  onClick={toggleDropdown}data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
<span className="sr-only">Open user menu</span>
<div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"} m`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-black `}>
       {loading ? "":name[0].toUpperCase()}

    </span>
</div>
</button>
{isOpen && (
        <div
          id="dropdownAvatar"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 -ml-12 mt-2"
        >
          
          
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={()=>{
                localStorage.removeItem("token");
                navigate("/");
                
              }}
            >
              Log Out
            </a>
          </div>
        </div>
      )}



        </div>
    )
}