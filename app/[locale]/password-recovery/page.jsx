"use client"

import s from './managerOffice.module.css';
import Image from "next/image";
import {useState} from "react";
import {useTranslations} from "next-intl";
import Link from "next-intl/link";

function PasswordRecovery() {

    const t = useTranslations("contact");

    const [formData, setFormData] = useState({email: '', password: '', oldPass: ''});


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
        const oldPass = document.getElementById('oldPass')
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


    return (
        <section className={s.mainDiv}>

            <Image src='/other/remote.jpg' alt='' fill className={s.backImage}/>

            <Image src='/managerOffice/11.svg' alt='' fill className={s.backLine}/>

            <div className={s.redLine}>
                <Image src='/managerOffice/2.svg' alt='' fill/>
                <h1>Відновлення паролю</h1>
                <h2>Новий пароль</h2>
            </div>

            <form className={s.form} onSubmit={handleSubmit}>
                <h3>Відновлення паролю</h3>
                <p>СТАРИЙ ПАРОЛЬ</p>
                <input type="email" value={formData.oldPass} onChange={handleChange} id='oldPass' name='oldPass'/>
                <p>ЕЛЕКТРОННА ПОШТА</p>
                <input type="email" value={formData.email} onChange={handleChange} id='email' name='email'/>
                <p>НОВИЙ ПАРОЛЬ</p>
                <input type="text" value={formData.password} onChange={handleChange} id='password' name='password'/>

                <button className={s.formBtn} type='submit'>Надсилати</button>
            </form>

            <div className={s.divShop}>
                <Link href='/'>
                    <Image src='/other/playstor.png' alt='' width={135} height={40}/>
                </Link>
                <Link href='/'>
                    <Image src='/other/appstor.png' alt='' width={135} height={40}/>
                </Link>
            </div>

            <Image src='/managerOffice/3.svg' alt='' fill className={s.imageButton}/>

            <div className={s.blackBlock}>
                <p>Служби локації дають змогу Apple і стороннім програмам та вебсайтам збирати й використовувати
                    інформацію, засновану на поточній геопозиції вашого компʼютера. Приблизна геопозиція визначається за
                    допомогою інформації від локальних мереж Wi‑Fi та збирається Службами локації без ідентифікації
                    особи користувача.</p>
                <p>
                    Коли ви користуєтесь Spotlight або Пропозиціями Safari в Safari, розташування вашого Mac на момент
                    вашого пошукового запиту в Spotlight чи Safari надсилатиметься до Apple, щоб надавати доречніші
                    Пропозиції Spotlight і Пропозиції Safari та вдосконалювати інші продукти й послуги Apple. Якщо ви
                    вимкнете Служби локації для Пропозицій Spotlight і Пропозицій Safari, ваша точна геопозиція не
                    надсилатиметься до Apple. Щоб надавати доречні пошукові пропозиції, Apple може використовувати
                    IP‑адресу вашого інтернет‑зʼєднання для визначення вашої приблизної геопозиції через ототожнення її
                    з географічним регіоном.
                </p>
            </div>

        </section>
    );
}

export default PasswordRecovery;