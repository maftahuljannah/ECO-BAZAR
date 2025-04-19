import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const PrimaryMenu = () => {
  const [menus] = useState([
    { id: 1, name: 'Home', path: '/' },
    {
      id: 2,
      name: 'Shop',
      path: '/shop',
      subMenus: [
        { id: 3, name: 'Men', path: '/men' },
        { id: 4, name: 'Women', path: '/women' },
        { id: 5, name: 'Children', path: '/children' },
      ],
    },
    { id: 6, name: 'Blogs', path: '/blogs' },
    { id: 7, name: 'Contact', path: '/contact' },
  ]);

  return (
    <ul className="primaryMenu lg:flex gap-7">
      {menus.map((menu) => (
        <li key={menu.id} className="relative group">
          <NavLink
            to={menu.path}
            className="font-medium text-sm text-gray-scale-gray-500 hover:text-gray-scale-gray-900"
          >
            {menu.name}
          </NavLink>

          {/* If menu has subMenus, render them */}
          {menu.subMenus && (
            <ul className="subMenu group-hover:opacity-100 group-hover:visible mt-5 group-hover:mt-0 transition-all duration-200 opacity-0 invisible absolute z-10 bg-white border border-gray-300 py-4 px-5 min-w-[200px]">
              {menu.subMenus.map((sub) => (
                <li key={sub.id} className="my-2">
                  <NavLink
                    to={sub.path}
                    className="hover:text-branding-success text-sm font-medium text-gray-400 hover:pl-2 transition-all duration-150"
                  >
                    {sub.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PrimaryMenu;
