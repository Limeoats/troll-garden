import RandomDiscordNotification from './background/RandomDiscordNotification.js';
import RandomSlackNotification from './background/RandomSlackNotification.js';
import AllLinksRickRoll from './content/AllLinksRickRoll.js';
import DeadPixel from './content/DeadPixel.js';
import ComicSans from './content/ComicSans.js';
import TextHighlight from './content/TextHighlight.js';
import PageBlur from './content/PageBlur.js';
import SlowYTVids from './content/SlowYTVids.js';
import AcceptOurPies from './content/AcceptOurPies.js';
import RedirectGoogleToBing from './background/RedirectGoogleToBing.js';
import RandomYawn from './background/RandomYawn.js';
import ReplaceWordsWithMisspellings from './content/ReplaceWordsWithMisspellings.js';

export default [
  new RandomDiscordNotification(),
  new RandomSlackNotification(),
  new RedirectGoogleToBing(),
  new AllLinksRickRoll(),
  new PageBlur(),
  new SlowYTVids(),
  new AcceptOurPies(),
  new ComicSans(),
  new TextHighlight(),
  new DeadPixel(),
  new RandomYawn(),
  new ReplaceWordsWithMisspellings(),
];
