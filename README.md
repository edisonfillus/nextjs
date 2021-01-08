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


If want to use Material-UI
```shell
npm install @material-ui/core
```
Create a theme.ts file in /src
```typescript
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
```

Adapt or create the _document.tsx
```typescript jsx
import React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";
import {ServerStyleSheets} from "@material-ui/styles";
import theme from "../src/theme";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {

        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* PWA primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
```


Adapt the _app.tsx
```typescript jsx
import React from "react";
import { AppProps } from 'next/app'
import Head from 'next/head';
import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";
import theme from "../src/theme";

function MyApp({ Component, pageProps }: AppProps) {

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default MyApp
```




Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


