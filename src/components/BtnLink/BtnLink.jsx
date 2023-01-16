import React from 'react';
import autobind from 'autobind-decorator';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from './BtnLink.scss';

export default class BtnLink extends React.Component {
  @autobind
  handleClick() {
    const { onClick } = this.props;

    onClick();
  }

  render() {
    const { children, className, title } = this.props;

    const buttonClassName = classNames({
      [styles.btnLink]: true,
      [className]: true
    });

    return (
      <button type="button" className={buttonClassName} title={title} onClick={this.handleClick}>
        {children}
      </button>
    );
  }
}

BtnLink.propTypes = {
  className: propTypes.string,
  title: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.string,
    propTypes.element
  ]).isRequired,
  onClick: propTypes.func,
};

BtnLink.defaultProps = {
  onClick() {}
};
