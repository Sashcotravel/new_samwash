"use client"

import s from './formUserDate.module.css';
import {useTranslations} from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";
import {useRef, useState, useEffect} from "react";

function FormUserDate({textH2, threeInput}) {

    const t = useTranslations("be-loyal");

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', text: '', acceptance: false, news: false
    });
    const [success, setSuccess] = useState(false)
    const [active, setActive] = useState(false)
    const ref3 = useRef(null)


    useEffect(() => {
        document.getElementById("acceptance-one").addEventListener("click", () => {
            setActive(prev => !prev)
        })
    }, []);

    const check3 = () => {
        ref3.current.checked = !ref3.current.checked

        setFormData(prev => {
            return {...prev, news: ref3.current.checked}
        })
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
                news: formData.news ? 'Так' : 'Ні',
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
        <section id="config-section" className={s.gray_background}>
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
                            {textH2}</h2>
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
                                            <span>{threeInput}</span>
                                            <input placeholder={threeInput} type='tel' name='phone'
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
                                        <input type="checkbox" className={s.checkbox + ' ' + s.checkmark} ref={ref3}/>
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
    );
}

export default FormUserDate;