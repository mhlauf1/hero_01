import React from "react";
import Image from "next/image";

type Props = {};
const navItems = ["Solutions", "Products", "Resources", "Company", "Blog"];

const NavItem = ({ link }: any) => <li className="text-neutral-400">{link}</li>;

const Hero = (props: Props) => {
  return (
    <section className="p-20">
      <div className="grid grid-cols-12  items-start gap-4">
        <div className="col-span-3">
          <h2 className="text-sm text-blue-500">Introducing Trop</h2>
        </div>
        <div className="col-span-9 flex flex-col gap-y-12 gap-x-8">
          <h1 style={{ lineHeight: "115%" }} className="text-5xl">
            Unlock Efficiency, Scale Reliably <br />{" "}
            <span className="text-neutral-400">
              Integrate Data with Cutting-Edge AI Workflows.
            </span>
          </h1>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white py-3 px-8 rounded-full">
              Get Started
            </button>
            <button className="bg-white text-neutral-400 py-3 px-8 border rounded-full">
              Request Demo
            </button>
          </div>
          <div className="h-auto w-[50vw] mt-16">
            <Image
              src="/companies.png"
              alt="Trop Hero Image"
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
