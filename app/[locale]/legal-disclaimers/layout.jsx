import React from "react";
import {useTranslations} from "next-intl";

export default function PrivacyLayout({children}){

    const t = useTranslations("legal-disclaimers");

    return (
        <React.Fragment>
            <title>{t("h2")}</title>
            <meta name="description" content={t("p").slice(0, 160)}/>
            <meta property="og:title" content={t("h2")}/>
            <meta property="og:description" content={t("p").slice(0, 160)}/>
            <link rel="apple-touch-icon" href='/logo144.png' />
            <meta property="og:image" content='/logo144.png' />
            <link hrefLang="en-UA" href="https://samwash.ua/en/legal-disclaimers" rel="alternate"/>
            <link hrefLang="ru-UA" href="https://samwash.ua/ru/legal-disclaimers" rel="alternate"/>
            <link hrefLang="uk-UA" href="https://samwash.ua/legal-disclaimers" rel="alternate"/>
            {children}
        </React.Fragment>
    )
}