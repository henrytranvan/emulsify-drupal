import React from 'react';
import { storiesOf } from '@storybook/react';

import link from './link.twig';

const linkData = require('./link.yml');

/**
 * Add storybook definition for Buttons.
 */
storiesOf('Atoms/Links', module)
  .add('Link', () => <div dangerouslySetInnerHTML={{ __html: link(linkData) }} />)

