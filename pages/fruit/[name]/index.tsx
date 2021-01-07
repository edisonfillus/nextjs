import {useRouter} from "next/router";
import Link from "next/link";
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";

export const getStaticProps: GetStaticProps = async (context) => {
    const fruit = context.params.name as string;
    const availableFruits = ["apple", "banana", "orange", "peach"]
    if (!availableFruits.includes(fruit)) {
        return {
            notFound: true,
        }
    }
    await new Promise(r => setTimeout(r, 2000));
    return {
        props: {
            magicNumber: Math.random(),
            fruitLength: fruit.length,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 1, // In seconds
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {name: "apple"}
            },
            {
                params: {name: "banana"}
            },
            {
                params: {name: "orange"}
            },
        ],
        fallback: true
    }
}


export default function Fruit(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()
    const {name} = router.query
    const {fruitLength, magicNumber} = props

    if(router.isFallback){
        return <h1>loading...</h1>
    }

    return <>
        <h1>Hello, you are in the {name} page!!</h1>
        <p>The Magic Number is {magicNumber} and the length is {fruitLength}</p>
        <Link href="/">
            <a>Return Home</a>
        </Link>
    </>
}