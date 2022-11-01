import Header from "@components/Header"
import SSRProvider from 'react-bootstrap/SSRProvider'
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link"
import "./_app.css"

export default function App({Component, pageProps}) {
    const newPageProps = {
        ...pageProps
    }
    return (
        <>
            <Header>
                <Link href="/" passHref>
                    Projekt 293 Teil 3
                </Link>
            </Header>

            <main className="page">
                <SSRProvider>
                    <Component {...newPageProps} />
                </SSRProvider>
            </main>

            <footer>
                <div>
                    <p>Projekt 293 Teil 3</p>
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <p><a href="/impressum">Impressum</a></p>
                </div>
            </footer>
        </>
    )
}