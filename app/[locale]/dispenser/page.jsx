"use client"

import s from './dispenser.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import FixManu2 from "@/app/component/fixManu2/FixManu2";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import FormUserDate from "@/app/component/formUserData/FormUserDate";
import WrapperClick from "@/app/component/wrapper_click/WrapperClick";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";



function Dispenser() {

    const t = useTranslations("dispenser");

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    return (
        <div>

            <section className='head-image'>
                <Image src='/dispenser/dispenser.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("dispenser1")}
                        </li>
                    </ul>
                    <h1>{t("dispenser1")}</h1>
                </div>
            </section>

            <FixManu2 active={4}/>

            <section className={s.section}>
                <div className="main-container">
                    <p className={s.titleP}>Розподільник склоомивача</p>
                    <div className={s.div_frame}>
                        <iframe
                            src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                            title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                    </div>
                </div>
            </section>

            <section className={s.section_gray}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>КОМПЛЕКСНЕ ОБСЛУГОВУВАННЯ КЛІЄНТІВ НА ВАШІЙ АВТОМИЙЦІ</small>
                            <strong>Переваги розподільника склоомивача</strong>
                        </h2>
                    </div>
                    <div className={s.divItems}>
                        <div className={s.third_column}>
                            <ul>
                                <li>
                                    <span><b>Чітка інформація для клієнта</b></span>
                                    <p>
                                        РК-дисплей є інформативним: на ньому вказується тип рідини (зимова чи літня),
                                        ціна за літр і поточна кількість рідини, яку потрібно використати.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Стійкість до погодних умов</b></span>
                                    <p>
                                        Корпус з нержавіючої сталі гарантує високу стійкість до мінливих погодних умов і
                                        привабливий зовнішній вигляд пристрою.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Подовжений термін служби насоса</b></span>
                                    <p>
                                        Спеціальна установка подовжує термін служби насоса та усуває фактори, які
                                        викликають неконтрольоване підвищення тиску.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Зручна експлуатація</b></span>
                                    <p>
                                        Великий бак об'ємом 220 літрів дозволить обслужити приблизно 40-50 клієнтів.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_box}>
                                <Image src='/dispenser/dispenser-photo.png' alt='' width={600} height={500}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.rightUl}>
                                <li>
                                    <span><b>Широкий вибір виплат</b></span>
                                    <p>
                                        Пристрій підтримує монети, жетони і, як додаткову опцію, банкноти, картки
                                        лояльності, платіжні картки та мобільний додаток BE LOYAL.
                                    </p>
                                </li>
                                <li>
                                    <span><b>Зручне онлайн-управління за допомогою Carwash Manager</b></span>
                                    <p>
                                        Підключивши пристрій до автомийки SAMWASH, ви отримаєте детальні фінансові дані
                                        та повну діагностику пристрою. Таким чином ви отримаєте важливу інформацію
                                        (наприклад, сповіщення, коли потрібно долити рідину).
                                    </p>
                                </li>
                                <li>
                                    <span><b>Електронне вимірювання рідини</b></span>
                                    <p>
                                        Витратомір точно вимірює рідину, показуючи на дисплеї поточну кількість,
                                        яку потрібно використати.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.blur_section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong style={{color: 'white'}}>Переваги наявності дистриб'ютора на автомийці</strong>
                        </h2>
                    </div>
                    <ul className={s.block_ul}>
                        <li>
                            <div className={s.back_image}>
                                <Image src='/dispenser/car.svg' alt='' width={64} height={64}/>
                            </div>
                            <p>Ви надасте своїм клієнтам комплексне обслуговування</p>
                        </li>
                        <li>
                            <div className={s.back_image}>
                                <Image src='/dispenser/diagrama.svg' alt='' width={64} height={64}/>
                            </div>
                            <p>Ви збільшите кількість зацікавлених клієнтів і середню вартість чека</p>
                        </li>
                        <li>
                            <div className={s.back_image}>
                                <Image src='/dispenser/star.svg' alt='' width={64} height={64}/>
                            </div>
                            <p>Ви підвищите привабливість автомийки та збільшите свої конкурентні переваги</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.image_wrapper}>
                        <div className={s.photo}>
                            <a data-fancybox="gallery" href={'/dispenser/dispenser-photo-1.jpg'}>
                                <Image src='/dispenser/dispenser-photo-1.jpg' alt='' width={1900} height={1000}/>
                            </a>
                        </div>
                        <div className={s.photo}>
                            <a data-fancybox="gallery" href={'/dispenser/dispenser-photo-2.jpg'}>
                                <Image src='/dispenser/dispenser-photo-2.jpg' alt='' width={1900} height={1000}/>
                            </a>
                        </div>
                        <div className={s.photo}>
                            <a data-fancybox="gallery" href={'/dispenser/dispenser-photo-3.jpg'}>
                                <Image src='/dispenser/dispenser-photo-3.jpg' alt='' width={1900} height={1000}/>
                            </a>
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
                                <small>ПОТРІБНА ДОДАТКОВА ІНФОРМАЦІЯ?</small>
                                <strong>Зв'яжіться з нами:</strong>
                            </h2>
                        </div>
                        <div className={s.divBut}>
                            <WrapperClick>
                                <ButtonRedWithoutLink text={'beloyalBut'}/>
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
                <FormUserDate textH2={'РЕЗЮМЕ'} threeInput={'НОМЕР ТЕЛЕФОНУ'}/>
            </div>

        </div>
    );
}

export default Dispenser;