import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const contactMethods = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Send me a message",
      desc: "Reach out for any development help, opportunities or collaborations.",
      link: {
        name: "Email me",
        href: "mailto:jacob@eminenceaus.com",
      },
    },
    {
      icon: <LinkIcon className="w-6 h-6" />,
      title: "Connect with me",
      desc: "Join my professional network over on LinkedIn.",
      link: {
        name: "My LinkedIn",
        href: "https://www.linkedin.com/in/jacobtye1/",
      },
    },
  ];

  return (
    <section id="contact" className="py-14 md:py-28">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex">
        <div className="max-w-md">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Let&apos;s connect
          </h3>
          <p className="mt-3">
            I would love to hear from you about collaborations, work
            opportunities or just a friendly chat.
          </p>
        </div>
        <div>
          <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
            {contactMethods.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
              >
                <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                  {item.icon}
                </div>
                <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
                <a
                  href={item.link.href}
                  className="flex items-center gap-1 text-sm text-green-600 duration-150 hover:text-green-400 font-medium"
                >
                  {item.link.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
