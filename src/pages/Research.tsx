import { ContentLayout } from "../layouts/ContentLayout"

export const Research = () =>{
    return (
        <ContentLayout
            title="Decision Making in Multi agents system"
            subtitle="Working in Prof. Eck Lab at Oberlin College"
            image={{ src: '/images/agents.png', alt: 'Portrait of Tharcisse Ntirandekura' }}
            // socialLinks={[
            //     { href: 'https://www.linkedin.com/in/tharcisse-ntirandekura', label: 'LinkedIn', iconSrc: 'https://img.icons8.com/fluency/48/linkedin.png' },
            //     { href: 'mailto:tharcissentira@gmail.com', label: 'Email', iconSrc: 'https://img.icons8.com/fluency/48/gmail-new.png' },
            //     { href: 'https://github.com/tharcissentirandekura', label: 'GitHub', iconSrc: 'https://img.icons8.com/sf-black-filled/64/github.png' },
            // ]}
            mainColumn={
                <div className="space-y-5 leading-[1.75] text-gray-600 dark:text-gray-400 sm:space-y-6 sm:text-[17px] md:text-lg md:leading-[1.8]">
                    <p>Page coming soon!</p>
                </div>
            }
            // sections={[
            //     <div key="skills-block">
            //         <header className="max-w-2xl">
            //             <h2 className="font-playfair text-4xl">Skills</h2>
            //             <p className="ont-instrument mt-5 text-lg font-normal leading-snug text-gray-600 dark:text-gray-400 sm:text-xl">
            //             Difference skills I possess to have me do the job
            //             </p>
            //         </header>
            //         <div className="mt-6 flex flex-wrap gap-3 rounded-2xl bg-parchment px-4 py-12">
            //             {skills.map((s) => (
            //                 <div key={s} className="min-w-[100px] rounded-full bg-black px-4 py-2 text-center text-white">
            //                     <p className="m-0">{s}</p>
            //                 </div>
            //             ))}
            //         </div>
            //     </div>,
            // ]}
        />
    );
}