"use client"

import React from 'react';
import s from './selfService.module.css'
import Link from "next-intl/link";
import Image from "next/image";
import {useTranslations} from "next-intl";
import FixManu5 from "@/app/component/fixManu5/FixManu5";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import ConfigureWash from "@/app/component/configureWash/ConfigureWash";


function SelfService() {

    const t = useTranslations("self-service-car-wash");

    const container = () => {
        localStorage.setItem("container", "true");
    }

    const modular = () => {
        localStorage.setItem("modular", "true");
    }


    return (
        <div>

            <section className='head-image'>
                <Image src='/selfService/back.jpg' alt='' width={2600} height={500}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("self-service1")}
                        </li>
                    </ul>
                    <h1>{t("self-service1")}</h1>
                </div>
            </section>

            <FixManu5 active={1}/>

            <section className={s.gray_background}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>НОВА ТЕХНІКА</small>
                            <strong>Безконтактні мийки</strong>
                        </h2>
                        <h4>Будьте в курсі подій, пов’язаних із роботою автомийки, коли вас там фізично немає.
                            Моніторинг і контроль системи самообслуговування, а також оцінка бізнесу</h4>
                        <p>
                            Безконтактні мийки популярні серед водіїв, а тому є прибутковим бізнесом. Така мийка не
                            потребує персоналу. Водій сам миє машину і все робиться без участі власника, що дозволяє
                            йому вести інші справи. <br/>
                            Пропоновані SAMWASH пристрої гарантують надійність і комфорт використання. Завдяки великій
                            кількості аксесуарів і багатому стандартному комплекту наш продукт здатний задовольнити
                            очікування вимогливих клієнтів. Ми створюємо продукти з думкою про ваш прибуток.
                        </p>
                    </div>
                    <div className={s.two_column_list_with_center_image}>
                        <div className={s.third_column}>
                            <ul className={s.list_features}>
                                <li>
                                    <span>Безвідмовний</span>
                                </li>
                                <li>
                                    <span>Інноваційні технології</span>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_wrapper}>
                                <Image src='/selfService/wash.png' alt='' width={1000} height={1000}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.list_reverse}>
                                <li>
                                    <span>Велика кількість добавок</span>
                                </li>
                                <li>
                                    <span>Системи дистанційного керування</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.gray_background}>
                <div className="main-container">
                    <div>
                        <div className={s.column}>
                            <h2>Контейнерна автомийка</h2>
                            <Image src='/selfService/wash2.png' alt='' width={350} height={110}/>
                            <p>
                                Контейнерні автомийки рекомендуються для місць із високою та середньою інтенсивністю
                                руху та ідеально підходять для великої кількості станцій. Вся техніка автомийки
                                розміщена в спеціальному контейнері. Таке рішення забезпечує високу зручність
                                експлуатації автомийки та зберігання.
                            </p>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Підвищена безпека.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Зручна експлуатація.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Місце для зберігання хімікатів.
                                </li>
                            </ul>
                            <div className={s.div_but} onClick={container}>
                                <ButtonRedArrowRight text='container-car-washes' link='/contactless-self-service-car-washes'/>
                            </div>
                        </div>
                        <div className={s.column}>
                            <h2>Модульна автомийка</h2>
                            <Image src='/selfService/wash3.png' alt='' width={350} height={110}/>
                            <p>
                                Модульна мийка рекомендована для місць з низькою та середньою прохідністю. Основною
                                перевагою модульної мийки є економія місця, оскільки вона займає набагато менше місця,
                                ніж рішення з контейнером.
                            </p>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Практична ергономіка.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Елегантний зовнішній вигляд.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Ідеальне рішення для розширення поточного бізнесу з невеликим простором.
                                </li>
                            </ul>
                            <div className={s.div_but} onClick={modular}>
                                <ButtonRedArrowRight text='modular-car-washes' link='/contactless-self-service-car-washes'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ConfigureWash/>

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
                                <div className={s.itemSlider}>Автоматична безконтактна мийка</div>
                                <div className={s.itemCenter}>Історія успіху - Pamar, 15 років співпраці</div>
                                <div className={s.itemSlider}>Історія успіху - 2brothers</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                        </SwiperSlide>
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Історія успіху - Pamar, 15 років співпраці</div>
                                <div className={s.itemCenter}>Історія успіху - 2brothers</div>
                                <div className={s.itemSlider}>Модернізація автомийки</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Інтернет на автомийці - як це починалося?" loading="lazy" className={s.frame}/>
                        </SwiperSlide>
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Історія успіху - 2brothers</div>
                                <div className={s.itemCenter}>Модернізація автомийки</div>
                                <div className={s.itemSlider}>Автоматична щіточна мийка</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітленням автомийки" loading="lazy" className={s.frame}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>6 ПРИЧИН ЧОМУ</small>
                            <strong>автомийка - хороша інвестиція</strong>
                        </h2>
                    </div>
                    <div>
                        <ul className={s.ul_list3}>
                            <li>
                                <div className={s.icon_div2}>
                                    <Image src='/cooperation/green.svg' alt='' width={70} height={70}/>
                                </div>
                                <p>Чудова додаткова інвестиція.</p>
                            </li>
                            <li>
                                <div className={s.icon_div2}>
                                    <Image src='/cooperation/green.svg' alt='' width={70} height={70}/>
                                </div>
                                <p>Легко розрахована бізнес-модель.</p>
                            </li>
                            <li>
                                <div className={s.icon_div2}>
                                    <Image src='/cooperation/green.svg' alt='' width={70} height={70}/>
                                </div>
                                <p>Надійне інвестування з гарантією фінансової ліквідності.</p>
                            </li>
                            <li>
                                <div className={s.icon_div2}>
                                    <Image src='/cooperation/green.svg' alt='' width={70} height={70}/>
                                </div>
                                <p>Відсутність перешкод для входу на ринок.</p>
                            </li>
                            <li>
                                <div className={s.icon_div2}>
                                    <Image src='/cooperation/green.svg' alt='' width={70} height={70}/>
                                </div>
                                <p>Мінімізація людського фактора.</p>
                            </li>
                            <li>
                                <div className={s.icon_div2}>
                                    <Image src='/cooperation/green.svg' alt='' width={70} height={70}/>
                                </div>
                                <p>Прогнозний бізнес, що розвивається, з великою часткою ІТ.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.image_div2}>
                    <Image src='/selfService/persone.jpg' alt='' width={900} height={600}/>
                    <div className={s.icon1}>
                        <div className={s.icon1_1}>
                            <Image src='/selfService/icon1.svg' alt='' width={64} height={72}/>
                        </div>
                    </div>
                    <div className={s.icon2}>
                        <div className={s.icon2_2}>
                            <Image src='/selfService/icon2.svg' alt='' width={64} height={72}/>
                        </div>
                    </div>
                    <div className={s.icon3}>
                        <div className={s.icon3_3}>
                            <Image src='/selfService/icon3.svg' alt='' width={64} height={72}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className={s.main_container2}>
                    <div className={s.section_header}>
                        <h2 className={s.section_headerH1}>
                            <p className={s.section_headerH1P1}>НАШІ ПРОЕКТИ</p>
                            <p className={s.section_headerH1P2}>Що говорять про нас наші клієнти</p>
                        </h2>
                    </div>
                    <div className={s.showreel_wrapper}>
                        <div className={`${s.showreel} ${s.item_a}`}>
                            <div className={s.showreel_left_img_right_text}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/mainPage/box6/image1.jpg' alt='' width={500} height={500}/>
                                </div>
                                <div className={s.text_wrapper}>
                                    <h3>Davidiv</h3>
                                    <p></p>
                                    <Link href='/realization/Davydov'
                                          className={`${s.but_more} btn`}>читати далі</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.showreel} ${s.item_b}`}>
                            <div className={s.showreel_left_img_right_text}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/mainPage/box6/image2.jpg' alt='' width={300} height={600}/>
                                </div>
                                <div className={s.text_wrapper}>
                                    <h3>ЩЕЦИН, 10ТКА</h3>
                                    <p></p>
                                    <Link href='/realization' className={`${s.but_more} btn`}>читати далі</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.showreel} ${s.item_c}`}>
                            <div className={s.showreel_left_img_right_text}>
                                <div className={s.image_wrapper2}>
                                    <Image src='/mainPage/box6/image3.jpg' alt='' width={200} height={600}/>
                                </div>
                                <div className={s.text_wrapper}>
                                    <h3>КОСЦЯН</h3>
                                    <p></p>
                                    <Link href='/realization' className={`${s.but_more} btn`}>читати далі</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.showreel} ${s.item_d}`}>
                            <div className={s.showreel_top_img_bottom_text}>
                                <div className={s.image_wrapper_text}>
                                    <Image src='/mainPage/box6/image4.jpg' alt='' width={400} height={600}/>
                                </div>
                                <div className={s.text_wrapper_item}>
                                    <h3>Злотория</h3>
                                    <p>Історія успіху - 15 років співпраці з BKF</p>
                                    <Link href='/realization' className={`${s.but_more} btn`}>читати далі</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='center-btn'>
                        <ButtonRedArrowRight text='main104' link='/realization'/>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default SelfService;