'use client';

import { LordIcon } from '@lordicon/react';
import { useEffect, useState } from 'react';

type Stage = 'idle' | 'busy' | 'done';

const LABELS: Record<Stage, string> = {
    idle: 'Download',
    busy: 'Downloading…',
    done: 'Downloaded',
};

/** A process: the button carries its stage as `data-state`, and the icon follows it. */
export function DownloadButton() {
    const [stage, setStage] = useState<Stage>('idle');

    // Pretend work: busy for two seconds, done for two more, then ready again.
    useEffect(() => {
        if (stage === 'idle') return;
        const timeout = setTimeout(() => setStage(stage === 'busy' ? 'done' : 'idle'), 2000);
        return () => clearTimeout(timeout);
    }, [stage]);

    return (
        <button
            type="button"
            className="button"
            data-state={stage}
            disabled={stage !== 'idle'}
            onClick={() => setStage('busy')}
        >
            <LordIcon
                src="/icons/download.json"
                trigger="follow(data-state, busy=loop-cycle, done=morph-check)"
                target="button"
                currentColor
            />
            {LABELS[stage]}
        </button>
    );
}
