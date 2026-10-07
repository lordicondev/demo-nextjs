'use client';

import { LordIcon, type LordIconElement } from '@lordicon/react';
import { useRef, useState } from 'react';
import { subscribe } from './actions';
import styles from './state.module.css';

/** A form that sends to a Server Action; the icon plays once the server has answered. */
export function SubscribeForm() {
    const icon = useRef<LordIconElement>(null);
    const [message, setMessage] = useState('');

    async function action(formData: FormData) {
        setMessage(await subscribe(formData));
        void icon.current?.play({ from: 'start' });
    }

    return (
        <form action={action} className={styles.form}>
            <LordIcon ref={icon} src="/icons/confetti.json" />
            <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email"
                className={styles.input}
            />
            <button className="button">Subscribe</button>
            <p role="status" className={styles.status}>
                {message}
            </p>
        </form>
    );
}
