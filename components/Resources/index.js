import Head from "next/head"

export default function Resources({title, sources = null}){
    return(
        <Head>
            <title>{title}</title>
            {sources?.map((source, index) =>{
                return(
                    <link key={index} href={source.href} rel={source.rel}/>
                )
            })}
        </Head>
        )
}