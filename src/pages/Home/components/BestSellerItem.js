import classNames from 'classnames/bind';
import styles from './BestSellerItem.module.scss';

const cx = classNames.bind(styles);

function BestSellerItem() {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('product-image')} href="/">
                <div className={cx('image-box')}>
                    <span className={cx('image-container')}>
                        <img
                            className={cx('image')}
                            src="https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd96eb53c23516f6ca600411b8495131f%2Fb%2Ft%2Fbt.calm.png&w=640&q=75"
                            alt="Đồng hồ"
                        />
                    </span>
                </div>
                <span className={cx('product-discount')}>-15%</span>
            </a>
            <div className={cx('product-addToCart')}>
                <button className={cx('addToCart-btn')}>
                    <span>THÊM VÀO GIỎ HÀNG</span>
                </button>
            </div>
            <a href="/" className={cx('product-subtitle')}>
                <p>Kashmir</p>
            </a>
            <a href="/" className={cx('product-name')}>
                <h4>Calm</h4>
            </a>
            <div className={cx('product-price')}>
                <span className={cx('product-price-sale')}>2.039.000&nbsp;₫</span>
                <span className={cx('product-price-origin')}>2.399.000&nbsp;₫</span>
            </div>
        </div>
    );
}

export default BestSellerItem;
