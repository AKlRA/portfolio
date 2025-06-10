import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of tools, apps, hardware, and more that I use on a daily basis for development, automation, and learning."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link> is my primary code editor, with extensions for Python, Docker, and cloud development.
                  </ListItem>
                  <ListItem>
                    <Link href="https://ubuntu.com/">Ubuntu</Link> and <Link href="https://www.microsoft.com/en-us/windows">Windows 11</Link> are my main operating systems for development and daily use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.python.org/">Python</Link>, <Link href="https://nodejs.org/">Node.js</Link>, and <Link href="https://www.java.com/">Java</Link> are my go-to programming languages.
                  </ListItem>
                  <ListItem>
                    <Link href="https://react.dev/">React</Link> and <Link href="https://nextjs.org/">Next.js</Link> for frontend web development.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker</Link> and <Link href="https://kubernetes.io/">Kubernetes</Link> for containerization and orchestration.
                  </ListItem>
                  <ListItem>
                    <Link href="https://git-scm.com/">Git</Link> and <Link href="https://github.com/">GitHub</Link> for version control and collaboration.
                  </ListItem>
                  <ListItem>
                    <Link href="https://aws.amazon.com/">AWS</Link> and <Link href="https://azure.microsoft.com/">Azure</Link> for cloud computing and automation.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.postman.com/">Postman</Link> for API testing and development.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.jetbrains.com/pycharm/">PyCharm</Link> for advanced Python development.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Productivity & Utilities</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://notion.so/">Notion</Link> and <Link href="https://www.todoist.com/">Todoist</Link> for notes and task management.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.microsoft.com/en-in/microsoft-365/onenote/digital-note-taking-app">OneNote</Link> for organizing study and project notes.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.canva.com/">Canva</Link> for quick graphics and resume design.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.adobe.com/in/products/photoshop.html">Adobe Photoshop</Link> for image editing.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.mozilla.org/en-US/firefox/new/">Firefox</Link> and <Link href="https://www.google.com/chrome/">Chrome</Link> as my main browsers.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};