import Head from "next/head"

const Resources = (props) => {
    return(
        <Head>
            <title>{props?.title}</title>
            {props?.sources?.map((source, index) =>{
                return(
                    <link key={index} href={source.href} rel={source.rel}/>
                )
            })}
        </Head>
    )
}

export { Resources }