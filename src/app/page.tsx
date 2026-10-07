import { LordIcon } from '@lordicon/react';
import Link from 'next/link';
import type { ReactNode } from 'react';

/** One example: the icon, and the props that make it. */
function Tile({ code, dark, children }: { code: string; dark?: boolean; children: ReactNode }) {
    return (
        <figure className={dark ? 'tile dark' : 'tile'}>
            {children}
            <figcaption>
                <code>{code}</code>
            </figcaption>
        </figure>
    );
}

// A Server Component: <LordIcon> needs no 'use client' of its own.
export default function Basics() {
    return (
        <>
            <h1>Animated icons in a Next.js app</h1>
            <p className="lead">
                <code>{'<LordIcon>'}</code> goes straight into a Server Component, like this page.
                Its props say what the icon is and when it plays. Hover, click or scroll.
            </p>

            <h2>Triggers</h2>
            <div className="grid">
                <Tile code='trigger="hover"'>
                    <LordIcon src="/icons/lock.json" trigger="hover" />
                </Tile>
                <Tile code='trigger="click"'>
                    <LordIcon src="/icons/coins.json" trigger="click" state="hover-jump" />
                </Tile>
                <Tile code='trigger="loop"'>
                    <LordIcon src="/icons/coins.json" trigger="loop" state="loop-spin" />
                </Tile>
                <Tile code='trigger="morph"'>
                    <LordIcon src="/icons/lock.json" trigger="morph" state="morph-unlocked" />
                </Tile>
                <Tile code='trigger="in"'>
                    <LordIcon src="/icons/puzzle.json" trigger="in" state="in-reveal" />
                </Tile>
            </div>

            <h2>Looks</h2>
            <p className="note">
                The last icon takes its colour from CSS, as on a dark theme:{' '}
                <code>--lord-icon-primary</code>, in <code>globals.css</code>.
            </p>
            <div className="grid">
                <Tile code="colors={{ primary, secondary }}">
                    <LordIcon
                        src="/icons/puzzle.json"
                        trigger="hover"
                        colors={{ primary: '#e83a30', secondary: '#f9a400' }}
                    />
                </Tile>
                <Tile code='stroke="bold"'>
                    <LordIcon src="/icons/lock.json" trigger="hover" stroke="bold" />
                </Tile>
                <Tile code="--lord-icon-primary" dark>
                    <LordIcon src="/icons/coins.json" trigger="hover" />
                </Tile>
            </div>

            <h2>In buttons and links</h2>
            <p className="note">
                <code>target</code> plays the icon when the pointer is anywhere on the button, and{' '}
                <code>currentColor</code> gives it the colour of the text.
            </p>
            <div className="actions">
                <button type="button" className="button">
                    <LordIcon
                        src="/icons/download.json"
                        trigger="hover"
                        target="button"
                        currentColor
                    />
                    Download
                </button>
                <Link href="/state" className="link">
                    <LordIcon
                        src="/icons/morph-account.json"
                        trigger="hover"
                        target="a"
                        currentColor
                    />
                    Next: icons that follow React state
                </Link>
            </div>
        </>
    );
}
