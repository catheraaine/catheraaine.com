const JSCONF_EMBED = () => (
  <iframe src="https://www.youtube-nocookie.com/embed/LqOcx-CtN0w" title="Catherine at JSConf Iceland in Youtube Video Player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy"></iframe>
  );

const FULLSTACK_EMBED = () => (
  <iframe src="https://www.youtube-nocookie.com/embed/RtOhCtvHEsg" title="Catherine at Full stack NYC in YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy"></iframe>
);

const UNCONF_EMBED = () => (
  <iframe src="https://www.youtube-nocookie.com/embed/PKU9edIojSQ?si=5PjXM0phGelLZ7c0" title="Catherine at Unconference in YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy"></iframe>
);

export const FEATURED_WORKS_DATA = [
  {
    id: 'feature6',
    publication: "UnConference",
    articleTitle: "Creating a Technical Foundation",
    youtubeEmbed: UNCONF_EMBED,
    description: "I gave this talk at 2024's Unconference: Embracing the Power of the MVP. When you plan an MVP, you know you need it to be stable and secure in the near term, but what you build today should be flexible enough to enable future growth. I talk about how (and make time travel jokes).",
    linkURL: "https://www.youtube.com/watch?v=PKU9edIojSQ",
    linkLabel: "Watch Creating a Technical Foundation for Everyone on Youtube",
    linkText: "Watch the video on Sparkbox's Youtube"
  },
  {
    id: 'feature5',
    publication: "The Sparkbox Foundry",
    articleTitle: "What Even Are Dragging Movements?",
    description: "Understanding and implementing the Web Accessibility Content Guidelines (WCAG) can be difficult for even trained experts. Catherine helps us with WCAG 2.2′s newest guideline by explaining the requirements and providing examples of how to improve our user interfaces.",
    imageSource: "/images/what-a-drag.png",
    linkURL: "https://sparkbox.com/foundry/understanding_implementing_wcag_dragging_movements_accessibility",
    linkLabel: "Read What Even Are Dragging Movements on the Sparkbox Foundry",
    linkText: "Figure out dragging movements on the Sparkbox Foundry"
  },
  {
    id: 'feature1',
    publication: "JSConf Iceland 2018",
    articleTitle: "Github Pull Requests for Everyone",
    youtubeEmbed: JSCONF_EMBED,
    description: "I had the great honor of being selected for JSConf Iceland in 2018. In this talk, I discuss several tips for creating pull requests that are easily reviewable for all people who build the web.",
    linkURL: "https://www.youtube.com/watch?v=LqOcx-CtN0w",
    linkLabel: "Watch Github Pull Requests for Everyone on Youtube",
    linkText: "Watch the video on JSConf's Youtube"
  },
  {
    id: 'feature3',
    publication: "Shopify Partners Blog",
    articleTitle: "4 Easy Ways to Deploy Your Website or App",
    description: "In this article, we will cover four happy deploy paths to getting your website online, and the benefits and costs of each plan. I'll also discuss one potential integration plan for your Shopify app environment. No matter your skill level or experience, at least one of these paths should work for you.",
    imageSource: "/images/shopify_logo_blue.png",
    linkURL: "https://www.shopify.com/partners/blog/deploy-website",
    linkLabel: "Read 4 Easy Ways to Deploy Your Website or App on the Shopify blog",
    linkText: "Read the full article on the Shopify Partner Blog"
  },
  {
    id: 'feature2',
    publication: "FullStack NYC",
    articleTitle: "Keeping Subscribers Engaged in Your Design System",
    youtubeEmbed: FULLSTACK_EMBED,
    description: "At FullStack NYC, I presented a talk describing some of my experiences working for large Design System teams. This is one of my favorite talks, both due to its frame story and how the content remains relevant in the long term.",
    linkURL: "https://sparkbox.com/foundry/making_design_systems_engaging_session_from_fullstack_NYC",
    linkLabel: "Read about Keeping Subscribers Engaged in Your Design System and watch the video on the Sparkbox Foundry",
    linkText: "Read the presentation writeup on the Sparkbox Foundry"
  },
  {
    id: 'feature4',
    publication: "The Sparkbox Foundry",
    articleTitle: "A Lukewarm Approval of CSS-in-JS",
    description: "CSS-in-JS can be a worthwhile tool for many projects, even from the perspective of someone who is a die-hard SCSS user. Let's go through an overview of the CSS-in-JS and the pros and cons of using it instead of Sass.",
    imageSource: "/images/css-in-js.png",
    linkURL: "https://sparkbox.com/foundry/css_in_js_overview_css_in_js_pros_and_cons",
    linkLabel: "Read about CSS-in-JS and the Pros and Cons on the Sparkbox Foundry",
    linkText: "Read about CSS-in-JS on the Sparkbox Foundry"
  },
];
