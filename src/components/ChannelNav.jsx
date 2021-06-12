import ChannelLink from "./ChannelLink";

export default function ChannelNav({ activeChannel = null, channels = [] }) {
  return (
    <ul className="nav">
      {channels.map((channel) => (
        <li className="nav__item">
          <a
            className={`nav__link ${
              activeChannel && activeChannel.id === channel.id
                ? "nav__link--active"
                : ""
            }`}
            href="/"
          >
            <ChannelLink {...channel}>name</ChannelLink>
          </a>
        </li>
      ))}
    </ul>
  );
}
