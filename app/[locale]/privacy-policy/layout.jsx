import React from "react";
import {useTranslations} from "next-intl";

export default function PrivacyLayout({children}){

    const t = useTranslations("privacy-policy");

    return (
        <React.Fragment>
            <title>{t("privacy-policyMeta")}</title>
            <meta name="description" content={t("privacy-policyMetaDesc").slice(0, 160)}/>
            <meta property="og:title" content={t("privacy-policyMeta")}/>
            <meta property="og:description" content={t("privacy-policyMetaDesc").slice(0, 160)}/>
            <link rel="apple-touch-icon" href='/logo144.png' />
            <meta property="og:image" content='/logo144.png' />
            <link hrefLang="en-UA" href="https://samwash.ua/en/privacy-policy" rel="alternate"/>
            <link hrefLang="ru-UA" href="https://samwash.ua/ru/privacy-policy" rel="alternate"/>
            <link hrefLang="uk-UA" href="https://samwash.ua/privacy-policy" rel="alternate"/>
            {children}
        </React.Fragment>
    )
}