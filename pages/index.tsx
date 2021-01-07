import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Fruits Place!
                </h1>

                <p className={styles.description}>
                   Select a fruit from below
                </p>

                <div className={styles.grid}>
                    <Link href="/fruit/apple">
                        <a className={styles.card}>
                            <h3>Apple &rarr;</h3>
                            <p>Delicious Apple</p>
                        </a>
                    </Link>


                    <Link href="/fruit/banana">
                        <a className={styles.card}>
                            <h3>Banana &rarr;</h3>
                            <p>Precious Banana</p>
                        </a>
                    </Link>

                    <Link href="/fruit/orange">
                        <a className={styles.card}>
                            <h3>Orange &rarr;</h3>
                            <p>Fresh and very good</p>
                        </a>
                    </Link>


                    <Link href="/fruit/peach">
                        <a className={styles.card}>
                            <h3>Peach &rarr;</h3>
                            <p>So soft and smells like a flower</p>
                        </a>
                    </Link>


                </div>
            </main>

            <footer className={styles.footer}>
                <Link href="/dynamic">
                    <a>Dynamic</a>
                </Link>

                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>
        </div>
    )
}
