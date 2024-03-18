"use client"

import s from './presentation.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import {useEffect, useState} from "react";

function Service() {

    const t = useTranslations("presentation");

    const [box, setBox] = useState({
        first: true, second: false, third: false, fourth: false
    })

    useEffect(() => {
        let itemsCounters = document.querySelectorAll(`#item`)
        let section_counter = document.querySelector("#section_counter")
        let speed = 50

        const count = (counters) => {
            counters.forEach((counter, index) => {
                function UpdateCounter() {
                    const targetNumber = +counter.dataset.target
                    const initialNumber = +counter.innerText
                    const incPerCount = targetNumber / speed
                    if (initialNumber < targetNumber) {
                        counter.innerText = Math.ceil(initialNumber + incPerCount)
                        setTimeout(UpdateCounter, 40)
                    }
                }

                UpdateCounter()
                if (counter.parentElement.style.animation) {
                    counter.parentElement.style.animation = ''
                } else {
                    counter.parentElement.style.animation = `slider-up .3s ease forward ${index / counters.length + 0.5}s`
                }
            })
        }
        let CounterObserver2 = new IntersectionObserver((entries, observer) => {
            let [entry] = entries
            if (!entry.isIntersecting) return
            count(itemsCounters)
        }, {root: null, threshold: 0.4})
        CounterObserver2.observe(section_counter)
    }, [])

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
                <Image src='/presentation/presentation.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("presentation1")}
                        </li>
                    </ul>
                    <h1>{t("presentation1")}</h1>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.div_piw}>
                        <div className={s.div_image}>
                            <Image src='/presentation/persone.png' alt='' width={800} height={700}/>
                        </div>
                    </div>
                    <div className={s.div_piw}>
                        <div className={s.div_text}>
                            <div className="section-header">
                                <h2>
                                    <small></small>
                                    <strong>Наша мета – бізнес-успіх клієнтів SAMWASH</strong>
                                </h2>
                                <p className={s.headerP}>
                                    «Якщо ви хочете стояти на місці, ви повинні бігти. Якщо хочеш зробити крок вперед,
                                    треба
                                    бігти щосили» - ця цитата з «Аліси в країні чудес» добре відображає філософію нашої
                                    компанії. З самого початку свого існування ми інвестували в майбутнє наших клієнтів
                                    і
                                    наше
                                    власне, проектуючи найкращі рішення для мийки та додаткові системи, підтверджуючи їх
                                    надійність в очах власників автомийок та їх клієнтів. Ми проектуємо, а не збираємо.
                                    Ми
                                    створюємо тренди в індустрії автомийок. Ми продаємо, допомагаючи досягати
                                    бізнес-цілей
                                    наших
                                    клієнтів.
                                </p>
                                <div className={s.citation}>
                                    <h4>
                                        <b>" </b>
                                        Сучасні технології є інструментом для досягнення основної мети нашої компанії,
                                        відповідаючи бізнес-очікуванням наших клієнтів. Завдяки такому підходу ми
                                        продовжуємо впроваджувати новітні технології, зберігаючи найвищу якість
                                        продукції.
                                        <b> "</b>
                                    </h4>
                                    <p>Пьотр Анджеєвський, президент BKF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section2} id='section_counter'>
                <div className="main-container">
                    <div className={s.description_wrapper}>
                        <div className={s.item}>
                            <div className={s.image_box}>
                                <Image src='/service/gray10.svg' alt='' width={55} height={55}/>
                            </div>
                            <h2 id="item" data-target={1800}>0</h2>
                            <span>виготовлені прилади в рік</span>
                        </div>
                        <div className={s.item}>
                            <div className={s.image_box}>
                                <Image src='/service/gray6.svg' alt='' width={55} height={55}/>
                            </div>
                            <h2 id="item" data-target={30}>0</h2>
                            <span>років досвіду</span>
                        </div>
                        <div className={s.item}>
                            <div className={s.image_box}>
                                <Image src='/service/gray7.svg' alt='' width={55} height={55}/>
                            </div>
                            <h2 id="item" data-target={100}>0</h2>
                            <span>працівників</span>
                        </div>
                        <div className={s.item}>
                            <div className={s.image_box}>
                                <Image src='/service/gray8.svg' alt='' width={55} height={55}/>
                            </div>
                            <h2 id="item" data-target={30}>0</h2>
                            <span>ринків, де ми присутні</span>
                        </div>
                        <div style={{border: 'none'}} className={s.item}>
                            <div className={s.image_box}>
                                <Image src='/service/gray9.svg' alt='' width={55} height={55}/>
                            </div>
                            <h2 id="item" data-target={450}>0</h2>
                            <span>тисячі автомобілів, митих за день</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.div_piw}>
                        <div className={s.div_text}>
                            <div className="section-header">
                                <div className={s.citation}>
                                    <h4>
                                        <b>" </b>
                                        Кожен з нас різний, але всі ми маємо спільну мету, і це нас об’єднує.
                                        <b> "</b>
                                    </h4>
                                    <p>Клаудія Федорович-Анджеєвська, президент BKF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.div_piw}>
                        <div className={s.div_image}>
                            <Image src='/presentation/persone2.jpg' alt='' width={800} height={700}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.red_section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small style={{color: 'white'}}>ЩО НАЙВАЖЛИВІШЕ ДЛЯ НАС У ПОВСЯКДЕННІЙ СПРАВІ</small>
                            <strong style={{color: 'white'}}>Наші цінності</strong>
                        </h2>
                    </div>
                    <ul className={s.ul_list}>
                        <li>
                            <div className={s.icon_div}>
                                <Image src='/presentation/list1.svg' alt='' width={1900} height={300}/>
                            </div>
                            <h3>Пристрасть</h3>
                            <p>
                                До кожного проекту ми беремося серцем і розумом. У дискусійних групах компанії наші
                                інженери, програмісти, працівники електроніки та виробництва обговорюють свої ідеї та
                                вдосконалення наших рішень.
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div}>
                                <Image src='/presentation/list2.svg' alt='' width={1900} height={300}/>
                            </div>
                            <h3>Якість</h3>
                            <p>
                                Перед тим, як нове рішення буде запропоновано нашим клієнтам, воно ретельно
                                перевіряється і проходить безліч тестів: кількісні, якісні, зручність використання і
                                зручність. Ми надаємо розширену документацію та навчальні посібники для кожного нового
                                продукту та послуги.
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div}>
                                <Image src='/presentation/list3.svg' alt='' width={1900} height={300}/>
                            </div>
                            <h3>Інновація</h3>
                            <p>
                                Щороку наша пропозиція містить інноваційні рішення, які викликають великий інтерес у
                                клієнтів. Ми приділяємо особливу увагу розробці додатків, що підтримують керування
                                автомийкою, але ми також працюємо над вдосконаленням технології мийки.
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div}>
                                <Image src='/presentation/list4.svg' alt='' width={1900} height={300}/>
                            </div>
                            <h3>Клієнтоорієнтованість</h3>
                            <p>
                                Потреба в нових рішеннях часто виникає від наших клієнтів. Ми працюємо на дуже
                                різноманітних ринках, тому ми приділяємо велику увагу тому, щоб наша пропозиція була
                                повністю адаптована до різноманітних потреб.
                            </p>
                        </li>
                    </ul>
                    <div>
                        <Link href='/quality-policy' className={s.gray_but}>
                            <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={5} height={5}/>
                            Політика якості
                        </Link>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ТЕХНОЛОГІЯ, СТВОРЕНА З ПРИСТРАСТЮ</small>
                            <strong>Ми інвестуємо в технології</strong>
                        </h2>
                    </div>
                    <div className={s.div_wrapper}>
                        <div className={s.box_four}>
                            <div className={s.box_item} onClick={() => setList(1)}
                                 style={box.first ? active : undefined}>
                                <Image src='/presentation/four4.svg' alt='' width={50} height={50}/>
                                <span>Власний відділ досліджень і розробок</span>
                            </div>
                            <div className={s.box_content} style={box.first ? {display: 'block'} : undefined}>
                                <h2>Власний відділ досліджень і розробок</h2>
                                <p>
                                    Наші фахівці постійно працюють над створенням нових продуктів і розвитком існуючих.
                                    Налагоджені в компанії компетенції дозволяють нам швидко реагувати на мінливі умови
                                    ринку та дивувати наших клієнтів новими продуктами.
                                </p>
                            </div>
                            <div className={s.box_item} onClick={() => setList(2)}
                                 style={box.second ? active : undefined}>
                                <Image src='/presentation/four3.svg' alt='' width={50} height={50}/>
                                <span>Технологічна гнучкість</span>
                            </div>
                            <div className={s.box_content} style={box.second ? {display: 'block'} : undefined}>
                                <h2>Технологічна гнучкість</h2>
                                <p>
                                    Ми адаптуємо пропоновану продукцію до вимог клієнтів та їх різноманітних потреб.
                                    Наші автомийки відмінно працюють за різних погодних умов. У Норвегії ми запустили
                                    першу в цій країні автомийку, яка підтримує лише безготівковий розрахунок.
                                </p>
                            </div>
                            <div className={s.box_item} onClick={() => setList(3)}
                                 style={box.third ? active : undefined}>
                                <Image src='/presentation/four2.svg' alt='' width={50} height={50}/>
                                <span>Оригінальні рішення</span>
                            </div>
                            <div className={s.box_content} style={box.third ? {display: 'block'} : undefined}>
                                <h2>Оригінальні рішення</h2>
                                <p>
                                    Ми прислухаємося до наших клієнтів! Щодня ми аналізуємо їхні потреби, щоб зробити
                                    наші технології та системи мийки все кращими. Завдяки таким змінам автомийки SAMWASH
                                    працюють більш ефективно.
                                </p>
                            </div>
                            <div className={s.box_item} onClick={() => setList(4)}
                                 style={box.fourth ? active : undefined}>
                                <Image src='/presentation/four1.svg' alt='' width={50} height={50}/>
                                <span>Сучасна технологічна лінія</span>
                            </div>
                            <div className={s.box_content} style={box.fourth ? {display: 'block'} : undefined}>
                                <h2>Сучасна технологічна лінія</h2>
                                <p>
                                    Ми маємо сучасну виробничу лінію, керовану передовою системою MRP. Процес створення
                                    кожної автомийки суворо контролюється, завдяки чому ми забезпечуємо високу якість
                                    наших пристроїв і своєчасне виконання замовлень.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.blue_section}>
                <div className="main-container">
                    <div className={s.img_wrapper}>
                        <a data-fancybox="gallery"
                           href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="" loading="lazy" className={s.frame}/>
                        </a>
                    </div>
                    <div className={s.half_column}>
                        <div className={s.text_block}>
                            <p style={{color: 'white'}}>
                                SAMWASH спеціалізується на системах миття транспортних засобів, з особливим акцентом на
                                безконтактному мийці. Багаторічний досвід дозволив створити пристрої останнього
                                покоління, які відповідають вимогам світового автомобільного ринку. Наші автомийки
                                відрізняються найвищою якістю, надійністю та низьким рівнем відмов.
                            </p>
                            <h3>Ми пропонуємо повний пакет послуг за допомогою:</h3>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    консультації щодо вибору автомийки та супутнього обладнання,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    розрахунок, аналіз прибутковості та фінансування,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    допомога у виборі місця,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    створення концепції автомийки або мийного комплексу в обраному районі,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    надання всіх даних, необхідних для отримання умов розвитку,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    повна документація, проекти та звіти, необхідні для отримання дозволу на
                                    будівництво,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    реалізація інвестиції – встановлення автомийки,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    постійне комплексне обслуговування,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    гарантійне та післягарантійне обслуговування,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    розвиток і розширення.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Service;