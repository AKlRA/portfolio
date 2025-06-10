import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import kidemy2 from '~/assets/kidemy2.png';
import kidemy3 from '~/assets/kidemy3.png';
import kidemy1 from '~/assets/kidemy1.png';
import kidemy4 from '~/assets/kidemy4.png';
import kidemy5 from '~/assets/kidemy5.png';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Kidemy – Interactive Learning Platform for Kids';
const description =
  'Kidemy is an online platform designed to make learning fun and engaging for children. It features interactive quizzes, a playful interface, and tools for parents and teachers to track progress.';
const roles = [
  'Frontend Development',
  'UX/UI Design',
  'Backend Integration',
  'User Research',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
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
            srcSet={`${kidemy1} 800w`}
            width={800}
            height={500}
            placeholder={sliceAppPlaceholder}
            alt="Kidemy platform main dashboard"
            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
          />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Making Learning Fun</ProjectSectionHeading>
              <ProjectSectionText>
                Kidemy was created to help children enjoy learning through interactive quizzes and colorful, friendly design. The platform is tailored for young users, with large buttons, playful illustrations, and instant feedback to keep kids motivated.
              </ProjectSectionText>
              <ProjectSectionText>
                Parents and teachers can create custom quizzes, monitor progress, and celebrate achievements, making Kidemy a collaborative tool for home and classroom learning.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${kidemy2} 350w`}
                width={350}
                height={350}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="Kidemy screenshot 3"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                style={{ marginBottom: '1rem' }}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${kidemy3} 350w`}
                width={350}
                height={350}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Kidemy screenshot 2"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>Interactive quizzes with instant feedback</li>
                  <li>Child-friendly, accessible interface</li>
                  <li>Progress tracking for parents and teachers</li>
                  <li>Custom quiz creation and management</li>
                  <li>Rewards and badges to motivate kids</li>
                  <li>Responsive design for tablets and desktops</li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
            srcSet={`${kidemy4} 800w`}
            width={800}
            height={500}
            placeholder={sliceAppPlaceholder}
            alt="Kidemy platform main dashboard"
            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
          />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Kidemy has made online learning more accessible and fun for children. The platform’s interactive approach and progress tracking have helped boost engagement and confidence in young learners, while giving parents and teachers valuable insights into each child’s growth.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
            srcSet={`${kidemy5} 800w`}
            width={800}
            height={500}
            placeholder={sliceAppPlaceholder}
            alt="Kidemy platform main dashboard"
            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
          />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
