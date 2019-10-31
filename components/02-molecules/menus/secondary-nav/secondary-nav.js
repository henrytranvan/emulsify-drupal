/**
 * @file
 * A JavaScript file containing the secondary menu functionality.
 *
 */

(function ($, Drupal) {

  Drupal.behaviors.initPriorityNav = {
    attach: function(context) {
      if ($('.secondary-nav').is(':not(.priority-nav)')) {
        var nav = priorityNav.init({
          mainNavWrapper: '.secondary-nav',
          navDropdownLabel: 'More...',
          navDropdownClassName: 'secondary-nav__dropdown',
          breakPoint: 499
        });
      }

      // Secondary Nav Heading
      const navHeading = $('#secondary-nav-heading a');
      if (navHeading.length) {
        const navHeadingUrl = navHeading.attr('href');
        const navHeadingText = navHeading.text();
        const navFirstLi = $('.secondary-nav > .secondary-nav__menu > .secondary-nav__menu__item:first-child');
        const navNewLi = navFirstLi.clone();
        navNewLi.find('.hover-down__icon').remove();
        navNewLi.find('.menu-container').remove();
        const navNewLink = navNewLi.find('a');
        navNewLink.attr('href', navHeadingUrl).text(navHeadingText);
        if (window.location.pathname === navHeadingUrl) {
          navNewLink.addClass('secondary-nav__menu__link--active');
        }
        else {
          navNewLink.removeClass('secondary-nav__menu__link--active');
        }
        navNewLi.insertBefore(navFirstLi);
      }

      // Determine left/right position of dropdown.
      const $hoverNavItems = $('.secondary-nav > ul > li');
      $hoverNavItems.each(function() {
        const $childMenu = $(this).children('.menu-container').children('.secondary-nav__menu');
        // If it has children.
        if ($childMenu.length) {
          $(this).hover(function() {
            const $childMenuLeft = $childMenu.offset().left;
            // If the document offset of the element is off the page.
            if ($childMenuLeft < 0) {
              $childMenu.addClass('left');
            }
          }, function() {
            $childMenu.removeClass('left');
          });
        }
      });
    }
  };

  Drupal.behaviors.mobileExpandSub = {
    attach: function(context) {
      var subMenuOpen = false;
      $('.hover-down-btn').on('click', function() {
        var subMenu = $(this).next();

        if (!subMenuOpen) {
          subMenu.show();
          subMenuOpen = true;
          $(this).parent().addClass('submenu-open');
        }
        else {
          subMenu.hide();
          subMenuOpen = false;
          $(this).parent().removeClass('submenu-open');
        }
        return false;
      });
    }
  }

})(jQuery, Drupal);
