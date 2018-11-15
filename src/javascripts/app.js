import './modules'
import Nav from './modules/nav';
import Wufoo from './modules/wufoo';


var SmoothScroll = require('smooth-scroll');

new Nav();
new Wufoo();
SmoothScroll('a[href*="#"]');

