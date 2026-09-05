import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export type ProductItem = {
  title: string;
  badge?: string;
  docLink: string;
  boothLink?: string;
  image?: string; // サムネイル画像パス
  icon?: string;  // 画像がない場合の絵文字アイコン
  description?: ReactNode;
};

const ProductList: ProductItem[] = [
  {
    title: 'HoloShift',
    badge: 'NEW',
    docLink: '/docs/holoshift',
    boothLink: 'https://ag-works.booth.pm/items/8767429',
    image: 'img/items/HoloShi.png',
    icon: '📦',
  },
  // 新商品を追加する場合はここにオブジェクトを追加するだけでカードが増えます
];

function ProductCard({title, badge, docLink, boothLink, image, icon, description}: ProductItem) {
  const imageUrl = image ? useBaseUrl(image) : null;

  return (
    <div className={styles.productCard}>
      {/* ① サムネイル画像（正方形でカード幅いっぱいにフィット） */}
      <div className={styles.cardImageContainer}>
        <Link to={docLink} className={styles.cardImageLink}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className={styles.cardImage} />
          ) : (
            <div className={styles.cardPlaceholderIcon}>{icon || '📦'}</div>
          )}
        </Link>
      </div>

      {/* ② タイトル ＆ バッジ */}
      <div className={styles.cardContent}>
        <div className={styles.cardTitleRow}>
          <Heading as="h3" className={styles.cardTitle}>
            {title}
          </Heading>
          {badge && <span className={clsx('badge badge--primary', styles.badge)}>{badge}</span>}
        </div>
        {description && <p className={styles.cardDescription}>{description}</p>}
      </div>

      {/* ③ ボタン（縦並び） */}
      <div className={styles.cardFooter}>
        <div className={styles.buttonGroup}>
          <Link
            className="button button--primary button--block"
            to={docLink}>
            📖 マニュアル
          </Link>
          {boothLink && (
            <Link
              className="button button--secondary button--outline button--block"
              href={boothLink}>
              🛍️ BOOTH
            </Link>
          )}
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
            各商品の取扱説明書や導入手順、BOOTHページはこちらからご確認いただけます。
          </p>
        </div>
        {/* CSS Grid でサムネイル画像サイズに合わせた均等レイアウト */}
        <div className={styles.productGrid}>
          {ProductList.map((props, idx) => (
            <ProductCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
