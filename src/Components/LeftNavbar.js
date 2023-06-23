import React from "react";
import { Link } from "react-router-dom";
import SiteLinks from "../Routes/SiteLinks";

const LeftNavbar = () => {
  const sideMenus = SiteLinks.filter(
    (item) => item.type === "side-menu"
  );

  return (
    <>
      <nav className="col-md-2 d-none d-md-block sidebar">
        <ul className="nav flex-column">
          {sideMenus.map((menu) => (
            <li className="nav-item">
              <Link
                to={menu.link}
                className="nav-link"
                activeclassName="active"
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default LeftNavbar;
