"use client"

import React, {useEffect} from "react";
import {useLocale, useTranslations} from "next-intl";
import {usePathname} from "next/navigation";
import Script from "next/script";


export default function Head(){
    const t = useTranslations();
    const locale = useLocale();
    const router = usePathname()


    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://samwash.ua/",
        "logo": "https://samwash.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=256&q=75"
    }

    const schema2 = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://samwash.ua/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://samwash.ua/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }

    const schema3 = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Title of a News Article",
        "image": [
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg"
        ],
        "datePublished": "2015-02-05T08:00:00+08:00",
        "dateModified": "2015-02-05T09:20:00+08:00",
        "author": [{
            "@type": "Person",
            "name": "Jane Doe",
            "url": "https://example.com/profile/janedoe123"
        },{
            "@type": "Person",
            "name": "John Doe",
            "url": "https://example.com/profile/johndoe123"
        }]
    }

    // useEffect(() => {
    //     if ('serviceWorker' in navigator) {
    //         navigator.serviceWorker
    //             .register('/service-worker.js')
    //             .then((registration) => {
    //                 console.log('Service Worker зареєстровано з успіхом:', registration);
    //             })
    //             .catch((error) => {
    //                 console.error('Помилка реєстрації Service Worker:', error);
    //             });
    //     }
    // }, []);

    return (
        <React.Fragment>
            <link rel="icon" href="/app/favicon.ico"/>
            <link rel="shortcut icon" href="/app/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <link rel='manifest' href='/manifest.json' />
            <meta name="robots" content="index,follow" />
            {router === `/${locale}` && <title>{t("mainTit")}</title>}
            {router === '/' && <title>{t("mainTit")}</title>}

            {router === `/${locale}` && <meta name="description" content={t("mainDesc")}/>}
            {router === '/' && <meta name="description" content={t("mainDesc")}/>}

            {router === '/' && <meta property="og:title" content={t("mainTit")}/>}
            {router === `/${locale}` && <meta property="og:title" content={t("mainTit")}/>}

            {router === '/' && <meta property="og:description" content={t("mainDesc")}/>}
            {router === `/${locale}` && <meta property="og:description" content={t("mainDesc")}/>}

            {/*<meta name="twitter:card" content="summary" />*/}
            {/*<meta name="twitter:site" content="SamWash" />*/}
            {/*<meta name="twitter:title" content={t("mainTit")} />*/}
            {/*<meta name="twitter:description" content={t("mainDesc")} />*/}
            {/*<meta name="twitter:image" content='https://dev.samwash.ua/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=384&q=75' />*/}

            {/*<Script type="application/ld+json" id='1' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />*/}
            {/*<Script type="application/ld+json" id='3' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }} />*/}
            {/*<Script type="application/ld+json" id='4' dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }} />*/}

            {router === '/' && <link rel="apple-touch-icon"
                   href='https://dev.samwash.ua/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=384&q=75'/>}
            {router === `/${locale}` && <link rel="apple-touch-icon"
                   href='https://dev.samwash.ua/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=384&q=75'/>}
            {router === '/' && <meta property="og:image"
                   content='https://dev.samwash.ua/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=384&q=75'/>}
            {router === `/${locale}` && <meta property="og:image"
                   content='https://dev.samwash.ua/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo144.5d64867a.png&w=384&q=75'/>}

            <meta property="og:url" content={`https://samwash.ua${router}`} />
            <link rel="canonical" href={`https://samwash.ua${router}`} />
            <meta property="og:site_name" content={t("siteTag")} />
            <link rel="origin" href='https://samwash.ua' />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="uk_UA" />

            {router === `/${locale}` && <link rel="alternate" hrefLang="en-UA" href="https://samwash.ua/en"/>}
            {router === '/' && <link rel="alternate" hrefLang="en-UA" href="https://samwash.ua/en"/>}

            {router === `/${locale}` && <link hrefLang="ru-UA" href="https://samwash.ua/ru" rel="alternate"/>}
            {router === '/' && <link hrefLang="ru-UA" href="https://samwash.ua/ru" rel="alternate"/>}

            {router === `/${locale}` && <link hrefLang="uk-UA" href="https://samwash.ua" rel="alternate"/>}
            {router === '/' && <link hrefLang="uk-UA" href="https://samwash.ua" rel="alternate"/>}

            {/*<link rel="alternate" href="https://samwash.ua" hrefLang="x-default"/>*/}

            {/*<meta property="fb:app_id" content="1105322956739515" />*/}
            {/*<noscript>*/}
            {/*    <img height="1" width="1" style={{display: "none"}} alt='photo'*/}
            {/*               src="https://www.facebook.com/tr?id=1105322956739515&ev=PageView&noscript=1"/>*/}
            {/*</noscript>*/}
            {/* tyt */}
            <link rel="preconnect" href="https://connect.facebook.net" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
          {/*  <Script defer id='2' src="https://www.googletagmanager.com/gtag/js?id=AW-11190466139"*/}
          {/*           strategy="beforeInteractive"/>*/}
          {/*  <link rel="dns-prefetch" href="https://www.googletagmanager.com/gtag/js?id=G-MMYDFHJ1EK"/>*/}
          {/*  <meta name="facebook-domain-verification" content="mhjs7mp2a1sgrkpjah98derfg2q6mv"/>*/}
          {/*  /!* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document *!/*/}
          {/*  <Script id='google-analytics1' dangerouslySetInnerHTML={{*/}
          {/*      __html: `*/}
          {/*    window.dataLayer = window.dataLayer || [];*/}
          {/*      function gtag(){dataLayer.push(arguments);}*/}
          {/*      gtag('js', new Date());*/}
          {/*      gtag('config', 'G-MMYDFHJ1EK');*/}
          {/*  `*/}
          {/*  }} strategy="beforeInteractive" defer />*/}
          {/*  /!*<Script strategy="beforeInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-11190466139" async />*!/*/}
          {/*  /!* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document *!/*/}
          {/*  <Script id='google-analytics2' dangerouslySetInnerHTML={{*/}
          {/*      __html: `*/}
          {/*    window.dataLayer = window.dataLayer || [];*/}
          {/*      function gtag(){dataLayer.push(arguments);}*/}
          {/*      gtag('js', new Date());*/}
          {/*      gtag('config', 'AW-11190466139');*/}
          {/*  `*/}
          {/*  }} strategy="beforeInteractive" defer />*/}
          {/*  /!* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document *!/*/}
          {/*  <Script id='google-analytics3' dangerouslySetInnerHTML={{*/}
          {/*      __html: `*/}
          {/*              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':*/}
          {/*              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],*/}
          {/*          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=*/}
          {/*          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);*/}
          {/*      })(window,document,'script','dataLayer','GTM-NSRQJ7H');*/}
          {/*  `*/}
          {/*  }} strategy="beforeInteractive" defer />*/}
          {/*  /!* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document *!/*/}
          {/*  <Script id='google-analytics1' dangerouslySetInnerHTML={{*/}
          {/*      __html: `*/}
          {/*  !function(f,b,e,v,n,t,s)*/}
          {/*  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?*/}
          {/*  n.callMethod.apply(n,arguments):n.queue.push(arguments)};*/}
          {/*  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';*/}
          {/*  n.queue=[];t=b.createElement(e);t.async=!0;*/}
          {/*  t.src=v;s=b.getElementsByTagName(e)[0];*/}
          {/*  s.parentNode.insertBefore(t,s)}(window, document,'script',*/}
          {/*  'https://connect.facebook.net/en_US/fbevents.js');*/}
          {/*  fbq('init', '1105322956739515');*/}
          {/*  fbq('track', 'PageView');*/}
          {/*`*/}
          {/*  }} strategy="beforeInteractive" defer />*/}
          {/*  /!* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document *!/*/}
          {/*  <Script type="application/ld+json" id='1' dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}*/}
          {/*          strategy="beforeInteractive" defer />*/}
          {/*  /!* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document *!/*/}
          {/*  <Script type="application/ld+json" id='3' dangerouslySetInnerHTML={{__html: JSON.stringify(schema2)}}*/}
          {/*          strategy="beforeInteractive" defer />*/}
          {/*  /!* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document *!/*/}
          {/*  <Script type="application/ld+json" id='4' dangerouslySetInnerHTML={{__html: JSON.stringify(schema3)}}*/}
          {/*          strategy="beforeInteractive" defer />*/}
        </React.Fragment>
    )
}