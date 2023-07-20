"use client";

import { motion } from "framer-motion";
import { BsBag } from "react-icons/bs";
import Link from "next/link";
import Button from "./Button";
import { getTransition } from "@/utils/getTransition";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={getTransition(0.6)}
      className="h-20 fixed top-0 left-0 right-0 border-b border-dark-10 bg-light/90 backdrop:blur-lg z-[100]"
    >
      <div className=" wrapper w-full h-full flex justify-between items-center">
        {/* nav left */}
        <nav>
          <Link href="/" className=" text-xl font-semibold link-item">
            Crucial Mart
          </Link>
        </nav>
        {/* nav mid */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="link-item">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* nav right */}
        <nav className="flex items-center gap-5">
          <Link href="/cart" className=" relative">
            <BsBag />
            <span className=" absolute text-xs h-4 w-4 rounded-xl bg-dark text-light flex justify-center items-center -right-2 -bottom-2">
              10
            </span>
          </Link>
          <Button href="/login" placeholder="Login" color="green" />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
