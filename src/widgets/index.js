import React from 'react';
import Card from './Card';
import TableStandart from './TableStandart';
import {widgetPropsHOC, dataProvide, clickSelect} from '../hocs'
import { flowRight } from 'lodash';

const widgets = {
  Card: flowRight(widgetPropsHOC)(Card),
  TableStandart: flowRight(widgetPropsHOC, dataProvide, clickSelect)(TableStandart),
};



export default widgets;