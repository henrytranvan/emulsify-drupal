import React from 'react';
import { storiesOf } from '@storybook/react';

import hero from './hero.twig';

const heroTwig = (
  hero({
    hero__img_src: 'https://placeimg.com/1280/400/nature',
    hero__img_alt: 'This is the hero image\'s alt text',
    hero__image_output_image_tag: true,
    hero__title: 'This is the hero title',
    hero__subtitle: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus',
  })
);

/**
 * Add storybook definition for Cards.
 */
storiesOf('Molecules/Hero', module)
  .add('default', () => <div dangerouslySetInnerHTML={{ __html: heroTwig }} />);
