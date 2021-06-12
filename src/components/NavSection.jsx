export default function NavSection({ children, renderTitle }) {
  return (
    <div className="nav-section">
      <div className="nav-section__header">
        {renderTitle({ className: "nav-section__title" })}
      </div>
      <div className="nav-section__body">{children}</div>
    </div>
  );
}
