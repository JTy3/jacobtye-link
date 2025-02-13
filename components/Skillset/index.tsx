import {
  CodeBracketIcon,
  ServerIcon,
  CloudIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
const Skillset = () => {
  const features = [
    {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      title: "Front End Development",
      desc: "Building reactive frontends ranging from simple portfolios like this to feature packed dashboards for thousands of users.",
    },
    {
      icon: <ServerIcon className="w-6 h-6" />,
      title: "Back End Development",
      desc: "Everything from APIs to CRON Jobs and Batch Processors. Node and Python are my go to languages for backend but I have started to dip my toes into the waters of Rust.",
    },
    {
      icon: <CloudIcon className="w-6 h-6" />,
      title: "Cloud Technologies",
      desc: "AWS and Vercel is where the majority of my work lives. However I have been known to venutre into GCP as well. I can deploy cloud solutions ranging from simple storage and static sites through to containerised environments.",
    },
    {
      icon: <LockClosedIcon className="w-6 h-6" />,
      title: "Cyber Security",
      desc: "Keeping everything I build locked down is of huge importance. I would always rather be over the top than below par when it comes to cyber security.",
    },
    {
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
      title: "DevOps",
      desc: "Continuous Integration is an investment I have seen pay off first hand and is a priority of mine when starting a new project. I think the ability to deploy and iterate quickly keeps motivation and momentum in projects.",
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: "Team Building and Collaboration",
      desc: "Working with people is something I have realised I really enjoy. Whether I am a leader or a member, I love watching people grow and develop.",
    },
  ];

  return (
    <section id="learn-more" className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              What keeps me busy?
            </h3>
            <p className="mt-3">
              Here are a few of the things I do as a part of my role on a day to
              day basis.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="bg-white space-y-3 p-4 border rounded-lg"
              >
                <div className="text-green-600 pb-3">{item.icon}</div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
