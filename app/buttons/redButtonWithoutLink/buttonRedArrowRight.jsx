import React from 'react';
import Link from "next-intl/link";
import s from "./style.module.css";
import Image from "next/image";
import {useTranslations} from "next-intl";

function ButtonRedWithoutLink({text, clas}) {

    const t = useTranslations();

    return (
        <p className={`${s.formBtn} ${clas}`}>
            {t(`${text}`)}
            <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={5} height={5}/>
        </p>
    );
}

export default ButtonRedWithoutLink;