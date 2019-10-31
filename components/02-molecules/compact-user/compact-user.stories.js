import React from 'react';
import { storiesOf } from '@storybook/react';

import compactUsers from './compact-user.twig';

const compactUserData = require('./compact-user.yml');

/**
 * Add storybook definition for Videos.
 */
storiesOf('Molecules/User', module)
  .add('Compact', () => <div dangerouslySetInnerHTML={{ __html: compactUsers(compactUserData) }} />);
