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


function CarwashManager() {

    const t = useTranslations("carwash-manager");
    const ref = useRef(null)
    const [form, setForm] = useState(false)

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    const openForm = () => {
        setForm(true)
        setTimeout(() => {
            ref.current?.scrollIntoView({behavior: 'smooth'})
        }, 200)
    }


    return (
        <div>

            <section className='head-image'>
                <Image src='/managerCarwash/head-carwash-manager.jpg' alt='' width={1900} height={300}/>
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

            <FixManu active={2}/>

            <section className={s.gray_background}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>БЕЗПЕКА ТА КОМФОРТ</small>
                            <strong>Керуйте автомийкою віддалено</strong>
                        </h2>
                        <h4>Керувати автомийкою та реагувати на різні види аварій ще ніколи не було так просто.</h4>
                        <p>За допомогою телефону або комп'ютера з будь-якого місця і в зручний для вас час ви отримаєте
                            необхідну інформацію про вашу автомийку. Ви дізнаєтеся, скільки заробила ваша мийка, і
                            перевірите, чи справно працюють найважливіші технічні елементи. Зручно і швидко, коли вам це
                            потрібно.</p>
                    </div>
                    <div className={s.two_column_list_with_center_image}>
                        <div className={s.third_column}>
                            <ul className={s.list_features}>
                                <li>
                                    <Image src='/managerCarwash/ico-gray-carwash-manager.svg' alt=''
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
                                    <span>Ефективний сервіс</span>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_wrapper}>
                                <Image src='/managerCarwash/carwashManager.png' alt='' width={200} height={500}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.list_reverse}>
                                <li>
                                    <Image src='/managerCarwash/ico-сірі-люди.svg' alt=''
                                           width={50} height={50}/>
                                    <span>Обслуговування клієнтів автопарку</span>
                                </li>
                                <li>
                                    <Image src='/managerCarwash/ico-gray-analysis.svg' alt=''
                                           width={50} height={50}/>
                                    <span>Моніторинг параметрів</span>
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
                            <small></small>
                            <strong style={{color: 'white'}}>З Менеджер Автомийки ви отримуєте переваги</strong>
                        </h2>
                    </div>
                    <div className={s.img_wrapper}>
                        <a data-fancybox="gallery" href={'/video/mainVideo.mp4'}>
                            <video src={'/video/mainVideo.mp4'} poster={'/video/mainVideo.mp4'}
                                   title='' preload="yes" autoPlay='no' playsInline muted loop/>
                        </a>
                    </div>
                    <div className={s.half_column}>
                        <div className={s.text_block}>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Економія часу та грошей (керування з одного місця, не потрібно їздити на автомийку).
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Простота управління автомийкою (конфігурація налаштувань, програми мийки). Це
                                    повністю масштабоване рішення, яке має особливий вплив, якщо у вас більше однієї
                                    автомийки.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Сервісна підтримка – клієнт може повідомити про потреби.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Автоматизація процесів звітності та сигналізації.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Подивіться ситуацію на автомийці.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Обслуговування бізнес-клієнтів.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Оцінка доходів на основі аналізу обороту.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Уміння визначати тенденції.
                                </li>
                            </ul>
                        </div>
                    </div>
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
                            <p style={{color: 'white'}} className={s.gt}>Якщо ваша автомийка підключена до Інтернету, зв’яжіться з нами
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
                            <Image src='/managerCarwash/svgexport-3.svg' alt='' width={1000} height={640}/>
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
                            <Image src='/managerCarwash/lead.png' alt='' width={750} height={640}/>
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

        </div>
    );
}

export default CarwashManager;