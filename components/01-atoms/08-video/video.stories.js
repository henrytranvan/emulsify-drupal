import React from 'react';
import { storiesOf } from '@storybook/react';

import video from './video.twig';

const videoData = require('./video.yml');

/**
 * Add storybook definition for Videos.
 */
storiesOf('Atoms/Video', module)
  .add('Wide', () => <div dangerouslySetInnerHTML={{ __html: video(videoData) }} />)
