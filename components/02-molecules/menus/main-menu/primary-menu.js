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
  Drupal.behaviors.primaryMenu = {
    attach: function (context) {
      var toggle_expand = context.getElementById('toggle-expand');
      var menu = context.getElementById('main-nav');
      var expand_menu = menu.getElementsByClassName('expand-sub');
      var close_expand = menu.getElementsByClassName('main-menu__sub-wrap-btn');

      // Mobile Menu Show/Hide.
      toggle_expand.addEventListener('click', function (e) {
        document.body.classList.toggle("menu-open");
        toggle_expand.classList.toggle('toggle-expand--open');
        menu.classList.toggle('main-nav--open');
      });

      // Expose mobile sub menus on click.
      for (var i = 0; i < expand_menu.length; i++) {
        expand_menu[i].addEventListener('click', function (e) {
          var menu_item = e.currentTarget;
          var sub_menu = menu_item.nextElementSibling;
          var parentLi = menu_item.parentNode;
          var parentUl = parentLi.parentNode;

          menu_item.classList.toggle('expand-sub--open');
          sub_menu.classList.toggle('main-menu__sub-wrap--open');
          parentLi.classList.toggle('main-menu__item--expanded');
          parentUl.classList.toggle('main-menu--expanded');
        });
      }

      // Close mobile sub menu on click.
      for (var i = 0; i < close_expand.length; i++) {
        close_expand[i].addEventListener('click', function (e) {
          var sub_menu = e.currentTarget.parentNode;
          var menu_item = sub_menu.previousElementSibling;
          var parentLi = menu_item.parentNode;
          var parentUl = parentLi.parentNode;

          menu_item.classList.toggle('expand-sub--open');
          sub_menu.classList.toggle('main-menu__sub-wrap--open');
          parentLi.classList.toggle('main-menu__item--expanded');
          parentUl.classList.toggle('main-menu--expanded');
        });
      }

      // All NYU link.
      var allNYU = context.getElementById('all-nyu-link');

      allNYU.addEventListener('click', function () {
        var allNYUtoggle = context.getElementById('GN-toggle-global-nav');
        allNYUtoggle.click();
      });
    }
  }

  Drupal.behaviors.toggleSearch = {
    attach: function(context) {
      var searchOpen = false;

      $('.header__search').click(function() {
        $('.search-region__overlay').fadeIn('fast');
        $('body').addClass('has-overlay');

        // Focus input
        $('.search-region__overlay input[type=text]').focus();

        searchOpen = true;
        return false;
      });

      $('.search-region__overlay input[type=submit]').on('blur', function() {
        $('.search-region__overlay input[type=text]').focus();
      });

      $('.search-region__close').click(function() {
        closeSearch();
      });

      // Allow for ESC key to close overlay
      $(document).keyup(function(e) {
        if (searchOpen) {
          if (e.keyCode == 27) {
            closeSearch();
          }
        }
      });

      var closeSearch = function() {
        $('.search-region__overlay').fadeOut('fast');
        $('body').removeClass('has-overlay');
    
        searchOpen = false;
        return false;
      }
    }
  }

})(jQuery, Drupal);
