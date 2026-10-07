import { LordIcon } from '@lordicon/react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import { Recommendations } from './recommendations';

export const metadata: Metadata = { title: 'Server rendering' };

const CSS = `@layer base {
    lord-icon {
        display: inline-block;
        width: 64px;
        height: 64px;
    }

    lord-icon:not(:defined) > * {
        width: 100%;
        height: 100%;
    }
}`;

export default function ServerRendering() {
    return (
        <>
            <h1>Server rendering</h1>
            <p className="lead">
                The server sends <code>{'<lord-icon>'}</code> with its attributes, and whatever you
                put inside it. The icon loads once the page runs, and takes over.
            </p>

            <h2>A placeholder, from the first frame</h2>
            <p className="note">
                Children show until the icon is ready: here a still of each icon, an{' '}
                <code>{'<Image>'}</code> with <code>loading=&quot;eager&quot;</code>, as{' '}
                <code>next/image</code> is lazy by default. Turn JavaScript off in DevTools and
                reload to see what the server sends.
            </p>
            <div className="grid">
                <figure className="tile">
                    <LordIcon src="/icons/lock.json" trigger="hover">
                        <Image
                            src="/icons/lock.svg"
                            alt=""
                            width={64}
                            height={64}
                            loading="eager"
                        />
                    </LordIcon>
                    <figcaption>
                        <code>{'<Image> inside'}</code>
                    </figcaption>
                </figure>
                <figure className="tile">
                    <LordIcon src="/icons/coins.json" trigger="hover">
                        <Image
                            src="/icons/coins.svg"
                            alt=""
                            width={64}
                            height={64}
                            loading="eager"
                        />
                    </LordIcon>
                    <figcaption>
                        <code>{'<Image> inside'}</code>
                    </figcaption>
                </figure>
            </div>

            <h2>A size before the script runs</h2>
            <p className="note">
                Until the script runs, the element has no size of its own. A rule in your global CSS
                gives it one, so nothing on the page moves when the icon loads. In a layer, it gives
                way to your classes, Tailwind&apos;s too:
            </p>
            <pre className="code">{CSS}</pre>

            <h2>Loading when it is needed</h2>
            <p className="note">
                <code>loading=&quot;lazy&quot;</code> waits until the icon is in view;{' '}
                <code>loading=&quot;interaction&quot;</code> until the pointer or the keyboard
                reaches it, with the placeholder on show until then. Hover the second one.
            </p>
            <div className="grid">
                <figure className="tile">
                    <LordIcon src="/icons/puzzle.json" trigger="hover" loading="lazy">
                        <Image src="/icons/puzzle.svg" alt="" width={64} height={64} />
                    </LordIcon>
                    <figcaption>
                        <code>loading=&quot;lazy&quot;</code>
                    </figcaption>
                </figure>
                <figure className="tile">
                    <LordIcon src="/icons/lock.json" trigger="hover" loading="interaction">
                        <Image src="/icons/lock.svg" alt="" width={64} height={64} />
                    </LordIcon>
                    <figcaption>
                        <code>loading=&quot;interaction&quot;</code>
                    </figcaption>
                </figure>
            </div>

            <h2>Streamed with Suspense</h2>
            <p className="note">
                This part waits for data on every request, so Next.js streams it in after the rest
                of the page. Its icons need nothing more: they load as soon as they arrive.
            </p>
            <Suspense fallback={<p className="note">Loading recommendations…</p>}>
                <Recommendations />
            </Suspense>
        </>
    );
}
