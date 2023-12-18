import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "@/contstants/index";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-t mt-5 border-gray-100">
      <div className="flex max-md:flex-col flex-wrap sm:px-16 gap-5 justify-between px-6 py-10">
        <div className="flex justify-start items-start gap-6 flex-col">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarHub 2028 <br />
            All rights reserved
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((item, index) => (
            <div className="footer__link" key={index}>
              <h3 className="font-bold">{item.title}</h3>
              {item.links.map((item, index) => (
                <Link key={index} className="text-gray-500" href={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div> 
      </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t sm:px-16 px-6 py-10 border-gray-100"> 
                <p>@2028 CarHub. All Rights reserved</p>
            <div className="footer__copyrights-link"> 
                <Link href='/' className="text-gray-500"> 
                    Privacy Plicy 
                </Link>
                <Link href='/' className="text-gray-500"> 
                    Terms of Use
                </Link>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
