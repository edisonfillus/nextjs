import {GetStaticProps} from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async (context) =>{
    return {
        props: {
            magicNumber: Math.random()
        },
        revalidate: 1,
    }
}

export default function Dynamic(props){
    return <>
        <h1>This page is dynamic generated in the server. Magic Number: {props.magicNumber}</h1>
        <Link href="/">
            <a>Return Home</a>
        </Link>
        </>
}