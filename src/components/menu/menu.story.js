import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs/react';
import { items } from './menu.json';
import 'antd/dist/antd.min.css';

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);

stories
  .add('Menu', () => {

    return (
          <div>"dsdcsdcsdc"</div>
    );
  });