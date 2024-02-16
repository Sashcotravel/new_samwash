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
            {router === `/${locale}/blog/news` && <title>{t("blog3")}</title>}
            {router === `/blog/news` && <title>{t("blog3")}</title>}

            {router === `/${locale}/blog/news` && <meta name="description" content={t("blog3")}/>}
            {router === `/blog/news` && <meta name="description" content={t("blog3")}/>}

            {router === `/${locale}/blog/news` && <meta property="og:title" content={t("blog3")}/>}
            {router === `/blog/news` && <meta property="og:title" content={t("blog3")}/>}

            {router === `/${locale}/blog/news` && <meta property="og:description" content={t("blog3")}/>}
            {router === `/blog/news` && <meta property="og:description" content={t("blog3")}/>}

            {router === `/${locale}/blog/news` &&
                <link hrefLang="en-UA" href="https://samwash.ua/en/blog/news" rel="alternate"/>}
            {router === `/blog/news` &&
                <link hrefLang="en-UA" href="https://samwash.ua/en/blog/news" rel="alternate"/>}

            {router === `/${locale}/blog/news` &&
                <link hrefLang="ru-UA" href="https://samwash.ua/ru/blog/news" rel="alternate"/>}
            {router === `/blog/news` &&
                <link hrefLang="ru-UA" href="https://samwash.ua/ru/blog/news" rel="alternate"/>}

            {router === `/${locale}/blog/news` &&
                <link hrefLang="uk-UA" href="https://samwash.ua/blog/news" rel="alternate"/>}
            {router === `/blog/news` &&
                <link hrefLang="uk-UA" href="https://samwash.ua/blog/news" rel="alternate"/>}

            {children}
        </React.Fragment>
    )
}