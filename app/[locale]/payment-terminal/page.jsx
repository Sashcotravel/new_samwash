"use client"

import s from './payment-terminal.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import FixManu2 from "@/app/component/fixManu2/FixManu2";
import {useState} from "react";

function PaymentTerminal() {

    const t = useTranslations("payment-terminal");

    const [box, setBox] = useState({
        first: true, second: false, third: false, fourth: false
    })

    const active = {
        borderLeft: '5px solid #ed1c24',
        outline: 'none',
        background: '#e6e6e6'
    }

    const setList = (pos) => {
        setBox({
            first: pos === 1,
            second: pos === 2,
            third: pos === 3,
            fourth: pos === 4,
        });
    }


    return (
        <div>

            <section className='head-image'>
                <Image src='/terminal/terminal.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("terminal1")}
                        </li>
                    </ul>
                    <h1>{t("terminal1")}</h1>
                </div>
            </section>

            <FixManu2 active={3}/>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text_block}>
                        <div className="section-header">
                            <h2>
                                <small>БАГАТОФУНКЦІОНАЛЬНИЙ ПРИСТРІЙ ДЛЯ ОПЛАТИ НА АВТОМИЙЦІ</small>
                                <strong>Полегшіть своїм клієнтам оплату прання</strong>
                            </h2>
                        </div>
                        <p>
                            Розмінний автомат – одне з найважливіших додаткових пристроїв для автомийки, яке
                            значно збільшує прибуток. Основною функцією розмінного автомата є обмін банкнот на
                            монети та жетони, які дозволяють оплатити прання, але його можна розширити завдяки
                            багатьом додатковим опціям. <b>Є можливість продавати та поповнювати картки лояльності
                            та оплачувати платіжними картками.</b>
                        </p>
                        <p>
                            <Image src='/terminal/terminal2.jpg' alt='' width={1600} height={600}/>
                        </p>
                    </div>
                </div>
            </section>

            <section className={s.section_gray}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Найважливіші функції розмінних автоматів SAMWASH</strong>
                        </h2>
                        <p>
                            Завдяки можливості розміняти банкноти на монети та жетони, розмінний автомат економить
                            клієнтів автомийки, у гаманці яких немає дрібниці. Завдяки програмованим зчитувачам і
                            бункерам ми можемо налаштувати обробку банкнот і монет відповідно до потреб кожного клієнта
                            та специфіки зовнішніх ринків. Пристрої SAMWASH також можуть бути оснащені рядом опцій, які
                            ще більше підвищать комфорт ваших клієнтів і полегшать управління автомийкою.
                        </p>
                    </div>
                    <div className={s.box_wrapper}>
                        <div className={s.box_four}>
                            <div className={s.box_item} onClick={() => setList(1)}
                                 style={box.first ? active : undefined}>
                                <Image src='/terminal/central-pay.svg' alt='' width={50} height={50}/>
                                <span>Центральний платіжний термінал</span>
                            </div>
                            <div className={s.box_content} style={box.first ? {display: 'block'} : undefined}>
                                <h2>SAMWASH Central Pay</h2>
                                <p>
                                    Завдяки фірмовому програмному забезпеченню та можливості встановлення зчитувачів
                                    платіжних карт, обмінний автомат Pro може служити центральним місцем для миття
                                    платежів у всій автомийці, без необхідності інвестувати в додаткові платіжні
                                    пристрої на кожній станції.
                                </p>
                            </div>
                            <div className={s.box_item} onClick={() => setList(2)}
                                 style={box.second ? active : undefined}>
                                <Image src='/terminal/safe.svg' alt='' width={50} height={50}/>
                                <span>Безпека</span>
                            </div>
                            <div className={s.box_content} style={box.second ? {display: 'block'} : undefined}>
                                <h2>Безпека транзакцій</h2>
                                <p>
                                    Усі розмінні автомати SAMWASH захищені від електромагнітних імпульсних атак,
                                    що захищає вас від крадіжки за допомогою цього методу.
                                </p>
                            </div>
                            <div className={s.box_item} onClick={() => setList(3)}
                                 style={box.third ? active : undefined}>
                                <Image src='/terminal/paypass.svg' alt='' width={50} height={50}/>
                                <span>Підтримка карт лояльності</span>
                            </div>
                            <div className={s.box_content} style={box.third ? {display: 'block'} : undefined}>
                                <h2>Керуйте своєю програмою лояльності зручно</h2>
                                <p>
                                    Встановлення диспенсера та зарядного пристрою картки лояльності дозволяє вашим
                                    клієнтам брати участь у програмі лояльності без залучення персоналу автомийки. Ви
                                    зможете придбати та поповнити картку безпосередньо в обмінному автоматі (версії
                                    Standard і Pro).
                                </p>
                            </div>
                            <div className={s.box_item} onClick={() => setList(4)}
                                 style={box.fourth ? active : undefined}>
                                <Image src='/terminal/carwash-manager.svg' alt='' width={50} height={50}/>
                                <span>Пульт</span>
                            </div>
                            <div className={s.box_content} style={box.fourth ? {display: 'block'} : undefined}>
                                <h2>Онлайн контроль</h2>
                                <p>
                                    Кожен розмінний автомат SAMWASH можна підключити до мережі Інтернет і за допомогою
                                    програми Carwash Manager отримувати сповіщення про стан пристрою та переглядати
                                    статистичні дані.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text_block}>
                        <div className="section-header">
                            <h2>
                                <small>РОЗМІННІ АВТОМАТИ SAMWASH </small>
                                <strong>Виберіть розмінний автомат, який відповідає вашим вимогам</strong>
                            </h2>
                        </div>
                        <table>
                            <thead></thead>
                            <tbody></tbody>
                        </table>
                        <p style={{textAlign: 'left'}}> * Підключення змінного автомата до Carwash Manager
                            можливе лише для автомийок SAMWASH.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default PaymentTerminal;