import React from 'react';
import Image from "next/image";
import s from "./accessories-for-wash.module.css";
import Link from "next-intl/link";
import FixManu2 from "@/app/component/fixManu2/FixManu2";
import {useTranslations} from "next-intl";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import FormUserDate from "@/app/component/formUserData/FormUserDate";
import WrapperClick from "@/app/component/wrapper_click/WrapperClick";


function AccessoriesForWash() {

    const t = useTranslations("accessories-for-wash");

    return (
        <div>

            <section className='head-image'>
                <Image src='/accessories/accessories.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("accessories1")}
                        </li>
                    </ul>
                    <h1>{t("accessories1")}</h1>
                </div>
            </section>

            <FixManu2 active={1}/>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text_block}>
                        <div className={s.four_column}>
                            <p>
                                <Image src='/vacuume/vacuume3.png' alt='' width={300} height={500}/>
                            </p>
                            <div className={s.divInfo}>
                                <p>Пристрої для миття салонів транспортних засобів.</p>
                                <div className={s.divFlex}>
                                    <ButtonRedArrowRight text={'vacuumeText'} link={'/vacuume-for-car'}/>
                                </div>
                            </div>
                        </div>
                        <div className={s.four_column}>
                            <p>
                                <Image src='/vacuume/vacuume3.png' alt='' width={300} height={500}/>
                            </p>
                            <div className={s.divInfo}>
                                <p>Багатофункціональні пристрої для обміну грошей, продажу та поповнення
                                    карт лояльності та ін.</p>
                                <div className={s.divFlex}>
                                    <ButtonRedArrowRight text={'payTerminal'} link={'/payment-terminal'}/>
                                </div>
                            </div>
                        </div>
                        <div className={s.four_column}>
                            <p>
                                <Image src='/vacuume/vacuume3.png' alt='' width={300} height={500}/>
                            </p>
                            <div className={s.divInfo}>
                                <p>Пристрій для самозаправки склоомивача.</p>
                                <div className={s.divFlex}>
                                    <ButtonRedArrowRight text={'distributor'} link={'/dispenser'}/>
                                </div>
                            </div>
                        </div>
                        <div className={s.four_column}>
                            <p>
                                <Image src='/vacuume/vacuume3.png' alt='' width={300} height={500}/>
                            </p>
                            <div className={s.divInfo}>
                                <p>Повний асортимент спеціальної хімії для безконтактної
                                    та портальної мийки автомобілів.</p>
                                <div className={s.divFlex}>
                                    <ButtonRedArrowRight text={'chemicals'} link={'/chemistry'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ДОДАТКОВІ ОПЦІЇ ДЛЯ АВТОМИЙКИ</small>
                            <strong>Ви вирішуєте, що вам цікаво</strong>
                        </h2>
                        <p>
                            Широкий вибір рішень, які входять до складу наших автомийок, а також додаткові
                            рішення дозволять вам створити автомийку, яка відповідає потребам середовища,
                            в якому вона буде розміщена. Ми пропонуємо вам базу рішень, які
                            гарантують <b>більший заробіток, дуже високий рівень безпеки автомийки та зручність завдяки
                            дистанційному управлінню технічними параметрами.</b>
                        </p>
                    </div>
                    <ul className={s.features}>
                        <li>
                            <div className={s.icon}>
                                <Image src='/accessories/gears.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Додаткова безпека</h3>
                        </li>
                        <li>
                            <div className={s.icon}>
                                <Image src='/accessories/pigg.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Оптимізація витрат</h3>
                        </li>
                        <li>
                            <div className={s.icon}>
                                <Image src='/accessories/snowflake.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Зимовий пакет</h3>
                        </li>
                        <li>
                            <div className={s.icon}>
                                <Image src='/accessories/carwash-manager.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Різні способи оплати</h3>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ОПТИМІЗАЦІЯ ВИТРАТ</small>
                            <strong>Системи, що знижують витрати бізнесу</strong>
                        </h2>
                        <p>
                            Варто подбати про те, щоб витрати на придбання вашої автомийки окупилися якомога швидше.
                            Клієнти Samwash можуть вибрати з ряду унікальних рішень, які знижують витрати на утримання
                            автомийки під час її роботи. За винятком простою автомийки внаслідок ситуацій, які неможливо
                            передбачити, наприклад, незвичайні погодні умови.
                        </p>
                    </div>
                    <div className={s.block3}>
                        <ul className={s.features}>
                            <li>
                                <h3>Конденсаційна піч</h3>
                                <p>
                                    Встановивши конденсаційну піч, ви мінімізуєте споживання електроенергії та газу на
                                    вашій автомийці,
                                    <span><strong> заощаджуючи до 15% понесених на це витрат.</strong></span>
                                </p>
                            </li>
                            <li>
                                <h3>Розумний підігрів підлоги</h3>
                                <p>
                                    Автоматичне регулювання температури теплої підлоги взимку (без втручання
                                    власника автомийки)
                                    <span><strong> дозволить заощадити до 30% палива для теплої підлоги.</strong></span>
                                </p>
                            </li>
                            <li>
                                <h3>Регулювання системи високого тиску</h3>
                                <p>
                                    Можливість самостійно встановити очікуваний тиск для кожної програми
                                    окремо. Від цього виграє вся гідравлічна система вашої автомийки.
                                    <span><strong> Вигодою для вас є менші витрати на обслуговування,
                                        економія води та електроенергії.</strong></span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.image_section}>
                    <Image src='/accessories/persone.jpg' alt='' width={600} height={600}/>
                </div>
            </section>

            <section className={s.section_with_image}>
                <div className={s.half_column}>
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Зимовий пакет</strong>
                        </h2>
                        <p>
                            Захистіть свою автомийку спеціальними системами зимового пакету, що дозволяє автомийці
                            працювати навіть за екстремальних погодних умов.
                        </p>
                        <ul className={s.ul_header}>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                <span className={s.header_red_span}>Гарячі дроти: </span>
                                <strong> захист ліній високого тиску від замерзання.</strong> <br/>
                                Призначений для автомийок в місцях з низькими зимовими температурами.
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                <span className={s.header_red_span}>Гаряча циркуляція: </span> <br/>
                                циркуляційна установка, розширена системою введення гарячої води в циркуляцію.
                                <b>Захищає циркуляційну систему від замерзання</b>. Призначений для автомийок
                                в місцях з низькими зимовими температурами.
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                <span className={s.header_red_span}>Smart Heating: </span>
                                <strong> автоматична система керування підігрівом підлоги,</strong><br/>
                                яка регулює температуру опалення відповідно до погодних умов.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.image_back}>
                    <Image src='/accessories/winter.jpg' alt='' width={2000} height={700}/>
                </div>
            </section>

            <section className={s.section_with_image2}>
                <div className={s.half_column2}>
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Додаткові програми прання</strong>
                        </h2>
                        <p>
                            Забезпечте своїм клієнтам найвищу якість мийки, розширте свою автомийку
                            додатковими програмами мийки.
                        </p>
                    </div>
                    <div className={s.divFlex}>
                        <ButtonRedArrowRight text={'programs-washing'} link={'/'}/>
                    </div>
                </div>
                <div className={s.image_back2}>
                    <Image src='/accessories/program.jpg' alt='' width={2000} height={700}/>
                </div>
            </section>

            <section className={s.section3}>
                <div className="main-container">
                    <div className={s.image_box}>
                        <Image src='/managerCarwash/13.svg' alt='' width={750} height={640}/>
                    </div>
                    <div className={s.info_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Повний спектр виплат</strong>
                            </h2>
                            <p>
                                Наші продукти адаптовані до потреб ринку, тому ви можете запропонувати своїм клієнтам
                                повний спектр сучасних платежів. Встановивши зчитувачі PayPass для підтримки цих карток,
                                ви дасте своїм клієнтам те, що їм потрібно. А якщо ви також встановите систему
                                лояльності BE LOYAL на своїй автомийці, ви охопите нову групу одержувачів.
                            </p>
                        </div>
                        <ul className={s.list_block_right}>
                            <li>
                                <Image src='/accessories/paypass.svg' alt='' width={64} height={64}/>
                                <h4>Зчитувачі платіжних карток</h4>
                            </li>
                            <li>
                                <Image src='/accessories/carwash-manager.svg' alt='' width={64} height={64}/>
                                <h4>Телефонні платежі (віртуальний гаманець)</h4>
                            </li>
                        </ul>
                        <ul className={s.list_block_left}>
                            <li>
                                <Image src='/accessories/money.svg' alt='' width={64} height={64}/>
                                <h4>Зчитувачі банкнот</h4>
                            </li>
                            <li>
                                <Image src='/accessories/beloyal.svg' alt='' width={64} height={64}/>
                                <h4>Система лояльності BE LOYAL</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Захист компонентів</strong>
                        </h2>
                        <p>
                            У SAMWASH ми надаємо велике значення надійності наших пристроїв. На додаток до ряду
                            стандартних засобів захисту, які ви отримуєте з кожною нашою автомийкою, ми
                            підготували набір додаткових систем, які забезпечать ще більш безвідмовну роботу
                            автомийки, збільшуючи ваші прибутки.
                        </p>
                    </div>
                    <div className={s.box7}>
                        <div className={s.image_wrapper}>
                            <Image src='/accessories/foto.jpg' alt='' width={600} height={600}/>
                        </div>
                        <div className={s.box7_wrapper}>
                            <div className={s.item_box7}>
                                <h3>Перевірка системи високого тиску</h3>
                                <p>
                                    Система, яка дозволяє виявляти порушення в роботі насосів високого тиску та
                                    ініціювати аварійні процедури.
                                </p>
                            </div>
                            <div className={s.item_box7}>
                                <h3>Вимірювання рівня в баку для порошкової води</h3>
                                <p>
                                    Захищає насоси високого тиску від т.зв «сухий хід» і дозволяє автоматично доливати
                                    воду. Інтеграція з програмним забезпеченням SAMWASH дозволяє генерувати сигнал про
                                    нестачу води та автоматично вимикати пристрій.
                                </p>
                            </div>
                            <div className={s.item_box7}>
                                <h3>Діагностика котла</h3>
                                <p>
                                    Розширена система діагностики котлів. У поєднанні з програмним забезпеченням SAMWASH
                                    можливе генерування тривоги в разі несправності котла.
                                </p>
                            </div>
                            <div className={s.item_box7}>
                                <h3>Інтелектуальне перемикання програм</h3>
                                <p>
                                    Система автоматичного перемикання програм прання при виявленні проблеми з гарячою
                                    водою або відсутності води в баку для води і порошку. Захищає насоси від т.зв «сухий
                                    хід» і забезпечує безперервну роботу мийної станції.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <div className={s.half_column3}>
                        <Image src='/accessories/contact.png' alt='' width={750} height={640}/>
                    </div>
                    <div className={s.text_block2}>
                        <div className="section-header">
                            <h2>
                                <small>ВАМ ПОТРІБНА ДОПОМОГА У ВИБОРІ АКСЕСУАРІВ ДЛЯ ВАШОЇ АВТОМИЙКИ?</small>
                                <strong>зв'яжіться з нами</strong>
                            </h2>
                        </div>
                        <div className={s.divBut}>
                            <WrapperClick>
                                <ButtonRedWithoutLink text={'beloyalBut'} />
                            </WrapperClick>
                            <div className={s.phoneDiv}>
                                <Image src='/contact/phoneContact.png' alt='' height={50} width={50}/>
                                <a href="tel:0975794930">097 579 4930</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={s.form1} id='form1'>
                <FormUserDate textH2={'ЯК МИ МОЖЕМО ВАМ ДОПОМОГТИ?'} threeInput={'НОМЕР ТЕЛЕФОНУ'} />
            </div>

        </div>
    );
}

export default AccessoriesForWash;