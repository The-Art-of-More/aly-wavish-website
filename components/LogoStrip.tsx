const LOGOS = ["CBRE", "Monash University", "La Trobe University", "ISPT", "Goodman", "City of Adelaide"];

export default function LogoStrip() {
  return (
    <div className="logostrip">
      <div className="wrap">
        <div className="label">Trusted by leaders at</div>
        <div className="row">
          {LOGOS.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
