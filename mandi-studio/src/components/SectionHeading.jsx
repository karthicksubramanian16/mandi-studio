export default function SectionHeading({ title, intro, id }) {
  return (
    <header className="section-head">
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  );
}
