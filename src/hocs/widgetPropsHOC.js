import React from 'react';
import { connect } from 'react-redux';
import { setWidgetProps } from '../core/actions';
import { getWidgetsProps } from '../core/selectors';

export default connect((state, props) => ({ ...getWidgetsProps(state, props) }), {setWidgetProps});