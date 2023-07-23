import Head from 'next/head';
import fs from 'fs';
import path from 'path';

export default function Home({ htmlContent }) {
    return (
        <div>
            <Head>
                <title>AfterDine</title>
                {/* Import the CSS stylesheets */}
                <link
                    rel="stylesheet"
                    href="https://www.growyouragency.com/wp-includes/css/classic-themes.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://www.growyouragency.com/wp-content/plugins/email-subscribers/lite/public/css/email-subscribers-public.css"
                />
                {/* Add more CSS links as needed */}
            </Head>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
}

// This function runs at build time to fetch the HTML content
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'pages', 'landing-page.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');

    return {
        props: {
            htmlContent,
        },
    };
}
