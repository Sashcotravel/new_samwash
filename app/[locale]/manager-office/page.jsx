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

        if(formData.name.length >= 2 && testEmail && testPhone){
            phone.style.border = '1px solid #ccc'
            email.style.border = '1px solid #ccc'
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
        else if (!formData.password) {
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
    }


    return (
        <section className={s.mainDiv}>

            <Image src='/other/remote.jpg' alt='' fill className={s.backImage} />

            <Image src='/managerOffice/11.svg' alt='' fill className={s.backLine}  />

            <div className={s.redLine}>
                <Image src='/managerOffice/2.svg' alt='' fill  />
                <h1>Авторизуватися</h1>
                <h2>Увійдіть, щоб продовжити</h2>
            </div>

            <form className={s.form} onSubmit={handleSubmit}>
                <h3>Увійти</h3>
                <p>ЕЛЕКТРОННА ПОШТА</p>
                <input type="text"/>
                <p>ПАРОЛЬ</p>
                <input type="text"/>

                <div className={s.divRedBut}>
                    <button>
                        <Image src='/managerOffice/checkbox.png' alt='' fill />
                        запам'ятати пароль
                    </button>
                    <Link href='/'>Відновити пароль?</Link>
                </div>

                <button className={s.formBtn} type='submit'>ВХІД</button>
            </form>

            {/*<Image src='/managerOffice/3.svg' alt='' fill  />*/}

        </section>
    );
}

export default ManagerOffice;