import Head from "next/head"

export default function Resources({title, sshref}){
    return(
        <Head>
            <title>{title}</title>
            <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel="stylesheet"/>
        </Head>
        )
}