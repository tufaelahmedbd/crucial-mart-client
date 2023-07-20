"use client";
import { getTransition } from "@/utils/getTransition";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] grid grid-cols-5">
      {/* First column */}
      <div className=" w-full h-full ">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/11359687/pexels-photo-11359687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Coffee Drink on Top of Book beside a Head Bust"
              width={300}
              height={700}
              priority
              className=" w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* Second column */}
      <div className=" w-full h-full"></div>
      {/* Third column */}
      <div className=" w-full h-full flex items-center">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.2)}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/4346325/pexels-photo-4346325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cup of Coffee on an Opened Book"
              width={300}
              height={700}
              priority
              className=" w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* Fourth column */}
      <div className=" w-full h-full "></div>
      {/* Fifth column */}
      <div className=" w-full h-full  flex items-end">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.4)}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Coffee & Book beside"
              width={300}
              height={700}
              priority
              className=" w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
