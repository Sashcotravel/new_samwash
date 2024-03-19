"use client"

import s from './fiscalization.module.css';
import Image from "next/image";
import Link from "next-intl/link";
import FixManu3 from "@/app/component/fixManu3/FixManu3";
import {useTranslations} from "next-intl";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import ConfigureWash from "@/app/component/configureWash/ConfigureWash";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

function Fiscalization() {

    const t = useTranslations("fiscalization");

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });


    return (
        <div>

            <section className='head-image'>
                <Image src='/fiscalization/fiscalization.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("fiscalization1")}
                        </li>
                    </ul>
                    <h1>{t("fiscalization2")}</h1>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <div className={s.div_padding}>
                        <div className="section-header">
                            <h2>
                                <small>ІНСТРУКЦІЯ З ФІСКАЛІЗАЦІЇ АВТОМИЙОК ТА ДОДАТКОВИХ ПРИСТРОЇВ</small>
                                <strong>Як фіскалізувати автомийку SAMWASH?</strong>
                            </h2>
                        </div>
                        <div className={s.flex_box}>
                            <div className={s.item}>
                                <h3>Як правильно вибрати модель фіскалізації автомийки</h3>
                                <p>
                                    Стара чи нова автомийка, самостійний монтаж чи стороння установка? Ознайомтеся з
                                    можливостями, які ми пропонуємо, щоб ви могли вибрати варіант, який відповідає вашим
                                    потребам.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/youtube.svg' alt='' width={40} height={40}/>
                                    <a data-fancybox="gallery"
                                       href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                                        <p>як фіскалізувати автомийку SAMWASH</p>
                                    </a>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Фіскалізація периферійних пристроїв</h3>
                                <p>
                                    Пилососи, автомати для обміну валют, дозатори склоомивача, чорнильники для шин тощо.
                                    Які додаткові пристрої потрібно фіскалізувати на автомийці?
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/youtube.svg' alt='' width={40} height={40}/>
                                    <a data-fancybox="gallery"
                                       href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                                        <p>фіскалізація периферійних пристроїв</p>
                                    </a>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Коли фіскалізувати розмінний автомат</h3>
                                <p>
                                    Не кожен розмінний автомат потребує фіскалізації. Подивіться відео і ми розповімо,
                                    коли потрібна фіскалізація розмінника.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/youtube.svg' alt='' width={40} height={40}/>
                                    <a data-fancybox="gallery"
                                       href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                                        <p> як фіскалізувати розмінний автомат</p>
                                    </a>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Які продукти та аксесуари я повинен купити?</h3>
                                <p>
                                    Касовий апарат, GSM модуль, роутер, оновлення ПЗ, додаткові аксесуари? Ми
                                    підготували для вас тренінг, у якому крок за кроком пояснюємо, як зібрати
                                    компоненти, необхідні для фіскалізації вашої автомийки.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/doc.svg' alt='' width={64} height={64}/>
                                    <Link href='/'>Навчання фіскалізації автомийок SAMWASH</Link>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Блог</h3>
                                <p>
                                    Потрібно знати більше? Ознайомтеся зі статтею нашого блогу, яка містить відповіді
                                    на найпоширеніші запитання щодо фіскалізації автомийки.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/doc.svg' alt='' width={64} height={64}/>
                                    <Link href='/'>Фіскалізація автомийок – блог SAMWASH</Link>
                                </div>
                            </div>
                            <div className={s.item}>
                                <h3>Прохання про перенесення терміну фіскалізації</h3>
                                <p>
                                    Використовуйте готову програму для продовження дати початку обліку продажів
                                    за допомогою касових апаратів.
                                </p>
                                <div className={s.but_div}>
                                    <Image src='/firstSteps/doc.svg' alt='' width={64} height={64}/>
                                    <Link href='/'>Клопотання про відстрочку</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Замовлення касових апаратів Novitus</strong>
                            </h2>
                            <p>
                                Заповніть відповідну форму, якщо Вас цікавить придбання та встановлення касових
                                апаратів SDF-3 Novitus для автомийки SAMWASH. Якщо у вас є кілька автомийок, <b>заповніть
                                окрему форму для кожної автомийки</b>.
                            </p>
                        </div>
                        <table className={s.table}>
                            <thead>
                            <tr>
                                <td>&nbsp;</td>
                                <td><span>Встановлення касового апарату сервісом SAMWASH</span></td>
                                <td><span>Збірка 70/30</span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>Встановлення та налаштування касових апаратів в иконує сервіс SAMWASH.</td>
                                <td>Монтаж касових апаратів своїми руками. Налаштування касового апарату та
                                    оновлення ПЗ здійснить сервіс SAMWASH.
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Підведення Інтернету до касових апаратів</td>
                                <td>
                                    <div>
                                        <p></p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p></p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Підбір компонентів</td>
                                <td>
                                    <div>
                                        <Image src='/fiscalization/red.svg' alt='' width={36} height={36}/>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p></p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Установка касових апаратів в апарат</td>
                                <td>
                                    <div>
                                        <Image src='/fiscalization/red.svg' alt='' width={36} height={36}/>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p></p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Підключення блоку живлення касового апарату</td>
                                <td>
                                    <div>
                                        <Image src='/fiscalization/red.svg' alt='' width={36} height={36}/>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p></p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Підключення способів оплати</td>
                                <td>
                                    <div>
                                        <Image src='/fiscalization/red.svg' alt='' width={36} height={36}/>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <Image src='/fiscalization/red.svg' alt='' width={36} height={36}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Конфігурація касового апарату</td>
                                <td>
                                    <div>
                                        <Image src='/fiscalization/red.svg' alt='' width={36} height={36}/>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <Image src='/fiscalization/red.svg' alt='' width={36} height={36}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Фіскалізація касових апаратів</td>
                                <td>
                                    <div>
                                        <p></p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p></p>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className={s.divBut}>
                            <div>&nbsp;</div>
                            <div>
                                <ButtonRedArrowRight text='ordered'
                                                     link='https://docs.google.com/forms/d/e/1FAIpQLSc2Uy5fiy5VTlN88aiHwR6LDhfP1xOOiFhQtAh2p2Z-6HXt6A/viewform'/>
                            </div>
                            <div>
                                <ButtonRedArrowRight text='ordered'
                                                     link='https://docs.google.com/forms/d/e/1FAIpQLSc2Uy5fiy5VTlN88aiHwR6LDhfP1xOOiFhQtAh2p2Z-6HXt6A/viewform'/>
                            </div>
                        </div>
                        <div className={s.div_info}>
                            <span></span>
                            завдання з боку замовника
                            <p>|</p>
                            <Image src='/fiscalization/red.svg' alt='' width={36} height={36}/>
                            завдань, які виконує SAMWASH
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_brown}>
                <div className="main-container">
                    <Swiper
                        rewind={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Упаковка коробкової камери Novitus SDF-3</div>
                                <div className={s.itemCenter}>Податкова перевіряє безконтактні мийки</div>
                                <div className={s.itemSlider}>Третя відстрочка фіскалізації? Це реально?</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                        </SwiperSlide>
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Податкова перевіряє безконтактні мийки</div>
                                <div className={s.itemCenter}>Третя відстрочка фіскалізації? Це реально?</div>
                                <div className={s.itemSlider}>Розпакування касового апарату ELZAB</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Інтернет на автомийці - як це починалося?" loading="lazy" className={s.frame}/>
                        </SwiperSlide>
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Третя відстрочка фіскалізації? Це реально?</div>
                                <div className={s.itemCenter}>Розпакування касового апарату ELZAB</div>
                                <div className={s.itemSlider}>Відповідь КІС та нові касові апарати</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітленням автомийки" loading="lazy" className={s.frame}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

        </div>
);
}

export default Fiscalization;