import {useRouter} from "next/router";
import Link from "next/link";

export default function () {
    const router = useRouter()
    const {name} = router.query

    return <>
        <h1>Hello, you are in the {name} page!!</h1>
        <Link href="/">
            <a>Return Home</a>
        </Link>
    </>
}