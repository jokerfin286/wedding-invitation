import Reveal from './Reveal';
export default function Gallery({w}){return <section className="section gallery"><Reveal><span className="eyebrow">Наша история</span><h2>НЕМНОГО О НАС</h2><div className="gallery-grid">{w.gallery.map((src,i)=><img key={src} src={src} alt={`Фотография пары ${i+1}`} loading="lazy"/>)}</div></Reveal></section>}
