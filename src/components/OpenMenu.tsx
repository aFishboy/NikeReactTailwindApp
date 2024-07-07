import React from "react";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

type Props = {
    toggleMenu: () => void;
};

const OpenMenu: React.FC<Props> = ({ toggleMenu }) => {
    return (
        <div className="bg-white fixed top-0 left-0 w-screen h-screen z-20 flex flex-col items-center justify-center">
            <img
                onClick={toggleMenu}
                src={hamburger}
                alt="Hamburger"
                width={25}
                height={25}
                className="absolute top-4 right-4 text-black text-2xl"
            />
            <ul className="flex flex-col items-center gap-8">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="font-montserrat leading-normal text-lg text-slate-gray"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OpenMenu;
