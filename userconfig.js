let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Silver Spring",
    scale: "F",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "dai ly",
      background_url: "src/img/banners/calvin.jpg",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: "#a6e3a1",
            },
            {
              name: "spotify",
              url: "https://open.spotify.com/",
              icon: "brand-spotify",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: "#a6e3a1",
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: "#fab387",
            },
            {
              name: "notes",
              url: "https://www.onenote.com/",
              icon: "brand-evernote",
              icon_color: "#f38ba8",
            },
            {
              name: "annotate",
              url: "https://pdf.drawboard.com/documents",
              icon: "pencil",
              icon_color: "#89b4fa",
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: "#cba6f7",
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "уп",
              url: "https://www.pravda.com.ua",
              icon: "news",
              icon_color: "#a6e3a1",
            },
            {
              name: "mil.in.ua",
              url: "https://mil.in.ua",
              icon: "badge-filled",
              icon_color: "#fab387",
            },
            {
              name: "куток",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: "#f38ba8",
            },
            {
              name: "ґрунт",
              url: "https://grnt.media",
              icon: "eye-bolt",
              icon_color: "#89b4fa",
            },
            {
              name: "village",
              url: "https://www.village.com.ua",
              icon: "home-2",
              icon_color: "#cba6f7",
            },
          ],
        },
      ],
    },
    {
    name: "class",
      background_url: "src/img/banners/study.jfif",
      categories: [
        {
          name: "office 360",
          links: [
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-type-doc",
              icon_color: "#a6e3a1",
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets/u/0/",
              icon: "file-spreadsheet",
              icon_color: "#fab387",
            },
            {
              name: "slides",
              url: "https://docs.google.com/presentation/u/0/",
              icon: "presentation",
              icon_color: "#f38ba8",
            },
            {
              name: "forms",
              url: "https://docs.google.com/forms/u/0/",
              icon: "forms",
              icon_color: "#89b4fa",
            },
            {
              name: "annotate",
              url: "https://pdf.drawboard.com/documents",
              icon: "pencil",
              icon_color: "#cba6f7",
            },
          ],
        },
        {
          name: "classrooms",
          links: [
            {
              name: "myUMBC",
              url: "https://my.umbc.edu/",
              icon: "underline",
              icon_color: "#a6e3a1",
            },
            {
              name: "classroom",
              url: "https://classroom.google.com/u/1/c/NzAzNzY3MzMyMTqcw",
              icon: "school",
              icon_color: "#fab387",
            },
            {
              name: "group me",
              url: "https://app.groupme.com/chats",
              icon: "users-group",
              icon_color: "#f38ba8",
            },
          
          ],
        },
        {
          name: "study ",
          links: [
            {
              name: "quizlet",
              url: "https://quizlet.com/create-set",
              icon: "question-mark",
              icon_color: "#a6e3a1",
            },
            {
              name: "desmos",
              url: "https://www.desmos.com/",
              icon: "graph",
              icon_color: "#fab387",
            },
            {
              name: "symbolab",
              url: "https://www.symbolab.com/",
              icon: "math",
              icon_color: "#f38ba8",
            },
            {
              name: "grammarly",
              url: "https://app.grammarly.com/",
              icon: "brand-grammarly",
              icon_color: "#f38ba8",
            },
            {
              name: "duolingo",
              url: "https://www.duolingo.com/learn",
              icon: "language",
              icon_color: "#cba6f7",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "#a6e3a1",
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: "#fab387",
            },
            {
              name: "wakatime",
              url: "https://wakatime.com/dashboard",
              icon: "24-hours",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com/volodymyrpivoshenko",
              icon: "brain",
              icon_color: "#a6e3a1",
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: "#fab387",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "blogs",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: "#a6e3a1",
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: "#fab387",
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: "#f38ba8",
            },
            {
              name: "google research",
              url: "https://blog.research.google",
              icon: "hexagon-letter-g",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
    {
      name: "other",
      background_url: "src/img/banners/cbg-12.gif",
      categories: [
        {
          name: "social medias",
          links: [
            {
              name: "instagram",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
              icon_color: "#a6e3a1",
            },
            {
              name: "discord",
              url: "https://discord.com/channels/@me",
              icon: "brand-discord",
              icon_color: "#fab387",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "career",
          links: [
            {
              name: "handshake",
              url: "https://app.joinhandshake.com/explore",
              icon: "briefcase",
              icon_color: "#f38ba8",
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/",
              icon: "brand-linkedin",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "bored",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: "#fab387",
            },
            {
              name: "spotify",
              url: "https://open.spotify.com/",
              icon: "brand-spotify",
              icon_color: "#fab387",
            },
            {
              name: "bored button",
              url: "https://www.boredbutton.com/random",
              icon: "zzz",
              icon_color: "#f38ba8",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
