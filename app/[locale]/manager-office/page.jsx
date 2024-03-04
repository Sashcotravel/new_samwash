"use client"

import s from './managerOffice.module.css';
import Image from "next/image";
import {useState} from "react";
import {useTranslations} from "next-intl";
import Link from "next-intl/link";

function ManagerOffice() {

    const t = useTranslations("contact");

    const [formData, setFormData] = useState({ email: '', password: '' });


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

        if(formData.password.length >= 2 && testEmail){
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
        }
        else if(formData.password.length < 2 && testEmail === false){
            email.style.border = '2px solid red'
            password.style.border = '2px solid red'
        }
        else if (!formData.password) {
            password.style.border = '2px solid red'
            email.style.border = '1px solid #ccc'
        }
        else if (testEmail === false) {
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
                <h1>Авторизуватися</h1>
                <h2>Увійдіть, щоб продовжити</h2>
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

            <Image src='/managerOffice/3.svg' alt='' fill className={s.imageButton}/>

        </section>
    );
}

export default ManagerOffice;