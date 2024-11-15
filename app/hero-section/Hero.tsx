import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <Image
        alt="BG"
        width={1920}
        height={1080}
        src={"/projects/background.png"}
      />
    </section>
  );
};

export default Hero;
