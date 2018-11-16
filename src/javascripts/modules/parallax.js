export default class Parallax {
  constructor() {
    window.addEventListener('scroll', function (e) {
      //will not work on IE < 9
      var scrolled = window.pageYOffset;
      //will not work on ie < 8
      const background = document.querySelector('.logo__parallax');
      background.style.top = -(scrolled * .2) + 'px';
    });
  }
}