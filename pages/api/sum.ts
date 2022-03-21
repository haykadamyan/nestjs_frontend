import fetch from "lib/fetch"

export default async function getSum(a: string, b: string) {
    const res = await fetch(`/sum/${a}/${b}`, {})

    return res;
}