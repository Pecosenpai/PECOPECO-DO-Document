import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type ProductItem = {
  title: string;
  badge?: string;
  docLink: string;
  boothLink?: string;
  icon?: string;
  description: ReactNode;
};

const ProductList: ProductItem[] = [
  {
    title: 'アイテム8767429',
    badge: 'NEW',
    docLink: '/docs/item-8767429',
    boothLink: 'https://ag-works.booth.pm/items/8767429',
    icon: '📦',
    description: (
      <>
        商品の概要や対応環境、導入手順、利用規約などの詳細マニュアルです。
      </>
    ),
  },
  // 今後新しい商品を追加する場合はここにオブジェクトを追加するだけでカードが増えます
];

function ProductCard({title, badge, docLink, boothLink, icon, description}: ProductItem) {
  return (
    <div className={clsx('col col--6', styles.cardCol)}>
      <div className={clsx('card', styles.productCard)}>
        <div className="card__header">
          <div className={styles.cardHeaderFlex}>
            <div className={styles.cardIcon}>{icon || '📦'}</div>
            <div>
              <Heading as="h3" className={styles.cardTitle}>
                {title}
                {badge && <span className={clsx('badge badge--primary', styles.badge)}>{badge}</span>}
              </Heading>
            </div>
          </div>
        </div>
        <div className={clsx('card__body', styles.cardBody)}>
          <p>{description}</p>
        </div>
        <div className={clsx('card__footer', styles.cardFooter)}>
          <div className={styles.buttonGroup}>
            <Link
              className="button button--primary button--block"
              to={docLink}>
              📖 マニュアルを見る
            </Link>
            {boothLink && (
              <Link
                className="button button--secondary button--outline button--block"
                href={boothLink}>
                🛍️ BOOTHで購入
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2" className={styles.sectionTitle}>
            頒布商品一覧
          </Heading>
          <p className={styles.sectionSubtitle}>
            各商品のマニュアルや導入方法、BOOTHページはこちらからご確認いただけます。
          </p>
        </div>
        <div className="row">
          {ProductList.map((props, idx) => (
            <ProductCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
