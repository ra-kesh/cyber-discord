import Badge from "./Badge";

export default function NavItem({ navItem }) {
  return (
    <li className="nav__item">
      <a
        className={`nav__link ${navItem.isActive ? "nav__link--active" : ""}`}
        href="/"
      >
        <span className="nav__link__element">{navItem.text}</span>
        {navItem.notificationCount > 0 && (
          <span className="nav__link__element">
            <Badge>{navItem.notificationCount}</Badge>
          </span>
        )}
      </a>
    </li>
  );
}
