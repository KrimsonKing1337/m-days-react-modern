import React from 'react';
import { v4 } from 'uuid';
// import MenuAndPopup from 'components/MenuAndPopup';
import LinkExternal from 'components/LinkExternal';
import members from './members';
import styles from './About.scss';

export default class About extends React.PureComponent {
  constructor(routeProps) {
    super(routeProps);

    this.routeProps = routeProps;
  }

  render() {
    const { routeProps } = this;

    return (
      <React.Fragment>
        {/*<MenuAndPopup routeProps={routeProps} />*/}
        <div className={styles.about}>
          <div className={styles.aboutTitle}>
            Project Owners
          </div>
          <div className={styles.aboutMembersWrapper}>
            {/* Олег Шилов */}
            <div className={styles.aboutMember}>
              <LinkExternal href="https://vk.com/id15927588" target="_blank">
                <img className={styles.aboutMemberImg} src="/src/assets/img/about/shilov.jpg" alt="" />
              </LinkExternal>
              <div className={styles.aboutMemberName}>
                <LinkExternal href="https://vk.com/id15927588" target="_blank">
                  Oleg
                  <br />
                  Shilov
                </LinkExternal>
              </div>
            </div>
            {/* Гордей Переходов */}
            <div className={styles.aboutMember}>
              <LinkExternal href="https://vk.com/likilo" target="_blank">
                <img className={styles.aboutMemberImg} src="/src/assets/img/about/perekhodov.jpg" alt="" />
              </LinkExternal>
              <div className={styles.aboutMemberName}>
                <LinkExternal href="https://vk.com/likilo" target="_blank">
                  Gordey
                  <br />
                  Perekhodov
                </LinkExternal>
              </div>
            </div>
          </div>
          <div className={styles.aboutTitle}>
            Project Members
          </div>
          <div className={styles.aboutMembersWrapper}>
            {members.map(memberCur => (
              <div key={v4()} className={styles.aboutMember}>
                <LinkExternal href={memberCur.href} target="_blank">
                  <img className={styles.aboutMemberImg} src={memberCur.img} alt="" />
                </LinkExternal>
                <div className={styles.aboutMemberName}>
                  <LinkExternal href={memberCur.href} target="_blank">
                    <span>
                      {memberCur.name}
                    </span>
                    <br />
                    <span>
                      {memberCur.surname}
                    </span>
                  </LinkExternal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
