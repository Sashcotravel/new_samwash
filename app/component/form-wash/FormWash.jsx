"use client"

import s from './formWash.module.css';
import {useTranslations} from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";
import {useRef, useState, useEffect} from "react";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";

function FormWash({textH2, threeInput, block, firstInput}) {

    const t = useTranslations("main");

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', land: null, city: '', money: '', news: false
    });
    const [stage, setStage] = useState({
        second: true, false: false, four: false
    })
    const ref2 = useRef(null)
    const ref3 = useRef(null)


    const check2 = () => {
        ref2.current.checked = !ref2.current.checked
    }
    const check3 = () => {
        ref3.current.checked = !ref3.current.checked
        setFormData(prev => {
            return {...prev, news: ref3.current.checked}
        })
    }

    const setStageNext01 = () => {
        setStage(prev => {
            return {...prev, second: true}
        })
        setStage(prev => {
            return {...prev, third: false}
        })
    }

    const setStageNext2 = () => {

        const radio1 = document.getElementById('radio1')
        const radio2 = document.getElementById('radio2')
        const city = document.getElementById('city')
        const name = document.getElementById('name')

        if(formData.land !== null && formData.city !== ''){
            radio1.style.border = '1px solid #ccc'
            radio2.style.border = '1px solid #ccc'
            city.style.border = '1px solid #ccc'

            setStage(prev => { return { ...prev, second: false } })
            setStage(prev => { return { ...prev, third: true } })

            setTimeout(() => {
                name.scrollIntoView({block: "center", behavior: 'smooth'});
            }, 500)
        }
        else if(formData.land === null && formData.city === ''){
            radio1.style.border = '2px solid red'
            radio2.style.border = '2px solid red'
            city.style.border = '2px solid red'
            radio1.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.land === null){
            radio1.style.border = '2px solid red'
            radio2.style.border = '2px solid red'
            city.style.border = '1px solid #ccc'
            radio1.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.city === ''){
            radio1.style.border = '1px solid #ccc'
            radio2.style.border = '1px solid #ccc'
            city.style.border = '2px solid red'
            city.scrollIntoView({block: "center", behavior: 'smooth'});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = document.getElementById('email')
        const phone = document.getElementById('phone')
        const name = document.getElementById('name')
        const polit = document.getElementById('polit')
        const polit2 = document.getElementById('polit2')
        const regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        const regExpPhone = /^(\+380\d{9})$/
        let testEmail = regExpEmail.test(formData.email)
        let testPhone = regExpPhone.test(formData.phone)

        if(formData.name.length >= 2 && testEmail && testPhone && polit.checked){
            phone.style.border = '1px solid #ccc'
            email.style.border = '1px solid #ccc'
            name.style.border = '1px solid #ccc'
            polit2.style.border = '1px solid #ccc'

            let templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                land: formData.land ? "Так" : "Ні",
                news: formData.news ? "Так" : "Ні",
                city: formData.city,
                money: formData.money,
                // namePage: 'КОНТАКТИ'
            };
            console.log(templateParams)
            // emailjs.send('service_qcggpom', 'template_ugaoz0u', templateParams, 'e8GXwhbbyk4tXovwB').then(
            //         () => {
            //           console.log('SUCCESS!');
            //           setStage(prev => {
            //             return {...prev, four: true}
            //         })
            //         setStage(prev => {
            //             return {...prev, third: false}
            //         })
            //         },
            //         (error) => {
            //           console.log('FAILED...', error.text);
            //         },
            //       );
            // emailjs.send('service_qcggpom', 'template_dxf8e6l', templateParams, 'e8GXwhbbyk4tXovwB');
        }
        if(formData.name.length < 2 && !testEmail && !testPhone && !polit.checked){
            email.style.border = '2px solid red'
            phone.style.border = '2px solid red'
            name.style.border = '2px solid red'
            polit2.style.border = '2px solid red'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(testEmail === false && testPhone === false && !polit.checked){
            email.style.border = '2px solid red'
            phone.style.border = '2px solid red'
            polit2.style.border = '2px solid red'
            name.style.border = '1px solid #ccc'
            email.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(testEmail === false && testPhone === false){
            email.style.border = '2px solid red'
            phone.style.border = '2px solid red'
            polit2.style.border = '1px solid #ccc'
            name.style.border = '1px solid #ccc'
            email.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.name.length < 2 && testPhone === false && !polit.checked){
            email.style.border = '1px solid #ccc'
            phone.style.border = '2px solid red'
            polit2.style.border = '2px solid red'
            name.style.border = '2px solid red'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.name.length < 2 && testPhone === false){
            email.style.border = '1px solid #ccc'
            phone.style.border = '2px solid red'
            name.style.border = '2px solid red'
            polit2.style.border = '1px solid #ccc'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.name.length < 2 && testEmail === false && !polit.checked){
            phone.style.border = '1px solid #ccc'
            email.style.border = '2px solid red'
            name.style.border = '2px solid red'
            polit2.style.border = '2px solid red'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.name.length < 2 && testEmail === false){
            phone.style.border = '1px solid #ccc'
            email.style.border = '2px solid red'
            name.style.border = '2px solid red'
            polit2.style.border = '1px solid #ccc'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (formData.name.length < 2) {
            name.style.border = '2px solid red'
            email.style.border = '1px solid #ccc'
            phone.style.border = '1px solid #ccc'
            polit2.style.border = '1px solid #ccc'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (testEmail === false) {
            email.style.border = '2px solid red'
            name.style.border = '1px solid #ccc'
            phone.style.border = '1px solid #ccc'
            polit2.style.border = '1px solid #ccc'
            email.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (testPhone === false) {
            phone.style.border = '2px solid red'
            email.style.border = '1px solid #ccc'
            name.style.border = '1px solid #ccc'
            polit2.style.border = '1px solid #ccc'
            phone.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (!polit.checked) {
            phone.style.border = '1px solid #ccc'
            email.style.border = '1px solid #ccc'
            name.style.border = '1px solid #ccc'
            polit2.style.border = '2px solid red'
            polit2.scrollIntoView({block: "center", behavior: 'smooth'});
        }
    }

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };



    return (
        <section className={s.box1} id='form-wash'>
            <div className={s.main_containerBox1}>
                <div className={s.top_arrow} id='washConf'>
                    <div style={!stage.second ? {display: 'none'} : undefined} className={s.configurator_body}>
                        <h2 className={s.configurator_description} style={stage.four ? {display: 'none'} : undefined}>
                            {t(textH2)}</h2>
                        <form id="config-form" className={s.formMain}>
                            <div className={s.half_colum}>
                                <div className={s.inline_item_user_data}>
                                    <div className={s.inline_description} id='radioPrevi'>
                                        <span>5</span>
                                        <span>{t("main21")} </span>
                                        <span> *</span>
                                    </div>
                                    <div className={s.inline_inputs}>
                                        <label className={s.container}>
                                            <font>{t("main22")}</font>
                                            <input type='radio' name='name'
                                                   onChange={prev =>
                                                       setFormData(prev => {
                                                           return {...prev, land: true}
                                                       })}/>
                                            <span className={s.checkmark} id='radio1'></span>
                                        </label>
                                        <label className={s.container}>
                                            <font>{t("main23")}</font>
                                            <input type='radio' name='name'
                                                   onChange={prev =>
                                                       setFormData(prev => {
                                                           return {...prev, land: false}
                                                       })}/>
                                            <span className={s.checkmark} id='radio2'></span>
                                        </label>
                                    </div>
                                </div>
                                <div className={s.inline_item_user_data}>
                                    <div className={s.inline_description}>
                                        <span>6</span>
                                        <span>{t("main24")} </span>
                                        <span> *</span>
                                    </div>
                                    <div className={s.inline_inputs}>
                                        <div>
                                            <input type='text' placeholder={t("main25")} className={s.input_step2}
                                                   id='city' value={formData.city}
                                                   onChange={(e) =>
                                                       setFormData(prev => {
                                                           return {...prev, city: e.target.value}
                                                       })}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.half_colum}>
                                <div className={s.inline_item_user_data}>
                                    <div className={s.inline_description}>
                                        <span>7</span>
                                        <span>{t("main26")} ( {t("main27")} <b>1 100 000 {t("main28")}</b> ) </span>
                                        <span> </span>
                                    </div>
                                    <div className={s.inline_inputs}>
                                        <div className={s.select_wrapper + ' ' + s.select_wrapper2}>
                                            <select onChange={(e) =>
                                                setFormData(prev => {
                                                    return {...prev, money: e.target.value}
                                                })}>
                                                <option value="виберіть" disabled selected>{t("main29")}</option>
                                                <option value="Власні кошти">{t("main30")}</option>
                                                <option value="Кредит">{t("main31")}</option>
                                                <option value="Лізинг">{t("main32")}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.configurator_navigation}>
                                <div className={s.redButCenter} onClick={setStageNext2}>
                                    <ButtonRedWithoutLink text={'mainButNext'}/>
                                </div>
                                <div className={s.reguired_fields}>
                                    <span>* </span>
                                    <span> {t("main33")}</span>
                                </div>
                                <ul>
                                    <li>{t("main34")} 1/2</li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div style={!stage.third ? {display: 'none'} : undefined} className={s.configurator_body}>
                        <h2>{t("main36")}</h2>
                        <form id="config-form" onSubmit={handleSubmit} className={s.formMain}>
                            <div className={s.personal_configurator_data}>
                                <ul>
                                    <li>
                                        <span>8</span>
                                        <span>{t("main37")} </span>
                                        <span> *</span>
                                        <input type='text' placeholder={t("main38")} value={formData.name}
                                               onChange={handleChange} name='name' id='name'/>
                                    </li>
                                    <li>
                                        <span>9</span>
                                        <span>{t("main39")} </span>
                                        <span> *</span>
                                        <input type='text' placeholder={t("main40")} value={formData.email}
                                               onChange={handleChange} name='email' id='email'/>
                                    </li>
                                    <li>
                                        <span>10</span>
                                        <span>{t("main41")} </span>
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
                                            {t("main42")}
                                            <Link href='/privacy-policy'
                                                  className={s.form_group_link}> {t("main43")} Samwash </Link>
                                            {t("main44")}
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
                                <button className={s.redButCenter} type='submit'>
                                    <ButtonRedWithoutLink text={'mainButSend'}/>
                                </button>
                                <div className={s.reguired_fields}>
                                    <span>* </span>
                                    <span> {t("main33")}</span>
                                </div>
                                <ul>
                                    <li onClick={setStageNext01}>{t("main35")}</li>
                                    <li>{t("main34")} 2/2</li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div style={!stage.four ? {display: 'none'} : undefined} className={s.thanks_message}>
                        <div className={s.thanks_message_service_form}>
                            <div className={s.message}>
                                <h2>
                                    <small>{t("main45")}</small>
                                    <strong>{t("main46")}</strong>
                                </h2>
                                <p></p>
                                <p>{t("main47")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormWash;