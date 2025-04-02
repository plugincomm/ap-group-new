import Document, {Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }

    render() {
        return (
            <Html>
                <Head>
                   
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
    
    <link  rel="stylesheet" href="/css/bootstrap.min.css"/>   
    <link rel="stylesheet" href="/css/owl.carousel.min.css"  />
    <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
    <link rel="stylesheet" href="/css/style.css" />


                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* <!-- main css --> 
                    <style dangerouslySetInnerHTML={{__html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {
                        display: inline-block;
                        width: 25%;
                    }
                    @media (max-width:767px){
                        .post_slider_inner.owl-carousel > .item {
                            width: 100%
                        }
                        .post_slider_inner.owl-carousel > .item:not(:first-of-type) {
                            display: none;
                        }
                    }`}}></style>*/}

                    
 <Script src="/js/jquery.min.js" />
 
 <Script src="/js/bootstrap.bundle.min.js" />
 <Script src="https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.4.2/jquery.twbsPagination.min.js" />
 <Script src="/js/owl.carousel.min.js" />
 
<Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" />
<Script src="/js/custom.js" />
                </body>
            </Html>
        );
    }
}
