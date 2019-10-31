import React from 'react';
import { storiesOf } from '@storybook/react';

import downloads from './downloads.twig';

const downloadsData = require('./downloads.yml');

/**
 * Add storybook definition for images.
 */
storiesOf('Molecules/Downloads', module)
  .add('Default', () => (
    <div dangerouslySetInnerHTML={{ __html: downloads(downloadsData) }} />
  ));
