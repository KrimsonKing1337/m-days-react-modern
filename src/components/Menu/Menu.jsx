import React from 'react';
import stylesPopup from 'components/Popup/Popup.scss';
import classNames from 'classnames';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';
import { Link } from 'react-router-dom';
import routePropsShape from 'assets/helpers/routePropsShape';
import BtnLink from 'components/BtnLink';
import LinkExternal from 'components/LinkExternal';
import styles from './Menu.scss';

export default class Menu extends React.Component {
  @autobind
  handleDonateClick() {
    const { toggleStateContent } = this.props;

    toggleStateContent('donate');
  }

  @autobind
  handleLinkClick() {
    const { toggleStateMenu } = this.props;

    toggleStateMenu(false);
  }

  render() {
    const { routeProps } = this.props;
    const { match } = routeProps;

    /**
     *
     * @param modifier {string}
     */
    function menuSocBtnClassNameWithModifier(modifier) {
      return classNames({
        [styles.menuSocBtn]: true,
        [modifier]: true
      });
    }

    return (
      <div className={styles.menu}>
        <div className={stylesPopup.popupLogo}>
          <img src="/src/assets/img/logo.png" alt="" />
        </div>
        <div className={stylesPopup.popupTitle}>
          Monochrome days
        </div>
        <div className={stylesPopup.popupItemsWrapper}>
          <div className={stylesPopup.popupItem}>
            Photo project for bwlovers. Our website
            <br />
            displays the percentage of days passed this year
            <br />
            accompanied with best author&apos;s photos.
          </div>
          <div className={stylesPopup.popupItem}>
            {match.path === '/about' && (
              <Link to="/" onClick={this.handleLinkClick}>
                Go to main
              </Link>
            )}

            {match.path === '/' && (
              <Link to="/about" onClick={this.handleLinkClick}>
                More about us
              </Link>
            )}
          </div>
          <div className={stylesPopup.popupItem}>
            Send us your works to
            <LinkExternal href="mailto:m-days@m-days.ru">
              m-days@m-days.ru
            </LinkExternal>
            <br />
            (please tell your name and link
            <br />
            if you want to be in the list of authors).
            <br />
            And post them in socials with
            <LinkExternal href="https://instagram.com/explore/tags/mdays/" target="_blank">
              #mdays
            </LinkExternal>
          </div>
          <div className={stylesPopup.popupItem}>
            follow us at
          </div>
          <div className={stylesPopup.popupItem}>
            <div className={styles.menuSocBtnsWrapper}>
              <div className={menuSocBtnClassNameWithModifier('inst')}>
                <LinkExternal href="https://instagram.com/m0nochrome_days/" target="_blank">
                  <img src="/src/assets/img/insta.png" alt="" />
                </LinkExternal>
              </div>
              <div className={menuSocBtnClassNameWithModifier('vk')}>
                <LinkExternal href="https://vk.com/mono_days" target="_blank">
                  <img src="/src/assets/img/vk.png" alt="" />
                </LinkExternal>
              </div>
              <div className={menuSocBtnClassNameWithModifier('tw')}>
                <LinkExternal href="https://twitter.com/MonochromeDays" target="_blank">
                  <img src="/src/assets/img/twitter.png" alt="" />
                </LinkExternal>
              </div>
            </div>
          </div>
          <div className={stylesPopup.popupItem}>
            <BtnLink onClick={this.handleDonateClick}>
              Donate
            </BtnLink>
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  routeProps: routePropsShape.isRequired,
  toggleStateContent: propTypes.func.isRequired,
  toggleStateMenu: propTypes.func.isRequired
};
