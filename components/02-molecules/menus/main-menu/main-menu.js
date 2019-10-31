/**
 * @file
 * A JavaScript file containing the main menu functionality (small/large screen)
 *
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth


(function ($, Drupal) {
  Drupal.behaviors.mainMenu = {
    attach: function (context) {

      // Dropdown accessibility toggle.
      const menuItems = context.querySelectorAll('.menu-toggleable > button');
      
      Array.prototype.forEach.call(menuItems, function(el) {
        const btnParent = el.parentNode;
        const parentClasses = btnParent.classList;
        const toggleClass = 'tab-toggle';
        const toggleClassOpen = toggleClass + '--open';

        // Add default toggle class.
        if (!parentClasses.contains(toggleClass)) {
          parentClasses.add(toggleClass);
        }

        // On Click, toggle aria-expanded attribute.
        el.addEventListener("click",  function(event){
          if (parentClasses.contains(toggleClassOpen)) {
            parentClasses.remove(toggleClassOpen);
            btnParent.querySelector('a').setAttribute('aria-expanded', "false");
            btnParent.querySelector('button').setAttribute('aria-expanded', "false");
          } else {
            parentClasses.add(toggleClassOpen);
            btnParent.querySelector('a').setAttribute('aria-expanded', "true");
            btnParent.querySelector('button').setAttribute('aria-expanded', "true");
          }
          event.preventDefault();
        });
      });
    }
  }

})(jQuery, Drupal);
