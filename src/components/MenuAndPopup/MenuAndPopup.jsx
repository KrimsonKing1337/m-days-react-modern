import React from 'react';
import autobind from 'autobind-decorator';

import MenuBtn from 'components/MenuBtn';
import Popup from 'components/Popup';

import routePropsShape from 'assets/helpers/routePropsShape';

export default class MenuAndPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsActive: false
    };
  }

  /**
   *
   * @param [state] {boolean}
   */
  @autobind
  toggleMenuState(state) {
    const { menuIsActive } = this.state;

    if (typeof state === 'boolean') {
      this.setState({
        menuIsActive: state
      });
    } else {
      this.setState({
        menuIsActive: !menuIsActive
      });
    }
  }

  render() {
    const { menuIsActive } = this.state;
    const { routeProps } = this.props;

    return (
      <React.Fragment>
        <MenuBtn isActive={menuIsActive} toggleState={this.toggleMenuState} />
        <Popup routeProps={routeProps} isActive={menuIsActive} toggleState={this.toggleMenuState} />
      </React.Fragment>
    );
  }
}

MenuAndPopup.propTypes = {
  routeProps: routePropsShape.isRequired,
};
