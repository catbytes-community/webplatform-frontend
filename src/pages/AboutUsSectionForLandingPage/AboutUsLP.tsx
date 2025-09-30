import catPic from '../../shared/assets/images/catImage.png';
import bookmarkImage from '../../shared/assets/images/bookmarkImage.png';
import humanImage from '../../shared/assets/images/humanImage.png';
import statsImage from '../../shared/assets/images/statsImage.png';
import pawImage from '../../shared/assets/images/pawImage.png';
import membersIcon from '../../shared/assets/images/Group 2771.png';
import PawImageAboutUs from '../../shared/assets/images/PawImageAboutUs.png';
import PawImageAboutUs2 from '../../shared/assets/images/PawImageAboutUs2.png';
import Footer from '../../shared/ui/Footer/Footer';
import styles from './AboutUsLP.module.css';

const AboutUsLP = () => {
  return (
    <div className={styles.appPage}>
      <div className="container mx-auto px-6">
        <div className={styles.sectionGrid}>
          {/* About us block */}
          <div className={`${styles.aboutBlock} ${styles.visuallyHidden}`}>
            <h2 className={styles.aboutTitle}>About us</h2>
            <p className={styles.aboutSubtitle}>CatBytes Community</p>
            <p className={styles.aboutText}>
              CatBytes community was created in June 2024 as a private Discord
              server, where women who want to learn and grow in tech industry
              and tech professions can gather together and support each other in
              a comfortable, safe and non-toxic environment
            </p>
          </div>

          {/* Central block */}
          <div className={styles.centralCard}>
            <img
              src={bookmarkImage}
              alt="Imagine"
              className={styles.bookmarkImg}
            />
            <h3 className={styles.centralTitle}>About us</h3>
            <p className={styles.centralText}>
              Our community is a place where you will find amazing women,
              learning resources, mentors for personal and professional
              development in tech professions. Apply to be a part of CatBytes
            </p>
          </div>

          {/* Small blocks */}
          <div className={styles.sideCol}>
            {/* Cat block */}
            <div className={styles.catWrap}>
              <div className={styles.catImgWrap}>
                <img src={catPic} alt="logo" className={styles.catImg} />
              </div>
              <p className={styles.catQuote}>
                "Comfortable, safe and non-toxic tech space for women"
              </p>
              <div className={styles.catCard}></div>
            </div>

            {/* Mission block */}
            <div className={styles.missionCard}>
              <h4 className={styles.missionTitle}>Our mission</h4>
              <p className={styles.missionText}>
                Increase the number of female professionals in the tech industry
              </p>
            </div>
          </div>
        </div>

        {/* === 3 blocks below === */}
        <div className={styles.threeGrid}>
          {/* members */}
          <div className={styles.membersWrap}>
            <div className={styles.membersWrapInner}>
              <div className={styles.statsCard}>
                <div className={styles.statsInner}>
                  <img
                    src={membersIcon}
                    alt="Small Mentor Icon"
                    className={styles.iconMembers}
                  />

                  {/* mobile-only paw on the right */}
                  <img
                    src={PawImageAboutUs}
                    alt="Paw Icon"
                    className={styles.pawMobileRight}
                  />

                  {/* desktop-only paw in the corner */}
                  <img
                    src={pawImage}
                    alt="Paw Icon"
                    className={styles.pawDesktop}
                  />

                  <div className={styles.statTextBox}>
                    <h3 className={styles.statNumber}>800+</h3>
                    <p className={styles.statLabel}>members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mentors */}
          <div className={styles.mentorsWrap}>
            <div className={styles.mentorsWrapInner}>
              <div className={styles.statsCard}>
                {/* mobile-only paw on the left */}
                <img
                  src={PawImageAboutUs2}
                  alt="Paw Icon"
                  className={styles.pawMobileLeft}
                />

                <div className={styles.statsInner}>
                  <img
                    src={humanImage}
                    alt="Mentor Icon"
                    className={`${styles.iconHuman} ${styles.iconHumanShift}`}
                  />

                  {/* desktop-only paw in the corner */}
                  <img
                    src={pawImage}
                    alt="Paw Icon"
                    className={styles.pawDesktop}
                  />

                  <div className={styles.statTextBox}>
                    <h3 className={styles.statNumber}>20+</h3>
                    <p className={styles.statLabel}>mentors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* areas of study */}
          <div>
            <div className={styles.statsCard}>
              {/* mobile-only paw at lower-right */}
              <img
                src={PawImageAboutUs}
                alt="Paw Icon"
                className={styles.pawMobileRightLower}
              />

              <div className={styles.statsInner}>
                <img
                  src={statsImage}
                  alt="Stats Icon"
                  className={styles.iconStats}
                />

                {/* desktop-only paw in the corner */}
                <img
                  src={pawImage}
                  alt="Paw Icon"
                  className={styles.pawDesktop}
                />

                <div className={styles.statTextBox}>
                  <h3 className={styles.statNumber}>&gt;10</h3>
                  <p className={styles.statLabel}>areas of study</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsLP;
