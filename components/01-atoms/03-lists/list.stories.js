import React from 'react';
import { storiesOf } from '@storybook/react';

import dl from './02-dl.twig';

import ul from './00-ul.twig';

import ol from './01-ol.twig';

const dlData = require('./02-dl.yml');
const ulData = require('./00-ul.yml');
const olData = require('./01-ol.yml');

/**
 * Add storybook definition for Lists.
 */
storiesOf('Atoms/Lists', module)
  .add('Definition List', () => (
    <div dangerouslySetInnerHTML={{ __html: dl(dlData) }} />
  ))
  .add('Unordered List', () => (
    <div dangerouslySetInnerHTML={{ __html: ul(ulData) }} />
  ))
  .add('Ordered List', () => (
    <div dangerouslySetInnerHTML={{ __html: ol(olData) }} />
  ));
