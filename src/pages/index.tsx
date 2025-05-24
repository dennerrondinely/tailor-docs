import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.heroButton}
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h2 className={styles.featureHeading}>Simple and Powerful</h2>
            <p className={styles.featureText}>
              Tailor lets you create reusable, type-safe components with Tailwind CSS and a clean API.
            </p>
          </div>
          <div className="col col--6">
            <CodeBlock language="tsx" children={`
              import { craft } from '@tailor/react';

              // Create a base button
              export const StyledButton = craft("button")({
                base: "inline-flex items-center justify-center",
              });

              // Usage
              <Button>Primary</Button>
            `} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageBenefits() {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <h2 className={styles.benefitsTitle}>Why Choose Tailor?</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Simple API</h3>
            <p className={styles.benefitDescription}>
              Create styled components with a clean and intuitive API. No complex configuration needed.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Tailwind Powered</h3>
            <p className={styles.benefitDescription}>
              Leverage the full power of Tailwind CSS with a component-based approach.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3 className={styles.benefitTitle}>Type Safe</h3>
            <p className={styles.benefitDescription}>
              Built with TypeScript for better developer experience and type safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageGettingStarted() {
  return (
    <section className={styles.gettingStarted}>
      <div className="container">
        <h2 className={styles.gettingStartedTitle}>Getting Started</h2>
        <p className={styles.gettingStartedText}>
          Start using Tailor in your project today. Follow our quick start guide to get up and running in minutes.
        </p>
        <div className={styles.codeBlock}>
          <pre>
            <code>
              <span className={styles.comment}># Install Tailor</span><br />
              <span className={styles.string}>npm</span> <span className={styles.function}>install</span> <span className={styles.string}>@tailor/styles</span><br /><br />
              <span className={styles.comment}># Or using yarn</span><br />
              <span className={styles.string}>yarn</span> <span className={styles.function}>add</span> <span className={styles.string}>@tailor/styles</span><br /><br />
              <span className={styles.comment}># Or using pnpm</span><br />
              <span className={styles.string}>pnpm</span> <span className={styles.function}>add</span> <span className={styles.string}>@tailor/styles</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <HomepageBenefits />
        <HomepageGettingStarted />
      </main>
    </Layout>
  );
}
