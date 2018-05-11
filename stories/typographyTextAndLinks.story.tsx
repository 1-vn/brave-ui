/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * `Typography, text and links` components contain what the user sees on
 * the screen and is related to textual information. They are static and
 * styled elements used to help the information display.
 *
 * @see https://github.com/brave/brave-ui/blob/master/docs/spec.md#typography-text-and-links
 *
 * In this file:
 * ---
 * TitleHeading
 * SectionHeading
 * FeatureHeading
 * Heading
 * Paragraph
 * Anchor
 * Separator
 */

import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { BetterVisualizer } from './storyUtil'

// Components
import * as React from 'react'
import {
  TitleHeading,
  SectionHeading,
  FeatureHeading,
  Heading
} from '../components/headings'
import Paragraph from '../components/paragraph'
import Anchor from '../components/anchor'
import Separator from '../components/separator'

addDecorator(withKnobs)

// Globally adapt the story visualizer for this story
addDecorator(BetterVisualizer)

storiesOf('Typography, Text and Links', module)
  .add('TitleHeading', () => {
    return (
      <TitleHeading
        text={text('Title', 'Some Feature')}
        label={text('Optional Label', 'Beta')}
      />
    )
  })
  .add('SectionHeading', () => {
    return (
      <SectionHeading
        text={text('Section Title', 'Some Section Title')}
      />
    )
  })
  .add('FeatureHeading', () => {
    return (
      <FeatureHeading
        text={text('Feature Title', 'Some Feature Title')}
      />
    )
  })
  .add('Heading', () => {
    const levelOptions = {
      1: 'h1', 2: 'h2', 3: 'h3', /* TBD:  4: 'h4', 5: 'h5', 6: 'h6' */
    }
    const levelDefaultValue = 1
    const levelValue = select('Heading Level', levelOptions, levelDefaultValue)
    const weightOptions = { 'bold': 'Bold', 'normal': 'Normal', 'thin': 'Thin' }
    const weightDefaultValue = 'normal'
    const weightValue = select('Weight', weightOptions, weightDefaultValue)
    return (
      <Heading
        level={levelValue}
        text={text('Heading text', 'Some text')}
        color={text('Color', '#000000')}
        weight={weightValue}
      />
    )
  })
  .add('Paragraph', () => {
    const weightOptions = { 'bold': 'Bold', 'normal': 'Normal', 'thin': 'Thin' }
    const weightDefaultValue = 'normal'
    const weightValue = select('Weight', weightOptions, weightDefaultValue)
    return (
      <Paragraph
        text={text('Text', 'Some text here')}
        size={text('Size', '16px')}
        color={text('Color', '#000000')}
        weight={weightValue}
        italic={boolean('Italic?', false)}
      />
    )
  })
  .add('Anchor', () => {
    return (
      <Anchor
        href='#'
        noStyle={boolean('Unstyled?', false)}
        text={text('Link Text', 'Some text')}
      />
    )
  })
  .add('Separator', () => {
    return (
      <Separator noMargin={boolean('no margin?', false)} />
    )
  })