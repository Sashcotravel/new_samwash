"use client"

import s from './modernizations-and-expansions.module.css';
import FixManu4 from "@/app/component/fixManu4/FixManu4";
import Image from "next/image";
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import {useEffect, useRef, useState} from "react";

function ModernizationsAndExpansions() {

    const t = useTranslations("modernizations-and-expansions");
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    const [stage, setStage] = useState({
        second: true, third: false, four: false
    })
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', produser: '', city: '', year: '2004', colPost: ''
    });

    useEffect(() => {
        let loc = localStorage.getItem("configModern");

        if(loc === 'true'){
            const wash = document.getElementById('form1')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("configModern");
        }
    }, []);

    function showForm() {
        document.getElementById('form1').scrollIntoView({block: "start", behavior: 'smooth'});
    }

    const check2 = () => {
        ref2.current.checked = !ref2.current.checked
    }
    const check3 = () => {
        ref3.current.checked = !ref3.current.checked
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

        const colPost = document.getElementById('colPost')
        const year = document.getElementById('year')
        const city = document.getElementById('city')
        const produser = document.getElementById('produser')


        if(formData.produser !== '' && formData.city !== '' && formData.colPost !== ''){
            colPost.style.border = '1px solid #ccc'
            produser.style.border = '1px solid #ccc'
            city.style.border = '1px solid #ccc'

            setStage(prev => { return { ...prev, second: false } })
            setStage(prev => { return { ...prev, third: true } })

            setTimeout(() => {
                produser.scrollIntoView({block: "center", behavior: 'smooth'});
            }, 500)
        }
        else if(formData.produser === '' && formData.city === '' && formData.colPost === ''){
            colPost.style.border = '2px solid red'
            city.style.border = '2px solid red'
            produser.style.border = '2px solid red'
            city.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.produser === ''){
            produser.style.border = '2px solid red'
            colPost.style.border = '1px solid #ccc'
            city.style.border = '1px solid #ccc'
            produser.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.city === ''){
            colPost.style.border = '1px solid #ccc'
            year.style.border = '1px solid #ccc'
            city.style.border = '2px solid red'
            city.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.colPost === ''){
            colPost.style.border = '2px solid red'
            year.style.border = '1px solid #ccc'
            city.style.border = '1px solid #ccc'
            colPost.scrollIntoView({block: "center", behavior: 'smooth'});
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
                city: formData.city,
                produser: formData.produser,
                year: formData.year,
                colPost: formData.colPost,
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
        <div>

            <section className='head-image'>
                <Image src='/other/kits.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("expansions1")}
                        </li>
                    </ul>
                    <h1>{t("expansions1")}</h1>
                </div>
            </section>

            <FixManu4 active={2}/>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Модернізації та розширення</strong>
                            </h2>
                        </div>
                        <p>
                            Гнучка технологія, яка використовується в мийних пристроях SAMWASH, надає широкі можливості
                            розширення автомийки навіть під час її роботи. У будь-який зручний для вас час ви можете
                            <b> розширити свою автомийку додатковою станцією, новими програмами мийки або додатковими
                                пристроями</b>, завдяки чому ваша мийка стане більш привабливою, а ви будете
                            заробляти більше. Можливість адаптації нових добавок до технології мийки підвищує її
                            безпеку та покращує привабливість, а отже, прибутковість вашої мийки.
                        </p>
                        <p>
                            Також ми пропонуємо повну заміну б/в автомийок будь-якого виробника на сучасну технологію
                            мийки SAMWASH. Наші спеціалісти допоможуть підібрати потрібний тип мийки та аксесуарів, а
                            <b> також адаптують наше рішення до вашої конфігурації </b>, щоб модернізація пройшла
                            без проблем, що мінімізує витрати на простої.
                        </p>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <ul className={s.box_div}>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/other/svg/gears.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Розширення автомийки</h3>
                            <p>Встановлення додаткових програм мийки, нові способи оплати, розширення автомийки
                                зовнішньою станцією, встановлення інших аксесуарів для мийки</p>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/other/svg/pen.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Модернізація автомийки</h3>
                            <p>Заміна парапету, банерів, заміна/встановлення обшивки опор, світлодіодні системи</p>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/other/svg/tech.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Заміна технології прання</h3>
                            <p>Повна або часткова заміна мийної техніки на автомийці - будь-якого виробника!</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.section_brown}>
                <div className="main-container">
                    <div className={s.video_block}>
                        <iframe
                            src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                            title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                    </div>
                    <div className={s.text_block}>
                        <h2>Економія до 30% енергії взимку</h2>
                        <span>
                            Ми пропонуємо рішення, які заощадять вам до 30% витрат на електроенергію. Вибравши Smart
                            Heating, інтелектуальну систему керування підігрівом підлоги, ви подбаєте про експлуатаційні
                            витрати свого бізнесу навіть взимку. Smart Heating можна встановити на будь-яку автомийку
                            SAMWASH. Запитайте нас про розширення автомийки системою, яка оптимізує ваші витрати на
                            опалення.
                        </span>
                        <div onClick={showForm} style={{margin: '30px 0 20px -40px'}}>
                            <ButtonRedWithoutLink text='aboutOpportunities'/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section2} id='form1'>
                <div className="main-container">
                    <div style={stage.four ? {display: 'none'} : undefined} className={s.section_header}>
                        <h1 className={s.section_headerH1}>
                            <p className={s.section_headerH1P1}>БЕЗКОШТОВНА ПРОПОЗИЦІЯ</p>
                            <p className={s.section_headerH1P2}>Не знаєте, що робити з автомийкою?</p>
                            <p>Модернізація, розширення, заміна техніки мийки? А може орендувати ділянку? Звертайтеся до
                                нас, ми безкоштовно допоможемо налаштувати рішення, незалежно від того, яка у вас марка
                                мийки.</p>
                        </h1>
                    </div>
                    <div style={!stage.second && !stage.four ? {display: 'block'} : undefined}
                         className={s.selected_washer_details}>
                        <ul>
                            <li>
                                <span>1</span>
                                <span>МІСТО</span>
                                <div>
                                    <font>{formData.city}</font>
                                </div>
                            </li>
                            <li>
                                <span>2</span>
                                <span>КІЛЬКІСТЬ ПОЗИЦІЙ</span>
                                <div>
                                    <font>{formData.colPost}</font>
                                </div>
                            </li>
                            <li>
                                <span>3</span>
                                <span>РІК ВИПУСКУ</span>
                                <div>
                                    <font>{formData.year}</font>
                                </div>
                            </li>
                            <li>
                                <span>4</span>
                                <span>ПРОДЮСЕР</span>
                                <div>
                                    <font>{formData.produser}</font>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={s.top_arrow} id='washConf'>
                        <div style={!stage.second ? {display: 'none'} : undefined} className={s.configurator_body}>
                            <h2>ДАЙТЕ ВІДПОВІДЬ НА КІЛЬКА ЗАПИТАНЬ, ЩОБ МИ МОГЛИ АДАПТУВАТИ ПРОПОЗИЦІЮ ДО ВАШИХ
                                ПОТРЕБ</h2>
                            <form id="config-form" className={s.formMain}>
                                <div className={s.half_colum}>
                                    <div className={s.inline_item_user_data}>
                                        <div className={s.inline_description} id='radioPrevi'>
                                            <span>1</span>
                                            <span>Місто </span>
                                            <span> *</span>
                                        </div>
                                        <div className={s.inline_inputs}>
                                            <div>
                                                <input type='text' placeholder='місто' className={s.input_step2}
                                                       id='city' value={formData.city}
                                                       onChange={(e) =>
                                                           setFormData(prev => {
                                                               return {...prev, city: e.target.value}
                                                           })}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.inline_item_user_data}>
                                        <div className={s.inline_description}>
                                            <span>4</span>
                                            <span>Кількість позицій </span>
                                            <span> *</span>
                                        </div>
                                        <div className={s.inline_inputs}>
                                            <div className={s.select_wrapper + ' ' + s.select_wrapper2}>
                                                <select onChange={(e) =>
                                                    setFormData(prev => {
                                                        return {...prev, colPost: e.target.value}
                                                    })} id='colPost'>
                                                    <option value="виберіть" disabled selected>Виберіть</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.half_colum}>
                                    <div className={s.inline_item_user_data}>
                                        <div className={s.inline_description}>
                                            <span>3</span>
                                            <span>Рік випуску </span>
                                            <span> *</span>
                                        </div>
                                        <div className={s.inline_inputs}>
                                            <div className={s.select_wrapper + ' ' + s.select_wrapper2}>
                                                <div>
                                                    <input type='number' placeholder='2004' className={s.input_step2}
                                                           id='year' value={formData.year}
                                                           onChange={(e) =>
                                                               setFormData(prev => {
                                                                   return {...prev, year: e.target.value}
                                                               })}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.inline_item_user_data}>
                                        <div className={s.inline_description}>
                                            <span>4</span>
                                            <span>Виробник </span>
                                            <span> *</span>
                                        </div>
                                        <div className={s.inline_inputs}>
                                            <div className={s.select_wrapper + ' ' + s.select_wrapper2}>
                                                <select onChange={(e) =>
                                                    setFormData(prev => {
                                                        return {...prev, produser: e.target.value}
                                                    })} id='produser'>
                                                    <option value="виберіть" disabled selected>Виберіть</option>
                                                    <option value="Samwash">Samwash</option>
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
                                        <span> ОБОВ'ЯЗКОВІ ПОЛЯ</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div style={!stage.third ? {display: 'none'} : undefined} className={s.configurator_body}>
                            <h2>ПРОСТО КОНТАКТНІ ДАНІ</h2>
                            <form id="config-form" onSubmit={handleSubmit} className={s.formMain}>
                                <div className={s.personal_configurator_data}>
                                    <ul>
                                        <li>
                                            <span>5</span>
                                            <span>ІМ'Я ТА ПРІЗВИЩЕ </span>
                                            <span> *</span>
                                            <input type='text' placeholder="Ім'я та прізвище" value={formData.name}
                                                   onChange={handleChange} name='name' id='name'/>
                                        </li>
                                        <li>
                                            <span>6</span>
                                            <span>ЕЛЕКТРОННА ПОШТА </span>
                                            <span> *</span>
                                            <input type='text' placeholder='Електронна пошта' value={formData.email}
                                                   onChange={handleChange} name='email' id='email'/>
                                        </li>
                                        <li>
                                            <span>7</span>
                                            <span>Номер телефону </span>
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
                                                Я заявляю, що я ознайомився з
                                                <Link href='/privacy-policy'
                                                      className={s.form_group_link}> політикою конфіденційності Samwash </Link>
                                                і даю згоду на обробку моїх персональних даних.
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
                                        <span> ОБОВ'ЯЗКОВІ ПОЛЯ</span>
                                    </div>
                                    <ul>
                                        <li onClick={setStageNext01}>НАЗАД</li>
                                        <li>КРОК 2/2</li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div style={!stage.four ? {display: 'none'} : undefined} className={s.configurator_body2}>
                            <div className='thanks-message'>
                                <div className="thanks-message-service-form">
                                    <div className="message">
                                        <h2>
                                            <small>ДЯКУЮ ТОБІ!</small>
                                            <strong>запит надіслано</strong>
                                        </h2>
                                        <p></p>
                                        <div style={{textAlign: 'center'}}>
                                            <h3>За мить ви отримаєте вітальний електронний лист із нашим «Путівником
                                                для інвестора» на свою поштову скриньку, а за мить — ознайомчу
                                                пропозицію щодо обраної безконтактної мийки.</h3>
                                        </div>
                                        <p>ЯКЩО ВИ ХОЧЕТЕ ОТРИМАТИ ДЕТАЛЬНУ ПРОПОЗИЦІЮ, НЕ ЗАБУДЬТЕ НАТИСНУТИ КНОПКУ
                                            В ЕЛЕКТРОННОМУ ЛИСТІ.</p>
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

            <section className={s.section_blue}>
                <div className="main-container">
                    <div style={{float: 'right'}} className={s.text_block}>
                        <h2>Оновіть зовнішній вигляд вашої автомийки</h2>
                        <span>
                            Модернізація мийки полягає не тільки в заміні технології мийки, а й може включати заміну
                            конструкції, встановлення додаткових освітлювальних елементів, корпусів опор тощо. Це
                            підвищує привабливість автомийки, привертає увагу водіїв та запрошує їх до скористатися
                            послугами прання.
                        </span>
                        <div onClick={showForm} style={{margin: '30px 0'}}>
                            <ButtonRedArrowRight text='car-wash-designs' link='/'/>
                        </div>
                    </div>
                    <div className={s.video_block}>
                        <iframe
                            src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                            title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ModernizationsAndExpansions;