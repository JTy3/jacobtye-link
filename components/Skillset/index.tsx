import { CodeBracketIcon, ServerIcon, CloudIcon, WrenchScrewdriverIcon, UserGroupIcon, LockClosedIcon } from "@heroicons/react/24/outline"
const Skillset = () => {
    const features = [
        {
            icon: <CodeBracketIcon className="w-6 h-6" />,
            title: "Front End Development",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon: <ServerIcon className="w-6 h-6" />,
            title: "Back End Development",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon: <CloudIcon className="w-6 h-6" />,
            title: "Cloud Technologies",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
            title: "DevOps",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon: <UserGroupIcon className="w-6 h-6" />,
            title: "Team Building and Collaboration",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
        {
            icon: <LockClosedIcon className="w-6 h-6" />,
            title: "Cyber Security",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius."
        },
    ]

    return (
        <section id="learn-more" className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            What keeps me busy?
                        </h3>
                        <p className="mt-3">
                            Here are a few of the things I do as a part of my role on a day to day basis.
                        </p>
                    </div>
                    <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="bg-white space-y-3 p-4 border rounded-lg">
                                    <div className="text-green-600 pb-3">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skillset