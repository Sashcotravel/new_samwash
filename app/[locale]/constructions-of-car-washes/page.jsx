"use client"

import s from './constructions.module.css';
import FixManu5 from "@/app/component/fixManu5/FixManu5";
import Image from "next/image";
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import {useEffect} from "react";


function Constructions() {

    const t = useTranslations("constructions-of-car-washes");

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    const configWash = () => {
        localStorage.setItem("configModern", "true");
    }

    useEffect(() => {
        let loc = localStorage.getItem("Smart");

        if(loc === 'true'){
            const wash = document.getElementById('Smart')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("Smart");
        }
    }, []);

    useEffect(() => {
        let loc = localStorage.getItem("Pixel");

        if(loc === 'true'){
            const wash = document.getElementById('Pixel')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("Pixel");
        }
    }, []);

    useEffect(() => {
        let loc = localStorage.getItem("MarcoBanner");

        if(loc === 'true'){
            const wash = document.getElementById('MarcoBanner')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("MarcoBanner");
        }
    }, []);

    useEffect(() => {
        let loc = localStorage.getItem("MarcoGlass");

        if(loc === 'true'){
            const wash = document.getElementById('MarcoGlass')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("MarcoGlass");
        }
    }, []);

    useEffect(() => {
        let loc = localStorage.getItem("Marchello");

        if(loc === 'true'){
            const wash = document.getElementById('Marchello')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("Marchello");
        }
    }, []);

    useEffect(() => {
        let loc = localStorage.getItem("Ufo");

        if(loc === 'true'){
            const wash = document.getElementById('Ufo')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("Ufo");
        }
    }, []);


    return (
        <div>

            <section className='head-image'>
                <Image src='/сonstructions/сonstructions.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("constructions1")}
                        </li>
                    </ul>
                    <h1>{t("constructions1")}</h1>
                </div>
            </section>

            <FixManu5 active={3}/>

            <section className={s.section_gray} id='Smart'>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Дизайн Smart</strong>
                            </h2>
                        </div>
                        <Image src='/сonstructions/coverPIXEL.jpg' alt='PIXEL' width={1200} height={400}
                               className={s.image_main}/>
                        <div>
                            <div className={s.info_one}>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Розміри стенду: 5 х 6 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Мийка транспортних засобів висотою до 3,5 м.
                                    </li>
                                </ul>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Гарячеоцинкована сталева конструкція, що відповідає стандарту EN ISO 1461.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Плоский дах з трапецієвидного листового металу.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурний аттик висотою 70 см, виготовлений з алюмінію, пофарбований порошковою
                                        фарбою, підсвічується RGB LED.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Логотип BKF об'ємний, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Напис «БЕЗКОНТАКТНА МИЙКА» просторовий, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурні алюмінієві корпуси стовпів, пофарбовані порошковою фарбою, підсвічуються
                                        світлодіодами RGB - усі передні та задні ніжки.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        6 точок світла на мийну станцію.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки - рекламні банери ПВХ з інструкцією по експлуатації.
                                    </li>
                                </ul>
                            </div>
                            <div className={s.info_one}>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Додаткові 3D написи на мансарді.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки з прозорого полікарбонату.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Відкрите положення (прив'язка до штанги) дозволяє мити транспорт на
                                        висоті до 4 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Сліпучий банер для непрохідного місця (баннер з ПВХ або полікарбонату).
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Арочна дах з полікарбонату.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.wrapper_images}>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section} id='Pixel'>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Дизайн Pixel</strong>
                            </h2>
                        </div>
                        <Image src='/сonstructions/coverSMART.jpg' alt='Smart' width={1200} height={400}
                               className={s.image_main}/>
                        <div>
                            <div className={s.info_one}>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Розміри стенду: 5 х 6 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Мийка транспортних засобів висотою до 3,5 м.
                                    </li>
                                </ul>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Гарячеоцинкована сталева конструкція, що відповідає стандарту EN ISO 1461.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Плоский дах з трапецієвидного листового металу.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурний аттик висотою 70 см, виготовлений з алюмінію, пофарбований порошковою
                                        фарбою, підсвічується RGB LED.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Логотип BKF об'ємний, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Напис «БЕЗКОНТАКТНА МИЙКА» просторовий, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурні алюмінієві корпуси стовпів, пофарбовані порошковою фарбою, підсвічуються
                                        світлодіодами RGB - усі передні та задні ніжки.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        6 точок світла на мийну станцію.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки - рекламні банери ПВХ з інструкцією по експлуатації.
                                    </li>
                                </ul>
                            </div>
                            <div className={s.info_one}>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Додаткові 3D написи на мансарді.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки з прозорого полікарбонату.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Відкрите положення (прив'язка до штанги) дозволяє мити транспорт на
                                        висоті до 4 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Сліпучий банер для непрохідного місця (баннер з ПВХ або полікарбонату).
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Арочна дах з полікарбонату.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.wrapper_images}>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_gray} id='MarcoBanner'>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Дизайн Marco Banner</strong>
                            </h2>
                        </div>
                        <Image src='/сonstructions/coverMARCO.jpg' alt='Marco Banner' width={1200} height={400}
                               className={s.image_main}/>
                        <div>
                            <div className={s.info_one}>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Розміри стенду: 5 х 6 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Мийка транспортних засобів висотою до 3,5 м.
                                    </li>
                                </ul>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Гарячеоцинкована сталева конструкція, що відповідає стандарту EN ISO 1461.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Плоский дах з трапецієвидного листового металу.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурний аттик висотою 70 см, виготовлений з алюмінію, пофарбований порошковою
                                        фарбою, підсвічується RGB LED.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Логотип BKF об'ємний, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Напис «БЕЗКОНТАКТНА МИЙКА» просторовий, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурні алюмінієві корпуси стовпів, пофарбовані порошковою фарбою, підсвічуються
                                        світлодіодами RGB - усі передні та задні ніжки.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        6 точок світла на мийну станцію.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки - рекламні банери ПВХ з інструкцією по експлуатації.
                                    </li>
                                </ul>
                            </div>
                            <div className={s.info_one}>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Додаткові 3D написи на мансарді.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки з прозорого полікарбонату.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Відкрите положення (прив'язка до штанги) дозволяє мити транспорт на
                                        висоті до 4 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Сліпучий банер для непрохідного місця (баннер з ПВХ або полікарбонату).
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Арочна дах з полікарбонату.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.wrapper_images}>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section} id='MarcoGlass'>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Дизайн Marco Glass</strong>
                            </h2>
                        </div>
                        <Image src='/сonstructions/coverMARCO1.jpg' alt='Marco Glass' width={1200} height={400}
                               className={s.image_main}/>
                        <div>
                            <div className={s.info_one}>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Розміри стенду: 5 х 6 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Мийка транспортних засобів висотою до 3,5 м.
                                    </li>
                                </ul>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Гарячеоцинкована сталева конструкція, що відповідає стандарту EN ISO 1461.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Плоский дах з трапецієвидного листового металу.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурний аттик висотою 70 см, виготовлений з алюмінію, пофарбований порошковою
                                        фарбою, підсвічується RGB LED.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Логотип BKF об'ємний, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Напис «БЕЗКОНТАКТНА МИЙКА» просторовий, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурні алюмінієві корпуси стовпів, пофарбовані порошковою фарбою, підсвічуються
                                        світлодіодами RGB - усі передні та задні ніжки.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        6 точок світла на мийну станцію.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки - рекламні банери ПВХ з інструкцією по експлуатації.
                                    </li>
                                </ul>
                            </div>
                            <div className={s.info_one}>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Додаткові 3D написи на мансарді.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки з прозорого полікарбонату.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Відкрите положення (прив'язка до штанги) дозволяє мити транспорт на
                                        висоті до 4 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Сліпучий банер для непрохідного місця (баннер з ПВХ або полікарбонату).
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Арочна дах з полікарбонату.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.wrapper_images}>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_gray} id='Marchello'>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Дизайн Marchello</strong>
                            </h2>
                        </div>
                        <Image src='/сonstructions/coverMARCHELLO.jpg' alt='Marchello' width={1200} height={400}
                               className={s.image_main}/>
                        <div>
                            <div className={s.info_one}>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Розміри стенду: 5 х 6 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Мийка транспортних засобів висотою до 3,5 м.
                                    </li>
                                </ul>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Гарячеоцинкована сталева конструкція, що відповідає стандарту EN ISO 1461.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Плоский дах з трапецієвидного листового металу.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурний аттик висотою 70 см, виготовлений з алюмінію, пофарбований порошковою
                                        фарбою, підсвічується RGB LED.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Логотип BKF об'ємний, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Напис «БЕЗКОНТАКТНА МИЙКА» просторовий, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурні алюмінієві корпуси стовпів, пофарбовані порошковою фарбою, підсвічуються
                                        світлодіодами RGB - усі передні та задні ніжки.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        6 точок світла на мийну станцію.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки - рекламні банери ПВХ з інструкцією по експлуатації.
                                    </li>
                                </ul>
                            </div>
                            <div className={s.info_one}>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Додаткові 3D написи на мансарді.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки з прозорого полікарбонату.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Відкрите положення (прив'язка до штанги) дозволяє мити транспорт на
                                        висоті до 4 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Сліпучий банер для непрохідного місця (баннер з ПВХ або полікарбонату).
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Арочна дах з полікарбонату.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.wrapper_images}>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section} id='Ufo'>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Дизайн Ufo</strong>
                            </h2>
                        </div>
                        <Image src='/сonstructions/UFO.webp' alt='Ufo' width={1200} height={400}
                               className={s.image_main}/>
                        <div>
                            <div className={s.info_one}>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Розміри стенду: 5 х 6 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Мийка транспортних засобів висотою до 3,5 м.
                                    </li>
                                </ul>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Гарячеоцинкована сталева конструкція, що відповідає стандарту EN ISO 1461.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Плоский дах з трапецієвидного листового металу.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурний аттик висотою 70 см, виготовлений з алюмінію, пофарбований порошковою
                                        фарбою, підсвічується RGB LED.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Логотип BKF об'ємний, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Напис «БЕЗКОНТАКТНА МИЙКА» просторовий, світиться, з ефектом підсвічування.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Ажурні алюмінієві корпуси стовпів, пофарбовані порошковою фарбою, підсвічуються
                                        світлодіодами RGB - усі передні та задні ніжки.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        6 точок світла на мийну станцію.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки - рекламні банери ПВХ з інструкцією по експлуатації.
                                    </li>
                                </ul>
                            </div>
                            <div className={s.info_one}>
                                <p>Стандартна комплектація:</p>
                                <ul style={{marginBottom: '20px'}}>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Додаткові 3D написи на мансарді.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки з прозорого полікарбонату.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Відкрите положення (прив'язка до штанги) дозволяє мити транспорт на
                                        висоті до 4 м.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Сліпучий банер для непрохідного місця (баннер з ПВХ або полікарбонату).
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Арочна дах з полікарбонату.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.wrapper_images}>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                            <div className={s.item}>
                                <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                                    <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_back}>
                <Image src='/opportunities/back-wash.jpg' alt='' width={2500} height={800}/>
                <div className={s.half_div_text}>
                    <div className={`section-header ${s.shadow}`}>
                        <h2>
                            <small></small>
                            <strong style={{color: 'white'}}>Ви думаєте про модернізацію структури
                                вашої автомийки?</strong>
                        </h2>
                        <p style={{color: 'white'}}>Зв'яжіться з нами, ми допоможемо вам адаптувати рішення.</p>
                    </div>
                    <Link href='/modernizations-and-expansions' onClick={configWash} className={s.link_form}>
                        <ButtonRedWithoutLink text='beloyalBut' />
                    </Link>
                </div>
            </section>

        </div>
    );
}

export default Constructions;