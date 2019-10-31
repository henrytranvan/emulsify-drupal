import React from 'react';
import { storiesOf } from '@storybook/react';

import button from './01-button.twig';

const buttonData = require('./button.yml');
const buttonBigData = require('./01-button~big.yml');
const buttonSmallData = require('./02-button~small.yml');
const buttonGrayData = require('./03-button~gray.yml');

/**
 * Add storybook definition for Buttons.
 */
storiesOf('Atoms/Buttons', module)
  .add('Default', () => <div dangerouslySetInnerHTML={{ __html: button(buttonData) }} />)
  .add('Big Button', () => <div dangerouslySetInnerHTML={{ __html: button(buttonBigData) }} />)
  .add('Small Button', () => <div dangerouslySetInnerHTML={{ __html: button(buttonSmallData) }} />)
  .add('Gray Button', () => <div dangerouslySetInnerHTML={{ __html: button(buttonGrayData) }} />);
