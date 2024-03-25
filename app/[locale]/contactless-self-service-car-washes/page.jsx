"use client"

import s from './contactless.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import FixManu5 from "@/app/component/fixManu5/FixManu5";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import ConfigureWash from "@/app/component/configureWash/ConfigureWash";
import {useEffect, useState} from "react";

function Contactless() {

    const t = useTranslations("contactless-self-service-car-washes");

    const [more, setMore] = useState(false)

    const container = () => {
        const wash = document.getElementById('container')
        wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
    }

    const modular = () => {
        const wash = document.getElementById('modular')
        wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
    }

    const tech = () => {
        localStorage.setItem("tech", "true");
    }

    const tech2 = () => {
        localStorage.setItem("tech2", "true");
    }

    const Smart = () => {
        localStorage.setItem("Smart", "true");
    }

    const Pixel = () => {
        localStorage.setItem("Pixel", "true");
    }

    const MarcoBanner = () => {
        localStorage.setItem("MarcoBanner", "true");
    }

    const MarcoGlass = () => {
        localStorage.setItem("MarcoGlass", "true");
    }

    const Marchello = () => {
        localStorage.setItem("Marchello", "true");
    }

    const Ufo = () => {
        localStorage.setItem("Ufo", "true");
    }

    useEffect(() => {
        let loc = localStorage.getItem("container");

        if(loc === 'true'){
            const wash = document.getElementById('container')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("container");
        }
    }, []);

    useEffect(() => {
        let loc = localStorage.getItem("modular");

        if(loc === 'true'){
            const wash = document.getElementById('modular')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("modular");
        }
    }, []);


    return (
        <div>

            <section className='head-image'>
                <Image src='/contactless/contactless.jpg' alt='' width={2600} height={500}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("contactless1")}
                        </li>
                    </ul>
                    <h1>{t("contactless1")}</h1>
                </div>
            </section>

            <FixManu5 active={2}/>

            <section className={s.section_gray}>
                <div className="main-container">
                    <div className={s.box_wash}>
                        <h2>Контейнерна автомийка</h2>
                        <Image src='/contactless/wash1.png' alt='' width={560} height={200}/>
                        <div className={s.div_but} onClick={container}>
                            <ButtonRedWithoutLink text='container'/>
                        </div>
                    </div>
                    <div className={s.box_wash}>
                        <h2>Модульна автомийка</h2>
                        <Image src='/contactless/wash2.png' alt='' width={560} height={200}/>
                        <div className={s.div_but} onClick={modular}>
                            <ButtonRedWithoutLink text='modular'/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section} id='container'>
                <div className="main-container">
                    <div className={s.wrapper}>
                        <div className="section-header">
                            <h2>
                                <small>ПІДВИЩЕНА БЕЗПЕКА</small>
                                <strong>Контейнерна автомийка</strong>
                            </h2>
                        </div>
                        <div className={s.text_aline}>
                            <Image src='/contactless/wash3.png' alt='' width={1200} height={400}/>
                        </div>
                        <div className={s.text_div}>
                            <p>
                                Контейнерні автомийки рекомендуються для місць з високою та середньою інтенсивністю руху
                                та ідеально підходять для великої кількості станцій.
                            </p>
                            <p>
                                Вся техніка автомийки розміщена в спеціальному контейнері. Таке рішення забезпечує
                                велику зручність роботи автомийки (особливо взимку), а також може підвищити безпеку
                                готівкових операцій.
                            </p>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Місця з високою та середньою відвідуваністю.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Чудово працюватиме в густонаселених мікрорайонах, торгових центрах і АЗС, а також у
                                    будь-якому іншому місці, призначеному для обслуговування великої кількості клієнтів.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Рішення для великих міст.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Мийка розрахована на велику кількість станцій.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Випускається в двох варіантах технології прання:
                                    <ul>
                                        <li>
                                            <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                            <Image src='/other/comp1.png' alt='' width={28} height={18}
                                                   className={s.add_img}/>
                                            <b>SAMWASH CarWash – базове прання з використанням порошку</b>
                                        </li>
                                        <li>
                                            <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                            <Image src='/other/comp2.png' alt='' width={28} height={18}
                                                   className={s.add_img}/>
                                            <b>SAMWASH SelfWash – базове миття з використанням рідких хімікатів.</b>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_gray}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Переваги контейнерної мийки</strong>
                        </h2>
                    </div>
                    <ul className={s.box_div}>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/other/svg/gears.svg' alt='' width={64} height={64}/>
                            </div>
                            <p>Легке та швидке розширення</p>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/contactless/icon2.svg' alt='' width={64} height={64}/>
                            </div>
                            <p>Зручна експлуатація</p>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/contactless/icon3.svg' alt='' width={64} height={64}/>
                            </div>
                            <p>Підвищена безпека збережених грошей</p>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/contactless/icon4.svg' alt='' width={64} height={64}/>
                            </div>
                            <p>Місце для зберігання хімікатів</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Контейнерна техніка автомийки</strong>
                        </h2>
                        <p>
                            Технологія SAMWASH - це поєднання високоякісних компонентів і сучасних рішень. Наша
                            інноваційна контейнерна технологія може бути встановлена не тільки в контейнері SAMWASH,
                            а й в інших пристосованих для цього будівлях. Наші технологи здатні адаптувати установку
                            мийної техніки до будь-якого приміщення інвестора. Це чудове рішення для власників
                            існуючого бізнесу, що дозволяє їм скоротити інвестиційні витрати.
                        </p>
                        <div className={s.div_but} onClick={tech}>
                            <ButtonRedArrowRight text='construction-technology' link='/washing-technique'/>
                        </div>
                    </div>
                    <div className={s.tech_block}>
                        <div className={s.block_image}>
                            <Image src='/contactless/wash4.png' alt='' width={500} height={350}/>
                        </div>
                        <div className={s.text_div2}>
                            <div className={s.item}>
                                <h4>Інтелектуальне управління</h4>
                                <p>
                                    Промисловий комп’ютер з рідкокристалічним дисплеєм і власним програмним
                                    забезпеченням, що дозволяє керувати всіма функціями автомийки, в тому числі
                                    дистанційно.
                                </p>
                            </div>
                            <div className={s.item}>
                                <h4>Точна система дозування</h4>
                                <p>
                                    Найвищу якість миття автомобілів ваших клієнтів забезпечують електронні насоси для
                                    кожної програми мийки з використанням рідких хімікатів і дозатор порошку (для версії
                                    SAMWASH CarWash).
                                </p>
                            </div>
                            <div className={s.item}>
                                <h4>Система високого тиску</h4>
                                <p>
                                    Високопродуктивні промислові насоси (SAMWASH CAT 340D або Hawk), що приводяться в
                                    дію двошвидкісними двигунами, разом із триступеневою системою очищення води
                                    гарантують належні умови миття автомобіля.
                                </p>
                            </div>
                            <div className={s.item}>
                                <h4>Міцна конструкція</h4>
                                <p>
                                    Рама з нержавіючої сталі захищає всі життєво важливі елементи мийки, а продумане
                                    розташування забезпечує легкий доступ до всіх елементів, які потребують постійної
                                    експлуатації та обслуговування.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_gray}>
                <div className="main-container">
                    <div className={s.photo_div}>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_blue}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong style={{color: 'white'}}>Подивіться відео</strong>
                        </h2>
                    </div>
                    <div className={s.photo_div}>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery"
                               href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                                <iframe
                                    src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                    title="Управління освітою автомийки" loading="lazy"/>
                            </a>
                        </div>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery"
                               href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                                <iframe
                                    src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                    title="Управління освітою автомийки" loading="lazy"/>
                            </a>
                        </div>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery"
                               href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                                <iframe
                                    src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                    title="Управління освітою автомийки" loading="lazy"/>
                            </a>
                        </div>
                        <div className={s.photo_item}>
                            <a data-fancybox="gallery"
                               href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                                <iframe
                                    src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                    title="Управління освітою автомийки" loading="lazy"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section} id='modular'>
                <div className="main-container">
                    <div className={s.wrapper}>
                        <div className="section-header">
                            <h2>
                                <small>ПРАКТИЧНА ЕРГОНОМІКА</small>
                                <strong>Модульна автомийка</strong>
                            </h2>
                        </div>
                        <div className={s.text_aline}>
                            <Image src='/contactless/wash3.png' alt='' width={1200} height={400}/>
                        </div>
                        <div className={s.text_div}>
                            <p>
                                Контейнерні автомийки рекомендуються для місць з високою та середньою інтенсивністю руху
                                та ідеально підходять для великої кількості станцій.
                            </p>
                            <p>
                                Вся техніка автомийки розміщена в спеціальному контейнері. Таке рішення забезпечує
                                велику зручність роботи автомийки (особливо взимку), а також може підвищити безпеку
                                готівкових операцій.
                            </p>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Місця з високою та середньою відвідуваністю.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Чудово працюватиме в густонаселених мікрорайонах, торгових центрах і АЗС, а також у
                                    будь-якому іншому місці, призначеному для обслуговування великої кількості клієнтів.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Рішення для великих міст.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Мийка розрахована на велику кількість станцій.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Випускається в двох варіантах технології прання:
                                    <ul>
                                        <li>
                                            <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                            <Image src='/other/comp1.png' alt='' width={28} height={18}
                                                   className={s.add_img}/>
                                            <b>SAMWASH CarWash – базове прання з використанням порошку</b>
                                        </li>
                                        <li>
                                            <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                            <Image src='/other/comp2.png' alt='' width={28} height={18}
                                                   className={s.add_img}/>
                                            <b>SAMWASH SelfWash – базове миття з використанням рідких хімікатів.</b>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_gray}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Переваги модульної мийки</strong>
                        </h2>
                    </div>
                    <ul className={s.box_div}>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/other/svg/gears.svg' alt='' width={64} height={64}/>
                            </div>
                            <p>Елегантний зовнішній вигляд</p>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/contactless/icon5.svg' alt='' width={64} height={64}/>
                            </div>
                            <p>Економія місця</p>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/contactless/icon6.svg' alt='' width={64} height={64}/>
                            </div>
                            <p>Легке та швидке розширення</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ВЕЛИКІ МОЖЛИВОСТІ В КОМПАКТНОМУ КОРПУСІ</small>
                            <strong>Технологія модульної мийки</strong>
                        </h2>
                        <p>
                            Модульна автомийка - це повна технологія мийки SAMWASH, укладена в компактний корпус з
                            нержавіючої сталі. Незважаючи на зменшений розмір, модульна технологія забезпечує однакову
                            якість прибирання та дозволяє розширити пристрій найважливішими аксесуарами, які полегшують
                            ведення бізнесу.
                        </p>
                        <div className={s.div_but} onClick={tech2}>
                            <ButtonRedArrowRight text='modular-technology' link='/washing-technique'/>
                        </div>
                    </div>
                    <div className={s.tech_block}>
                        <div className={s.text_div2}>
                            <div className={s.item}>
                                <h4>Компактний корпус</h4>
                                <p>
                                    Несуча конструкція та корпус з нержавіючої сталі, дверцята з персоналізованою
                                    графікою, вбудований зручний тримач для пістолета зі списком.
                                </p>
                            </div>
                            <div className={s.item}>
                                <h4>Техніка прання</h4>
                                <p>
                                    Повна техніка прання SAMWASH, зберігаючи всі властивості. Залежно від версії,
                                    модуль SAMWASH дозволяє працювати до 4 мийних станцій.
                                </p>
                            </div>
                            <div className={s.item}>
                                <h4>Панель управління</h4>
                                <p>
                                    Вбудована панель управління з програмними кнопками, лічильником і монетоприймачем.
                                    Додатковий зчитувач платіжних карток і зчитувач карток лояльності.
                                </p>
                            </div>
                        </div>
                        <div className={s.block_image}>
                            <Image src='/contactless/wash5.png' alt='' width={600} height={300}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_blue}>
                <div className="main-container">
                    <div className={s.photo_div2}>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                        <div className={s.photo_item2}>
                            <a data-fancybox="gallery" href={'/gallery/image1.jpg'}>
                                <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                            </a>
                        </div>
                    </div>
                    <div className={s.div_but}>
                        <ButtonRedArrowRight text='gallery' link='/gallery-of-project'/>
                    </div>
                </div>
            </section>

            <ConfigureWash/>

            <section className={s.section_blue}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small style={{color: 'white'}}>АВТОМИЙКА ПІД ВАШИЙ БІЗНЕС</small>
                            <strong style={{color: 'white'}}>Параметри конфігурації</strong>
                        </h2>
                    </div>
                    <ul className={s.box_div}>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/other/svg/gears.svg' alt='' width={64} height={64}/>
                            </div>
                            <h4>компоненти автомийки</h4>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/contactless/icon7.svg' alt='' width={64} height={64}/>
                            </div>
                            <h4>аксесуари для автомийки</h4>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/contactless/icon6.svg' alt='' width={64} height={64}/>
                            </div>
                            <h4>персоналізація зовнішнього вигляду</h4>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/contactless/icon8.svg' alt='' width={64} height={64}/>
                            </div>
                            <h4>сучасні платежі</h4>
                        </li>
                    </ul>
                    <div className={s.div_but}>
                        <ButtonRedArrowRight text='configuration' link='/opportunities'/>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.wrapper}>
                        <h2 className={s.detailsH2}>Мийки самообслуговування - перевірена якість та
                            багаторічний досвід</h2>
                        <p className={s.detailsP}>
                            Ми працюємо на ринку вже більше 30 років, і список задоволених клієнтів стає все більшим. Це
                            дозволяє стверджувати, що нас відрізняє багаторічний досвід і висока якість, перевірена
                            багатьма
                            інвесторами. Перш за все, ми орієнтуємося на сучасні мийні технології, високу якість
                            автомийки,
                            а також передові ІТ-рішення. Наш пріоритет - задоволення наших клієнтів. Тому ми прагнемо,
                            щоб
                            кожна мийка самообслуговування була адаптована до потреб клієнта та вимог до місця
                            розташування.
                            За час існування SAMWASH багато клієнтів довірилися нам і повертаються до нас, розширюючи
                            власні
                            послуги новими рішеннями та локаціями. Для нас це найцінніше підтвердження високої якості
                            послуг
                            і водночас мотивація для подальшого розвитку компанії.
                        </p>
                        <p className={s.detailsP}>
                            Ми є професійним виробником автомийок. Основною метою нашої компанії є забезпечення
                            споживачів
                            сучасною та якісною продукцією, зберігаючи повну безпеку праці та принципи мінімізації
                            викидів у
                            навколишнє середовище. Розгляньте можливість співпраці з перевіреним брендом, який точно не
                            розчарує ваших очікувань. Наші безконтактні мийки використовують передові технологічні
                            рішення,
                            які покращують функціональність, ефективність і комфорт використання.
                        </p>
                        <p className={s.read_more} onClick={() => setMore(!more)}>читати далі</p>
                        <div className={s.details} style={more ? {display: 'block'} : {display: 'none'}}>
                            <h2>Безконтактні мийки – чому варто їх обирати?</h2>
                            <p>
                                Є багато причин, чому варто обрати наші безконтактні мийки. Кожен день ми аналізуємо
                                потреби наших клієнтів, щоб технології та системи мийки, які ми пропонуємо, ставали все
                                кращими. Ми адаптуємо всі наші продукти до вимог підрядників і їх різноманітних потреб у
                                місці розташування. Крім того, ми пропонуємо надійні технології та ІТ-рішення, які
                                дозволяють належне дистанційне керування автомийкою. Кінцеві продукти, які потрапляють
                                до клієнтів, гарантують неоціненну ефективність, а також довгострокову функціональність.
                                Завдяки всім цим рішенням мийка самообслуговування залучає постійних клієнтів,
                                пропонуючи комплексну послугу з мийки. Конструкції мийки розроблені та створені таким
                                чином, щоб привертати увагу та спонукати людей користуватися послугами мийки. Ми
                                використовуємо привабливі банери, знаки та освітлення, які легко побачити. Тому можна
                                сказати, що наші споруди виконують рекламну функцію. Ми надаємо вам можливість
                                використовувати на них власний логотип.
                            </p>
                            <p>
                                Ми професіонали своєї справи. Ми можемо допомогти кожному клієнту вибрати найкраще
                                рішення та підібрати його до його фінансових можливостей та наявного приміщення. Ми
                                підбираємо привабливі аксесуари для автомийки, які впливають на привабливість бізнесу.
                                Наші автомийки можуть базуватися як на базовій порошковій мийці, так і на рідких
                                хімікатах, які ви також отримаєте в нашій пропозиції. Ви самі вибираєте тип хімікатів,
                                які ви хочете використовувати на своєму підприємстві. Для реалізації кожного проекту ми
                                використовуємо комплектуючі від відомих і перевірених виробників. Цю продукцію варто
                                вибирати ще й тому, що кожне сучасне рішення проходить кількісні та якісні тести. Також
                                нас вирізняє можливість налаштування автомийки, завдяки чому клієнти можуть
                                використовувати дистанційне керування бізнесом за допомогою програми на своєму
                                смартфоні.
                            </p>
                            <h2>Безконтактні автомийки та їх зручності</h2>
                            <p>
                                Кожна безконтактна автомийка, яку ми виробляємо, має перевагу на ринку завдяки
                                технологіям і численним зручностям. Доступні функції прості та зручні у використанні. Це
                                величезна перевага для вашого бізнесу. Мийка самообслуговування пропонує багато
                                можливостей. Привабливість програм прання та різноманітність способів оплати дозволяє
                                адаптувати їх під потреби клієнта. Хтось вирішує лише промити машину, а хтось вибирає
                                всі програми мийки. Завдяки цьому ваша автомийка не потребує обслуговування для водіїв
                                із різними потребами.
                            </p>
                            <p>
                                Наші безконтактні автомийки безпечні для кузовів автомобілів. Ми пропонуємо спеціальну
                                професійну хімію для них. Кожна безконтактна мийка може працювати практично цілий рік,
                                що робить автомийку самообслуговування привабливою інвестицією, на якій ви постійно
                                заробляєте гроші.
                            </p>
                            <h2>Мийки самообслуговування - інвестиція, яка окупається</h2>
                            <p>
                                Будівництво автомийки самообслуговування - важливе рішення, яке ви обов'язково захочете
                                ретельно обдумати. Хорошим рішенням для перевірки пропозиції автомийки є безпосередня
                                зустріч з представником компанії в обраному місці або в головному офісі нашої компанії.
                                Після цього можна буде обговорити всі ваші потреби та порівняти пропозиції. Як
                                професійний виробник автомийок ми усвідомлюємо, що безконтактна мийка – це бізнес, який
                                повинен приносити гроші. Тому ми із задоволенням аналізуємо прибутковість і надаємо
                                дані, необхідні для отримання умов розвитку.
                            </p>
                        </div>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Сталеві конструкції</strong>
                            </h2>
                        </div>
                        <p className={s.detailsP}>
                            Вибір конструкції автомийки - важливе рішення для підприємця. Навіс автомийки – це
                            перше, що бачить водій, проїжджаючи вулицею. Конструкція виконує не тільки захисну
                            функцію (закриває прилади в автомийці), але і рекламну. Важливо, щоб він був естетичним
                            і відповідав основним стандартам, прийнятим в галузі. У SAMWASH ми пропонуємо широкий вибір
                            типів конструкцій - дізнайтеся про їх переваги та виберіть модель для себе.
                        </p>
                        <div className={s.wash_block}>
                            <div className={s.wash}>
                                <Image src='/contactless/wash6.png' alt='' width={400} height={150}/>
                                <h4>Конструкція Smart</h4>
                                <p>
                                    Проста елегантна конструкція з гарячеоцинкованої сталі з барвистим аттиком і плоским
                                    трапецієподібним дахом.
                                </p>
                                <div className={s.div_but} onClick={Smart}>
                                    <Link href='/constructions-of-car-washes'>Конструкція Smart</Link>
                                </div>
                            </div>
                            <div className={s.wash}>
                                <Image src='/contactless/wash6.png' alt='' width={400} height={150}/>
                                <h4>Конструкція Pixel</h4>
                                <p>
                                    Проста елегантна конструкція з гарячеоцинкованої сталі з барвистим аттиком і плоским
                                    трапецієподібним дахом.
                                </p>
                                <div className={s.div_but} onClick={Pixel}>
                                    <Link href='/constructions-of-car-washes'>Конструкція Pixel</Link>
                                </div>
                            </div>
                            <div className={s.wash}>
                                <Image src='/contactless/wash6.png' alt='' width={400} height={150}/>
                                <h4>Конструкція Marco Banner</h4>
                                <p>
                                    Проста елегантна конструкція з гарячеоцинкованої сталі з барвистим аттиком і плоским
                                    трапецієподібним дахом.
                                </p>
                                <div className={s.div_but} onClick={MarcoBanner}>
                                    <Link href='/constructions-of-car-washes'>Конструкція Marco Banner</Link>
                                </div>
                            </div>
                            <div className={s.wash}>
                                <Image src='/contactless/wash6.png' alt='' width={400} height={150}/>
                                <h4>Конструкція Marco Glass</h4>
                                <p>
                                    Проста елегантна конструкція з гарячеоцинкованої сталі з барвистим аттиком і плоским
                                    трапецієподібним дахом.
                                </p>
                                <div className={s.div_but} onClick={MarcoGlass}>
                                    <Link href='/constructions-of-car-washes'>Конструкція Marco Glass</Link>
                                </div>
                            </div>
                            <div className={s.wash}>
                                <Image src='/contactless/wash6.png' alt='' width={400} height={150}/>
                                <h4>Конструкція Marchello</h4>
                                <p>
                                    Проста елегантна конструкція з гарячеоцинкованої сталі з барвистим аттиком і плоским
                                    трапецієподібним дахом.
                                </p>
                                <div className={s.div_but} onClick={Marchello}>
                                    <Link href='/constructions-of-car-washes'>Конструкція Marchello</Link>
                                </div>
                            </div>
                            <div className={s.wash}>
                                <Image src='/contactless/wash6.png' alt='' width={400} height={150}/>
                                <h4>Конструкція Ufo</h4>
                                <p>
                                    Проста елегантна конструкція з гарячеоцинкованої сталі з барвистим аттиком і плоским
                                    трапецієподібним дахом.
                                </p>
                                <div className={s.div_but} onClick={Ufo}>
                                    <Link href='/constructions-of-car-washes'>Конструкція Ufo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className={s.main_container2}>
                    <div className="section-header">
                        <h2>
                            <small>НАШІ ПРОЕКТИ</small>
                            <strong>Що говорять про нас наші клієнти</strong>
                        </h2>
                    </div>
                    <div className={s.showreel_wrapper}>
                        <div className={`${s.showreel} ${s.item_a}`}>
                            <div className={s.showreel_left_img_right_text}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/mainPage/box6/image1.jpg' alt='' width={500} height={500}/>
                                </div>
                                <div className={s.text_wrapper}>
                                    <h3>Davidiv</h3>
                                    <p></p>
                                    <Link href='/realization/Davydov'
                                          className={`${s.but_more} btn`}>читати далі</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.showreel} ${s.item_b}`}>
                            <div className={s.showreel_left_img_right_text}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/mainPage/box6/image2.jpg' alt='' width={300} height={600}/>
                                </div>
                                <div className={s.text_wrapper}>
                                    <h3>ЩЕЦИН, 10ТКА</h3>
                                    <p></p>
                                    <Link href='/realization' className={`${s.but_more} btn`}>читати далі</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.showreel} ${s.item_c}`}>
                            <div className={s.showreel_left_img_right_text}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/mainPage/box6/image3.jpg' alt='' width={200} height={600}/>
                                </div>
                                <div className={s.text_wrapper}>
                                    <h3>КОСЦЯН</h3>
                                    <p></p>
                                    <Link href='/realization' className={`${s.but_more} btn`}>читати далі</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.showreel} ${s.item_d}`}>
                            <div className={s.showreel_top_img_bottom_text}>
                                <div className={s.image_wrapper_text}>
                                    <Image src='/mainPage/box6/image4.jpg' alt='' width={400} height={600}/>
                                </div>
                                <div className={s.text_wrapper_item}>
                                    <h3>Злотория</h3>
                                    <p>Історія успіху - 15 років співпраці з BKF</p>
                                    <Link href='/realization' className={`${s.but_more} btn`}>читати далі</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='center-btn'>
                        <ButtonRedArrowRight text='main104' link='/realization'/>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contactless;