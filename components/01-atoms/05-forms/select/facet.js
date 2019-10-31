Drupal.behaviors.facet = {
  attach: function (context) {

    const facet = context.querySelectorAll('.facets-dropdown');

    for (var i = 0; i < facet.length; i++) {
      const defaultValue = facet[i].firstChild.text;
      const selectedValue = facet[i].options[facet[i].selectedIndex].text;
      if (defaultValue === selectedValue) {
        facet[i].parentNode.classList.add('facets-widget-dropdown--default');
      }
    }

    // Select 2 specific
    const selectsWithPlaceHolder = context.querySelectorAll('.select2-selection__placeholder');

    for (var i = 0; i < selectsWithPlaceHolder.length; i++) {
      selectsWithPlaceHolder[i].parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('form-item__dropdown--default');
    }
  }
};
