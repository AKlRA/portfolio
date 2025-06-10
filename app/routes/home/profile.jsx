import myProfileImg from 'C:/Users/Bhuvan/portfolio/app/assets/my-photo.png';
import myProfileImgLarge from 'C:/Users/Bhuvan/portfolio/app/assets/my-photo-large.png';
import myProfileImgPlaceholder from 'C:/Users/Bhuvan/portfolio/app/assets/my-photo-placeholder.png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Bhuvan, an aspiring software engineer passionate about building practical solutions with code. I enjoy working across the stack, from cloud automation and DevOps to full-stack web development. I’m always eager to learn new technologies and take on challenging projects that help me grow as a developer.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      When I’m not coding, you’ll find me exploring new tech trends, tinkering with automation, or playing video games. I love collaborating with others and am always open to interesting conversations or opportunities. Curious about my workflow? Check out my <Link href="/uses">uses page</Link>.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
              <Image
                reveal
                delay={100}
                placeholder={myProfileImgPlaceholder}
                srcSet={`${myProfileImg} 480w, ${myProfileImgLarge} 960w`}
                width={960}
                height={1280}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="A photo of Bhuvan M H"
              />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
