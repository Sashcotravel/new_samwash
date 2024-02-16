"use client"

import React from "react";
import {useLocale, useTranslations} from "next-intl";
import {usePathname} from "next/navigation";

export default function ContactsLayout({children}){

    const t = useTranslations("blog");
    const router = usePathname()
    const locale = useLocale();

    return (
        <React.Fragment>
            {router === `/${locale}/blog` && <title>{t("blog")}</title>}
            {router === `/blog` && <title>{t("blog")}</title>}

            {router === `/${locale}/blog` && <meta name="description" content={t("blog")}/>}
            {router === `/blog` && <meta name="description" content={t("blog")}/>}

            {router === `/${locale}/blog` && <meta property="og:title" content={t("blog")}/>}
            {router === `/blog` && <meta property="og:title" content={t("blog")}/>}

            {router === `/${locale}/blog` && <meta property="og:description" content={t("blog")}/>}
            {router === `/blog` && <meta property="og:description" content={t("blog")}/>}

            {router === `/${locale}/blog` && <link hrefLang="en-UA" href="https://samwash.ua/en/blog" rel="alternate"/>}
            {router === `/blog` && <link hrefLang="en-UA" href="https://samwash.ua/en/blog" rel="alternate"/>}

            {router === `/${locale}/blog` && <link hrefLang="ru-UA" href="https://samwash.ua/ru/blog" rel="alternate"/>}
            {router === `/blog` && <link hrefLang="ru-UA" href="https://samwash.ua/ru/blog" rel="alternate"/>}

            {router === `/${locale}/blog` && <link hrefLang="uk-UA" href="https://samwash.ua/blog" rel="alternate"/>}
            {router === `/blog` && <link hrefLang="uk-UA" href="https://samwash.ua/blog" rel="alternate"/>}

            <link rel="apple-touch-icon" href='/logo144.png'/>
           <meta property="og:image" content='/logo144.png'/>
            {children}
        </React.Fragment>
    )
}