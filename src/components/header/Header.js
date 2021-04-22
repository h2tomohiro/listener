import React from 'react'
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26} />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="listner"
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
      </div>
    </div>
  );
}

export default Header;
