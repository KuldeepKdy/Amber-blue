import Image from "next/image";
import Link from "next/link";

import { AiFillInstagram } from "react-icons/ai";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex h-screen w-full items-stretch justify-center bg-cover bg-center  py-0 bg-[url(../public/projects/heros.jpg)]"
    >
      {/* background  */}
      <Image
        alt="BG"
        width={1920}
        height={1080}
        src={"/projects/background.png"}
        className="absolute left-0 top-0 bg-center w-full h-full bg-cover"
      />
      <div className="absolute bg-white top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link href="#">
            <button className="rounded-full border-[#e4ded7] border-2 py-2 px-4 font-semibold text-[#e4ded7]  sm:block md:text-[16px] lg:block">
              Lets Connect
            </button>
          </Link>
        </div>

        <div>
          <Link
            href="#"
            target="_blank"
            aria-label="View Github Website"
          ></Link>
          <Link href="#" target="_blank" aria-label="View Instagram Website">
            <AiFillInstagram />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
