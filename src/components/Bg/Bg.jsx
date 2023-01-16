import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import styles from './Bg.scss';

export default class Bg extends React.Component {
  /**
   *
   * @param width {number}
   * @returns {number}
   */
  static getMaxWidth(width) {
    if (width < 640) return 640;
    if (width >= 640 && width < 1280) return 640;
    if (width >= 1280 && width < 1600) return 1280;
    if (width >= 1600 && width < 1920) return 1600;
    if (width >= 1920 && width < 2560) return 1920;
    if (width >= 2560 && width < 3840) return 2560;
    if (width >= 3840 && width < 5210) return 3840;
    if (width >= 5210 && width < 7680) return 5210;
    if (width >= 7680) return 7680;
    return 1920;
  }

  static getMaxSide() {
    return Math.max(window.outerHeight, window.innerHeight, window.outerWidth, window.innerWidth);
  }

  static isRetina() {
    if (window.matchMedia) {
      const mq = window.matchMedia('only screen and (min--moz-device-pixel-ratio: 1.3), '
        + 'only screen and (-o-min-device-pixel-ratio: 2.6/2), '
        + 'only screen and (-webkit-min-device-pixel-ratio: 1.3), '
        + 'only screen  and (min-device-pixel-ratio: 1.3), '
        + 'only screen and (min-resolution: 1.3dppx)');
      return ((mq && mq.matches) || (window.devicePixelRatio > 1));
    }

    return false;
  }

  static getData() {
    const maxSide = Bg.getMaxSide();
    const screenWidth = Bg.getMaxWidth(maxSide);
    const isRetina = Bg.isRetina();

    return axios.get(`${window.location.origin}/bg`, {
      params: {
        screenWidth: isRetina === true ? screenWidth * 2 : screenWidth
      }
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      bg: '',
      bgNext: '',
      changing: false
    };
  }

  async componentDidMount() {
    this.timer = await this.bgInit();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }


  async changeBg() {
    const { bgNext } = this.state;

    this.setState({
      bg: bgNext
    });

    const dataNext = await Bg.getData();

    this.setState({
      bgNext: dataNext.data
    });
  }

  async bgInit() {
    const data = await Bg.getData();
    const dataNext = await Bg.getData();

    this.setState({
      bg: data.data,
      bgNext: dataNext.data
    });

    await this.changeBg();

    return Promise.resolve(setInterval(() => {
      this.setState({
        changing: true
      });

      setTimeout(async () => {
        await this.changeBg();

        this.setState({
          changing: false
        });
      }, 500);
    }, 12000));
  }

  render() {
    const { bg, bgNext, changing } = this.state;

    const bgClassName = classNames({
      [styles.bg]: true,
      [styles.isChanging]: changing === true
    });

    return (
      <React.Fragment>
        <div className={bgClassName} style={{ backgroundImage: `url(img_bg/${bg})` }} />
        <div className={styles.bgNext} style={{ backgroundImage: `url(img_bg/${bgNext})` }} />
      </React.Fragment>
    );
  }
}
