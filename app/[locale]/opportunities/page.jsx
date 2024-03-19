"use client"

import s from './opportunities.module.css';
import Image from "next/image";
import Link from "next-intl/link";
import FixManu3 from "@/app/component/fixManu3/FixManu3";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ConfigureWash from "@/app/component/configureWash/ConfigureWash";

function Opportunities() {

    const t = useTranslations("opportunities");

    const [active, setActive] = useState({
        first: true, second: false, three: false, four: false, five: false,
        six: false, seven: false, eight: false, ninth: false
    })

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

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

    const rollDown = () => {
        document.getElementById('wash').scrollIntoView({block: "center", behavior: 'smooth'});
    }



    return (
        <div>

            <section className='head-image'>
                <Image src='/opportunities/main.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("opportunities2")}
                        </li>
                    </ul>
                    <h1>{t("opportunities1")}</h1>
                </div>
            </section>

            <FixManu3 active={3}/>

            <section className={s.section2}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>АВТОМИЙКА ПІД ВАШ БІЗНЕС</small>
                            <strong>Параметри конфігурації</strong>
                        </h2>
                        <p>
                            У BKF ми проектуємо автомийки так, щоб нові рішення можна було легко впроваджувати. <b>Ми
                            адаптуємо автомийку до ваших потреб</b> на кожному етапі. Технологія, яка відрізняє
                            автомийки SAMWASH, постійно розвивається - ми проектуємо автомийки, до яких можна легко
                            додавати нові опції, щоб наші автомийки залишалися привабливими для водіїв і
                            конкурентоспроможними на ринку. Просунуті рішення, тобто <b>віддалений доступ</b> до
                            управління автомийкою, програми: <b>BeLoyal, Carwash Manager</b>. Вони випереджають
                            конкурентів, але, перш за все, дозволяють вести свій бізнес на зовсім іншому рівні.
                        </p>
                    </div>
                    <div className={s.one_column_list_with_tabs}>
                        <div className={`${s.tabs_list_wrapper} ${active.first ? s.ui_active : undefined}`}
                             onClick={() => setList(1)}>
                            <span className={`${s.tabs_number} ${active.first ? s.flex_active : undefined}`}>1</span>
                            <span className={`${s.tabs_description} ${active.first ? s.active_desc : undefined}`}>
                                ТЕХНІКА ПРАННЯ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.first ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
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
                                <div style={{margin: '40px 0'}}>
                                    <ButtonRedArrowRight text='autowash' link='/'/>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.second ? s.ui_active : undefined}`}
                             onClick={() => setList(2)}>
                            <span className={`${s.tabs_number} ${active.second ? s.flex_active : undefined}`}>2</span>
                            <span className={`${s.tabs_description} ${active.second ? s.active_desc : undefined}`}>
                                БУДІВНИЦТВО</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.second ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
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
                                <div style={{margin: '40px 0'}}>
                                    <ButtonRedArrowRight text='structures' link='/'/>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.three ? s.ui_active : undefined}`}
                             onClick={() => setList(3)}>
                            <span className={`${s.tabs_number} ${active.three ? s.flex_active : undefined}`}>3</span>
                            <span className={`${s.tabs_description} ${active.three ? s.active_desc : undefined}`}>
                                ПЕРСОНАЛІЗАЦІЯ ЗОВНІШНЬОГО ВИГЛЯДУ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.three ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
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
                                <div style={{margin: '40px 0'}}>
                                    <ButtonRedArrowRight text='seeProjects' link='/realization'/>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.four ? s.ui_active : undefined}`}
                             onClick={() => setList(4)}>
                            <span className={`${s.tabs_number} ${active.four ? s.flex_active : undefined}`}>4</span>
                            <span className={`${s.tabs_description} ${active.four ? s.active_desc : undefined}`}>
                                ПРОГРАМИ ПРАННЯ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.four ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>Програми прання</h3>
                                </div>
                                <p>
                                    Крім стандартних програм мийки, ми також пропонуємо додаткові опції, які підвищать
                                    конкурентоспроможність вашої мийки та в поєднанні з
                                    <Link href='/blog' style={{color: 'red', fontWeight: '700'}}> професійною
                                        хімією SAMWASH </Link> здивують ваших клієнтів кінцевим ефектом мийки.
                                </p>
                                <div style={{margin: '40px 0'}} onClick={rollDown}>
                                    <ButtonRedWithoutLink text='washingPrograms' clas='white'/>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.five ? s.ui_active : undefined}`}
                             onClick={() => setList(5)}>
                            <span className={`${s.tabs_number} ${active.five ? s.flex_active : undefined}`}>5</span>
                            <span className={`${s.tabs_description} ${active.five ? s.active_desc : undefined}`}>
                                СУЧАСНІ ПЛАТІЖНІ СИСТЕМИ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.five ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
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
                                <div style={{margin: '40px 0'}}>
                                    <ButtonRedArrowRight text='program2' link='/beloyal-program'/>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.six ? s.ui_active : undefined}`}
                             onClick={() => setList(6)}>
                            <span className={`${s.tabs_number} ${active.six ? s.flex_active : undefined}`}>6</span>
                            <span className={`${s.tabs_description} ${active.six ? s.active_desc : undefined}`}>
                                ДОДАТКОВІ ПРИСТРОЇ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.six ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
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
                                <div style={{margin: '40px 0'}}>
                                    <ButtonRedArrowRight text='checkOtherApps' link='/accessories-for-wash'/>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.seven ? s.ui_active : undefined}`}
                             onClick={() => setList(7)}>
                            <span className={`${s.tabs_number} ${active.seven ? s.flex_active : undefined}`}>7</span>
                            <span className={`${s.tabs_description} ${active.seven ? s.active_desc : undefined}`}>
                                АКСЕСУАРИ ДЛЯ АВТОМИЙКИ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.seven ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
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
                                <div style={{margin: '40px 0'}}>
                                    <ButtonRedArrowRight text='accessories' link='/accessories-for-wash'/>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.eight ? s.ui_active : undefined}`}
                             onClick={() => setList(8)}>
                            <span className={`${s.tabs_number} ${active.eight ? s.flex_active : undefined}`}>8</span>
                            <span className={`${s.tabs_description} ${active.eight ? s.active_desc : undefined}`}>
                                ПРОГРАМА ЛОЯЛЬНОСТІ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.eight ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
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
                                <div style={{margin: '40px 0'}}>
                                    <ButtonRedArrowRight text='program2' link='/beloyal-program'/>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.eight ? s.ui_active : undefined}`}
                             onClick={() => setList(9)}>
                            <span className={`${s.tabs_number} ${active.ninth ? s.flex_active : undefined}`}>9</span>
                            <span className={`${s.tabs_description} ${active.ninth ? s.active_desc : undefined}`}>
                                ДИСТАНЦІЙНЕ УПРАВЛІННЯ АВТОМИЙКОЮ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.ninth ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/opportunities/image.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
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
                                <div style={{margin: '40px 0'}}>
                                    <ButtonRedArrowRight text='manager' link='/carwash-manager'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section} id='wash'>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Програми прання</strong>
                        </h2>
                        <p>
                            Всі наші безконтактні автомийки стандартно оснащені чотирма основними програмами мийки -
                            базова мийка, полоскання, консервація полімерів і полірування. Ми також надаємо вам низку
                            додаткових програм, які допоможуть вам задовольнити очікування клієнтів і затьмарити
                            конкурентів. Наші консультанти допоможуть скласти оптимальну програму догляду за
                            автомобілем.
                        </p>
                        <p className={s.div_center}>
                            <ButtonRedArrowRight text='programs-washing2' link='/'/>
                        </p>
                    </div>
                    <div className={s.half_div}>
                        <div className={s.image_block}>
                            <Image src='/opportunities/wash.jpg' alt='' width={500} height={400}/>
                        </div>
                        <div className={s.div_blocks}>
                            <div className={s.item}>
                                <Image src='/opportunities/wash-item.svg' alt='' width={80} height={80}/>
                                <h3>Активна піна</h3>
                                <p>
                                    Програма прання, яка стає стандартною. Барвиста ефективна піна допомагає відмити
                                    стійкий бруд і... приваблює клієнтів.
                                </p>
                            </div>
                            <div className={s.item}>
                                <Image src='/opportunities/wash-item.svg' alt='' width={80} height={80}/>
                                <h3>Попереднє обприскування</h3>
                                <p>
                                    Попередня програма, яка допомагає підготувати автомобіль до базової мийки.
                                </p>
                            </div>
                            <div className={s.item}>
                                <Image src='/opportunities/wash-item.svg' alt='' width={80} height={80}/>
                                <h3>Миття щіткою</h3>
                                <p>
                                    Додаткова програма для очищення кузова, для клієнтів, які цінують найвищу
                                    якість миття.
                                </p>
                            </div>
                            <div className={s.item}>
                                <Image src='/opportunities/wash-item.svg' alt='' width={80} height={80}/>
                                <h3>Миття турбощіткою</h3>
                                <p>
                                    Версія для миття щіткою під високим тиском. Крім того, утворює густу піну.
                                </p>
                            </div>
                            <div className={s.item}>
                                <Image src='/opportunities/wash-item.svg' alt='' width={80} height={80}/>
                                <h3>Напилювальні диски</h3>
                                <p>
                                    Додаткова попередня програма для чищення дисків. Допомагає видалити плями з
                                    гальмівних колодок, відновлюючи свіжий зовнішній вигляд.
                                </p>
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
                            <strong style={{color: 'white'}}>Конструкції</strong>
                        </h2>
                        <p style={{color: 'white'}}>
                            Конструкція автомийки - це перше, що бачить водій, проїжджаючи по вулиці. Конструкція
                            виконує не тільки захисну функцію (закриває прилади в автомийці), але і рекламну.
                        </p>
                    </div>
                    <ButtonRedArrowRight text='structures' link='/' clas='add_img' />
                </div>
            </section>

            <section className={s.section_blue}>
                <div className="main-container">
                    <div className={s.add_class}>
                        <div className="section-header">
                            <h2>
                                <small style={{color: 'white'}}>ПЕРСОНАЛІЗАЦІЯ АВТОМИЙКИ</small>
                                <strong style={{color: 'white'}}>Налаштуйте зовнішній вигляд автомийки відповідно
                                    до свого бренду</strong>
                            </h2>
                        </div>
                        <p>
                            У SAMWASH ми приділяємо велике значення всім деталям. Купуючи автомийку в БКФ, ви можете
                            переконатися, що її зовнішній вигляд відповідає вашому бренду.
                        </p>
                        <p>
                            Ви зможете налаштувати кольори рекламних елементів конструкції, розмістити на ній свій
                            логотип, персоналізувати графіку та наповнення банерів на мийках. Панелі керування
                            автомийки, пилососи та всі інші пристрої також можна персоналізувати для створення
                            цілісного образу вашого бренду.
                        </p>
                    </div>
                    <div className={s.image_wrapper2}>
                        <div className={s.photo}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={1900} height={1000}/>
                            </a>
                        </div>
                        <div className={s.photo}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={1900} height={1000}/>
                            </a>
                        </div>
                        <div className={s.photo}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={1900} height={1000}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {ConfigureWash()}

        </div>
    );
}

export default Opportunities;