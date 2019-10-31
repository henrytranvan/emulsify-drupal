(function () {

  'use strict';

  var el = document.querySelectorAll('.tabs');

  /**
   * handleClick
   * @description Handles click event listeners on each of the links in the
   *   tab navigation. Returns nothing.
   * @param {HTMLElement} link The link to listen for events on
   * @param {Number} index The index of that link
   */
  var handleClick = function (link, index, tabs) {
    link.addEventListener('click', function (e) {
      var activeTabs = tabs.querySelectorAll('.is-active');
      var tabContent = document.getElementById(this.getAttribute('href').substring(1));

      for (var i = 0; i < activeTabs.length; i++) {
        activeTabs[i].classList.remove('is-active');
      }

      this.classList.add('is-active');
      tabContent.parentNode.classList.add('is-active');

      activeIndex = index;

      e.preventDefault();
    });
  };

  /**
   * init
   * @description Initializes the component by removing the no-js class from
   *   the component, and attaching event listeners to each of the nav items.
   *   Returns nothing.
   */
  for (var e = 0; e < el.length; e++) {
    var tabNavigationLinks = el[e].querySelectorAll('.tabs__link');
    var activeIndex = 0;

    el[e].classList.remove('no-js');

    for (var i = 0; i < tabNavigationLinks.length; i++) {
      var link = tabNavigationLinks[i];
      handleClick(link, i, el[e]);
    }
  }

})();
