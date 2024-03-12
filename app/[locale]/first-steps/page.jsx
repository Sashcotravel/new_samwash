"use client"

import s from './firstSteps.module.css';
import Image from "next/image";
import Link from "next-intl/link";
import FixManu3 from "@/app/component/fixManu3/FixManu3";
import {useTranslations} from "next-intl";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import ConfigureWash from "@/app/component/configureWash/ConfigureWash";

function FirstSteps() {

    const t = useTranslations("first-steps");

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });


    return (
        <div>

            <section className='head-image'>
                <Image src='/firstSteps/firstSteps.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("step1")}
                        </li>
                    </ul>
                    <h1>{t("step1")}</h1>
                </div>
            </section>

            <FixManu3 active={1}/>

            <section className={s.section_blue}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong style={{color: 'white'}}>7 кроків до будівництва автомийки</strong>
                        </h2>
                    </div>
                    <div className={s.video_block}>
                        <iframe
                            src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                            title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                    </div>
                    <div className={s.text_block}>
                        <p>
                            Рішення інвестувати в безконтактну автомийку може бути дуже складним і складним. До цього
                            варто підійти організовано та свідомо з самого початку – тому ми підготували для вас
                            навчальний відеоролик.
                        </p>
                        <p>
                            При виборі доступних на ринку рішень важливо звернути особливу увагу на довіру та досвід
                            виробників. SAMWASH – компанія, яка працює на ринку вже майже 30 років. Ми пропонуємо нашим
                            клієнтам комплексну підтримку з самого початку інвестиції та доступні для вас на кожному
                            етапі співпраці. Ми проведемо вас через весь процес відкриття власної автомийки.
                        </p>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <div className={s.div_padding}>
                        <div className="section-header">
                            <h2>
                                <small>ЧАСТІ ПИТАННЯ ВІД НАШИХ КЛІЄНТІВ</small>
                                <strong>Про що ви найчастіше запитуєте нас?</strong>
                            </h2>
                        </div>
                        <div className={s.flex_box}>
                            <div className={s.item}>
                                <h3>Модуль чи контейнер?</h3>
                                <p>
                                    Не знаєте яку автомийку вибрати? Ознайомтеся з характеристиками
                                    модульно-контейнерної мийки.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/youtube.svg' alt='' width={40} height={40}/>
                                    <a data-fancybox="gallery"
                                       href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                                        <p>Модуль чи контейнер?</p>
                                    </a>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Порошок або рідина для миття автомобіля?</h3>
                                <p>
                                    Ознайомтеся з найважливішими особливостями автомийки з використанням рідких
                                    і порошкових хімікатів.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/youtube.svg' alt='' width={40} height={40}/>
                                    <a data-fancybox="gallery"
                                       href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                                        <p>Порошкова чи рідка мийка?</p>
                                    </a>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Скільки площі ділянки потрібно для будівництва автомийки x-bay?</h3>
                                <p>
                                    Перевірте, скільки станцій безконтактної мийки можна встановити на своїй ділянці.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/doc.svg' alt='' width={64} height={64}/>
                                    <Link href='/'>Який сюжет вибрати?</Link>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Які формальності ви повинні виконати?</h3>
                                <p>
                                    Інвестування в безконтактну мийку вимагає отримання певних документів.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/doc.svg' alt='' width={64} height={64}/>
                                    <Link href='/'>Які формальності потрібно виконати?</Link>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Чому варто підключити автомийку до Інтернету?</h3>
                                <p>
                                    Дистанційне керування автомийкою – це зручно та заощаджує час.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/youtube.svg' alt='' width={40} height={40}/>
                                    <a data-fancybox="gallery"
                                       href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                                        <p>Чому варто підключати автомийку до інтернету?</p>
                                    </a>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Які методи очищення пропонуються?</h3>
                                <p>
                                    У SAMWASH ви можете пристосувати рішення до ваших потреб і можливостей певного
                                    місця.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/doc.svg' alt='' width={64} height={64}/>
                                    <Link href='/'>Техніка мийки SAMWASH</Link>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Які типи конструкцій ви знайдете в пропозиції?</h3>
                                <p>
                                    У нас є широкий вибір дизайнів автомийки для вас, від простих
                                    мінімалістичних до більш футуристичних.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/doc.svg' alt='' width={64} height={64}/>
                                    <Link href='/'>Конструкції автомийки SAMWASH</Link>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Яка рентабельність автомийки? Скільки можна заробити?</h3>
                                <p>
                                    Плануйте прибутковість свого бізнесу. Наш калькулятор допоможе визначити
                                    орієнтовні доходи та витрати на роботу автомийки.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/doc.svg' alt='' width={64} height={64}/>
                                    <Link href='/'>Калькулятор прибутковості SAMWASH</Link>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Які додаткові пристрої повинна мати автомийка?</h3>
                                <p>
                                    Зробіть свою автомийку виділяючою серед конкурентів за допомогою додаткових
                                    пристроїв:
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/doc.svg' alt='' width={64} height={64}/>
                                    <ul>
                                        <li>
                                            <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                            <Link href='/vacuume-for-car'>надійні пилососи SAMWASH</Link>
                                        </li>
                                        <li>
                                            <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                            <Link href='/payment-terminal'>безпечні змінні автомати для автомийок</Link>
                                        </li>
                                        <li>
                                            <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                            <Link href='/dispenser'>привабливий розподільник склоомивача</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_brown}>
                <div className="main-container">
                    <div className={s.div_padding}>
                        <div className="section-header">
                            <h2>
                                <small style={{color: 'white'}}>ЩО ГОВОРЯТЬ ПРО НАС НАШІ КЛІЄНТИ</small>
                                <strong style={{color: 'white'}}>Дивіться наші проекти</strong>
                            </h2>
                        </div>
                        <div className={s.box_realization}>
                            <div className={s.first_reliz}>
                                <div className={s.inside}>
                                    <div className={s.image_box}>
                                        <Image src='/mainPage/box6/image1.jpg' alt='' width={500} height={500}/>
                                    </div>
                                    <div className={s.text_box}>
                                        <h3>Davidiv</h3>
                                        <p></p>
                                        <Link href='/realization/Davydov'
                                              className={`${s.but_more} btn`}>читати далі</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={s.second_reliz}>
                                <div className={s.inside}>
                                    <div className={s.image_box}>
                                        <Image src='/mainPage/box6/image2.jpg' alt='' width={300} height={600}/>
                                    </div>
                                    <div className={s.text_box}>
                                        <h3>ЩЕЦИН, 10ТКА</h3>
                                        <p></p>
                                        <Link href='/realization'
                                              className={`${s.but_more} btn`}>читати далі</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={s.third_reliz}>
                                <div className={s.inside}>
                                    <div className={s.image_box}>
                                        <Image src='/mainPage/box6/image3.jpg' alt='' width={300} height={600}/>
                                    </div>
                                    <div className={s.text_box}>
                                        <h3>НОВА СІЛЬ</h3>
                                        <p></p>
                                        <Link href='/realization'
                                              className={`${s.but_more} btn`}>читати далі</Link>
                                    </div>
                                </div>
                            </div>
                            <div className={s.fourth_reliz}>
                                <div className={s.inside}>
                                    <div className={s.image_box}>
                                        <Image src='/mainPage/box6/image4.jpg' alt='' width={400} height={600}/>
                                    </div>
                                    <div className={s.text_box}>
                                        <h3>Познань, Дробник</h3>
                                        <p></p>
                                        <Link href='/realization'
                                              className={`${s.but_more} btn`}>читати далі</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.div_but_red}>
                            <ButtonRedArrowRight text='main104' link='/realization'/>
                        </div>
                    </div>
                </div>
            </section>

            {<ConfigureWash />}

        </div>
    );
}

export default FirstSteps;