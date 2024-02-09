import React from "react";
import {useTranslations} from "next-intl";

export default function ContactsLayout({children}){

    const t = useTranslations("contact");

    return (
        <React.Fragment>
            <title>{t("contact3")}</title>
            <meta name="description" content={t("contact3")}/>
            <meta property="og:title" content={t("contact3")}/>
            <meta property="og:description" content={t("contact3")}/>
            <link rel="alternate" hrefLang="en-UA" href="https://samwash.ua/en/contacts"/>
            <link hrefLang="ru-UA" href="https://samwash.ua/ru/contacts" rel="alternate"/>
            <link hrefLang="uk-UA" href="https://samwash.ua/contacts" rel="alternate"/>
            <link rel="apple-touch-icon" href='/logo144.png'/>
           <meta property="og:image" content='/logo144.png'/>
            {children}
        </React.Fragment>
    )
}