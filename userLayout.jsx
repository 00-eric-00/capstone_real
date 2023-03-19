import "../sub.css";
import { HomeIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import ThemeIcon from "../components/themeButton";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
      <div>
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col hidden md:block bg-white text-black dark:bg-secondary dark:text-white shadow-lg">
          <ul>
            <li>
              <a href="#" placeholder="Arcana Logo">
                <img
                  src="/img/Arcana_logo.png"
                  alt="Arcana"
                  id="logo"
                  className="h-12 w-12 my-8 sidebar-icon group"
                />
              </a>
            </li>
            <li>
              <a href="#" className="group" placeholder="Home">
                <span className="tooltip-home group-hover:scale-100">Home</span>
                <HomeIcon className="h-8 w-8 my-16   sidebar-icon" />
              </a>
            </li>

            <li>
              <a href="#" className="group" placeholder="User">
                <span className="tooltip-user-profile group-hover:scale-100">
                  User Profile
                </span>
                <UserCircleIcon className="h-8 w-8 my-16  sidebar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group" placeholder="About">
                <span className="tooltip-about group-hover:scale-100">
                  About
                </span>
                <InformationCircleIcon className="h-8 w-8 my-16   sidebar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group" placeholder="Plans">
                <span className="tooltip-plans group-hover:scale-100">
                  Plans
                </span>
                <BookOpenIcon className="h-8 w-8 my-16   sidebar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group" placeholder="Download">
                <span className="tooltip-download group-hover:scale-100">
                  Download
                </span>
                <CloudArrowDownIcon className="h-8 w-8 my-16   sidebar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group" placeholder="Contact Us">
                <span className="tooltip-contactus group-hover:scale-100">
                  Contact Us
                </span>
                <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 my-16   sidebar-icon" />
              </a>
            </li>
            <li>
              <a href="#" className="group" placeholder="Logout">
                <span className="tooltip-logout group-hover:scale-100">
                  Logout
                </span>
                <UserIcon className="h-8 w-8 my-16  sidebar-icon" />
              </a>
            </li>
            <li className="group">
              <ThemeIcon />
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}
