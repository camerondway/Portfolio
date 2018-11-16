import './modules'
import Parallax from './modules/parallax';
import Wufoo from './modules/wufoo';


var SmoothScroll = require('smooth-scroll');

new Parallax();
new Wufoo();
SmoothScroll('a[href*="#"]');

