"use client"

import s from './remoteControl.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import FixManu from "@/app/component/fixManu/FixManu";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules'

function RemoteControl() {

    const t = useTranslations("remote-control");


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
                            {t("control1")}
                        </li>
                    </ul>
                    <h1>{t("control1")}</h1>
                </div>
            </section>

            <FixManu active={4}/>

            <section className={s.text_section}>
                <div className="main-container">
                    <div className={s.text_blog}>
                        <div className={s.section_header}>
                            <h2>
                                <small>{t("control1")}</small>
                                <strong>Інтернет на автомийці?</strong>
                            </h2>
                            <p>
                                Зараз все більше пристроїв передають інформацію в мережу. Ми можемо віддалено дізнатися,
                                що відбувається з нашим будинком, автомобілем, скрубером або пристроєм з ЧПК. <b>Чому
                                б не зробити це на автомийці?</b>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.blue_section}>
                <div className="main-container">
                    <div className={s.description_wrapper}>
                        <div className={s.text_block_wrapper}>
                            <h3>Що можна робити <b>на автомийці з інтернетом?</b></h3>
                            <p>Підключивши автомийку Samwash до Інтернету, ви можете робити з нею практично все, що
                                могли
                                робити на місці. Все завдяки системі дистанційного керування автомийкою - Carwash
                                Manager і віддаленому доступу до контролера автомийки (VNC). Подивіться, що ви можете
                                робити віддалено:</p>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span>перевірити технічний стан автомийки та периферійних пристроїв</span>
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span>дізнатися, скільки ви заробили</span>
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span>встановити акції</span>
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span>налаштувати облікові записи користувачів з різними рівнями доступу</span>
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span>підзарядка мийних станцій дистанційно</span>
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span> дистанційно поповнюйте карти постійного клієнта</span>
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span>з'ясуйте, чи є монети в розмінному автоматі, чи потрібно заправляти касети</span>
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span>встановити освітлення для окремих станцій</span>
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span>увімкнути/вимкнути станції</span>
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span> встановити дозування хімікату</span>
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    <span>та багато інших!</span>
                                </li>
                            </ul>
                            <ButtonRedArrowRight link={'/carwash-manager'} text={'manager'} clas={'programBut'}/>
                        </div>
                        <div className={s.image_wrapper}>
                            <Image src='/other/remote.jpg' alt='arrow' width={500} height={500}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_video}>
                <div className="main-container">
                    <Swiper
                        rewind={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Управління освітленням автомийки</div>
                                <div className={s.itemCenter}>Віддалений доступ, крок за кроком</div>
                                <div className={s.itemSlider}>Інтернет на автомийці - як це починалося?</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                            <p className={s.owl_stag_P}>
                                Чому Samwash розвиває свої технології на світовому рівні? Послухайте Пйотра, нашого
                                директора з розвитку. Подивіться, що таке віддалений доступ і як ним користуватися.
                                Samwash – єдина компанія на ринку, яка дає вам справжню свободу. З нами ви отримуєте
                                не тільки фінансову вигоду, але, перш за все, ви економите свій час, не втрачаючи
                                контролю над своїм бізнесом.
                            </p>
                        </SwiperSlide>
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Віддалений доступ, крок за кроком</div>
                                <div className={s.itemCenter}>Інтернет на автомийці - як це починалося?</div>
                                <div className={s.itemSlider}>Управління освітленням автомийки</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Інтернет на автомийці - як це починалося?" loading="lazy" className={s.frame}/>
                            <p className={s.owl_stag_P}>
                                Почуйте про нашу стратегію, яка створювалася протягом багатьох років. Як так сталося, що
                                інтернет на автомийці є просто необхідним? Чому BKF приділяє таку велику увагу якості та
                                технологіям?
                            </p>
                        </SwiperSlide>
                        <SwiperSlide style={{background: 'transparent', flexDirection: 'column'}}>
                            <div className={s.owl_stag}>
                                <div className={s.itemSlider}>Інтернет на автомийці - як це починалося?</div>
                                <div className={s.itemCenter}>Управління освітленням автомийки</div>
                                <div className={s.itemSlider}>Віддалений доступ, крок за кроком</div>
                            </div>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітленням автомийки" loading="lazy" className={s.frame}/>
                            <p className={s.owl_stag_P}>Що можна зробити з віддаленим доступом?</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className={s.section_bg_img}>
                <div className="main-container">
                    <div className={s.gif_wrapper}></div>
                    <div className={s.section_header}>
                        <h2>
                            <small>ВСЯ МИЙКА АВТОМОБІЛЯ У ВАШОМУ ТЕЛЕФОНІ</small>
                            <strong>Комфортно та безпечно - управління автомийкою Samwash</strong>
                        </h2>
                    </div>
                    <div className={s.play_icon_wrapper}>
                        <video src={'/video/animation.mp4'} poster={'/video/mainVideo.mp4'} title='' preload="yes"
                               className={s.hover_video} autoPlay='no' playsInline muted loop/>

                    </div>
                    <div className={s.text_wrapper}>
                        <div className={s.text_block}>
                            <h2>Менеджер автомийки</h2>
                            <p>Керувати автомийкою та реагувати на різні види аварій ще ніколи не було так просто. За
                                допомогою телефону або комп'ютера з будь-якого місця і в зручний для вас час ви
                                отримаєте необхідну інформацію про вашу автомийку. Ви дізнаєтеся, скільки заробила ваша
                                мийка, чи справно працюють окремі технічні елементи, яка витрата хімії. Зручно і швидко,
                                коли вам це потрібно.</p>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Дані про товарообіг автомийки або окремих станцій.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Контроль робочого часу та кількості використання індивідуальних програм.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Діагностика технічного стану.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Управління карткою лояльності.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Небажані ситуації на автомийці.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Витрата хімікатів і рівні.
                                </li>
                            </ul>
                            <ButtonRedArrowRight link={'/carwash-manager'} text={'program'} clas={'programBut'}/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default RemoteControl;