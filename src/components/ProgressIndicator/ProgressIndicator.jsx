import React from 'react';
import twoDigitsAlways from 'assets/helpers/twoDigitsAlways';
import moment from 'moment';
import styles from './ProgressIndicator.scss';

moment.locale('en-bgInit');

export default class ProgressIndicator extends React.PureComponent {
  static getValues() {
    const date = moment();
    const day = parseInt(date.format('DD'), 10);
    const month = parseInt(date.format('MM'), 10);
    const monthText = date.format('MMMM');
    const year = parseInt(date.format('YYYY'), 10);
    const hours = parseInt(date.format('HH'), 10);
    const minutes = parseInt(date.format('mm'), 10);
    const seconds = parseInt(date.format('ss'), 10);
    const milliseconds = parseInt(date.format('SSS'), 10);
    const yearStart = moment([year, 0, 1]);
    const daysInYear = moment([year, 11, 31]).diff(yearStart, 'days') + 1;
    const dayCount = date.diff(yearStart, 'days') + 1;
    const perMilliSec = dayCount * 24 * 60 * 60 * 1000
      + hours * 60 * 60 * 1000
      + minutes * 60 * 1000
      + seconds * 1000 + milliseconds;
    const full = 365 * 24 * 60 * 60 * 1000;
    const progress = perMilliSec / full * 100;
    const progressFull = progress.toFixed(7);
    const progressShort = progressFull.toString().slice(0, (progressFull.indexOf('.') + 3));

    return {
      date,
      day,
      month,
      year,
      hours,
      minutes,
      seconds,
      milliseconds,
      dayCount,
      daysInYear,
      monthText,
      progress,
      progressFull,
      progressShort
    };
  }

  constructor() {
    super();

    this.state = {
      values: ProgressIndicator.getValues()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        values: ProgressIndicator.getValues()
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { values } = this.state;

    return (
      <div className={styles.progressIndicator}>
        <div className={styles.progressIndicatorShadow}>
          <div className={styles.progressIndicatorWrapper}>
            <div className={styles.progressIndicatorLeft}>
              <div className={styles.progressIndicatorYear}>
                <span>
                  {values.year}
                </span>
              </div>
              <div className={styles.progressIndicatorMonth}>
                <span>
                  {`${values.day}
                    ${values.monthText}`}
                </span>
              </div>
            </div>
            <div className={styles.progressIndicatorCenter}>
              <div className={styles.progressIndicatorTime}>
                <span className={styles.progressIndicatorTimeHours}>
                  {twoDigitsAlways(values.hours)}
                  :
                </span>
                <span className={styles.progressIndicatorTimeMinutes}>
                  {twoDigitsAlways(values.minutes)}
                </span>
                <span className={styles.progressIndicatorTimeSeconds}>
                  {twoDigitsAlways(values.seconds)}
                </span>
              </div>
              <div className={styles.progressIndicatorProgressBar}>
                <div className={styles.progressIndicatorProgressBarBg} />
                <div
                  className={styles.progressIndicatorProgressBarWalking}
                  style={{ width: `${values.progressFull}%` }} />
              </div>
              <div className={styles.progressIndicatorDay}>
                {`${values.dayCount} of ${values.daysInYear} `}
                monochrome&nbsp;days
              </div>
            </div>
            <div className={styles.progressIndicatorRight}>
              <div className={styles.progressIndicatorPercent}>
                <span>
                  {values.progressShort}
                  %
                </span>
              </div>
              <div className={styles.progressIndicatorPercentFull}>
                <span>
                  {values.progressFull}
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
