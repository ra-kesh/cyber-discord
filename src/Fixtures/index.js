export const FIXTURES = {
  headerMenu: [
    { notificationCount: 0, text: "Home" },
    { isActive: true, notificationCount: 11, text: "Messages" },
    { notificationCount: 0, text: "Shop" },
    { notificationCount: 0, text: "Map" },
    { notificationCount: 0, text: "Files" },
  ],
  feed: [
    { id: "5ba5", name: "Afterlife", unread: 3 },
    { id: "4f22", name: "NCPD-Gigs" },
    { id: "fee9", name: "Pacifica" },
    { id: "a0cc", name: "Watson" },
    { id: "dee3", name: "_T_SQUAD", isPrivate: true, unread: 2 },
  ],
  conversation: [
    {
      id: "cc23",
      isOnline: true,
      unread: 5,
      name: "Rogue Amendiares",
    },
    { id: "95b4", isOnline: true, name: "Takemura", unread: 1 },
    { id: "10cf", name: "Wakado O., Regina Jones" },
    { id: "e466", name: "Dexter DeShawn" },
    { id: "ca0b", name: "Megabuilding H10 Administration" },
  ],
  messages: [
    {
      id: "fd0cf",
      content:
        "I got a gig lined up in Watson, no biggie. If you prove useful, expect more side gigs coming your way. I need a half-decent netrunner. Hit me up, provide credentials, eddies on completion.",
      dateTime: "2077-10-09T11:04:57Z",
      author: {
        id: "d12c",
        name: "V.M. Vargas",
      },
    },
  ],
};
