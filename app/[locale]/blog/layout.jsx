import React from "react";
import {useTranslations} from "next-intl";

export default function ContactsLayout({children}){

    const t = useTranslations("blog");

    return (
        <React.Fragment>
            <title>{t("blog")}</title>
            <meta name="description" content={t("blog")}/>
            <meta property="og:title" content={t("blog")}/>
            <meta property="og:description" content={t("blog")}/>
            <link hrefLang="en-UA" href="https://samwash.ua/en/blog" rel="alternate"/>
            <link hrefLang="ru-UA" href="https://samwash.ua/ru/blog" rel="alternate"/>
            <link hrefLang="uk-UA" href="https://samwash.ua/blog" rel="alternate"/>
            <link rel="apple-touch-icon" href='/logo144.png'/>
           <meta property="og:image" content='/logo144.png'/>
            {children}
        </React.Fragment>
    )
}