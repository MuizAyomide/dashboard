import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../Contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 bg-blue-800 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-3 right-2 top-2"
      ></span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { active, setActiveMenu } = useStateContext();

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />

        <NavButton
          title="Chat"
          dotColor="#03c907"
          customFunc={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
        />

        <NavButton
          title="Notifications"
          dotColor="#03c907"
          customFunc={() => handleClick("chat")}
          color="blue"
          icon={<RiNotification3Line />}
        />

      <TooltipComponent content="Profile" position="BottomCenter">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 
                        hover:bg-light-gray rounded-lg "
          onClick={() => handleClick("userProfile")}
        >
          <img className="rounded-full w-8 h-8" src={avatar} />
          <p>
            <span className="text-gray-400 text-14">Hi, </span>{" "}
            <span className="text-gray-400 font-bold text-14 ml-1">
              Micheal
            </span>
          </p>
        </div>
      </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
