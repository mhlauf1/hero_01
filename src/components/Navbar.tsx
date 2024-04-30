import React from "react";

type Props = {};

const navItems = ["Solutions", "Products", "Resources", "Company", "Blog"];

const NavItem = ({ link }: any) => <li className="text-gray-400">{link}</li>;

const Navbar = (props: Props) => {
  return (
    <header className="py-4 border-b px-20">
      <nav className="grid grid-cols-12  items-center gap-4">
        <div className="col-span-3">
          <h2 className="text-2xl font-bold">Trop</h2>
        </div>
        <ul className="col-span-6 flex gap-x-8">
          {navItems.map((link) => (
            <NavItem link={link} />
          ))}
        </ul>
        <div className="col-span-3 flex justify-end gap-8">
          <button className="text-gray-400">Request Demo</button>
          <button className="border rounded-full py-2 px-6">Open Trop</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
