import Image from "next/image";

const Technologies = () => {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Some of the tools I use
          </h3>
          <p className="text-gray-600 mt-3">
            Although I am always trying new technologies and frameworks to see what is out there. These tools are my bread and butter.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-4">
            {/* LOGO 1 */}
            <li>
              <Image alt="AWS Logo" src={`/logos/aws.svg`} width={90} height={40} />
            </li>
            <li>
              <Image alt="Git Logo" src={`/logos/github.svg`} width={90} height={40} />
            </li>
            <li>
              <Image alt="JS Logo" src={`/logos/javascript.svg`} width={90} height={40} />
            </li>
            <li>
              <Image alt="Next Logo" src={`/logos/nextjs.svg`} width={90} height={40} />
            </li>
            <li>
              <Image alt="Node Logo" src={`/logos/nodejs.svg`} width={90} height={40} />
            </li>
            <li>
              <Image alt="Postgres Logo" src={`/logos/postgresql.svg`} width={90} height={40} />
            </li>
            <li>
              <Image alt="Stripe Logo" src={`/logos/stripe.svg`} width={90} height={40} />
            </li>
            <li>
              <Image alt="Python Logo" src={`/logos/python.svg`} width={90} height={40} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies
