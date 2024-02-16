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
            {router === `/${locale}/blog/article` && <title>{t("blog5")}</title>}
            {router === `/blog/article` && <title>{t("blog5")}</title>}

            {router === `/${locale}/blog/article` && <meta name="description" content={t("blog5")}/>}
            {router === `/blog/article` && <meta name="description" content={t("blog5")}/>}

            {router === `/${locale}/blog/article` && <meta property="og:title" content={t("blog5")}/>}
            {router === `/blog/article` && <meta property="og:title" content={t("blog5")}/>}

            {router === `/${locale}/blog/article` && <meta property="og:description" content={t("blog5")}/>}
            {router === `/blog/article` && <meta property="og:description" content={t("blog5")}/>}

            {router === `/${locale}/blog/article` &&
                <link hrefLang="en-UA" href="https://samwash.ua/en/blog/article" rel="alternate"/>}
            {router === `/blog/article` &&
                <link hrefLang="en-UA" href="https://samwash.ua/en/blog/article" rel="alternate"/>}

            {router === `/${locale}/blog/article` &&
                <link hrefLang="ru-UA" href="https://samwash.ua/ru/blog/article" rel="alternate"/>}
            {router === `/blog/article` &&
                <link hrefLang="ru-UA" href="https://samwash.ua/ru/blog/article" rel="alternate"/>}

            {router === `/${locale}/blog/article` &&
                <link hrefLang="uk-UA" href={`https://samwash.ua/blog/article`} rel="alternate"/>}
            {router === `/blog/article` &&
                <link hrefLang="uk-UA" href={`https://samwash.ua/blog/article`} rel="alternate"/>}

            {children}
        </React.Fragment>
    )
}