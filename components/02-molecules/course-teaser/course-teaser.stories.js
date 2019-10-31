import React from 'react';
import { storiesOf } from '@storybook/react';

import courseTeaser from './course-teaser.twig';

const courseTeaserData = require('./course-teaser.yml');
const courseTeaserSingleData = require('./course-teaser~single.yml');

/**
 * Add storybook definition for images.
 */
storiesOf('Molecules/Course Teasers', module)
  .add('Default', () => (
    <div dangerouslySetInnerHTML={{ __html: courseTeaser(courseTeaserData) }} />
  ))
  .add('Single', () => (
    <div dangerouslySetInnerHTML={{ __html: courseTeaser(courseTeaserSingleData) }} />
  ));
