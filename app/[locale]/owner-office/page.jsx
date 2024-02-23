"use client"

import s from './managerOffice.module.css';
import Image from "next/image";
import {useState} from "react";
import {useTranslations} from "next-intl";
import Link from "next-intl/link";

function ManagerOffice() {

    const t = useTranslations("contact");

    const [formData, setFormData] = useState({email: '', password: ''});


    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        let testEmail = regExpEmail.test(formData.email)

        if (formData.password.length >= 2 && testEmail) {
            password.style.border = '1px solid #ccc'
            email.style.border = '1px solid #ccc'
            console.log(formData)
            let templateParams = {
                password: formData.password,
                email: formData.email,
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
        } else if (formData.password.length < 2 && testEmail === false) {
            email.style.border = '2px solid red'
            password.style.border = '2px solid red'
        } else if (!formData.password) {
            password.style.border = '2px solid red'
            email.style.border = '1px solid #ccc'
        } else if (testEmail === false) {
            email.style.border = '2px solid red'
            password.style.border = '1px solid #ccc'
        }
    }

    const scrollDown = () => {
        const down = document.getElementById('down')
        down.scrollIntoView({block: "start", behavior: 'smooth'});
    }


    return (<div>

        <section className={s.mainDiv}>

            <Image src='/other/remote.jpg' alt='' fill className={s.backImage}/>

            <Image src='/managerOffice/11.svg' alt='' fill className={s.backLine}/>

            <div className={s.redLine}>
                <Image src='/managerOffice/2.svg' alt='' fill/>
                <h1>Авторизуватися</h1>
                <h2>Увійдіть, щоб продовжити</h2>
                <div className={s.more} onClick={scrollDown}>Дізнатися більше</div>
            </div>

            <form className={s.form} onSubmit={handleSubmit}>
                <h3>Увійти</h3>
                <p>ЕЛЕКТРОННА ПОШТА</p>
                <input type="email" value={formData.email} onChange={handleChange} id='email' name='email'/>
                <p>ПАРОЛЬ</p>
                <input type="text" value={formData.password} onChange={handleChange} id='password' name='password'/>

                <div className={s.divRedBut}>
                    <button>
                        <Image src='/managerOffice/checkbox.png' alt='' fill/>
                        запам'ятати<br/> пароль
                    </button>
                    <Link href='/password-recovery'>Відновити пароль?</Link>
                </div>

                <button className={s.formBtn} type='submit'>ВХІД</button>
            </form>

            <div className={s.divShop}>
                <Link href='/'>
                    <Image src='/other/playstor.png' alt='' width={135} height={40}/>
                </Link>
                <Link href='/'>
                    <Image src='/other/appstor.png' alt='' width={135} height={40}/>
                </Link>
            </div>

            <div className={s.more2} onClick={scrollDown}>Дізнатися більше</div>

            <Image src='/managerOffice/3.svg' alt='' fill className={s.imageButton}/>
        </section>

        <section className={s.section} id='down'>
            <Image src='/other/remote.jpg' alt='' fill className={s.backImage}/>

            <div className={s.block2}>
                <div className={s.personRoom}>
                    <h3>Ваш персональний кабінет власника автомийки</h3>
                    <p>Керуйте вашими об'єктами з будь-якого пристрою! Змінюйте тарифи, стежте за звітами, влаштовуйте
                        акції та спілкуйтеся з клієнтами. Хмарна та багатофункціональна CRM для вашої автомийки
                        самообслуговування.</p>
                </div>
                <div className={s.personRoom}>
                    <div className={s.divTitle}>
                        <Image src='/managerOffice/5.svg' alt='' fill/>
                        <h4>Контроль</h4>
                    </div>
                    <p className={s.addClass}>Дивіться звіти про інкасації. Використовуйте
                        адміністратор, щоб увімкнути сервісний режим під час прибирання.</p>
                </div>
            </div>

            <div className={s.block3}>
                <span>Особливості</span>
                <span>особистого кабінету</span>
            </div>

            <div className={s.lastBlock}>
                <div className={s.divThree}>
                    <div className={s.divTitle2}>
                        <Image src='/managerOffice/6.svg' alt='' fill/>
                        <h4>Управління автомийкою</h4>
                    </div>
                    <p>Доступна зміна тарифів, налаштовуються режими роботи світла та воріт, тривалість паузи</p>
                </div>
                <div className={s.divThree}>
                    <div className={s.divTitle2}>
                        <Image src='/managerOffice/7.svg' alt='' fill/>
                        <h4>Звітність</h4>
                    </div>
                    <p>Дивіться в реальному часі скільки машин помилилося, яка виручка готівкових та безготівкових
                        коштів. Будуйте звіти за будь-який період</p>
                </div>
                <div className={s.divThree}>
                    <div className={s.divTitle2}>
                        <Image src='/managerOffice/8.svg' alt='' fill/>
                        <h4>Акції та бонуси</h4>
                    </div>
                    <p>Підвищуйте лояльність своїх клієнтів, влаштовуйте акції, даруйте бонуси та залучайте нових
                        відвідувачів мийки</p>
                </div>
                <div className={s.divThree}></div>
                <div className={s.divThree}>
                    <div className={s.divTitle2}>
                        <Image src='/managerOffice/9.svg' alt='' fill/>
                        <h4>База знань</h4>
                    </div>
                    <p>Величезна база знань з обладнання та роботи автомийки, яка постійно оновлюється та
                        доповнюється</p>
                </div>
                <div className={s.divThree}>
                    <div className={s.divTitle2}>
                        <Image src='/managerOffice/9.svg' alt='' fill/>
                        <h4>Управління послугами</h4>
                    </div>
                    <p>Доналаштуйте додаткові послуги по об'єкту в кабінеті.</p>
                </div>
            </div>
        </section>

    </div>);
}

export default ManagerOffice;