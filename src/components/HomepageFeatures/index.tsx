import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Type-Safe Styling',
    description: (
      <>
        Create styled React components with full TypeScript support. Get autocomplete
        and type checking for your Tailwind CSS classes.
      </>
    ),
  },
  {
    title: 'Organized Components',
    description: (
      <>
        Keep your component styles organized and maintainable with a structured
        approach to styling. Separate concerns and reuse styles effectively.
      </>
    ),
  },
  {
    title: 'Tailwind CSS Integration',
    description: (
      <>
        Seamlessly integrate with Tailwind CSS while maintaining type safety and
        component organization. Get the best of both worlds.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
