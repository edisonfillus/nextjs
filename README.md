# Nextjs

## How to create from scratch
Create Next.js App
```shell
npx create-next-app appname
```
Create a tsconfig.json file

Install Typescript
````shell
npm install --save-dev typescript @types/react @types/node
````

Run
```shell
npm run dev
```

Convert pages/_app.js into pages/_app.tsx
```typescript jsx
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
```

Rename pages/index.js to index.tsx

Convert pages/api/hello.js into hello.ts
```typescript
import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}
```

If want to use sass
```shell
npm install --save-dev sass
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


