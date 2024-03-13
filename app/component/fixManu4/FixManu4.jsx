"use client"

import s from './fixManu4.module.css';
import Link from "next-intl/link";
import {useEffect, useState} from "react";
import AccessoriesForWash from "@/app/[locale]/accessories-for-wash/page";
import Chemistry from "@/app/[locale]/chemistry/page";
import Opportunities from "@/app/[locale]/opportunities/page";

function FixManu4({active}) {

    let prevScrollY = 0;
    const [fixHeader, setFixHeader] = useState(false)
    const [fixHeader2, setFixHeader2] = useState(false)

    const handleScroll = () => {
        const width = () => {
            let w = 360

            if(window.innerWidth > 1325){
                w = 360
            }
            else if(window.innerWidth < 770){
                w = 190
            }
            else if(window.innerWidth < 1280){
                w = 210
            }
            else if(window.innerWidth < 1325){
                w = 300
            }
            return w
        }

        const currentScrollY = window.scrollY;
        if (currentScrollY < width()) {
            setFixHeader(false);
            setFixHeader2(false);
        }
        else if (currentScrollY > prevScrollY) {
            setFixHeader(true);
            setFixHeader2(false)
        }
        else if (currentScrollY < prevScrollY) {
            setFixHeader2(true)
            setFixHeader(false)
        }
        else {
            setFixHeader2(false)
            setFixHeader(false);
        }
        prevScrollY = currentScrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);

    return (
        <section className={s.menu_tab_section}>
            <div className='main-container'>
                <div className={`${s.menu_tab} ${fixHeader ? s.fixed : ''} ${fixHeader2 ? s.fixed2 : ''}`}>
                    <Link href='/'
                          className={`${s.menu_item} ${active === 1 ? s.currentItem : undefined}`}>
                        Техніки автомийки
                    </Link>
                    <Link href='/modernizations-and-expansions'
                          className={`${s.menu_item} ${active === 2 ? s.currentItem : undefined}`}>
                        Модернізації та розширення
                    </Link>
                    <Link href='/kits-OEM'
                          className={`${s.menu_item} ${active === 3 ? s.currentItem : undefined}`}>
                        OEM комплекти
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default FixManu4;