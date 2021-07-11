import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const meta = {
            title: "Subrat Subedi",
            description: "Hello there! My name is Subrat, and I'm currently a senior at University of South Dakota pursuing a major in Computer Science and minor in Mathematics. I enjoy learning and working with data and infrastructure, making it more robust by deep-diving into the system.",
            image:
                "https://subedisubrat.github.io/images/preview.png",
            url: "https://subedisubrat.github.io"
        }

        return (
            <Html lang="en">
                <Head>
                    <meta name="robots" content="follow, index" />
                    <meta name="description" content={meta.description} />
                    <meta property="og:site_name" content={meta.title} />
                    <meta property="og:description" content={meta.description} />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:url" content={meta.url} />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content={meta.image} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@subedisubrat" />
                    <meta name="twitter:title" content={meta.title} />
                    <meta name="twitter:description" content={meta.description} />
                    <meta name="twitter:image" content={meta.image} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument