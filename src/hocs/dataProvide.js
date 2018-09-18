import React, { PureComponent, Fragment } from 'react';

import { axiosR } from '../core/config';

export default (WrappedComponent) => {

  class ReturnedComponent extends PureComponent {
    componentDidMount = async() => {
      const {dataUrl, data} = this.props;
      if (dataUrl && !data) await this.fetchData(dataUrl);

    };

    fetchData = async(dataUrl) => {
      const { setWidgetProps, name } = this.props;
      await setWidgetProps(name, { loading: true });
      const response = await axiosR({ url: dataUrl });
      await setWidgetProps(name, { data: response.data });
      await setWidgetProps(name, { loading: false });
    };

    componentWillReceiveProps = async(nextProps) => {
      if(nextProps.dataUrl !== this.props.dataUrl){
        await this.fetchData(nextProps.dataUrl);
      }
    };


    render() {

      return <WrappedComponent {...this.props} />
    }
  };
  return ReturnedComponent;
}