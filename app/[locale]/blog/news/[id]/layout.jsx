"use client"

import React, {useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import axios from "axios";

export default function ContactsLayout({children}){

    const t = useTranslations("blog");
    const locale = useLocale();
    const {id} = useParams();
    const [article, setArticleOne] = useState([])

    if(article.length === 0){
        axios
            .get(`https://cb.samwash.ua/api/v1/blog/${locale === "en" ? "en" : locale === "ru" ? "ru" : "ua"}/${id}`)
            .then(res => {
                const data = res.data.data
                setArticleOne(data)
            })
    }

    console.log(article)

    return (
        <React.Fragment>
            <title>{t("blog")}</title>
            <meta name="description" content={t("blog")}/>
            <meta property="og:title" content={t("blog")}/>
            <meta property="og:description" content={t("blog")}/>
            <link hrefLang="en-UA" href="https://samwash.ua/en/blog" rel="alternate"/>
            <link hrefLang="ru-UA" href="https://samwash.ua/ru/blog" rel="alternate"/>
            <link hrefLang="uk-UA" href={`https://samwash.ua/blog`} rel="alternate"/>
            <link rel="apple-touch-icon" href='/logo144.png'/>
            <meta property="og:image" content='/logo144.png'/>
            {children}
        </React.Fragment>
    )
}