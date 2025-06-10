import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import screenshot1 from '~/assets/screenshot1.png';
import screenshot2 from '~/assets/screenshot2.png';
import screenshot3 from '~/assets/screenshot3.png';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import coordinatorFinalVideo from '~/assets/coordinator final.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './smart-sparrow.module.css';

const title = 'Kaizen Management System';
const description =
  'A full-stack web platform for tracking employee improvement ideas, built with Django and Python. Features include role-based access, image uploads, cost-benefit tracking, and report generation.';
const roles = [
  'Full-Stack Development',
  'Backend (Django, Python)',
  'Frontend (HTML, CSS, JS)',
  'DevOps & Deployment',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url=""
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${screenshot1} 1280w`}
              width={1280}
              height={800}
              placeholder={backgroundSprPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Kaizen Management System login page"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Project Overview</ProjectSectionHeading>
            <ProjectSectionText>
              The Kaizen Management System is designed to help organizations capture, track, and implement employee improvement ideas efficiently. Built with Django and Python, it supports role-based access for admins, managers, and employees, allowing for secure and streamlined operations.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={`${screenshot2} 1280w`}
              width={1280}
              height={800}
              placeholder={backgroundSprPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Kaizen Management System dashboard"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText>
                <li>Role-based access control for different user types</li>
                <li>Submission and tracking of improvement ideas</li>
                <li>Image/document uploads for supporting evidence</li>
                <li>Cost-benefit analysis and reporting tools</li>
                <li>Admin dashboard for managing users and reviewing ideas</li>
                <li>Automated email notifications and status updates</li>
                <li>Responsive UI for desktop and mobile</li>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={`${screenshot3} 1280w`}
              width={1280}
              height={800}
              placeholder={backgroundSprPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Kaizen Management System employee dashboard"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>Django & Python (Backend)</li>
                  <li>HTML, CSS, JavaScript (Frontend)</li>
                  <li>SQLite/PostgreSQL (Database)</li>
                  <li>Docker for containerization</li>
                  <li>Deployed on Linux server</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
<ThemeProvider theme="dark" data-invert>
  <ProjectSection
    backgroundOverlayOpacity={0.5}
    backgroundElement={
      <Image
        srcSet={`${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`}
        width={1280}
        height={900}
        placeholder={imageSprBackgroundVolcanismPlaceholder}
        alt="A dramatic ocean scene with lava forming a new land mass."
        sizes="100vw"
      />
    }
  >
    <ProjectSectionColumns width="full">
      <ProjectSectionContent width="full">
        <ProjectTextRow width="s">
          <ProjectSectionHeading>Project Outcomes</ProjectSectionHeading>
          <ProjectSectionText>
            A simple and easy to use system that follows a streamlined heirarchy
            of ideas, reviews, and implementations.
          </ProjectSectionText>
        </ProjectTextRow>
      </ProjectSectionContent>
      <div className={styles.video}>
        <video
          src={coordinatorFinalVideo}
          width={1280}
          height={800}
          controls
          autoPlay
          muted
          playsInline
          style={{ width: '100%', borderRadius: '12px', background: '#000' }}
          poster={videoSprMotionPlaceholder}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </ProjectSectionColumns>
  </ProjectSection>
</ThemeProvider>
      </ProjectContainer>
      <Footer />
    </>
  );
};