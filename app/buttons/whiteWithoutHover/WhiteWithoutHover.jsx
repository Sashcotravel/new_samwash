import React from 'react';
import Link from "next-intl/link";
import s from "./style.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";

function WhiteWithoutHover({link, text, clas}){

    const t = useTranslations();

    return (
        <Link href={link} className={`${s.formBtn} ${clas}`}>
            {t(`${text}`)}
            <Image src='/mainPage/mainSlider/rightArrowWhite.svg' alt='' width={5} height={5}/>
        </Link>
    );
}

export default WhiteWithoutHover;