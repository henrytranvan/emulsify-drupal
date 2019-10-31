import React from 'react';
import { storiesOf } from '@storybook/react';

import cta from './cta.twig';

const ctaData = require('./cta.yml');
const ctagrayData = require('./cta~gray.yml');
const ctapurpleData = require('./cta~purple.yml');
const ctasmallgrayData = require('./cta~small-gray.yml');
const ctasmallpurpleData = require('./cta~small-purple.yml');
const ctasmallData = require('./cta~small.yml');

/**
 * Add storybook definition for images.
 */
storiesOf('Molecules/CTAs', module)
  .add('Default', () => (
    <div dangerouslySetInnerHTML={{ __html: cta(ctaData) }} />
  ))
  .add('Gray', () => (
    <div dangerouslySetInnerHTML={{ __html: cta(ctagrayData) }} />
  ))
  .add('Purple', () => (
    <div dangerouslySetInnerHTML={{ __html: cta(ctapurpleData) }} />
  ))
  .add('Small Gray', () => (
    <div dangerouslySetInnerHTML={{ __html: cta(ctasmallgrayData) }} />
  ))
  .add('Small Purple', () => (
    <div dangerouslySetInnerHTML={{ __html: cta(ctasmallpurpleData) }} />
  ))
  .add('Small', () => (
    <div dangerouslySetInnerHTML={{ __html: cta(ctasmallData) }} />
  ));
