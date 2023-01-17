import React from 'react';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';

import Menu from 'components/Menu';
import Donate from 'components/Donate';
import classNames from 'classnames';
import routePropsShape from 'assets/helpers/routePropsShape';
import styles from './Popup.scss';


export default class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeContent: 'menu',
      isInit: true,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        isInit: false,
      });
    }, 50); // prevent transition of element when it's got to DOM
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  /**
   *
   * @param state {boolean}
   */
  @autobind
  toggleStateContent(state) {
    if (typeof state === 'string') {
      this.setState({
        activeContent: state,
      });
    }
  }

  render() {
    const { isActive, toggleState, routeProps } = this.props;
    const { activeContent, isInit } = this.state;

    const popupWrapperClassName = classNames({
      [styles.popupWrapper]: true,
      [styles.isActive]: isActive === true,
      [styles.isInit]: isInit === true,
    });

    return (
      <div className={popupWrapperClassName}>
        <div className={styles.popup}>
          {activeContent === 'menu' && (
            <Menu
              routeProps={routeProps}
              toggleStateContent={this.toggleStateContent}
              toggleStateMenu={toggleState}
            />
          )}

          {activeContent === 'donate' && (
            <Donate toggleStateContent={this.toggleStateContent} />
          )}
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  routeProps: routePropsShape.isRequired,
  isActive: propTypes.bool,
  toggleState: propTypes.func.isRequired,
};

Popup.defaultProps = {
  isActive: false,
};
