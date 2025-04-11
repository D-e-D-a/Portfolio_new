import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row overflow-hidden items-center justify-center gap-8 h-screen md:bg-gradient-to-l from-black to-gray-900 text-white mb-12">
      <div className="max-w-3xl px-16 pt-96 lg:pt-0">
        <p className="text-teal-500 font-mono mb-5  animate-fadeIn text-shadow text-xl">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4  animate-fadeIn ">
          Jovan Dedeić.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-500  mb-6  animate-fadeIn ">
          I build things for the web.
        </h2>
        <p className="text-slate-lightest text-lg mb-8 max-w-xl  animate-fadeIn ">
          I&apos;m a front-end developer specializing in building exceptional
          digital experiences. Currently, I&apos;m focused on creating
          accessible, human-centered products with React and Next.js.
        </p>
        <div className=" animate-fadeIn ">
          <Button
            size="lg"
            className="bg-transparent text-teal-500 border border-teal hover:bg-teal/10 group cursor-pointer"
          >
            View My Work
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </Button>
        </div>
      </div>

      <Image
        src="/hero3.jpg"
        alt="Hero Image"
        width={500}
        height={500}
        className="animate-fadeIn h-md w-xl  mask-l-from-20% "
      />
    </section>
  );
};

export default Hero;
