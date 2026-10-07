import type { Metadata } from 'next';
import Link from 'next/link';
import { CartButton } from './cart-button';
import { DownloadButton } from './download-button';
import { SubscribeForm } from './subscribe-form';
import styles from './state.module.css';

export const metadata: Metadata = { title: 'React state' };

/** A stand-in for your data: a database, a fetch, the session. */
async function getProducts() {
    return [
        { id: 1, name: 'Headphones', price: '$129', inCart: true },
        { id: 2, name: 'Keyboard', price: '$89', inCart: false },
    ];
}

export default async function State() {
    const products = await getProducts();

    return (
        <>
            <h1>Icons that follow React state</h1>
            <p className="lead">
                React owns the state and puts it on an element, as an attribute;{' '}
                <code>trigger=&quot;follow&quot;</code> keeps the icon in step with it. The buttons
                below are Client Components; this page, which gives them their data, is not.
            </p>

            <h2>A toggle, from the server&apos;s data</h2>
            <p className="note">
                Each button carries <code>aria-pressed</code>. The headphones are in the cart when
                the page arrives: their icon starts on the second look, without playing. Click to
                see it morph.
            </p>
            <ul className={styles.products}>
                {products.map((product) => (
                    <li key={product.id} className={styles.product}>
                        <span>
                            {product.name} <span className={styles.price}>{product.price}</span>
                        </span>
                        <CartButton initialInCart={product.inCart} />
                    </li>
                ))}
            </ul>

            <h2>A process, in stages</h2>
            <p className="note">
                <code>follow(data-state, busy=loop-cycle, done=morph-check)</code> gives each value
                its animation: a loop while busy, a check when done, and back.
            </p>
            <div className="actions">
                <DownloadButton />
            </div>

            <h2>Played from code, after a Server Action</h2>
            <p className="note">
                A ref gives the element, with <code>play()</code>. The form sends the address to a
                Server Action, and the icon plays when the server has answered.
            </p>
            <SubscribeForm />

            <p className={styles.next}>
                <Link href="/server-rendering" className="link">
                    Next: server rendering →
                </Link>
            </p>
        </>
    );
}
