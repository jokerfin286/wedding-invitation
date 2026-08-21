import Reveal from './Reveal';
export default function InvitationIntro({w}){return <section id="intro" className="section intro"><Reveal><span className="eyebrow">{w.intro.greeting}</span><h2>{w.intro.title}</h2><div className="ornament">✦</div><p className="lead">{w.intro.text}</p></Reveal></section>}
