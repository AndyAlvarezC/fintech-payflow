import type { IconType } from 'react-icons';
import { styles } from './styles/featureCardStyles';

interface CardHighlightsTypes {
  icon: IconType;
  title: string;
  text: string;
}

export default function FeaturesCard({
  icon: Icon,
  title,
  text,
}: CardHighlightsTypes) {
  return (
    <div className={styles.card}>
      {styles.gradients.map((gradient, i) => (
        <div key={i} className={gradient}></div>
      ))}

      <div className={styles.topLine}></div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <div className={styles.iconBox}>
              <Icon className={styles.icon} />
            </div>
            <div className={styles.iconGlow}></div>
          </div>

          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>

        <div className={styles.textWrapper}>
          <p className={styles.text}>{text}</p>
        </div>

        <div className={styles.footer}>
          <div className={styles.line}></div>
        </div>
      </div>

      <div className={styles.dot}></div>
    </div>
  );
}
