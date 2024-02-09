import React from 'react';
import Link from "next-intl/link";
import s from "./style.module.css";
import Image from "next/image";

function ButtonRedArrowRight({link, text, clas}) {
    return (
        <Link href={link} className={`${s.formBtn} ${clas}`}>
            { text }
            <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={5} height={5}/>
        </Link>
    );
}

export default ButtonRedArrowRight;