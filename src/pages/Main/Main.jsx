import React from 'react';
import ProgressIndicator from 'components/ProgressIndicator';
import MenuAndPopup from 'components/MenuAndPopup';
import Bg from 'components/Bg';

export default class Main extends React.Component {
  constructor(routeProps) {
    super(routeProps);

    this.routeProps = routeProps;
  }

  render() {
    const { routeProps } = this;

    return (
      <React.Fragment>
        <MenuAndPopup routeProps={routeProps} />
        <ProgressIndicator />
        <Bg />
      </React.Fragment>
    );
  }
}
