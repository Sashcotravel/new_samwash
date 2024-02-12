"use client"

import s from './blog.module.css'
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import {useEffect, useState} from "react";


export default async function Blog() {

    const t = useTranslations("blog");

    const locale = useLocale();
    const [articleAll, setArticleAll] = useState([])

    async function getData() {
        if (articleAll.length === 0) {
            const response = await fetch(`https://cb.samwash.ua/api/v1/blog/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}?perPage=6`, {
                next: {revalidate: 60}
            });
            const data = await response.json();
            setArticleAll(data.data.data)
            console.log(data.data.data)
            return data.data.data;
        } else {
            return articleAll
        }
    }

    useEffect(() => {
        getData()
    }, []);



    return (
        <div>

            <section className={s.head_image}>
                <Image src='/blog/blogMain.png' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("blog1")}</Link>
                        </li>
                        <li>
                            {t("blog2")}
                        </li>
                    </ul>
                    <h1>{t("blog2")}</h1>
                </div>
            </section>

            <section>

            </section>

        </div>
    );
}