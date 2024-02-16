"use client"

import React, {useEffect, useState} from 'react';
import s from './carwashManager.module.css'
import Link from "next-intl/link";
import Image from "next/image";
import {useTranslations} from "next-intl";
import FixManu from "@/app/component/fixManu/FixManu";

function CarwashManager() {

    const t = useTranslations("carwash-manager");


    return (
        <div>

            <section className='head-image'>
                <Image src='/managerCarwash/head-carwash-manager.jpg' alt='' width={1900} height={300} />
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("manager1")}
                        </li>
                    </ul>
                    <h1>{t("manager1")}</h1>
                </div>
            </section>

            <FixManu active={2} />

            <p style={{height: '200vh'}}></p>

        </div>
    );
}

export default CarwashManager;