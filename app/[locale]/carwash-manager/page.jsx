"use client"

import React, {useEffect, useRef, useState} from 'react';
import s from './carwashManager.module.css'
import Link from "next-intl/link";
import Image from "next/image";
import {useTranslations} from "next-intl";
import FixManu from "@/app/component/fixManu/FixManu";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import FormUserDate from "@/app/component/formUserData/FormUserDate";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";


function CarwashManager() {

    const t = useTranslations("carwash-manager");
    const ref = useRef(null)
    const [form, setForm] = useState(false)

    const [active, setActive] = useState({
        first: true, second: false, three: false, four: false, five: false,
        six: false, seven: false, eight: false, ninth: false
    })

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    const openForm = () => {
        setForm(true)
        setTimeout(() => {
            ref.current?.scrollIntoView({behavior: 'smooth'})
        }, 200)
    }

    const setList = (position) => {
        setActive({
            first: position === 1,
            second: position === 2,
            three: position === 3,
            four: position === 4,
            five: position === 5,
            six: position === 6,
            seven: position === 7,
            eight: position === 8,
            ninth: position === 9
        });
    }


    return (
        <div>

            <section className='head-image'>
                <picture>

                    {/*<source media="(max-width: 450px)" srcSet='/mainPage/box2/box2_1.jpg'/>*/}

                    <source media="(max-width: 1440px)" srcSet='/mainPage/box2/box2_1.jpg'/>

                    <Image src='/managerCarwash/head.jpg' alt='' width={1900} height={300} />

                </picture>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            Віддалений доступ до автомийки
                        </li>
                    </ul>
                    <h1>Віддалений доступ до автомийки</h1>
                </div>
            </section>

            <FixManu active={2}/>

            <section className={s.gray_background}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>БЕЗПЕКА ТА КОМФОРТ</small>
                            <strong>Керуйте автомийкою віддалено</strong>
                        </h2>
                        <h4>Будьте в курсі подій, пов’язаних із роботою автомийки, коли вас там фізично немає.
                            Моніторинг і контроль системи самообслуговування, а також оцінка бізнесу</h4>
                        <p>За допомогою телефону або комп'ютера з будь-якого місця і в зручний для вас час ви отримаєте
                            необхідну інформацію про вашу автомийку. Ви дізнаєтеся, скільки заробила ваша мийка, і
                            перевірите, чи справно працюють найважливіші технічні елементи. Зручно і швидко, коли вам це
                            потрібно.</p>
                    </div>
                    <div className={s.two_column_list_with_center_image}>
                        <div className={s.third_column}>
                            <ul className={s.list_features}>
                                <li>
                                    <Image src='/managerCarwash/19.svg' alt=''
                                           width={50} height={50}/>
                                    <span>Віддалене управління</span>
                                </li>
                                <li>
                                    <Image src='/managerCarwash/ico-gray-graph.svg' alt=''
                                           width={50} height={50}/>
                                    <span>Фінансовий аналіз</span>
                                </li>
                                <li>
                                    <Image src='/managerCarwash/ico-gray-service.svg' alt=''
                                           width={50} height={50}/>
                                    <span>Сервіс</span>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_wrapper}>
                                <Image src='/managerCarwash/managerAutoWash.svg' alt='' width={1000} height={1000}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.list_reverse}>
                                <li>
                                    <Image src='/managerCarwash/ico-сірі-люди.svg' alt=''
                                           width={50} height={50}/>
                                    <span>Обслуговування автомийки</span>
                                </li>
                                <li>
                                    <Image src='/managerCarwash/ico-gray-analysis.svg' alt=''
                                           width={50} height={50}/>
                                    <span>Моніторинг системних параметрів</span>
                                </li>
                                <li>
                                    <Image src='/managerCarwash/ico-gray-alarm.svg' alt=''
                                           width={50} height={50}/>
                                    <span>Сигналізація</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.navy_background}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small style={{color: 'white'}}>ВАША АВТОМИЙКА ЛИШЕ В ОДНОМУ КЛІЦІ</small>
                            <strong style={{color: 'white'}}>З SamWash Watch ви отримуєте унікальні переваги</strong>
                        </h2>
                    </div>
                    <div className={s.one_column_list_with_tabs}>
                        <div className={`${s.tabs_list_wrapper} ${active.first ? s.ui_active : undefined}`}
                             onClick={() => setList(1)}>
                            <span className={`${s.tabs_number} ${active.first ? s.flex_active : undefined}`}>1</span>
                            <span className={`${s.tabs_description} ${active.first ? s.active_desc : undefined}`}>
                                ТЕХНІКА ПРАННЯ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.first ? undefined : {display: 'none'}}>
                            <div className={s.half_column2}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column2+' '+s.half_column3}>
                                <div className='section-header'>
                                    <h3>Техніка прання</h3>
                                </div>
                                <p>
                                    У SAMWASH ми використовуємо лише <b>надійні компоненти</b> для рішень, які
                                    відповідатимуть очікуванням найвибагливіших клієнтів. Ми пропонуємо як автомийки
                                    на основі перевіреної та високоефективної системи <b>порошкового миття</b>
                                    (безконтактні мийки SAMWASH CarWash), так і автомийки, обладнані системою рідкого
                                    хімічного миття (безконтактні мийки SAMWASH SelfWash, портальні мийки).
                                    Техніка автомийки SAMWASH — це технологічно передове рішення, створене з
                                    компонентів найвищої якості, які ми можемо адаптувати
                                    до <b>індивідуальних потреб клієнта</b>.
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        безконтактна контейнерна мийка (технологія на рамі в технічному контейнері)
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        модульна безконтактна мийка (технологія в модулі з нержавіючої сталі)
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        автоматична портальна мийка (щітка)
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.second ? s.ui_active : undefined}`}
                             onClick={() => setList(2)}>
                            <span className={`${s.tabs_number} ${active.second ? s.flex_active : undefined}`}>2</span>
                            <span className={`${s.tabs_description} ${active.second ? s.active_desc : undefined}`}>
                                БУДІВНИЦТВО</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.second ? undefined : {display: 'none'}}>
                            <div className={s.half_column2}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column2+' '+s.half_column3}>
                                <div className='section-header'>
                                    <h3>Будівництво</h3>
                                </div>
                                <p>
                                    Зовнішній вигляд автомийки має особливе значення, і <b>вибір автомийки часто
                                    залежить від її зовнішнього вигляду</b>. В процесі інвестування ви можете вибрати
                                    тип конструкції та підібрати додаткові візуальні елементи та освітлення, які
                                    впливають на привабливість вашої мийки. Ми також допоможемо вам вирішити, чи
                                    варто інвестувати у <b>відкриту станцію</b>, яка полегшить мийку автобусів і
                                    транспортних засобів доставки.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.three ? s.ui_active : undefined}`}
                             onClick={() => setList(3)}>
                            <span className={`${s.tabs_number} ${active.three ? s.flex_active : undefined}`}>3</span>
                            <span className={`${s.tabs_description} ${active.three ? s.active_desc : undefined}`}>
                                ПЕРСОНАЛІЗАЦІЯ ЗОВНІШНЬОГО ВИГЛЯДУ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.three ? undefined : {display: 'none'}}>
                            <div className={s.half_column2}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column2+' '+s.half_column3}>
                                <div className='section-header'>
                                    <h3>Персоналізація зовнішнього вигляду</h3>
                                </div>
                                <p>
                                    У SAMWASH ви повністю впливаєте на зовнішній вигляд вашої майбутньої мийки. Ми
                                    пропонуємо величезний вибір візуальної ідентифікації для автомийок - <b>від
                                    розміщення логотипу вашої компанії на горищі до повної зміни кольорів і графічного
                                    оформлення пристроїв і елементів конструкції</b>. Вибір за вами - ви можете
                                    скористатися впізнаваністю бренду BKF або створити власний бренд.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.four ? s.ui_active : undefined}`}
                             onClick={() => setList(4)}>
                            <span className={`${s.tabs_number} ${active.four ? s.flex_active : undefined}`}>4</span>
                            <span className={`${s.tabs_description} ${active.four ? s.active_desc : undefined}`}>
                                ПРОГРАМИ ПРАННЯ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.four ? undefined : {display: 'none'}}>
                            <div className={s.half_column2}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column2+' '+s.half_column3}>
                                <div className='section-header'>
                                    <h3>Програми прання</h3>
                                </div>
                                <p>
                                    Крім стандартних програм мийки, ми також пропонуємо додаткові опції, які підвищать
                                    конкурентоспроможність вашої мийки та в поєднанні з
                                    <Link href='/blog' style={{color: 'red', fontWeight: '700'}}> професійною
                                        хімією SAMWASH </Link> здивують ваших клієнтів кінцевим ефектом мийки.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.five ? s.ui_active : undefined}`}
                             onClick={() => setList(5)}>
                            <span className={`${s.tabs_number} ${active.five ? s.flex_active : undefined}`}>5</span>
                            <span className={`${s.tabs_description} ${active.five ? s.active_desc : undefined}`}>
                                СУЧАСНІ ПЛАТІЖНІ СИСТЕМИ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.five ? undefined : {display: 'none'}}>
                            <div className={s.half_column2}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column2+' '+s.half_column3}>
                                <div className='section-header'>
                                    <h3>Сучасні платіжні системи</h3>
                                </div>
                                <p>
                                    Чи знаєте ви, що понад 80% клієнтів відвідують автомийку залежно від наявності в
                                    гаманці дрібних грошей? Переважна більшість водіїв заявляють про більш часте та
                                    виправдане використання автомийок, коли є можливість здійснювати безготівковий
                                    розрахунок. <b>Найзручнішою формою є безконтактна картка Visa або Mastercard,
                                    додаток на телефоні та спеціальне рішення Be Loyal</b>. Тому, щоб виправдати
                                    очікування користувачів автомийки, ми запровадили сучасні системи оплати. Ми
                                    пропонуємо зчитувачі карток PayPass і можливість оплачувати прання через додаток
                                    на телефоні, завдяки чому ви можете отримати нових клієнтів.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.six ? s.ui_active : undefined}`}
                             onClick={() => setList(6)}>
                            <span className={`${s.tabs_number} ${active.six ? s.flex_active : undefined}`}>6</span>
                            <span className={`${s.tabs_description} ${active.six ? s.active_desc : undefined}`}>
                                ДОДАТКОВІ ПРИСТРОЇ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.six ? undefined : {display: 'none'}}>
                            <div className={s.half_column2}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column2+' '+s.half_column3}>
                                <div className='section-header'>
                                    <h3>Додаткові пристрої</h3>
                                </div>
                                <p>
                                    До безконтактної мийки відмінно доповнять додаткові пристрої від SAMWASH. Створіть
                                    центр комплексного очищення транспортних засобів, який задовольнить водіїв.
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Пристрій для обміну банкнот <br/>який став стандартом на автомийці, що полегшує
                                        використання автомийки. Тому змінний автомат SAMWASH є одним з найважливіших
                                        додаткових пристроїв для автомийки, який значно збільшує прибуток.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Пилососи<br/>
                                        Більшість клієнтів очікують, що автомийка також матиме пилосос для очищення
                                        салону щойно вимитого автомобіля. Ідеальним доповненням до пилососа є вибивачка
                                        для килимів з нержавіючої сталі.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Дозатор склоомивача DPS<br/>
                                        - це додатковий пристрій, який доповнює пропозицію таких підприємств, як:
                                        автомийки, автозаправні станції та станції вулканізації транспортних засобів.
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.seven ? s.ui_active : undefined}`}
                             onClick={() => setList(7)}>
                            <span className={`${s.tabs_number} ${active.seven ? s.flex_active : undefined}`}>7</span>
                            <span className={`${s.tabs_description} ${active.seven ? s.active_desc : undefined}`}>
                                АКСЕСУАРИ ДЛЯ АВТОМИЙКИ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.seven ? undefined : {display: 'none'}}>
                            <div className={s.half_column2}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column2+' '+s.half_column3}>
                                <div className='section-header'>
                                    <h3>Аксесуари для автомийки</h3>
                                </div>
                                <p>
                                    У SAMWASH ми пропонуємо аксесуари для автомийки, які допомагають зменшити витрати
                                    бізнесу. Завдяки їм вкладення в автомийку окупляться швидше. Ви можете вибрати
                                    з ряду унікальних рішень, які зменшують витрати на технічне обслуговування
                                    об’єктів і усувають простої автомийки внаслідок випадкових ситуацій. Ми
                                    пропонуємо, серед іншого: <b>зимовий пакет, конденсаційну піч, інтелектуальне
                                    опалення підлоги, регулювання системи високого тиску</b> та багато інших
                                    інноваційних рішень.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.eight ? s.ui_active : undefined}`}
                             onClick={() => setList(8)}>
                            <span className={`${s.tabs_number} ${active.eight ? s.flex_active : undefined}`}>8</span>
                            <span className={`${s.tabs_description} ${active.eight ? s.active_desc : undefined}`}>
                                ПРОГРАМА ЛОЯЛЬНОСТІ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.eight ? undefined : {display: 'none'}}>
                            <div className={s.half_column2}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column2+' '+s.half_column3}>
                                <div className='section-header'>
                                    <h3>Програма лояльності</h3>
                                </div>
                                <p>
                                    Хочете запропонувати своїм клієнтам програму лояльності? У SAMWASH у нас є для вас
                                    готовий проект. <b>Ми пропонуємо як класичні картки лояльності, так і додаток
                                    для смартфона BE LOYAL</b>. Завдяки нашій програмі лояльності ви отримаєте
                                    постійних клієнтів.
                                </p>
                                <p>
                                    Додаток допоможе вам обслуговувати індивідуальних та автопаркових клієнтів!
                                    Найбільшу незадіяну групу водіїв складають власники службових автомобілів, які в
                                    першу чергу хочуть отримати рахунок зручно та швидко. Скористайтеся цим, збагативши
                                    свою автомийку системою лояльності BE LOYAL.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.eight ? s.ui_active : undefined}`}
                             onClick={() => setList(9)}>
                            <span className={`${s.tabs_number} ${active.ninth ? s.flex_active : undefined}`}>9</span>
                            <span className={`${s.tabs_description} ${active.ninth ? s.active_desc : undefined}`}>
                                ДИСТАНЦІЙНЕ УПРАВЛІННЯ АВТОМИЙКОЮ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.ninth ? undefined : {display: 'none'}}>
                            <div className={s.half_column2}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column2+' '+s.half_column3}>
                                <div className='section-header'>
                                    <h3>Дистанційне управління автомийкою</h3>
                                </div>
                                <p>
                                    Керувати автомийкою та реагувати на різні типи несправностей ще ніколи не було
                                    так просто. <b>Через свій смартфон або ноутбук з будь-якого місця і в будь-який
                                    час ви отримаєте необхідну інформацію про свою автомийку</b>. Ви дізнаєтеся,
                                    скільки заробила ваша безконтактна мийка, і перевірите, чи справно працюють
                                    найважливіші технічні елементи. Легко, зручно та швидко, коли вам це потрібно.
                                    SAMWASH Carwash Manager – це сучасне рішення, яке принесе вам ряд переваг для
                                    бізнесу.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*<div className={s.img_wrapper}>*/}
                    {/*    <a data-fancybox="gallery" href={'/video/animation.mp4'}>*/}
                    {/*        <video src={'/video/animation.mp4'} poster={'/video/animation.mp4'} controls={true}*/}
                    {/*               title='' preload="yes" autoPlay='no' playsInline muted loop/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                    {/*<div className={s.half_column}>*/}
                    {/*    <div className={s.text_block}>*/}
                    {/*        <ul>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Економія часу та грошей (керування з одного місця, не потрібно їздити на автомийку).*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Простота управління автомийкою (конфігурація налаштувань, програми мийки). Це*/}
                    {/*                повністю масштабоване рішення, яке має особливий вплив, якщо у вас більше однієї*/}
                    {/*                автомийки.*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Сервісна підтримка – клієнт може повідомити про потреби.*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Автоматизація процесів звітності та сигналізації.*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Подивіться ситуацію на автомийці.*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Обслуговування бізнес-клієнтів.*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Оцінка доходів на основі аналізу обороту.*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Уміння визначати тенденції.*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*        <p className={s.addP}>Доступні такі області вибору:</p>*/}
                    {/*        <ul>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Системи*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Налаштування*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Фінанси*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Параметри*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Програмне забезпечення*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Сервіс Доступ до даних можна отримати з будь-якого місця.*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Дистанційно-оперативна статистики з вашого ПК, планшета та смартфона.*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Графічний і текстовий огляд робочих процесів*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Графічний і текстовий звіт про помилки на автомийці*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Окремо рахує кожен пост, порохотях та жетони та система знижо SamWash group*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Зашифровані дані доступні лише вам*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Надає інформа про стан технологічного обладнання у реальному часі*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Виведення показників у таблиці та періодичні таблиці*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Сповіщання аварійних ситуацій з рекомендаціями послідовності дій*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Створення архіву та поведінки процесів в діафрагмах з часом події*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Захист даних методом наскрізного шифрування.*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*        <p className={s.addP}>Також відстежуються такі дані:</p>*/}
                    {/*        <ul>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Тиск прісної води*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Тиск промивного середовища*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Осмос тиску води*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>*/}
                    {/*                Тиск у антифризі. Монітори тиску постійно контролюють тиск системи на вході свіжої*/}
                    {/*                води, осмосу, антифризу та промивної води. Датчики миттєво повідомляють про дефект*/}
                    {/*                або несправність системи, дату й час зберігають у пам’яті помилок.*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>

            <section className={s.navy_background}>
                <div className="main-container">
                    <Swiper
                        rewind={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Як здійснити збір на автомийці?</div>
                                <div className={s.itemCenter}>Як керувати автомийкою онлайн</div>
                                <div className={s.itemSlider}>Керівник автомийки покрокова частина 1</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                        </SwiperSlide>
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Як керувати автомийкою онлайн</div>
                                <div className={s.itemCenter}>Керівник автомийки покрокова частина 1</div>
                                <div className={s.itemSlider}>Що нового в Carwash Manager</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Інтернет на автомийці - як це починалося?" loading="lazy" className={s.frame}/>
                        </SwiperSlide>
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Керівник автомийки покрокова частина 1</div>
                                <div className={s.itemCenter}>Що нового в Carwash Manager</div>
                                <div className={s.itemSlider}>Збір автомийки у менеджера автомийки</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітленням автомийки" loading="lazy" className={s.frame}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className={s.section_no_padding}>
                <Image src='/managerCarwash/back.jpg' alt='' width={1400} height={500}/>
                <div className="main-container">
                    <div className={s.image_full_section}></div>
                    <div className={s.contact_center}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong className={s.strong}>Отримайте 3 місяці CM безкоштовно!</strong>
                            </h2>
                            <p></p>
                            <p style={{color: 'white'}} className={s.gt}>Якщо ваша автомийка підключена до Інтернету,
                                зв’яжіться з нами
                                та отримайте <b>3 місяці підписки Carwash Manager безкоштовно.</b></p>
                            <p className={s.rule}>
                                <Link href='https://drive.google.com/file/d/13_CZLXOT_UzE-fRHfKzjreeRwJaB7ArY/view'
                                      target='_blank'>Правила просування</Link>
                            </p>
                        </div>
                        <div onClick={openForm} className={s.contact_data_box}>
                            <ButtonRedWithoutLink text={'contactBut'} clas={'addTrans'}/>
                        </div>
                    </div>
                </div>
            </section>

            {form ? <div ref={ref}><FormUserDate textH2='РЕЗЮМЕ' threeInput='NIP'/></div> : ''}

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Функціональні можливості Carwash Manager</strong>
                        </h2>
                    </div>
                    <div>
                        <ul className={s.features}>
                            <li>
                                <div className={s.circle_icon}>
                                    <Image src='/managerCarwash/ico-gray-carwash-manager.svg' alt=''
                                           width={64} height={64}/>
                                </div>
                                <h3>Управління</h3>
                                <p></p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Керування налаштуваннями автомийки.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Управління карткою лояльності.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className={s.circle_icon}>
                                    <Image src='/managerCarwash/ico-gray-analysis.svg' alt=''
                                           width={64} height={64}/>
                                </div>
                                <h3>Статистика</h3>
                                <p></p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Фінансові звіти.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Контроль робочого часу та кількості використання індивідуальних програм.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Діагностика систем автомийки.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Контроль споживання хімікатів.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className={s.circle_icon}>
                                    <Image src='/managerCarwash/ico-сірий-захист.svg' alt=''
                                           width={64} height={64}/>
                                </div>
                                <h3>Сповіщення</h3>
                                <p></p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Сигналізація (технічний стан, небажані ситуації).
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Хімічний рівень.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={s.section} style={{background: 'white'}}>
                <div className="main-container">
                    <div className={s.text_block}>
                        <div className="section-header">
                            <h2>
                                <small>ПОРІВНЯННЯ З АВТОМИЙКОЮ БЕЗ СИСТЕМИ УПРАВЛІННЯ</small>
                                <strong>Carwash Manager - інтелектуальне управління автомийкою</strong>
                            </h2>
                        </div>
                        <div className={s.lead}>
                            <p>Управління автомийкою в хмарі – це безпечна і проста технологія, яка
                                істотно полегшує ведення бізнесу.</p>
                            <p>
                                Безперечною перевагою використання хмарної технології управління автомийкою є можливість
                                отримувати автоматичні сповіщення про процеси, що відбуваються на автомийці, та
                                фінансові звіти. Це надає унікальну можливість комплексного та простого керування
                                автомийкою швидким та прозорим способом. Віддалене управління бізнесом допомагає
                                приймати ключові рішення, використовуючи всі необхідні дані, зібрані системою.
                            </p>
                        </div>
                        <div className={s.blockImage}>
                            <Image src='/managerCarwash/image2.svg' alt='' width={1000} height={640}/>
                        </div>
                        <table className={s.tech}>
                            <thead>
                            <tr>
                                <td>&nbsp;</td>
                                <td>мийка з менеджером автомийки</td>
                                <td>автомийка без підтримки Carwash Manager</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Перевірка товарообігу на автомийці</td>
                                <td>Дистанційно через додаток.</td>
                                <td>Вручну з показань на місці на автомийці або після підрахунку грошей.</td>
                            </tr>
                            <tr>
                                <td>Формування звітів</td>
                                <td>Автоматично з доставкою електронною поштою.</td>
                                <td>Проаналізувавши дані в електронній таблиці.</td>
                            </tr>
                            <tr>
                                <td>Керування клієнтами автопарку</td>
                                <td>
                                    <ul>
                                        <li>Купівля карток через обмінник.</li>
                                        <li>Дистанційне поповнення власником автомийки.</li>
                                        <li>Щомісячний рахунок.</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Поповнення ключів вручну в певному місці.</li>
                                        <li>Неорганізовані поселення.</li>
                                        <li>Високий ризик помилки.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Управління та моніторинг</td>
                                <td>Дистанційно через додаток.</td>
                                <td>
                                    <ul>
                                        <li>Інструкція на місці на автомийці.</li>
                                        <li>Жодного моніторингу.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Сповіщення про несправності</td>
                                <td>Дистанційно через додаток повідомлення надходять на вказану електронну адресу.</td>
                                <td>
                                    <ul>
                                        <li>брак.</li>
                                        <li>Ризик серйозної невдачі, відсутність ранньої діагностики.</li>
                                        <li>Інформація від клієнтів про видимі збої, які пов’язані з більшими перебоями
                                            в роботі (довший час відгуку, ніж у випадку онлайн).
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className={s.gradient_background}>
                <div className="main-container">
                    <div className={s.half_column}>
                        <div className={s.image_wrapper}>
                            <Image src='/managerCarwash/13.svg' alt='' width={750} height={640}/>
                        </div>
                    </div>
                    <div className={s.half_column}>
                        <div className={s.text_wrapper}>
                            <div className="section-header">
                                <h2>
                                    <small style={{color: 'white'}}>МЕНЕДЖЕР АВТОМИЙКИ</small>
                                    <strong style={{color: 'white'}}>Вся мийка автомобіля у вашому телефоні</strong>
                                </h2>
                                <p style={{color: 'white'}}>Завантажте Carwash Manager на свій телефон і
                                    подивіться, як легко можна керувати автомийкою.</p>
                            </div>
                            <div className={s.aplications_wrapper}>
                                <h2>Завантажте програму</h2>
                                <Link href='/'>
                                    <Image src='/other/playstor.png' alt='' width={135} height={40}/>
                                </Link>
                                <Link href='/'>
                                    <Image src='/other/appstor.png' alt='' width={135} height={40}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section} style={{background: 'white'}}>
                <div className="main-container">
                    <div className={s.text_block} style={{color: 'black'}}>
                        <div className="section-header">
                            <h2>
                                <small style={{color: 'white'}}></small>
                                <strong style={{color: 'white'}}></strong>
                            </h2>
                        </div>
                        <h2>{t("manager2")}</h2>
                        <p>{t("manager3")}</p>
                        <p>{t("manager4")}</p>
                        <h2>{t("manager5")}</h2>
                        <p>{t("manager6")}</p>
                        <p>{t("manager7")}</p>
                    </div>
                </div>
            </section>

            <section className={s.section} style={{background: 'white'}}>
                <div className="main-container">
                    <div className={s.text_block} style={{color: 'black'}}>
                        <h2>ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ</h2>
                        <p>Программное обеспечение ALLES – это не просто отображение работы всех дозаторов и ключевых
                            узлов систем. Это дистанционное управление оборудованием
                            (любой системой – от списка программ на сенсоре до
                            настройки давления для каждой программ) с возможностью изменения в том числе
                            технических параметров. Рассмотрим подробнее, какие возможности управления мойкой ALLES
                            доступны владельцу благодаря полной автоматизации системы с помощью промышленного компьютера
                            B&R (Австрия).</p>
                        <p>Вместе с оборудованием владелец получает и настроенный удалённый круглосуточный доступ
                            к своей мойке с любого телефона, планшета, компьютера.</p>
                        <h2>ГЛАВНЫЙ ЭКРАН</h2>
                        <p>Главный экран – отображение того, что
                            в данный момент происходит на мойке. Его видит оператор (для контроля и быстрого
                            реагирования) и владелец МСО. Все датчики связанны с системой аварий и предупреждений.
                            При надлежащем контроле можно избежать большинства аварий и поломок. Если показатели
                            химии или осмоса доходят до критической отметки, то соответствующая программа
                            исчезает из меню на посту. </p>
                        <p className={s.addP} style={{color: 'black!important'}}>НА ГЛАВНОМ ЭКРАНЕ ОТОБРАЖАЮТСЯ:</p>
                        <ul>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                уровни химии, топлива, омывайки (при наличии) – до 1 см;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                датчики давления (входное, сетевое, антифрост) – бар;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                параметры работы системы осмоса –л/мин;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                параметры работы буферной системы (при наличии) – литры, бар;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                датчики температуры (внешняя, тёплые полы (подача и обратная температура),
                                горячая вода) – градус;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                показатели напряжения по фазам – индикаторы;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                диагностика по различным параметрам (свет, насос, байпас и т.д.);
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                аварии и предупреждения (текущие, архив) – описание;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                отображение работы постов (моечная/ сухая зоны) в режиме онлайн.
                            </li>
                        </ul>
                        <p>Эти показатели отвечают за защиту и безопасность оборудования. Соответственно,
                            продлевают жизнеспособность основных узлов и агрегатов и минимизируют простои
                            в пиковые нагрузки.</p>
                        <h2>УДАЛЁННОЕ УПРАВЛЕНИЕ МСО С ПОМОЩЬЮ ПО.</h2>
                        <p className={s.addP} style={{color: 'black!important'}}>ПОСТЫ (МОЕЧНАЯ/ СУХАЯ ЗОНЫ):</p>
                        <ul>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                включение/ выключение
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                давление
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                баланс
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                моточасы
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                открытие сенсорной панели с помощью электронного замка
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                запуск/ корректировка программ
                            </li>
                        </ul>
                        <p className={s.addP} style={{color: 'black!important'}}>ДИАГНОСТИКА</p>
                        <ul>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                предупреждение напряжения;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                активация системы защиты;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                показатели температуры/ влажности внутри сенсорных панелей на постах;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                контроль замены масла и уплотнений, сроков ТО в зависимости от моточасов на
                                каждом посту;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                контроль систем дозации химии: промывка, прокачка воздуха;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                управление котельным оборудованием;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                управление дозаторами: подача химии для каждой программы, выбор
                                температурного режима, мультивпрыск;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                управление давлением для каждой программы с помощью частотных преобразователей;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                управление программами на постах: вкл./выкл;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                управление резервным постом (включается на период ТО или поломки);
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                управление функцией «Антифрост»: от сети, от колодца, система подмешивания.
                            </li>
                        </ul>
                        <p className={s.addP} style={{color: 'black!important'}}>НАСТРОЙКИ</p>
                        <ul>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                выбор цен для каждой программы и режима (для моечных постов и сухой зоны – отдельно);
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                управление техническими параметрами поста: кнопки стоп/пауза, режим
                                ожидания, выбор языка, и расширенные настройки;
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                настройки онлайн-кассы.
                            </li>
                        </ul>
                        <h2>ПО СТАТИСТИКА. </h2>
                        <p className={s.addP} style={{color: 'black!important'}}>СТАТИСТИКА</p>
                        <p className={s.addP} style={{color: 'black!important'}}>Можно просматривать любой пост
                            или суммарно по мойке и задать
                            любой временной промежуток. </p>
                        <p className={s.addP} style={{color: 'black!important'}}>ПАРАМЕТРЫ:</p>
                        <ul>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                соотношение наличного/ безналичного расчёта,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                количество оплат по бонусам,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                количество автомобилей,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                средний чек,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                график выручки МСО по часам/ дням (полезно для анализа местоположения объекта),
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                график популярности программ (полезно при внедрении новых опций),
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                статистика по принятым финансам: инкассация по каждому посту, купюры и монеты в штуках
                                и по номиналам, наполненность и время последней инкассации, история инкассаций.
                            </li>
                        </ul>
                        <p className={s.addP} style={{color: 'black!important'}}>АПГРЕЙД ПО.  В 2021 ГОДУ
                            ALLES ПЛАНИРУЕТ:</p>
                        <ul>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                апгрейд ПО (сенсорные панели и компьютер). В дальнейшем такие системные обновления
                                будут приходить автоматически аналогично тому, как обновляется ПО в вашем смартфоне
                                или на компьютере.
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                переход ПО на систему облачного контроля (в режиме одного окна появится возможность
                                управлять любым количеством объектов, бонусным приложением и т.д.; появятся расширенные
                                параметры статистики и аналитики для сети объектов; новые сервисы – в том числе
                                привязка к 1С (!), по многочисленным просьбам клиентов).
                            </li>
                        </ul>
                        <Image src='/managerCarwash/fotImage.jpg' alt='' width={2000} height={500} className={s.fotI} />
                        <Image src='/managerCarwash/fotImage1.jpg' alt='' width={2000} height={500} className={s.fotI} />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default CarwashManager;