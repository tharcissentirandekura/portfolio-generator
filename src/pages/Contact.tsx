import { ArrowUpRight, Mail } from 'lucide-react';
import LandscapeDivider from '../components/LandscapeDivider';

const Contact = () => (
  <div className="page-shell page-top">
    <p className="eyebrow">Contact</p>
    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
      <div>
        <h1 className="page-title mt-5">Let’s build something together.</h1>
        <p className="page-intro">I’m open to new-grad software roles, research collaborations, and conversations about technology, education, or entrepreneurship.</p>
        <a href="mailto:tharcissentira@gmail.com" className="button button-dark mt-9"><Mail size={17} /> Send an email</a>
      </div>
      <div className="divide-y divide-ink/10 border-y border-ink/10 dark:divide-white/10 dark:border-white/10">
        <div className="py-6">
          <span className="block text-xs uppercase tracking-wider text-stone-400">Availability</span>
          <span className="mt-1 block">Open to new-grad software engineering roles</span>
          <span className="mt-2 block text-sm text-stone-500 dark:text-stone-400">Based in Oberlin, Ohio</span>
        </div>
        <a href="mailto:tharcissentira@gmail.com" className="group flex items-center justify-between py-6"><span><span className="block text-xs uppercase tracking-wider text-stone-400">Email</span><span className="mt-1 block">tharcissentira@gmail.com</span></span><ArrowUpRight size={18} /></a>
        <a href="https://www.linkedin.com/in/tharcisse-ntirandekura" target="_blank" rel="noreferrer" className="group flex items-center justify-between py-6"><span><span className="block text-xs uppercase tracking-wider text-stone-400">LinkedIn</span><span className="mt-1 block">tharcisse-ntirandekura</span></span><ArrowUpRight size={18} /></a>
        <a href="https://github.com/tharcissentirandekura" target="_blank" rel="noreferrer" className="group flex items-center justify-between py-6"><span><span className="block text-xs uppercase tracking-wider text-stone-400">GitHub</span><span className="mt-1 block">@tharcissentirandekura</span></span><ArrowUpRight size={18} /></a>
      </div>
    </div>
    <div className="mt-20"><LandscapeDivider fullWidth /></div>
  </div>
);

export default Contact;
