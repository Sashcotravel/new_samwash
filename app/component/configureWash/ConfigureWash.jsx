"use client"

import s from './configureWash.module.css';
import {useLocale, useTranslations} from "next-intl";
import {useRef, useState} from "react";
import Image from "next/image";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import Link from "next-intl/link";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";



function ConfigureWash() {

    const t = useTranslations("main");
    const locale = useLocale();
    const [stage, setStage] = useState({
        first: true, second: false, false: false, four: false
    })
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', typeAutowash: '', construction: '',
        colPosition: 0, outsidePosition: false, land: null, city: '', money: ''
    });
    const [imageUrl, setImageUrl] = useState('prevui')
    const [imageUrlModel, setImageUrlModel] = useState('')
    const [imageUrlNum, setImageUrlNum] = useState('')
    const [imageUrlOutside, setImageUrOutside] = useState('')
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const check2 = () => {
        ref2.current.checked = !ref2.current.checked
    }
    const check3 = () => {
        ref3.current.checked = !ref3.current.checked
    }

    const select1 = (e) => {
        let value = e.target.value
        setImageUrl(value)
        setFormData(prev => {
            return { ...prev, typeAutowash: value }
        })
    }

    const select2 = (e) => {
        let value = e.target.value
        setImageUrlModel(value)
        if(value === 'без-накриття'){
            setImageUrOutside('')
            setImageUrlNum('')
            ref.current.checked = false
            setFormData(prev => {
                return { ...prev, outsidePosition: false }
            })
            setFormData(prev => {
                return { ...prev, colPosition: 0 }
            })
        }
        setFormData(prev => {
            return { ...prev, construction: value }
        })
    }

    const select3 = (e) => {
        let value = e.target.value
        setImageUrlNum(value)
        if(Number(value) === 2){
            setImageUrOutside('')
        }
        setFormData(prev => {
            return { ...prev, colPosition: value }
        })
    }

    const check = () => {
        ref.current.checked = !ref.current.checked
        let value = ref.current.checked
        if(value === false){
            setImageUrOutside('')
        } else {
            setImageUrOutside(value.toString())
        }
        setFormData(prev => {
            return { ...prev, outsidePosition: value }
        })
    }

    const setStageNext0 = () => {
        setStage(prev => {
            return {...prev, second: false}
        })
        setStage(prev => {
            return {...prev, first: true}
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

    const setStageNext = () => {

        const type = document.getElementById('type')
        const radioPrevi = document.getElementById('radioPrevi')
        const construction = document.getElementById('construction')
        const col = document.getElementById('col')

        if(formData.typeAutowash !== '' && formData.construction !== '' && formData.colPosition !== 0){
            type.style.border = '1px solid #ccc'
            construction.style.border = '1px solid #ccc'
            col.style.border = '1px solid #ccc'

            setStage(prev => { return { ...prev, second: true } })
            setStage(prev => { return { ...prev, first: false } })

            setTimeout(() => {
                radioPrevi.scrollIntoView({block: "center", behavior: 'smooth'});
            }, 500)
        }
        else if(formData.typeAutowash === '' && formData.construction === '' && formData.colPosition === 0){
            type.style.border = '2px solid red'
            construction.style.border = '2px solid red'
            col.style.border = '2px solid red'
            type.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.typeAutowash === '' && formData.construction === ''){
            type.style.border = '2px solid red'
            construction.style.border = '2px solid red'
            col.style.border = '1px solid #ccc'
            type.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.typeAutowash === '' && formData.colPosition === 0){
            type.style.border = '2px solid red'
            construction.style.border = '1px solid #ccc'
            col.style.border = '2px solid red'
            type.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.construction === '' && formData.colPosition === 0){
            type.style.border = '1px solid #ccc'
            construction.style.border = '2px solid red'
            col.style.border = '2px solid red'
            col.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.construction === ''){
            type.style.border = '1px solid #ccc'
            construction.style.border = '2px solid red'
            col.style.border = '1px solid #ccc'
            construction.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.colPosition === 0){
            type.style.border = '1px solid #ccc'
            construction.style.border = '1px solid #ccc'
            col.style.border = '2px solid red'
            col.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.typeAutowash === ''){
            type.style.border = '2px solid red'
            construction.style.border = '1px solid #ccc'
            col.style.border = '1px solid #ccc'
            type.scrollIntoView({block: "center", behavior: 'smooth'});
        }
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
                typeAutowash: formData.typeAutowash,
                construction: formData.construction,
                colPosition: formData.colPosition,
                outsidePosition: formData.outsidePosition,
                land: formData.land ? "Так" : "Ні",
                city: formData.city,
                money: formData.money,
                namePage: 'КОНТАКТИ'
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
        <section className={s.box1}>
            <div className={s.main_containerBox1}>
                <div style={stage.four ? {display: 'none'} : undefined} className={s.section_header}>
                    <h1 className={s.section_headerH1}>
                        <p className={s.section_headerH1P1}>{t("main11")}</p>
                        <p className={s.section_headerH1P2}>{t("main12")}</p>
                    </h1>
                </div>
                <div style={!stage.first && !stage.four ? {display: 'block'} : undefined}
                     className={s.selected_washer_details}>
                    <ul>
                        <li>
                            <span>1</span>
                            <span>{t("main13")}</span>
                            <div>
                                <font>{formData.typeAutowash}</font>
                            </div>
                        </li>
                        <li>
                            <span>2</span>
                            <span>{t("main14")}</span>
                            <div>
                                <font>{formData.construction}</font>
                            </div>
                        </li>
                        <li>
                            <span>3</span>
                            <span>{t("main15")}</span>
                            <div>
                                <font>{formData.colPosition}</font>
                            </div>
                        </li>
                        <li>
                            <span>4</span>
                            <span>{t("main16")}</span>
                            <div>
                                <font>{formData.outsidePosition ? "Так" : "Ні"}</font>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={s.top_arrow} id='washConf'>
                    <div style={!stage.first ? {display: 'none'} : undefined} className={s.configurator_body}>
                        <div className={s.half_colum}>
                            <div className={s.washer_image}>
                                <Image alt='Choose your washes'
                                       src={`/mainPage/mainCalc/autowash/${imageUrl}${imageUrlModel}${imageUrlNum}${imageUrlOutside}.svg`}
                                       width={500} height={500}/>
                            </div>
                        </div>
                        <div className={s.half_colum}>
                            <form id="config-form" onSubmit={handleSubmit} className={s.formMain}>
                                <div className={s.select_wrapper + ' ' + s.select_wrapperPage} id='typePrevi'>
                                    <lable htmlFor='type'>
                                        <span>1</span>
                                        <font>{t("main13")}</font>
                                    </lable>
                                    <select onChange={select1} id='type' aria-label="type">
                                        <option disabled selected>{t("main17")}</option>
                                        <option value='мийка-самообслуговування'>
                                            мийка - самообслуговування
                                        </option>
                                        <option value='мийка-фур'>мийка - фур</option>
                                        <option value='робот-мийка'>робот - мийка</option>
                                        <option value='модульна-мийка'>модульна - мийка</option>
                                    </select>
                                </div>
                                <div className={s.select_wrapper + ' ' + s.select_wrapperPage}>
                                    <lable htmlFor='construction'>
                                        <span>2</span>
                                        <font>{t("main14")}</font>
                                    </lable>
                                    <select onChange={select2} disabled={formData.typeAutowash === ''}
                                            id='construction' aria-label="construction"
                                            style={formData.typeAutowash === '' ? {backgroundColor: '#ccc'} : undefined}>
                                        <option disabled selected>{t("main18")}</option>
                                        <option value='Smart'>Smart</option>
                                        <option value='Pixel'>Pixel</option>
                                        <option value='MARCO'>MARCO</option>
                                        <option value='MARCELLO'>MARCELLO</option>
                                        <option value='без-накриття'>без-накриття</option>
                                    </select>
                                </div>
                                <div className={s.select_wrapper + ' ' + s.select_wrapperPage}>
                                    <lable htmlFor='col'>
                                        <span>3</span>
                                        <font>{t("main15")}</font>
                                    </lable>
                                    <select onChange={select3} disabled={formData.construction === ''} id='col'
                                            aria-label="col"
                                            style={formData.construction === '' ? {backgroundColor: '#ccc'} : undefined}>
                                        <option disabled selected>{t("main19")}</option>
                                        {formData.typeAutowash !== 'мийка-самообслуговування'
                                            && <option value='1'>1</option>}
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        {formData.typeAutowash === 'мийка-самообслуговування'
                                            && <option value='5'>5</option>}
                                        {formData.typeAutowash === 'мийка-самообслуговування'
                                            && <option value='6'>6</option>}
                                        {formData.typeAutowash === 'мийка-самообслуговування'
                                            && <option value='7'>7</option>}
                                        {formData.typeAutowash === 'мийка-самообслуговування'
                                            && <option value='8'>8</option>}
                                        {formData.typeAutowash === 'мийка-самообслуговування'
                                            && <option value='9'>9</option>}
                                        {formData.typeAutowash === 'мийка-самообслуговування'
                                            && <option value='10'>10</option>}
                                        {formData.typeAutowash === 'мийка-самообслуговування'
                                            && <option value='11'>11</option>}
                                        {formData.typeAutowash === 'мийка-самообслуговування'
                                            && <option value='12'>12</option>}
                                    </select>
                                </div>
                                <div className={s.input_wrapper}>
                                    {formData.colPosition ? <lable className={s.container}>
                                        <span>4</span>
                                        <font>{t("main17")}</font>
                                        <input type='checkbox' ref={ref}
                                               className={s.checkmark + ' ' + s.checkbox}/>
                                        <span className={s.checkmark} onClick={check}></span>
                                    </lable> : ''}
                                </div>
                                <div onClick={setStageNext} className={s.redDivFirst}>
                                    <ButtonRedWithoutLink text={'mainButNext'} clas='width_but' />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style={!stage.second ? {display: 'none'} : undefined} className={s.configurator_body}>
                        <h2>{t("main20")}</h2>
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
                                    <li onClick={setStageNext0}>{t("main35")}</li>
                                    <li>{t("main34")} 2/3</li>
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
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div style={!stage.four ? {display: 'none'} : undefined} className={s.configurator_body2}>
                        <div className='thanks-message'>
                            <div className="thanks-message-service-form">
                                <div className="message">
                                    <h2>
                                        <small>{t("main45")}</small>
                                        <strong>{t("main46")}</strong>
                                    </h2>
                                    <p></p>
                                    <div style={{textAlign: 'center'}}>
                                        <h3>{t("main47")}</h3>
                                    </div>
                                    <p>{t("main48")}</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <div style={{textAlign: 'center'}}>
                                        <div className={s.redButCenter + ' ' + s.paddingBut}>
                                            <ButtonRedArrowRight text='mainButMain' link='/'/>
                                        </div>
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConfigureWash;