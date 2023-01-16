import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';
import styles from './MenuBtn.scss';

export default class MenuBtn extends React.Component {
  @autobind
  handleClick() {
    const { toggleState } = this.props;

    toggleState();
  }

  render() {
    const { isActive } = this.props;

    const menuBtnClassName = classNames({
      [styles.menuBtn]: true,
      [styles.isActive]: isActive === true
    });

    return (
      <button
        type="button"
        className={menuBtnClassName}
        onClick={this.handleClick}>
        <span className={styles.menuBtnHelper} />
      </button>
    );
  }
}

MenuBtn.propTypes = {
  isActive: propTypes.bool,
  toggleState: propTypes.func.isRequired
};

MenuBtn.defaultProps = {
  isActive: false
};
