import React from 'react';
import { storiesOf } from '@storybook/react';

import card from './01-card.twig';

const cardData = require('./card.yml');
const cardEyebrowData = require('./card~eyebrow.yml');

/**
 * Add storybook definition for images.
 */
storiesOf('Molecules/Cards', module)
  .add('Default', () => (
    <div dangerouslySetInnerHTML={{ __html: card(cardData) }} />
  ))
  .add('Eyebrow', () => (
    <div dangerouslySetInnerHTML={{ __html: card(cardEyebrowData) }} />
  ));
