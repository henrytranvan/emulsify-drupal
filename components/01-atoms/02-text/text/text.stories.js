import React from 'react';
import { storiesOf } from '@storybook/react';

import paragraph from './03-inline-elements.twig';

import blockquote from './_blockquote.twig';

import pre from './05-preformatted-text.twig';

const blockquoteData = require('./blockquote.yml');

/**
 * Add storybook definition for Text.
 */
storiesOf('Atoms/Text', module)
  .add('Various', () => (
    <div dangerouslySetInnerHTML={{ __html: paragraph({}) }} />
  ))
  .add('Blockquote', () => (
    <div dangerouslySetInnerHTML={{ __html: blockquote(blockquoteData) }} />
  ))
  .add('Preformatted', () => (
    <div dangerouslySetInnerHTML={{ __html: pre({}) }} />
  ));
