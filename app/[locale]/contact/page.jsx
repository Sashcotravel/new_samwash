"use client"

import s from './contact.module.css'
import Image from "next/image";
import Link from "next-intl/link";
import {useEffect, useRef, useState} from "react";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import {useTranslations} from "next-intl";
// import Map from "@/app/component/map/Map";
// import emailjs from "@emailjs/browser";


function Contact() {

    const t = useTranslations("contact");
    const ref = useRef(null);
    const [active, setActive] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', text: '', acceptance: false,
    });

    useEffect(() => {
        document.getElementById("acceptance-one").addEventListener("click", () => {
            setActive(prev => !prev)
        })
    }, []);

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

            <section className={s.head_image}>
                <Image src='/contact/contact-logo.jpg' alt='' width={1900} height={300} priority />
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("contact1")}</Link>
                        </li>
                        <li>
                            {t("contact2")}
                        </li>
                    </ul>
                    <h1>{t("contact3")}</h1>
                </div>
            </section>

            <section className={s.section2}>
                <div className='main-container'>
                    <div className="section-header">
                        <h2>
                            <small>{t("contact4")}</small>
                            <strong>{t("contact5")} Samwash</strong>
                        </h2>
                    </div>
                    <div className={s.contact_box}>
                        <ul>
                            <li>
                                <h2>
                                    <font>{t("contact6")}</font><br/>
                                    <small>- {t("contact7")}</small>
                                </h2>
                            </li>
                            <li>
                                <span>{t("contact15")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a> <br/>
                                <span>{t("contact13")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a> <br/>
                                <span>{t("contact13")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a>
                            </li>
                            <li>
                                <a href="mailto:info@samwash.ua" className={`${s.red_text_btn} btn`}>{t("contact8")}</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>
                                    <font>{t("contact9")}</font><br/>
                                    <small>{t("contact10")}</small>
                                </h2>
                            </li>
                            <li>
                                <span>Adam Kudźma</span> <br/>
                                <span>{t("contact13")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a> <br/>
                                <br/>
                            </li>
                            <li>
                                <a href="mailto:info@samwash.ua" className={`${s.red_text_btn} btn`}>{t("contact8")}</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>
                                    <font>{t("contact11")}</font><br/>
                                    <small>: {t("contact12")}</small>
                                </h2>
                            </li>
                            <li>
                                <span>Пн-Пт: 8:00 – 16:00</span> <br/>
                                <span>{t("contact13")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a> <br/>
                                <br/>
                            </li>
                            <li>
                                <a href="mailto:info@samwash.ua" className={`${s.red_text_btn} btn`}>{t("contact8")}</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>{t("contact14")}</h2>
                            </li>
                            <li>
                                <span>{t("contact15")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a>
                            </li>
                            <li>
                                <a href="mailto:info@samwash.ua" className={`${s.red_text_btn} btn`}>{t("contact8")}</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>{t("contact16")}</h2>
                            </li>
                            <li>
                                <span>{t("contact15")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a> <br/>
                                <span>{t("contact13")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a> <br/>
                                <span>{t("contact13")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a>
                                <br/>
                            </li>
                            <li>
                                <a href="mailto:info@samwash.ua" className={`${s.red_text_btn} btn`}>{t("contact8")}</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h2>{t("contact17")}</h2>
                            </li>
                            <li>
                                <span>{t("contact13")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a> <br/>
                                <span>{t("contact13")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a> <br/>
                                <br/>
                                <br/>
                            </li>
                            <li>
                                <a href="mailto:info@samwash.ua" className={`${s.red_text_btn} btn`}>{t("contact8")}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/*<section>*/}
            {/*    <Map/>*/}
            {/*</section>*/}

            <section className={s.navy_background}>
                <div className='main-container'>
                    <div className="section-header">
                        <h2>
                            <strong>Sam Wash</strong>
                        </h2>
                    </div>
                    <div className={s.text_block_center}>
                        <ul>
                            <li>Україна, м. Львів</li>
                            <li>вул. Кульпарківська 108</li>
                        </ul>
                        <ul>
                            <li>{t("contact18")}</li>
                            <li>
                                <span>{t("contact15")}.:</span> <a href="tel:0975794930">+38 097 579 4930</a>
                            </li>
                            <li>
                                <a href="mailto:info@samwash.ua"><span>samwash.ua</span></a>
                            </li>
                        </ul>
                        {/*<p>*/}
                        {/*    NIP: 782-237-01-46, KRS: 0000262269 Окружний суд у Щецині, 13-й господарський*/}
                        {/*    відділ<br/>*/}
                        {/*    Національного судового реєстру; Розмір статутного капіталу: 300 000 злотих*/}
                        {/*</p>*/}
                    </div>
                </div>
            </section>

            <section>
                <div className='main-container'>
                    <div className={s.image_full_section}>
                        <Image src='/contact/contactPerson.jpg' alt='' height={500} width={500}/>
                    </div>
                    <div className={s.text_block}>
                        <div className="section-header">
                            <h2>
                                <small>{t("contact19")}</small>
                                <strong>{t("contact20")}</strong>
                            </h2>
                        </div>
                        <div className={s.contact_data_box}>
                            <div onClick={openForm} className={s.divButton}>
                                <ButtonRedWithoutLink text={'contactBut'}/>
                            </div>
                            <div className={s.phone_wrapper}>
                                <Image src='/contact/phoneContact.png' alt='' height={50} width={50}/>
                                <a href="tel:0975794930">097 579 4930</a>
                            </div>
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
                                {t("contact24")}</h2>
                            <form className={s.form} id="config-form" onSubmit={handleSubmit}
                                  style={success ? {display: 'none'} : undefined}>
                                <div className={s.box_place}>
                                    <div className={s.textarea_place}>
                                        <ul>
                                            <li>
                                                <span>1</span>
                                                <span>{t("contact25")} </span>
                                                <span> *</span>
                                                <input placeholder={t("contact26")} type='text'
                                                       name='name'
                                                       onChange={handleChange} id='name'
                                                       pattern="[A-Za-zА-Яа-яЁё\s]{2,}"
                                                       value={formData.name}/>
                                            </li>
                                            <li>
                                                <span>2</span>
                                                <span>{t("contact27")} </span>
                                                <span> *</span>
                                                <input placeholder={t("contact28")} type='email'
                                                       name='email'
                                                       onChange={handleChange} id='email' value={formData.email}/>
                                            </li>
                                            <li>
                                                <span>3</span>
                                                <span>{t("contact29")}</span>
                                                <input placeholder={t("contact30")} type='tel' name='phone'
                                                       onChange={handleChange} id='phone' pattern="^\+?[0-9]{10,}$"
                                                       value={formData.phone}/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={s.textarea_place}>
                                        <ul>
                                            <li>
                                                <span>4</span>
                                                <span>{t("contact31")}</span>
                                                <textarea placeholder={t("contact31")} name='text'
                                                          onChange={handleChange} value={formData.text}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={s.required_acceptance}>
                                    <div className={s.input_wrapper}>
                                        <label className={s.container}>
                                            <span style={{color: '#ed1c24'}}>*</span>
                                            <p>
                                                <span>{t("contact32")} </span>
                                                <Link href='/'> {t("contact33")} BKF </Link>
                                                <span> {t("contact34")}</span>
                                            </p>
                                            <input type="checkbox" id="acceptance-one" required
                                                   className={s.checkmark} onChange={handleChange}
                                                   value={formData.acceptance}/>
                                            <span className={s.checkmark2}>
                                                <span className={s.checkmark3}
                                                      style={active ? {display: 'block'} : {display: 'none'}}>
                                                </span>
                                            </span>
                                        </label>
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
    );
}

export default Contact;