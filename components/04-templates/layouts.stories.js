import React from 'react';

import fullWidthTwig from './full-width.twig';
import withSidebarTwig from './with-sidebar.twig';

import socialMenu from '../02-molecules/menus/social/social-menu.yml';
import footerMenu from '../02-molecules/menus/inline/inline-menu.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Templates/Layouts' };

export const fullWidth = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: fullWidthTwig({ ...socialMenu, ...footerMenu }),
    }}
  />
);
export const withSidebar = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: withSidebarTwig({ ...socialMenu, ...footerMenu }),
    }}
  />
);
