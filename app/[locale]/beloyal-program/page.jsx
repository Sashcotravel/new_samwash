"use client"

import {useTranslations} from "next-intl";
import Image from "next/image";
import s from "./beloyalProgram.module.css";
import Link from "next-intl/link";
import FixManu from "@/app/component/fixManu/FixManu";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {useEffect, useRef, useState} from "react";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";


function BeLoyalProgram() {

    const t = useTranslations("be-loyal");
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const [active, setActive] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', acceptance: false, news: false
    });

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    const check2 = () => {
        ref2.current.checked = !ref2.current.checked
    }
    const check3 = () => {
        ref3.current.checked = !ref3.current.checked
    }

    const openForm = () => {
        const form = document.getElementById('config-section')
        form.classList.add(s['showForm'])
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = document.getElementById('email')
        const phone = document.getElementById('phone')
        const name = document.getElementById('name')
        const regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        const regExpPhone = /^(\+380\d{9})$/
        let testEmail = regExpEmail.test(formData.email)
        let testPhone = regExpPhone.test(formData.phone)

        if(formData.name.length >= 2 && testEmail && testPhone){
            phone.style.border = '1px solid #ccc'
            email.style.border = '1px solid #ccc'
            name.style.border = '1px solid #ccc'
            let templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                post: formData.text,
                namePage: 'КОНТАКТИ'
            };
            // emailjs.send('service_qcggpom', 'template_ugaoz0u', templateParams, 'e8GXwhbbyk4tXovwB').then(
            //         () => {
            //           console.log('SUCCESS!');
            //           setSuccess(true)
            //         },
            //         (error) => {
            //           console.log('FAILED...', error.text);
            //         },
            //       );
            // emailjs.send('service_qcggpom', 'template_dxf8e6l', templateParams, 'e8GXwhbbyk4tXovwB');
        }
        if(formData.name.length < 2 && testEmail === false && testPhone === false){
            email.style.border = '2px solid red'
            phone.style.border = '2px solid red'
            name.style.border = '2px solid red'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(testEmail === false && testPhone === false){
            email.style.border = '2px solid red'
            phone.style.border = '2px solid red'
            name.style.border = '1px solid #ccc'
            email.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.name.length < 2 && testPhone === false){
            email.style.border = '1px solid #ccc'
            phone.style.border = '2px solid red'
            name.style.border = '2px solid red'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.name.length < 2 && testEmail === false){
            phone.style.border = '1px solid #ccc'
            email.style.border = '2px solid red'
            name.style.border = '2px solid red'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (formData.name.length < 2) {
            name.style.border = '2px solid red'
            email.style.border = '1px solid #ccc'
            phone.style.border = '1px solid #ccc'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (testEmail === false) {
            email.style.border = '2px solid red'
            name.style.border = '1px solid #ccc'
            phone.style.border = '1px solid #ccc'
            email.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (testPhone === false) {
            phone.style.border = '2px solid red'
            email.style.border = '1px solid #ccc'
            name.style.border = '1px solid #ccc'
            phone.scrollIntoView({block: "center", behavior: 'smooth'});
        }
    }

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
                            {t("beLoyal1")}
                        </li>
                    </ul>
                    <h1>{t("beLoyal2")}</h1>
                </div>
            </section>

            <FixManu active={3}/>

            <section className={s.beloyal_wstep}>
                <div className="main-container">
                    <div className={s.half_column}>
                        <Image src='/beloyal/staff.jpg' alt='' width={500} height={500}
                               className={s.image_wrapper+' '+s.image_wstep} />
                    </div>
                    <div className={s.half_column}>
                        <div className={s.text_wrapper}>
                            <div className={s.section_header}>
                                <h2>
                                    <small>ВИРІШІТЬ ПРОБЛЕМУ ВИСТАВЛЕННЯ РАХУНКІВ РАЗ І НАЗАВЖДИ!</small>
                                    <strong>Автоматичне виставлення рахунків підвищить привабливість вашої
                                        мийки</strong>
                                </h2>
                                <h3>
                                    Понад 80% клієнтів обумовлюють свій візит на автомийку від наявності дрібних грошей
                                    у своєму гаманці.
                                </h3>
                                <p>
                                    Переважна більшість із них заявляють про більш часте, виправдане користування
                                    послугами, коли є можливість здійснити безготівковий розрахунок та простий і швидкий
                                    доступ до рахунку на прання. Найзручнішою формою є платіжна картка та додаток на
                                    телефоні.
                                </p>
                                <p>
                                    Найбільшою невикористаною групою одержувачів є компанії з парками автомобілів. Їх
                                    цікавить зручність отримання рахунку.
                                </p>
                                <h4>
                                    Скористайтеся цим, збагативши свою автомийку системою лояльності <b>BE LOYAL</b>.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.dark_gray_background}>
                <div className="main-container">
                    <div className={s.half_column + ' ' + s.text_block}>
                        <h2>Що таке BE LOYAL?</h2>
                        <p>
                            <font>BE LOYAL – це розрахункова платформа, створена для власників автомийок Samwash,
                                доступна через телефонний додаток або на сайті.</font>
                            <br/>
                            <font>Додаток дозволяє здійснювати мобільні платежі (по телефону) на автомийках
                                Samwash.</font>
                            <br/>
                            <font>З нашим додатком ви раз і назавжди вирішите проблему виставлення рахунків
                                клієнтам.</font>
                        </p>
                    </div>
                    <div className={s.half_column}>
                        <div className={s.video_block}>
                            <a data-fancybox="gallery" className={s.bg_image}
                               href={'/video/mainVideo.mp4'}>
                                <video src={'/video/mainVideo.mp4'} poster={'/video/mainVideo.mp4'}
                                       title='' preload="yes" autoPlay='no' playsInline muted loop/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.gray_background2}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ДІЗНАЙТЕСЯ ПРО ПЕРЕВАГИ</small>
                            <strong>Чому варто запускати платежі BE LOYAL?</strong>
                        </h2>
                    </div>
                    <ul className={s.features}>
                        <li>
                            <div className={s.circle_icon}>
                                <Image src='/beloyal/ico-red-faktura-automat.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Автоматичне виставлення рахунків</h3>
                            <p>
                                Система автоматично виставлятиме рахунки вашим клієнтам, а ви матимете доступ до
                                статистики мобільних платежів завдяки панелі «Менеджер автомийки».
                            </p>
                        </li>
                        <li>
                            <div className={s.circle_icon}>
                                <Image src='/beloyal//ico-red-carwash-manager.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Зручна форма оплати</h3>
                            <p>Вашим клієнтам не знадобиться гаманець, щоб заплатити за миття автомобіля на вашій
                                автомийці.</p>
                        </li>
                        <li>
                            <div className={s.circle_icon}>
                                <Image src='/beloyal/ico-red-people.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Нова група клієнтів</h3>
                            <p>Ви придбаєте клієнтів, які цінують сучасні зручні розрахунки по телефону.</p>
                        </li>
                        <li>
                            <div className={s.circle_icon}>
                                <Image src='/beloyal/ico-red-stars.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Більша конкурентоспроможність</h3>
                            <p>Ваша автомийка буде виділятися серед конкурентів.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.section_margin_bottom_small}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>БУДЬТЕ ЛОЯЛЬНИМИ ФУНКЦІОНАЛЬНОСТЯМИ</small>
                            <strong>Що знайдуть ваші клієнти в додатку?</strong>
                        </h2>
                    </div>
                    <div className={s.two_column_list_with_center_image_dispenser}>
                        <div className={s.third_column}>
                            <ul>
                                <li>
                                    <Image src='/beloyal/ico-red-carshine.svg' alt='' width={65} height={65}/>
                                    <span>Список доступних автомийок</span>
                                    <p>Кожен користувач програми побачить вашу автомийку на карті, що дозволить вам
                                        збільшити охоплення.</p>
                                </li>
                                <li>
                                    <Image src='/beloyal/ico-red-фактури.svg' alt='' width={65} height={65}/>
                                    <span>Список рахунків-фактур</span>
                                    <p>Кожен користувач програми матиме доступ до списку своїх рахунків, автоматично
                                        виставлених системою.</p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_wrapper2}>
                                <Image src='/beloyal/BELOYAL.png' alt='' width={300} height={300}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.dispenser_list_reverse}>
                                <li>
                                    <Image src='/beloyal/швидкі виплати.svg' alt='' width={65} height={65}/>
                                    <span>Зручні способи оплати</span>
                                    <p>Дайте своїм клієнтам свободу вибору улюбленого способу оплати: платіжною карткою,
                                        Приват 24 або Apple Pay.</p>
                                </li>
                                <li>
                                    <Image src='/beloyal/ico-red-platnosci-automat.svg' alt='' width={65} height={65}/>
                                    <span>Автоматичні платежі</span>
                                    <p>Вам потрібно лише один раз ввести улюблений платіж, ваші клієнти будуть
                                        задоволені цією функцією.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.gradient_background}>
                <div className="main-container">
                    <div className={s.half_column}>
                        <div className={s.image_wrapper}>
                            <Image src='/beloyal/hand.png' alt='' width={500} height={500}/>
                        </div>
                        <div className={s.middle_icon}>
                            <div className={s.circle_ico}>
                                <Image src='/beloyal/ico-white-carwash-manager.svg' alt='' width={64} height={64}/>
                            </div>
                        </div>
                        <div className={s.bottom_icon}>
                            <div className={s.circle_ico2}>
                                <Image src='/beloyal/ico-white-stars.svg' alt='' width={64} height={64}/>
                            </div>
                        </div>
                        <div className={s.top_icon}>
                            <div className={s.circle_ico1}>
                                <Image src='/beloyal/діаграма-білий.svg' alt='' width={64} height={64}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.half_column}>
                        <div className={s.text_wrapper2}>
                            <div className="section-header">
                                <h2 className={s.headerH2}>
                                    <small style={{color: 'white'}}>BE LOYAL</small>
                                    <strong style={{color: 'white'}}>Зручні та безпечні платіжні сервіси</strong>
                                    <p className={s.headerP}>Завантажте безкоштовний додаток на свій смартфон
                                        і переконайтеся, наскільки це легко.</p>
                                </h2>
                            </div>
                            <div className={s.aplications_wrapper}>
                                <h2>Завантажте програму</h2>
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

            <section className={s.section_no_padding}>
                <div className="main-container">
                    <div className={s.image_full_section}>
                        <Image src='/beloyal/beloyal-2.jpg' alt='' width={500} height={500}/>
                    </div>
                    <div className={s.contact_center}>
                        <div className="section-header">
                            <h2>
                                <small>ТЕХНІЧНІ ВИМОГИ</small>
                                <strong>Підключіть свою автомийку до BE LOYAL</strong>
                            </h2>
                            <p></p>
                            <p style={{fontFamily: 'Ubuntu Light, sans-serif'}}>Якщо ваша автомийка:</p>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    підключений до Інтернету,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    має зовнішню постійну IP-адресу,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    має маршрутизатор з переадресацією портів і 1 вільний порт LAN,
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    має контролер PP65 або новіший.
                                </li>
                            </ul>
                            <p className={s.headerPUl}>потім заповніть форму нижче,
                                і ми зв'яжемося з вами, щоб надати вам пропозицію.</p>
                        </div>
                        <div onClick={openForm} className={s.divButton}>
                            <ButtonRedWithoutLink text={'beloyalBut'}/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="config-section" className={s.gray_background} ref={ref}>
                <div className='main-container'>
                    <div className='top_arrow'>
                        <div className={s.configurator_body}>
                            {
                                success && <div className={s.thanks_message}>
                                    <div className={s.thanks_message_service_form}>
                                        <div className={s.message}>
                                            <h2>
                                                <small>{t("contact21")}</small>
                                                <strong>{t("contact22")}</strong>
                                            </h2>
                                            <p></p>
                                            <p>{t("contact23")}</p>
                                        </div>
                                    </div>
                                </div>
                            }
                            <h2 className={s.configurator_description} style={success ? {display: 'none'} : undefined}>
                                ЗАРЕЄСТРУВАТИ АВТОМИЙКУ ЗА ПРОГРАМОЮ БУДЬ ЛОЯЛЬНИМ</h2>
                            <form className={s.form} id="config-form" onSubmit={handleSubmit}
                                  style={success ? {display: 'none'} : undefined}>
                                <div className={s.personal_configurator_data}>
                                    <ul>
                                        <li>
                                            <span>8</span>
                                            <span>{t("contact25")} </span>
                                            <span> *</span>
                                            <input type='text' placeholder={t("contact26")} value={formData.name}
                                                   onChange={handleChange} name='name' id='name'/>
                                        </li>
                                        <li>
                                            <span>9</span>
                                            <span>{t("contact27")} </span>
                                            <span> *</span>
                                            <input type='text' placeholder={t("contact28")} value={formData.email}
                                                   onChange={handleChange} name='email' id='email'/>
                                        </li>
                                        <li>
                                            <span>10</span>
                                            <span>{t("contact29")} </span>
                                            <span> *</span>
                                            <input type='text' placeholder="+380975794930" value={formData.phone}
                                                   onChange={handleChange} name='phone' id='phone'/>
                                        </li>
                                    </ul>
                                </div>
                                <div className={s.required_acceptance}>
                                    <div className={s.form_group_input_wrapper}>
                                        <lable className={s.container}>
                                            <span style={{color: "#ed1c24"}}>*</span>
                                            <p>
                                                {t("contact32")}
                                                <Link href='/privacy-policy'
                                                      className={s.form_group_link}> {t("contact33")} Samwash </Link>
                                                {t("contact34")}
                                            </p>
                                            <input type="checkbox" className={s.checkbox + ' ' + s.checkmark}
                                                   ref={ref2} id='polit'/>
                                            <span className={s.checkmark} onClick={check2} id='polit2'></span>
                                        </lable>
                                    </div>
                                    <div className={s.form_group_input_wrapper}>
                                        <lable className={s.container}>
                                            <span style={{color: "#ed1c24"}}></span>
                                            <p>
                                                Так, я хочу отримувати комерційну та маркетингову інформацію BKF
                                                (зокрема про продукти, рекламні акції, події) в електронному вигляді від
                                                компанії BKF Myjnie Bezdotykowe sp. z o. o., розташованої у Скарбимежице
                                                (Skarbimierzyce 22, 72-002 Dołuje) на надану мною адресу електронної
                                                пошти.
                                            </p>
                                            <input type="checkbox" className={s.checkbox + ' ' + s.checkmark}
                                                   ref={ref3}/>
                                            <span className={s.checkmark} onClick={check3}></span>
                                        </lable>
                                    </div>
                                </div>
                                <div className={s.configurator_navigation}>
                                    <button className={s.formBtn} type='submit'>
                                        {t("contact35")}
                                        <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={5}
                                               height={5}/>
                                    </button>
                                    <div className={s.reguired_fields}>
                                        <span>* </span>
                                        <span> {t("contact36")}</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BeLoyalProgram;