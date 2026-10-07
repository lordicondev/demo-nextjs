import { LordIcon } from '@lordicon/react';
import { connection } from 'next/server';

/** A stand-in for data that is fresh on every request, and slow to come. */
async function getRecommendations() {
    await connection();
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return [
        { id: 1, title: 'Secure your account', icon: '/icons/lock.json' },
        { id: 2, title: 'Earn rewards', icon: '/icons/coins.json' },
        { id: 3, title: 'Add an extension', icon: '/icons/puzzle.json' },
    ];
}

export async function Recommendations() {
    const recommendations = await getRecommendations();

    return (
        <div className="grid">
            {recommendations.map((item) => (
                <figure key={item.id} className="tile">
                    <LordIcon src={item.icon} intro="in-reveal" trigger="hover" target="figure" />
                    <figcaption>{item.title}</figcaption>
                </figure>
            ))}
        </div>
    );
}
