# Lordicon × Next.js

Animated [Lordicon](https://lordicon.com/) icons in a Next.js 16 app, with
[`@lordicon/react`](https://www.npmjs.com/package/@lordicon/react): icons in Server Components,
icons that follow React state, and server rendering that does not shift the page.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/lordicondev/demo-nextjs)

```sh
npm install
npm run dev        # http://localhost:3000
```

## Lordicon in your Next.js app

**1. Install**

```sh
npm install @lordicon/react
```

**2. Give icons a size** in your global CSS, so that nothing moves while the page loads:

```css
@layer base {
    lord-icon {
        display: inline-block;
        width: 64px;
        height: 64px;
    }

    lord-icon:not(:defined) > * {
        width: 100%;
        height: 100%;
    }
}
```

In a layer, the rule gives way to your classes, Tailwind's too, so one icon can take another
size: `className="size-8"`, or `style={{ width: 32, height: 32 }}`.

**3. Use it**, in a Server Component too:

```tsx
import { LordIcon } from '@lordicon/react';

export default function Page() {
    return <LordIcon src="/icons/lock.json" trigger="hover" />;
}
```

Pick icons on [lordicon.com](https://lordicon.com/), give them your style and colours there,
and download them as Lottie JSON into `public/`, as here.

## What's inside

| Page                | Shows                                                                                   | Code                                                     |
| ------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `/`                 | Triggers, colours, stroke, a colour from CSS, icons in buttons and links                | [`src/app/page.tsx`](src/app/page.tsx)                   |
| `/state`            | `follow` with data from the server, a process in stages, `play()` after a Server Action | [`src/app/state/`](src/app/state/)                       |
| `/server-rendering` | A placeholder, a size before the script runs, loading on view or interaction, streaming | [`src/app/server-rendering/`](src/app/server-rendering/) |

## Good to know

- `<LordIcon>` works in Server and Client Components alike: the package marks it
  `'use client'` itself. Your own code with state, refs or events needs `'use client'` as usual.
- With server rendering, prefer `src` to `icon`: the URL is in the HTML and the icon loads
  sooner, and the JSON stays out of your JavaScript.
- Children of `<LordIcon>` show until the icon is ready: a still of the icon, downloaded from
  lordicon.com as SVG, makes a good placeholder.
- React 19 is required; the App Router of Next.js 15 and later has it. The Pages Router works
  the same way.
- Every prop and trigger: the [`@lordicon/react`](https://www.npmjs.com/package/@lordicon/react)
  and [`@lordicon/element`](https://www.npmjs.com/package/@lordicon/element) READMEs.

## This project

A new Next.js 16 app as `create-next-app` makes it (App Router, Turbopack, Cache Components,
TypeScript, ESLint), with plain CSS.

```sh
npm run lint
npm run format     # Prettier
npm run build && npm start
```

## License

MIT
