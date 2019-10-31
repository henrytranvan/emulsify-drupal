Drupal.behaviors.accordion = {
  attach: function (context) {

    // Set 'document' to 'context' if Drupal.
    var accordionTerm = context.querySelectorAll('.accordion-term');
    var accordionDef = context.querySelectorAll('.accordion-def');

    // If javascript, hide accordion definition on load.
    function jsCheck() {
      for (var i = 0; i < accordionDef.length; i++) {
        accordionDef[i].classList.add('closed');
      }
    }

    jsCheck();

    // Accordion Toggle
    // Mobile Click Menu Transition.
    for (var i = 0; i < accordionTerm.length; i++) {
      accordionTerm[i].addEventListener('click', function (e) {
        var className = 'is-active';
        // Add is-active class.
        this.classList.toggle(className);
        this.nextElementSibling.classList.toggle('closed');
        e.preventDefault();
      });
    }

  }
};
