import Head from "next/head"

const Resources = (props) => {
    return(
        <Head>
            <title>{props?.title}</title>
            <link rel="icon" type="image/x-icon" href="/assets/logo.svg"/>
            {props?.sources?.map((source, index) =>{
                return(
                    <link key={index} href={source.href} rel={source.rel}/>
                )
            })}
        </Head>
    )
}

export default Resources;