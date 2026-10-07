'use client';

import { LordIcon } from '@lordicon/react';
import { useState } from 'react';

/** A toggle: the icon follows the button's `aria-pressed`, which follows React state. */
export function CartButton({ initialInCart }: { initialInCart: boolean }) {
    const [inCart, setInCart] = useState(initialInCart);

    return (
        <button
            type="button"
            className="button"
            aria-pressed={inCart}
            onClick={() => setInCart(!inCart)}
        >
            <LordIcon
                src="/icons/morph-shopping.json"
                trigger="follow"
                target="button"
                state="morph-select"
                currentColor
            />
            In cart
        </button>
    );
}
