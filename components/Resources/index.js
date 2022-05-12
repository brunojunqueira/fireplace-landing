import Head from "next/head"
import Link from 'next/dist/client/link'

export default function Resources({title, sources = null}){
    return(
        <Head>
            <title>{title}</title>
            {sources?.map((source, index) =>{
                return(
                    <Link key={index} href={source.href} rel={source.rel}/>
                )
            })}
        </Head>
        )
}