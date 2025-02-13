import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-green-600 font-medium">Hey there!</h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              My name is Jacob!
            </h2>
            <p>
              I am a passionate Full Stack Developer with a love of all things
              tech. I love to meet and chat with people from all walks of life
              and am a true believer in learning something from everyone I meet.
              I like to lead by example and nothing makes me happier than helping
              others become the best version of themselves.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <Link
                href="#learn-more"
                className="block py-2 px-4 text-center text-white font-medium bg-green-600 duration-150 hover:bg-green-500 active:bg-green-700 rounded-lg hover:shadow-none"
              >
                Get to know me
              </Link>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                Contact me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <Image
              height={400}
              width={400}
              src="/profile.jpg"
              className=" md:rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center text-sm text-gray-700 font-semibold">
            Organisations I have worked for
          </p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
            <Image
              width={120}
              height={40}
              alt="Butter Logo"
              src={`/butter.svg`}
            />
            <Image
              width={120}
              height={120}
              alt="Butter Logo"
              src={`/nrma.png`}
            />
            <Image
              width={240}
              height={40}
              alt="Butter Logo"
              src={`/nrmaparks.webp`}
            />
            <Image width={120} height={40} alt="Butter Logo" src={`/uon.png`} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
