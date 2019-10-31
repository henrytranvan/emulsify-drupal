import React from 'react';
import { storiesOf } from '@storybook/react';

import image from './responsive-image.twig';
import figure from './figure.twig';

const imageData = require('./image~logo.yml');
const figureData = require('./02-figure.yml');

/**
 * Add storybook definition for images.
 */
storiesOf('Atoms/Images', module)
  .add('Images', () => (
    <div dangerouslySetInnerHTML={{ __html: image(imageData) }} />
  ))
  .add('Figure', () => (
    <div dangerouslySetInnerHTML={{ __html: figure(figureData) }} />
  ));
