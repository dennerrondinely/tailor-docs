import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Get Started →
              </Link>
              <Link
                className="button button--secondary button--lg"
                href="https://github.com/dennerrondinely/tailor">
                GitHub
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <CodeBlock language="tsx">
{`import { craft } from '@tailor/react';

const Button = craft('button', {
  base: 'px-4 py-2 rounded font-medium',
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    },
    size: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    },
  },
  defaults: {
    intent: 'primary',
    size: 'medium',
  },
});

// Usage
<Button intent="primary" size="large">
  Click me
</Button>`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageBenefits() {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.benefitCard}>
              <h3>Type Safety</h3>
              <p>Full TypeScript support with autocomplete and type checking for your Tailwind CSS classes.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.benefitCard}>
              <h3>Component Organization</h3>
              <p>Keep your styles organized and maintainable with a structured approach to component styling.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.benefitCard}>
              <h3>Developer Experience</h3>
              <p>Enhanced DX with intuitive APIs, clear error messages, and comprehensive documentation.</p>
            </div>
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
        <div className="row">
          <div className="col col--6">
            <h2>Getting Started</h2>
            <p>Install Tailor and start building type-safe, styled components in minutes.</p>
            <CodeBlock language="bash">
{`# Using npm
npm install @tailor/react

# Using yarn
yarn add @tailor/react

# Using pnpm
pnpm add @tailor/react`}
            </CodeBlock>
          </div>
          <div className="col col--6">
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Install</h3>
                  <p>Add Tailor to your project using your favorite package manager.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Configure</h3>
                  <p>Set up your Tailwind CSS configuration and start crafting components.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Build</h3>
                  <p>Create beautiful, type-safe components with a great developer experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageBenefits />
        <HomepageFeatures />
        <HomepageGettingStarted />
      </main>
    </Layout>
  );
}
