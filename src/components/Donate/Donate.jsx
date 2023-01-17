import React from 'react';
import propTypes from 'prop-types';
import autobind from 'autobind-decorator';
import BtnLink from 'components/BtnLink';
import LinkExternal from 'components/LinkExternal';
import classNames from 'classnames';
import stylesPopup from 'components/Popup/Popup.scss';
import payPalKey from './payPalKey';
import styles from './Donate.scss';

export default class Donate extends React.Component {
  constructor() {
    super();

    this.state = {
      instructionIsActive: false,
    };
  }

  /**
   *
   * @param [state] {boolean}
   */
  toggleInstruction(state) {
    const { instructionIsActive } = this.state;

    if (typeof state === 'boolean') {
      this.setState({
        instructionIsActive: state,
      });
    } else {
      this.setState({
        instructionIsActive: !instructionIsActive,
      });
    }
  }

  @autobind
  handleQiwiClick() {
    this.toggleInstruction(true);
  }

  @autobind
  handleCloseQiwiClick(e) {
    e.stopPropagation();

    this.toggleInstruction(false);
  }

  @autobind
  handleGoBackClick() {
    const { toggleStateContent } = this.props;

    toggleStateContent('menu');
  }

  render() {
    const { instructionIsActive } = this.state;

    /**
     * @param modifier {string}
     */
    function payItemBtnClassNameWithModifier(modifier) {
      return classNames({
        [styles.payItemBtn]: true,
        [modifier]: true,
      });
    }

    const qiwiClassName = classNames({
      [styles.payItem]: true,
      [styles.instructionIsActive]: instructionIsActive === true,
    });

    return (
      <div className={styles.donate}>
        <div className={stylesPopup.popupLogo}>
          <img src="/src/assets/img/logo.png" alt="" />
        </div>
        <div className={stylesPopup.popupTitle}>
          Monochrome days
        </div>
        <div className={stylesPopup.popupItem}>
          You can help with development of the project.
          <br />
          Send us a bit of money on coffee and cookies.
          <br />
          Thanks!
        </div>
        <div className={stylesPopup.popupItem}>
          <div className={styles.payItemsWrapper}>
            <div className={styles.payItem}>
              <div className={payItemBtnClassNameWithModifier(styles.paypal)}>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="encrypted"
                    value={payPalKey}
                  />
                  <input
                    type="image"
                    src="/src/assets/img/paypal.png"
                    alt=""
                    name="submit"
                  />
                  <img
                    src="https://www.paypalobjects.com/ru_RU/i/scr/pixel.gif"
                    alt=""
                    width="1"
                    height="1"
                  />
                </form>
              </div>
            </div>
            <button
              type="button"
              className={qiwiClassName}
              onClick={this.handleQiwiClick}
            >
              {!instructionIsActive && (
                <div className={payItemBtnClassNameWithModifier(styles.qiwi)} />
              )}

              {instructionIsActive && (
                <div className={styles.payItemInstruction}>
                  Go to&nbsp;
                  <LinkExternal href="https://visa.qiwi.ru/transfer/form.action" target="_blank">
                    link.
                  </LinkExternal>
                  <br />
                  Input this number:
                  <br />
                  +7 965 422 59 82
                  {/* eslint-disable */}
                  <div
                    className={styles.payItemInstructionClose}
                    title="Close"
                    onClick={this.handleCloseQiwiClick}>
                    x
                  </div>
                  {/* eslint-enable */}
                </div>
              )}
            </button>
            <div className={styles.payItem}>
              <div className={payItemBtnClassNameWithModifier(styles.webmoney)}>
                <form action="https://merchant.webmoney.ru/lmi/payment.asp" method="POST" target="_blank">
                  <input type="hidden" name="LMI_PAYMENT_AMOUNT" value="5.00" />
                  <input type="hidden" name="LMI_PAYMENT_DESC_BASE64" value="" />
                  <input type="hidden" name="LMI_PAYEE_PURSE" value="Z361243128492" />
                  <input type="submit" value="" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={stylesPopup.popupGoBack}>
          <BtnLink onClick={this.handleGoBackClick}>
            Go back
          </BtnLink>
        </div>
      </div>
    );
  }
}

Donate.propTypes = {
  toggleStateContent: propTypes.func.isRequired,
};
