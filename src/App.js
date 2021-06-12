import "./App.css";
import {
  NavSection,
  FeedMessage,
  ChannelNav,
  ChannelLink,
  ConversationNav,
  Pad,
  Button,
  NavItem,
} from "./components";

import {
  TextHeading4,
  TextHeading3,
  // TextParagraph1,
  TextOverline,
} from "./components/TextHeading";

import {
  IconFeedAdd,
  IconSearchSubmit,
  IconFeedMute,
  IconFeedSettings,
  IconMenuMore,
} from "./components/Icon";

import { FIXTURES } from "./Fixtures";

function App() {
  return (
    <div className="app-skeleton">
      <header className="app-header">
        <div className="app-header__anchor">
          <span className="app-header__anchor__text">Night-City NetWire</span>
        </div>
        <nav>
          <ul className="nav">
            {FIXTURES.headerMenu.map((navItem, navItemIndex) => (
              <NavItem key={navItemIndex} navItem={navItem} />
            ))}
          </ul>
        </nav>
        <div />
      </header>
      <div className="app-container">
        <div className="app-a">
          <div className="segment-topbar">
            <div className="segment-topbar__header">
              <TextHeading3 className="segment-topbar__title">
                Messages
              </TextHeading3>
            </div>
            <div className="segment-topbar__aside">
              <div className="button-toolbar">
                <a className="button button--primary button--size-lg" href="/">
                  <IconFeedAdd className="button__icon" />
                </a>
              </div>
            </div>
          </div>

          <form className="form-search" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <div className="form-control form-control--with-addon">
                <input name="query" placeholder="Search..." type="text" />
                <div className="form-control__addon form-control__addon--prefix">
                  <IconSearchSubmit />
                </div>
              </div>
            </div>
          </form>

          <NavSection renderTitle={(props) => <h2 {...props}>Feeds</h2>}>
            <ChannelNav
              activeChannel={{ id: "a0cc", name: "Watson" }}
              channels={FIXTURES.feed}
            />
          </NavSection>
        </div>
        <div className="app-main">
          <div className="channel-feed">
            <div className="segment-topbar">
              <div className="segment-topbar__header">
                <TextOverline className="segment-topbar__overline">
                  NetWire_Seed: d869db7fe62fb07c25a0403ecaea55031744b5fb
                </TextOverline>
                <TextHeading4 className="segment-topbar__title">
                  <ChannelLink name="Watson" />
                </TextHeading4>
              </div>
              <div className="segment-topbar__aside">
                <div className="button-toolbar">
                  <a className="button button--default" href="/">
                    <IconFeedMute className="button__icon" />
                  </a>
                  <a className="button button--default" href="/">
                    <IconFeedSettings className="button__icon" />
                  </a>
                  <a className="button button--default" href="/">
                    <IconMenuMore className="button__icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="channel-feed__body">
              <FeedMessage message={FIXTURES.messages[0]} />
              <FeedMessage message={FIXTURES.messages[0]} />
            </div>
            <div className="channel-feed__footer">
              <form
                className="channel-message-form"
                action="#"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <label className="form-label" for="message">
                    Message
                  </label>
                  <div className="form-control">
                    <textarea
                      id="message"
                      className="form-control"
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <div className="form-footer">
                  <Button size="xl" type="submit" variant="primary">
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="app-b">
          <Pad>
            <NavSection renderTitle={(props) => <h2 {...props}>Direct</h2>}>
              <ConversationNav conversations={FIXTURES.conversation} />
            </NavSection>
            {/* <TextHeading3 $as="h4">What's this?</TextHeading3>
            <TextParagraph1>
              A <em>fake</em> Slack or Discord type of app inspired by Cyberpunk
              2077. This app is static, eg. not implementing much logic.
            </TextParagraph1>
            <TextParagraph1>
              The goal is: showcasing a start of a UI kit. If you've played the
              game, you' might be able to pick-up some similarities with the
              in-game menus.
            </TextParagraph1> */}
          </Pad>
        </div>
      </div>
    </div>
  );
}

export default App;
