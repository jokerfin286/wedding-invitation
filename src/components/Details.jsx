import Reveal from './Reveal';
export default function Details({w}){return <section className="section details"><Reveal><span className="eyebrow">Важно знать</span><h2>ДЕТАЛИ</h2><div className="details-grid">{w.details.map((d,i)=><article key={i}><span>0{i+1}</span><h3>{d.title}</h3><p>{d.text}</p></article>)}</div></Reveal></section>}
