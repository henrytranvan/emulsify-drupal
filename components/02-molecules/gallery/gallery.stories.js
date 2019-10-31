import React from 'react';
import { storiesOf } from '@storybook/react';
import { useEffect } from '@storybook/client-api';

import gallery from './gallery.twig';

import galleryJS from './gallery';

const galleryData = require('./gallery.yml');

/**
 * Add storybook definition for images.
 */
storiesOf('Molecules/Gallery', module)
  .add('Default', () => {
    useEffect(() => {
      galleryJS();
    }, []);
    return <div dangerouslySetInnerHTML={{ __html: gallery(galleryData) }} />;
  });
