"use client"

import s from './vacuumeForCar.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import FixManu2 from "@/app/component/fixManu2/FixManu2";
import {useState} from "react";


function VacuumeForCar() {

    const t = useTranslations("vacuume");

    const [active, setActive] = useState({
        first: true, second: false, three: false, four: false, five: false, six: false, seven: false, eight: false
    })

    const setList = (position) => {
        setActive({
            first: position === 1,
            second: position === 2,
            three: position === 3,
            four: position === 4,
            five: position === 5,
            six: position === 6,
            seven: position === 7,
            eight: position === 8
        });
    }


    return (
        <div>

            <section className='head-image'>
                <Image src='/vacuume/vacuume.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("vacuume1")}
                        </li>
                    </ul>
                    <h1>{t("vacuume1")}</h1>
                </div>
            </section>

            <FixManu2 active={2}/>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text_block}>
                        <div className="section-header">
                            <h2>
                                <small style={{color: '#777'}}>НАДІЙНІ ПИЛОСОСИ Samwash</small>
                                <strong>Станція комплексного очищення транспортних засобів</strong>
                            </h2>
                        </div>
                        <p>
                            Пилососи Samwash - це стаціонарні пристрої самообслуговування, які активуються монетою,
                            жетоном або карткою лояльності/платіжної картки, додаток Beloyal.
                            Одно- або двостанційна, використовується для миття салонів транспортних засобів.
                            Виготовлені з нержавіючої сталі, <b>оснащені потужними промисловими або професійними
                            турбінами та великими баками для відходів,</b> вони гарантують тривалу та ефективну роботу
                            та повне задоволення користувачів.
                        </p>
                        <p>
                            <Image src='/vacuume/foto.jpg' alt='' width={1900} height={300}/>
                        </p>
                    </div>
                </div>
            </section>

            <section className={s.gray_background}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Переваги наявності пилососа на автомийці</strong>
                        </h2>
                    </div>
                    <ul className={s.features}>
                        <li>
                            <div className={s.circle_icon}>
                                <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                            </div>
                            <p>Ви надасте клієнтам комплексну пропозицію на вашій автомийці.</p>
                        </li>
                        <li>
                            <div className={s.circle_icon}>
                                <Image src='/vacuume/svg2.svg' alt='' width={300} height={300}/>
                            </div>
                            <p>Ви надасте клієнтам комплексну пропозицію на вашій автомийці.</p>
                        </li>
                        <li>
                            <div className={s.circle_icon}>
                                <Image src='/vacuume/svg3.svg' alt='' width={300} height={300}/>
                            </div>
                            <p>Ви надасте клієнтам комплексну пропозицію на вашій автомийці.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text_block}>
                        <div className="section-header">
                            <h2>
                                <small style={{color: '#777'}}>ПИЛОСОСИ SAMWASH</small>
                                <strong>Виберіть пилосос, який відповідає вашим вимогам</strong>
                            </h2>
                        </div>
                        <table className={s.table}>
                            <thead>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <Image src='/vacuume/vacuume1.png' alt='' width={300} height={300}/>
                                </td>
                                <td>
                                    <Image src='/vacuume/vacuume2.png' alt='' width={300} height={300}/>
                                </td>
                                <td>
                                    <Image src='/vacuume/vacuume3.png' alt='' width={300} height={300}/>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <h3>
                                        Базове <br/>
                                        <small>для хорошого початку</small>
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Basic Plus <br/>
                                        <small>оптимальний</small>
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Преміум <br/>
                                        <small>для вимогливих клієнтів</small>
                                    </h3>
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Блок живлення</td>
                                <td>230В</td>
                                <td>230В</td>
                                <td>230 або 400 В</td>
                            </tr>
                            <tr>
                                <td>Справа</td>
                                <td>нержавіюча сталь</td>
                                <td>нержавіюча сталь</td>
                                <td>нержавіюча сталь</td>
                            </tr>
                            <tr>
                                <td>Розмір</td>
                                <td>компактний</td>
                                <td>компактний</td>
                                <td>великий</td>
                            </tr>
                            <tr>
                                <td>Номінальна місткість бака</td>
                                <td>32 роки</td>
                                <td>32 роки</td>
                                <td>62 роки</td>
                            </tr>
                            <tr>
                                <td>Стріли</td>
                                <td>НІ</td>
                                <td>так (балансир)</td>
                                <td>так (з пружиною)</td>
                            </tr>
                            <tr>
                                <td>Компресор</td>
                                <td>НІ</td>
                                <td>НІ</td>
                                <td>так (варіант)</td>
                            </tr>
                            <tr>
                                <td>Дисплей</td>
                                <td>НІ</td>
                                <td>Так</td>
                                <td>Так</td>
                            </tr>
                            <tr>
                                <td>Світлодіодне освітлення</td>
                                <td>НІ</td>
                                <td>НІ</td>
                                <td>Так</td>
                            </tr>
                            <tr>
                                <td>Підтримка монет</td>
                                <td>1 номінал</td>
                                <td>багато конфесій</td>
                                <td>багато конфесій</td>
                            </tr>
                            <tr>
                                <td>Підтримка карт лояльності</td>
                                <td>НІ</td>
                                <td>так (варіант)</td>
                                <td>так (варіант)</td>
                            </tr>
                            <tr>
                                <td>Підтримка платіжних карток</td>
                                <td>НІ</td>
                                <td>так (варіант)</td>
                                <td>так (варіант)</td>
                            </tr>
                            <tr>
                                <td>Be Loyal</td>
                                <td>НІ</td>
                                <td>так (варіант)</td>
                                <td>так (варіант)</td>
                            </tr>
                            <tr>
                                <td>Підключення до Carwash Manager</td>
                                <td>НІ</td>
                                <td>НІ</td>
                                <td>так (варіант)</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className={s.navy_background}>
                <div className="main-container">
                    <div className={s.gallery_reel_wrapper}>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_margin_bottom_small}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ПОТУЖНІСТЬ І ЯКІСТЬ БЕЗ КОМПРОМІСІВ</small>
                            <strong>Пилосос SAMWASH Premium</strong>
                        </h2>
                    </div>
                    <div className={s.two_column}>
                        <div className={s.third_column}>
                            <ul>
                                <li>
                                    <span><strong>Корпус з нержавіючої сталі</strong></span>
                                    <p>Гарантує стійкість до мінливих погодних умов і елегантний зовнішній вигляд.</p>
                                </li>
                                <li>
                                    <span><strong>Промислові турбіни</strong></span>
                                    <p>Промислові довговічні всмоктувальні турбіни, що живляться від 400 В, є одночасно
                                        гарантією задоволення клієнтів автомийки та гарантією тривалої роботи.</p>
                                </li>
                                <li>
                                    <span><strong>Великі сміттєві баки</strong></span>
                                    <p>Довга і ефективна робота пристрою без необхідності частого спорожнення бака.</p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_wrapper}>
                                <Image src='/vacuume/vacuume3.png' alt='' width={500} height={500}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.dispenser_list_reverse}>
                                <li>
                                    <span><strong>Можлива повна персоналізація</strong></span>
                                    <p>За бажанням замовника на пилосос може бути розміщений логотип або товарний
                                        знак.</p>
                                </li>
                                <li>
                                    <span><strong>Електронний монетоприймач</strong></span>
                                    <p>За замовчуванням він підтримує монети номіналом 1, 2 і 5 злотих, а також жетони
                                        номіналом 2 і 5 злотих.</p>
                                </li>
                                <li>
                                    <span><strong>Можливість моніторингу з рівня менеджера автомийки</strong></span>
                                    <p>Технічний стан, популярність послуги серед клієнтів автомийки, ефективність і
                                        середній час мийки - це лише деякі з параметрів, які ви зможете контролювати на
                                        своєму комп'ютері.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ВІДМІННІ РОБОЧІ ПАРАМЕТРИ В КОМПАКТНОМУ КОРПУСІ</small>
                            <strong>Пилососи Basic / Basic Plus</strong>
                        </h2>
                    </div>
                    <div className={s.two_column}>
                        <div className={s.third_column}>
                            <ul>
                                <li>
                                    <span><strong>Корпус з нержавіючої сталі</strong></span>
                                    <p>Гарантує стійкість до мінливих погодних умов і елегантний зовнішній вигляд.</p>
                                </li>
                                <li>
                                    <span><strong>Компактні розміри</strong></span>
                                    <p>Менша турбіна з резервуаром для відходів впливає на кінцевий зовнішній вигляд
                                        пилососа, що призводить до більшої економії місця.</p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_wrapper}>
                                <Image src='/vacuume/vacuume2.png' alt='' width={500} height={500}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.dispenser_list_reverse}>
                                <li>
                                    <span><strong>Професійні турбіни</strong></span>
                                    <p>Професійні всмоктувальні турбіни, що живляться від мережі 230 В, є одночасно
                                        гарантією задоволення клієнтів автомийки та гарантією комфортної роботи.</p>
                                </li>
                                <li>
                                    <span><strong>Можлива будь-яка конфігурація</strong></span>
                                    <p>Широкий вибір доступних опцій (у версії BASIC Plus): дисплей, штанга з
                                        балансиром, підтримка додаткових номіналів, підтримка карт лояльності,
                                        підключення до програми BE LOYAL.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.gray_background}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Доступні конфігурації</strong>
                        </h2>
                    </div>
                    <div className={s.one_column_list_with_tabs}>
                        <div className={`${s.tabs_list_wrapper} ${active.first ? s.ui_active : undefined}`}
                             onClick={() => setList(1)}>
                            <span className={`${s.tabs_number} ${active.first ? s.flex_active : undefined}`}>1</span>
                            <span className={`${s.tabs_description} ${active.first ? s.active_desc : undefined}`}>
                                1-ПОЗИЦІЙНИЙ ПИЛОСОС ПРЕМІУМ-КЛАСУ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.first ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/vacuume/vacuume2.png' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>1-позиційний пилосос преміум-класу</h3>
                                </div>
                                <p>
                                    Турбінний пилосос самообслуговування для створення станцій для прибирання салонів
                                    транспортних засобів, одностанційний, працює монетою різного номіналу або жетоном.
                                    Пилосос оснащений електронним дисплеєм. Корпус з нержавіючої сталі, подовжувач із
                                    шланговою пружиною в комплекті. Опціонально можливість підтримки карт лояльності та
                                    платіжних карт і мобільного додатку BE LOYAL. Також пилосос можна підключити до
                                    програми Carwash Manager.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.second ? s.ui_active : undefined}`}
                             onClick={() => setList(2)}>
                            <span className={`${s.tabs_number} ${active.second ? s.flex_active : undefined}`}>2</span>
                            <span className={`${s.tabs_description} ${active.second ? s.active_desc : undefined}`}>
                                1-ПОЗИЦІЙНИЙ ПИЛОСОС ПРЕМІУМ-КЛАСУ З КОМПРЕСОРОМ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.second ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/vacuume/vacuume2.png' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>1-позиційний пилосос преміум-класу з компресором</h3>
                                </div>
                                <p>
                                    Турбінний пилосос самообслуговування для створення станцій для прибирання салонів
                                    транспортних засобів, одностанційний, працює монетою різного номіналу або жетоном.
                                    Пилосос оснащений електронним дисплеєм. Корпус з нержавіючої сталі, подовжувач із
                                    шланговою пружиною в комплекті. Версія з компресором для накачування коліс - платна
                                    або безкоштовна. Опціонально можливість підтримки карт лояльності та платіжних карт
                                    і мобільного додатку BE LOYAL. Також пилосос можна підключити до програми Carwash
                                    Manager.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.three ? s.ui_active : undefined}`}
                             onClick={() => setList(3)}>
                            <span className={`${s.tabs_number} ${active.three ? s.flex_active : undefined}`}>3</span>
                            <span className={`${s.tabs_description} ${active.three ? s.active_desc : undefined}`}>
                                2-Х ПОЗИЦІЙНИЙ ПИЛОСОС ПРЕМІУМ-КЛАСУ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.three ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/vacuume/vacuume2.png' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>2-х позиційний пилосос преміум-класу</h3>
                                </div>
                                <p>
                                    Турбінний пилосос самообслуговування для створення станцій прибирання салонів
                                    транспортних засобів, двопостовий, працює монетою різного номіналу або жетоном.
                                    Пилосос оснащений електронним дисплеєм. Корпус з нержавіючої сталі, подовжувачі з
                                    пружинами для шлангів в комплекті. Опціонально можливість підтримки карт лояльності
                                    та платіжних карт і мобільного додатку BE LOYAL. Також пилосос можна підключити до
                                    програми Carwash Manager.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.four ? s.ui_active : undefined}`}
                             onClick={() => setList(4)}>
                            <span className={`${s.tabs_number} ${active.four ? s.flex_active : undefined}`}>4</span>
                            <span className={`${s.tabs_description} ${active.four ? s.active_desc : undefined}`}>
                                2-Х СТАНЦІЙНИЙ ПИЛОСОС ПРЕМІУМ-КЛАСУ З КОМПРЕСОРОМ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.four ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/vacuume/vacuume2.png' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>2-х станційний пилосос преміум-класу з компресором</h3>
                                </div>
                                <p>
                                    Турбінний пилосос самообслуговування для створення станцій прибирання салонів
                                    транспортних засобів, двопостовий, працює монетою різного номіналу або жетоном.
                                    Пилосос оснащений електронним дисплеєм. Корпус з нержавіючої сталі, подовжувачі з
                                    шланговими пружинами в комплекті. Версія з компресором для накачування коліс -
                                    платна або безкоштовна. Опціонально можливість підтримки карт лояльності та
                                    платіжних карт і мобільного додатку BE LOYAL. Також пилосос можна підключити до
                                    програми Carwash Manager.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.five ? s.ui_active : undefined}`}
                             onClick={() => setList(5)}>
                            <span className={`${s.tabs_number} ${active.five ? s.flex_active : undefined}`}>5</span>
                            <span className={`${s.tabs_description} ${active.five ? s.active_desc : undefined}`}>
                                БАЗОВИЙ 1-ПОЗИЦІЙНИЙ ПИЛОСОС</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.five ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/vacuume/vacuume2.png' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>Базовий 1-позиційний пилосос</h3>
                                </div>
                                <p>Професійний пилосос самообслуговування для створення станцій для прибирання салонів
                                    транспортних засобів, одностанційний, працює монетою одного номіналу або жетоном.
                                    Корпус з нержавіючої сталі, тримач шланга в комплекті.</p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.six ? s.ui_active : undefined}`}
                             onClick={() => setList(6)}>
                            <span className={`${s.tabs_number} ${active.six ? s.flex_active : undefined}`}>6</span>
                            <span className={`${s.tabs_description} ${active.six ? s.active_desc : undefined}`}>
                                1-МІСНИЙ ПИЛОСОС BASIC PLUS</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.six ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/vacuume/vacuume2.png' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>1-місний пилосос Basic Plus</h3>
                                </div>
                                <p>
                                    Професійний пилосос самообслуговування для створення станцій для прибирання салонів
                                    автомобіля, одностанційний, працює монетою різного номіналу або жетоном. Пилосос
                                    оснащений електронним дисплеєм. Корпус з нержавіючої сталі, стріла з балансиром
                                    шланга в комплекті. Опціонально можливість підтримки карт лояльності та платіжних
                                    карт і мобільного додатку BE LOYAL.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.seven ? s.ui_active : undefined}`}
                             onClick={() => setList(7)}>
                            <span className={`${s.tabs_number} ${active.seven ? s.flex_active : undefined}`}>7</span>
                            <span className={`${s.tabs_description} ${active.seven ? s.active_desc : undefined}`}>
                                БАЗОВИЙ 2-Х СТАНЦІЙНИЙ ПИЛОСОС</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.seven ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/vacuume/vacuume2.png' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>Базовий 2-х станційний пилосос</h3>
                                </div>
                                <p>
                                    Професійний пилосос самообслуговування для створення станцій для прибирання салонів
                                    транспортних засобів, двопостовий, працює монетою одного номіналу або жетоном.
                                    Корпус з нержавіючої сталі, тримачі для шлангів в комплекті.
                                </p>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.eight ? s.ui_active : undefined}`}
                             onClick={() => setList(8)}>
                            <span className={`${s.tabs_number} ${active.eight ? s.flex_active : undefined}`}>8</span>
                            <span className={`${s.tabs_description} ${active.eight ? s.active_desc : undefined}`}>
                                2-Х СТАНЦІЙНИЙ ПИЛОСОС BASIC PLUS</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.eight ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/vacuume/vacuume2.png' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>2-х станційний пилосос Basic Plus</h3>
                                </div>
                                <p>
                                    Професійний пилосос самообслуговування для створення станцій для прибирання салонів
                                    транспортних засобів, двопостовий, працює монетою різного номіналу або жетоном.
                                    Пилосос оснащений електронним дисплеєм. Корпус із нержавіючої сталі, стріли з
                                    балансиром шлангів у комплекті. Опціонально можливість підтримки карт лояльності та
                                    платіжних карт і мобільного додатку BE LOYAL.
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
                                <small>ПИЛОСОСИ SAMWASH</small>
                                <strong>Технічні характеристики</strong>
                            </h2>
                        </div>
                        <table className={s.table2}>
                            <thead>
                                <tr>
                                <td>&nbsp;</td>
                                <td colSpan={2}>Пилососи Basic / Basic Plus</td>
                                <td colSpan={2}>Пилососи преміум класу</td>
                            </tr>
                                <tr>
                                <td>&nbsp;</td>
                                <td>1-ст</td>
                                <td>2-станційний</td>
                                <td>1-ст</td>
                                <td>2-станційний</td>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Потужність турбіни</td>
                                    <td>1,2 кВт</td>
                                    <td>2 х 1,2 кВт</td>
                                    <td>3 кВт</td>
                                    <td>2 х 3 кВт</td>
                                </tr>
                                <tr>
                                    <td>Напруга живлення</td>
                                    <td>230В</td>
                                    <td>230В</td>
                                    <td>400В</td>
                                    <td>400В</td>
                                </tr>
                                <tr>
                                    <td>Потік повітря макс</td>
                                    <td>215 м³/год</td>
                                    <td>215 м³/год</td>
                                    <td>260 м³/год</td>
                                    <td>260 м³/год</td>
                                </tr>
                                <tr>
                                    <td>Тиск вакууму всмоктування макс</td>
                                    <td>235 мбар</td>
                                    <td>235 мбар</td>
                                    <td>300 мбар</td>
                                    <td>300 мбар</td>
                                </tr>
                                <tr>
                                    <td>Номінальна місткість бака</td>
                                    <td>32 л</td>
                                    <td>32 л</td>
                                    <td>62 л</td>
                                    <td>2 х 62 л</td>
                                </tr>
                                <tr>
                                    <td>Матеріал бака</td>
                                    <td>хромована сталь</td>
                                    <td>хромована сталь</td>
                                    <td>хромована сталь</td>
                                    <td>хромована сталь</td>
                                </tr>
                                <tr>
                                    <td>Розміри (довжина/ширина/висота)</td>
                                    <td>69 х 69 х 93 см</td>
                                    <td>100 х 69 х 93 см</td>
                                    <td>80 х 80 х 150 см</td>
                                    <td>110 х 80 х 150 см</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
);
}

export default VacuumeForCar;