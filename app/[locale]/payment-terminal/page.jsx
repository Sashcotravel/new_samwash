"use client"

import s from './payment-terminal.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import FixManu2 from "@/app/component/fixManu2/FixManu2";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

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
                        <div className={s.over}>
                            <table className={s.table}>
                                <thead>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>
                                        <Image src='/terminal/terminal-1.png' alt='' width={250} height={250}/>
                                    </td>
                                    <td>
                                        <Image src='/terminal/terminal-2.png' alt='' width={250} height={250}/>
                                    </td>
                                    <td>
                                        <Image src='/terminal/terminal-3.png' alt='' width={250} height={250}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td><h3>
                                        Базове <br/>
                                        <small>для хорошого початку</small>
                                    </h3></td>
                                    <td><h3>
                                        Стандарт <br/>
                                        <small>Оптимальний</small>
                                    </h3></td>
                                    <td><h3>
                                        Профі <br/>
                                        <small>для вимогливих людей</small>
                                    </h3></td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Справа</td>
                                    <td>нержавіюча сталь</td>
                                    <td>нержавіюча сталь</td>
                                    <td>нержавіюча сталь</td>
                                </tr>
                                <tr>
                                    <td>Дисплей</td>
                                    <td>4-секційний світлодіод</td>
                                    <td>4-секційний світлодіод</td>
                                    <td>ЖК</td>
                                </tr>
                                <tr>
                                    <td>Підтримка монет</td>
                                    <td>1 номінал</td>
                                    <td>2 номінал</td>
                                    <td> номінал</td>
                                </tr>
                                <tr>
                                    <td>Захист від електромагнітного імпульсу</td>
                                    <td>Так</td>
                                    <td>Так</td>
                                    <td>Так</td>
                                </tr>
                                <tr>
                                    <td>Підключення до Carwash Manager</td>
                                    <td>так (варіант)</td>
                                    <td>так (варіант)</td>
                                    <td>так (варіант)</td>
                                </tr>
                                <tr>
                                    <td>Продаж карт лояльності</td>
                                    <td>НІ</td>
                                    <td>так (варіант)</td>
                                    <td>так (варіант)</td>
                                </tr>
                                <tr>
                                    <td>Поповнення картки лояльності</td>
                                    <td>НІ</td>
                                    <td>так (варіант)</td>
                                    <td>так (варіант)</td>
                                </tr>
                                <tr>
                                    <td>Друк квитанцій</td>
                                    <td>НІ</td>
                                    <td>так (варіант)</td>
                                    <td>так (варіант)</td>
                                </tr>
                                <tr>
                                    <td>Підтримка платіжних карток</td>
                                    <td>НІ</td>
                                    <td>НІ</td>
                                    <td>так (варіант)</td>
                                </tr>
                                <tr>
                                    <td>Використовувати як пост оплати (SAMWASH Central Pay)</td>
                                    <td>НІ</td>
                                    <td>НІ</td>
                                    <td>так (варіант)</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className={s.tableP}> * Підключення змінного автомата до Carwash Manager
                            можливе лише для автомийок SAMWASH.</p>
                    </div>
                </div>
            </section>

            <section className={s.section_gray}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ЯКІСТЬ ЗА ПОМІРНУ ЦІНУ</small>
                            <strong>SAMWASH Basic змінна машина</strong>
                        </h2>
                    </div>
                    <div className={s.divItems}>
                        <div className={s.third_column}>
                            <ul>
                                <li>
                                    <span><b>Перевірені компоненти</b></span>
                                    <p>
                                        У всіх наших пристроях ми використовуємо компоненти найвищої якості. У цій
                                        версії ви також знайдете бункери Alberici та зчитувачі банкнот ICT.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Хороша ціна</b></span>
                                    <p>
                                        У розмінному автоматі SAMWASH Basic ми пропонуємо вам все найкраще за
                                        конкурентоспроможною ціною.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_box}>
                                <Image src='/terminal/terminal-box-1.png' alt='' width={600} height={500}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.rightUl}>
                                <li>
                                    <span><b>Пульт</b></span>
                                    <p>
                                        Можливість підключення до Інтернету та доступу до повідомлень і статистики
                                        пристрою в додатку Carwash Manager.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Безпека</b></span>
                                    <p>
                                        Стійкість до атак за допомогою генератора електромагнітних імпульсів.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Простий у використанні</b></span>
                                    <p>
                                        Просте та інтуїтивно зрозуміле керування, яке перетворюється на
                                        просте обслуговування.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <Swiper
                        rewind={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Розмінні автомати SAMWASH - Інтернет</div>
                                <div className={s.itemCenter}>SAMWASH Basic змінна машина</div>
                                <div className={s.itemSlider}>Розмінні автомати SAMWASH - безпека</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                            <p className={s.owl_stag_P}>
                                Перевірте, чому варто обрати рішення, запропоновані SAMWASH.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>SAMWASH Basic змінна машина</div>
                                <div className={s.itemCenter}>Розмінні автомати SAMWASH - безпека</div>
                                <div className={s.itemSlider}>Розмінні автомати SAMWASH - Інтернет</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Інтернет на автомийці - як це починалося?" loading="lazy" className={s.frame}/>
                            <p className={s.owl_stag_P}>Безпека ваших грошей є нашим пріоритетом.</p>
                        </SwiperSlide>
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Розмінні автомати SAMWASH - безпека</div>
                                <div className={s.itemCenter}>Розмінні автомати SAMWASH - Інтернет</div>
                                <div className={s.itemSlider}>SAMWASH Basic змінна машина</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітленням автомийки" loading="lazy" className={s.frame}/>
                            <p className={s.owl_stag_P}>
                                Розмінний автомат, який повідомляє вам, що вам потрібно поповнити запас монет?
                                З SAMWASH це можливо!
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className={s.section_gray}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>СТАНДАРТНА ЗМІННА МАШИНА</small>
                            <strong>Зручні розрахунки для клієнтів вашої автомийки</strong>
                        </h2>
                    </div>
                    <div className={s.divItems}>
                        <div className={s.third_column}>
                            <ul>
                                <li>
                                    <span><b>Корпус з нержавіючої сталі</b></span>
                                    <p>
                                        Міцна рама з нержавіючої сталі захищає пристрій і забезпечує високу
                                        естетичність. Крім того, його легко підтримувати в чистоті.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Світлодіодний дисплей</b></span>
                                    <p>
                                        Великий і чіткий світлодіодний дисплей інформує про суму, яка буде використана -
                                        обмін на монети, покупка або поповнення картки лояльності, в залежності від
                                        встановлених опцій.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Безпека</b></span>
                                    <p>
                                        Протоколи зв'язку, які використовуються нашими обмінними автоматами,
                                        забезпечують стійкість до електромагнітних імпульсних атак. Ваші гроші будуть у
                                        безпеці!
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_box}>
                                <Image src='/terminal/terminal-box-2.png' alt='' width={600} height={500}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.rightUl}>
                                <li>
                                    <span><b>Підтримка картки лояльності (опціонально)</b></span>
                                    <p>
                                        Розмінний автомат SAMWASH Standard забезпечує роботу системи лояльності
                                        - як покупка, так і поповнення картки лояльності можливі без залучення
                                        співробітника автомийки.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Друк квитанцій (необов'язково)</b></span>
                                    <p>
                                        Встановлення принтера дозволяє клієнтам отримувати підтвердження здійснених
                                        операцій (нефіскальний чек).
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.back_graund}>
                <div className="main-container">
                    <div className={s.half_column}>
                        <div className={s.image_wrapper}>
                            <Image src='/terminal/phone.png' alt='' width={500} height={500}/>
                        </div>
                        <div className={s.middle_icon}>
                            <div className={s.circle_ico}>
                                <Image src='/terminal/image1.svg' alt='' width={64} height={64}/>
                            </div>
                        </div>
                        <div className={s.bottom_icon}>
                            <div className={s.circle_ico2}>
                                <Image src='/terminal/image2.svg' alt='' width={64} height={64}/>
                            </div>
                        </div>
                        <div className={s.top_icon}>
                            <div className={s.circle_ico1}>
                                <Image src='/terminal/image3.svg' alt='' width={36} height={36}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.half_column}>
                        <div className={s.text_wrapper2}>
                            <div className="section-header">
                                <h2 className={s.headerH2}>
                                    <small style={{color: 'white'}}>МЕНЕДЖЕР АВТОМИЙКИ</small>
                                    <strong style={{color: 'white'}}>Тримайте руку на пульсі</strong>
                                    <p className={s.headerP}>
                                        Підключіть свою автомийку до системи Carwash Manager і отримайте віддалений
                                        доступ до змінних даних машини. Перевірте стан пристрою і рівень заповнення
                                        монетних контейнерів, проаналізуйте обіг за будь-який період.
                                    </p>
                                </h2>
                            </div>
                            <div className={s.aplications_wrapper}>
                                <h2>Завантажте додаток Carwash Manager</h2>
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

            <section className={s.section_gray+ ' ' + s.color}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ROZMIENIARKA PRO</small>
                            <strong>Платіжний центр на вашій автомийці</strong>
                        </h2>
                    </div>
                    <div className={s.divItems}>
                        <div className={s.third_column}>
                            <ul>
                                <li>
                                    <span><b>Корпус з нержавіючої сталі</b></span>
                                    <p>
                                        Міцна рама з нержавіючої сталі захищає пристрій і забезпечує високу
                                        естетичність. Крім того, його легко підтримувати в чистоті.
                                    </p>
                                </li>
                                <li>
                                    <span><b>LCD дисплей</b></span>
                                    <p>
                                        Використання 4-рядкового РК-дисплея забезпечує розширену комунікацію з
                                        користувачем і полегшує використання розширених опцій, які пропонує розмінний
                                        автомат SAMWASH Pro.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_box}>
                                <Image src='/terminal/terminal-box-3.jpg' alt='' width={600} height={500}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.rightUl}>
                                <li>
                                    <span><b>Підтримка картки лояльності (опціонально)</b></span>
                                    <p>
                                        Встановлення зчитувача та диспенсера карт лояльності дозволяє
                                        створити систему лояльності.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Платіжний пост SAMWASH Central Pay (опціонально)</b></span>
                                    <p>
                                        Розмінний автомат SAMWASH Pro може служити центральним пунктом оплати на вашій
                                        автомийці. Клієнт оплачує комісію та обирає мийну станцію, яка дистанційно
                                        поповнюється відповідною сумою. Рішення дозволяє заощадити на установці
                                        додаткових способів оплати на окремих робочих місцях.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Підтримка банківських карт PayPass (опціонально)</b></span>
                                    <p>
                                        Необхідне доповнення, якщо ви плануєте використовувати розмінний автомат як
                                        платіжний стовп. Крім того, це спростить придбання та поповнення карт
                                        лояльності.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
        ;
}

export default PaymentTerminal;