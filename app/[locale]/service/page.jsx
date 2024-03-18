"use client"

import s from './service.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import {useEffect, useRef, useState} from "react";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import FormUserDate from "@/app/component/formUserData/FormUserDate";

function Service() {

    const t = useTranslations("service");
    const ref = useRef(null)
    const [form, setForm] = useState(false)

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    const [more, setMore] = useState(false)

    useEffect(() => {
        let itemsCounters = document.querySelectorAll(`#item`)
        let section_counter = document.querySelector("#section_counter")
        let speed = 50

        const count = (counters) => {
            counters.forEach((counter, index) => {
                function UpdateCounter() {
                    const targetNumber = +counter.dataset.target
                    const initialNumber = +counter.innerText
                    const incPerCount = targetNumber / speed
                    if (initialNumber < targetNumber) {
                        counter.innerText = Math.ceil(initialNumber + incPerCount)
                        setTimeout(UpdateCounter, 40)
                    }
                }

                UpdateCounter()
                if (counter.parentElement.style.animation) {
                    counter.parentElement.style.animation = ''
                } else {
                    counter.parentElement.style.animation = `slider-up .3s ease forward ${index / counters.length + 0.5}s`
                }
            })
        }
        let CounterObserver2 = new IntersectionObserver((entries, observer) => {
            let [entry] = entries
            if (!entry.isIntersecting) return
            count(itemsCounters)
        }, {root: null, threshold: 0.4})
        CounterObserver2.observe(section_counter)
    }, [])

    const openForm = () => {
        setForm(true)
        setTimeout(() => {
            ref.current?.scrollIntoView({behavior: 'smooth'})
        }, 200)
    }


    return (
        <div>

            <section className='head-image'>
                <Image src='/service/service.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("service1")}
                        </li>
                    </ul>
                    <h1>{t("service1")}</h1>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>СЕРВІС SAMWASH</small>
                            <strong>Ми у вашому розпорядженні</strong>
                        </h2>
                        <p>
                            Наша команда професіоналів завжди готова допомогти вирішити Ваші незручності. Незалежно від
                            того, чи йдеться про запчастини, установку нових комплектуючих чи зчитувачі безконтактних
                            карт, ми не дозволимо вашій автомийці припинити роботу ні на хвилину. Ваш прибуток для нас
                            найважливіший.
                        </p>
                        <p className={s.read_more} onClick={() => setMore(!more)}>читати далі</p>
                        <div className={s.details} style={more ? {display: 'block'} : {display: 'none'}}>
                            <h2>Професійна мийка</h2>
                            <p>
                                Запускаючи автомийку, не забувайте постійно контролювати технічний стан автомийки.
                                Маючи доступ до системи моніторингу та роботи автомийки Carwash Manager, ви завжди
                                знаєте, що відбувається з вашою автомийкою. У разі виникнення будь-яких незручностей,
                                які вимагають відвідування сервісного центру, оберіть <b>професійну автомийку</b>,
                                бажано безпосередньо від виробника. Завдяки цьому ви можете бути впевнені, що всі
                                ремонти виконуються на основі професійних знань, а використовувані запчастини
                                походять від оригінального джерела. Як SAMWASH, <b>ми працюємо на ринку більше 30
                                років</b>. Завдяки цьому ми маємо професійні знання, щоб підтримати вас у
                                обслуговуванні вашої автомийки або її модернізації. Розгалужена сервісна мережа
                                безконтактних мийок дозволить вам з легкістю отримати вигоду як від ремонту в
                                разі виникнення небажаної ситуації, так і від модернізації автомийки. Наші
                                автомийки спроектовані таким чином, що можлива їх модернізація. Завдяки цьому,
                                обравши автомийки SAMWASH, ви можете бути в курсі останніх тенденцій і
                                задовольняти потреби своїх клієнтів.
                            </p>
                            <h2>Автомийка – чому варто співпрацювати з SAMWASH service?</h2>
                            <p>Вам цікаво, чому варто обрати послуги нашої автомийки? Це ідеальне рішення для
                                людей, які цінують:</p>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    чуйність
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    оригінальні запчастини
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    можливість розширення автомийки
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    професійні консультації
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    сучасні рішення
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    збереження
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    комфорт
                                </li>
                            </ul>
                            <p>
                                У SAMWASH ми орієнтовані на потреби клієнтів. Тому ми намагаємося якнайшвидше реагувати
                                на потреби клієнтів у обслуговуванні. Як виробник ми маємо повний доступ до оригінальних
                                запасних частин, що означає, що будь-яку несправність можна швидко усунути.
                            </p>
                            <p>
                                У разі виходу з ладу автомобіля, електроніки чи комп’ютера деякі люди вирішують замінити
                                оригінальні запчастини – часто чують про зниження ефективності пристрою та його роботу,
                                або просто про більший відсоток поломок. Вибираючи професійну мийку, варто вибирати
                                тільки оригінальні запчастини безпосередньо від виробника. Наш сервісний центр має склад
                                площею 970 м2, тому ми можемо гарантувати постійну наявність оригінальних запчастин.
                                Завдяки цьому усунення несправностей в роботі автомийки буде ефективним!
                            </p>
                            <p>
                                Послуга безконтактної мийки стане в нагоді не тільки в разі поломки! Ми прекрасно
                                розуміємо, що в міру розвитку компанії можуть змінюватися як потреби власника об'єкта,
                                так і потреби клієнтів. Тому наші автомийки виготовлені таким чином, що їх можна
                                модифікувати або розширювати. Таким чином ви забезпечите задоволення своїх клієнтів і
                                зростання популярності ваших послуг.
                            </p>
                            <p>
                                Вам цікаво, яке технологічне рішення найкраще працюватиме на вашій безконтактній мийці?
                                Завдяки багаторічній діяльності та власному відділу досліджень і розробок ми постійно
                                прагнемо надати вам можливість використовувати нові продукти та покращені пристрої та
                                аксесуари. Ми будемо раді відповісти на ваші запитання.
                            </p>
                            <p>
                                Світ рухається вперед, тому варто впроваджувати сучасні технологічні рішення.
                                Скориставшись нашою послугою, ви можете мати не лише програму, яка дозволяє керувати
                                закладом з телефону чи комп’ютера. Обравши наші послуги, ви також запровадите
                                безготівковий розрахунок на своїй автомийці. Завдяки цьому ви забезпечите більший
                                комфорт своїм клієнтам, яким не доведеться міняти банкноти чи знімати готівку в
                                банкоматі. Ви можете зручно оплачувати свої послуги банківською картою за допомогою
                                PayPass.
                            </p>
                            <p>
                                Використання оригінальних запасних частин робить установку менш сприйнятливою до
                                можливих поломок або несправностей. У нашій пропозиції також є системи, які знижують
                                витрати на експлуатацію об’єкта. Скориставшись послугами професійної безконтактної
                                мийки, ви можете розширити свої інвестиції, встановивши конденсаційну піч або
                                інтелектуальну систему підігріву підлоги. Завдяки цьому ви можете збалансувати свої
                                витрати, пов’язані з рахунками за електроенергію чи газ. Повністю регульована система
                                високого тиску також дуже популярна, що дозволяє встановити відповідний тиск, таким
                                чином споживаючи менше води та електроенергії. Завдяки впровадженню таких рішень ваша
                                автомийка буде радувати клієнтів зручністю та ефективністю, а ви оптимізуєте витрати,
                                пов’язані з веденням бізнесу.
                            </p>
                            <p>
                                Ви можете надіслати запит або запит на послугу через сайт. Для цього просто підготуйте
                                порядковий номер об'єкта та останні 4 цифри свого номера телефону.
                            </p>
                            <p>
                                Це лише деякі з переваг використання нашої послуги мийки. Подбайте про свій комфорт і
                                функціональність закладу та інвестуйте в найкращі рішення на ринку.l
                            </p>
                            <h2>Автомийка – модернізація</h2>
                            <p>
                                Ви вже знаєте, що в нашій автомийці ви не тільки оглянете та відремонтуєте, а й
                                модернізуєте. Додаткові пристрої з пропозиції SAMWASH надзвичайно популярні, такі як:
                                <b> професійні пилососи для автомийок</b> і <b>розподільник склоомивача</b>
                            </p>
                            <p>
                                Запускаючи безконтактну мийку, варто враховувати потреби клієнтів. Ретельно і швидко
                                вимита машина зовні - це одне, але також добре підтримувати чистоту всередині. Тому
                                відмінний спосіб - розширити спектр додаткових послуг за допомогою професійного пилососа
                                для автомийки. Таким чином, ваші клієнти будуть ефективно очищати салон свого автомобіля
                                за допомогою пристрою, оснащеного потужними промисловими турбінами. Залежно від типу
                                обраного додаткового пристрою, він може бути оснащений традиційною платіжною системою
                                або модулем, що дозволяє використовувати дебетову картку або програму лояльності.l
                            </p>
                            <p>
                                Варто надати своїм клієнтам простий спосіб заправки склоомивача. Встановити сучасний
                                дозатор омивача з атмосферостійких матеріалів можна за допомогою послуг автоматичної
                                мийки. Крім того, онлайн-додаток Carwash Manager дозволить вам зручно контролювати та
                                керувати надбудовою.
                            </p>
                            <p>Це лише приклади модифікацій, які ви можете замовити на професійній автомийці.</p>
                        </div>
                    </div>
                    <div className={s.img_box}>
                        <a data-fancybox="gallery"
                           href={'https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0'}>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="" loading="lazy" className={s.frame}/>
                        </a>
                    </div>
                    <div className={s.icon_box}>
                        <ul className={s.ul_icon}>
                            <li>
                                <div className={s.back_white}>
                                    <Image src='/service/service1.svg' alt='' width={64} height={64}/>
                                </div>
                                <h3>Комплексне гарантійне обслуговування</h3>
                            </li>
                            <li>
                                <div className={s.back_white}>
                                    <Image src='/service/service2.svg' alt='' width={64} height={64}/>
                                </div>
                                <h3>Швидкий час відгуку</h3>
                            </li>
                            <li>
                                <div className={s.back_white}>
                                    <Image src='/service/line.svg' alt='' width={64} height={64}/>
                                </div>
                                <h3>Висока доступність запчастин</h3>
                            </li>
                            <li>
                                <div className={s.back_white}>
                                    <Image src='/service/info.svg' alt='' width={64} height={64}/>
                                </div>
                                <h3>Можливість дистанційного моніторингу</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={s.blue_section} id='section_counter'>
                <div className="main-container">
                    <div className={s.description_wrapper}>
                        <div className={s.item}>
                            <div className={s.image_box}>
                                <Image src='/service/gray1.svg' alt='' width={55} height={55}/>
                            </div>
                            <h2 id="item" data-target={62789}>0</h2>
                            <span>запчастини в наявності</span>
                        </div>
                        <div className={s.item}>
                            <div className={s.image_box}>
                                <Image src='/service/gray2.svg' alt='' width={55} height={55}/>
                            </div>
                            <h2 id="item" data-target={970}>0</h2>
                            <span>м2 складської площі</span>
                        </div>
                        <div className={s.item}>
                            <div className={s.image_box}>
                                <Image src='/service/gray3.svg' alt='' width={55} height={55}/>
                            </div>
                            <h2 id="item" data-target={1800}>0</h2>
                            <span>виготовлені прилади в рік</span>
                        </div>
                        <div className={s.item}>
                            <div className={s.image_box}>
                                <Image src='/service/gray4.svg' alt='' width={55} height={55}/>
                            </div>
                            <h2 id="item" data-target={10}>0</h2>
                            <span>сервісні бригади</span>
                        </div>
                        <div style={{border: 'none'}} className={s.item}>
                            <div className={s.image_box}>
                                <Image src='/service/gray5.svg' alt='' width={55} height={55}/>
                            </div>
                            <h2 id="item" data-target={609}>0</h2>
                            <span>мийки з дистанційним керуванням</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <div className={s.serv_block}>
                        <div className="section-header">
                            <h2>
                                <small>РЕМОНТ ТА МОДЕРНІЗАЦІЯ АВТОМИЙОК</small>
                                <strong>Сервісна підтримка</strong>
                            </h2>
                        </div>
                        <div className={s.between2}>
                            <Link href='/service-request'>
                                <ButtonRedWithoutLink text={'service-repair-order'}/>
                            </Link>
                            <div className={s.phoneDiv}>
                                <Image src='/contact/phoneContact.png' alt='' height={50} width={50}/>
                                <a href="tel:0975794930">097 579 4930</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src='/service/persone2.jpg' alt='' width={1900} height={600} className={s.image_person}/>
            </section>

            <section className={s.section_bg_img}>
                <div className="main-container">
                    <div className={s.gif_wrapper}></div>
                    <div className={s.section_header}>
                        <h2>
                            <small>ВСЯ МИЙКА АВТОМОБІЛЯ У ВАШОМУ ТЕЛЕФОНІ</small>
                            <strong>Комфортно та безпечно - управління автомийкою Samwash</strong>
                        </h2>
                    </div>
                    <div className={s.play_icon_wrapper}>
                        <video src={'/video/animation.mp4'} poster={'/video/mainVideo.mp4'} title='' preload="yes"
                               className={s.hover_video} autoPlay='no' playsInline muted loop/>

                    </div>
                    <div className={s.text_wrapper}>
                        <div className={s.text_block}>
                            <h2>Менеджер автомийки</h2>
                            <p>Керувати автомийкою та реагувати на різні види аварій ще ніколи не було так просто. За
                                допомогою телефону або комп'ютера з будь-якого місця і в зручний для вас час ви
                                отримаєте необхідну інформацію про вашу автомийку. Ви дізнаєтеся, скільки заробила ваша
                                мийка, чи справно працюють окремі технічні елементи, яка витрата хімії. Зручно і швидко,
                                коли вам це потрібно.</p>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Дані про товарообіг автомийки або окремих станцій.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Контроль робочого часу та кількості використання індивідуальних програм.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Діагностика технічного стану.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Управління карткою лояльності.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Небажані ситуації на автомийці.
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Витрата хімікатів і рівні.
                                </li>
                            </ul>
                            <ButtonRedArrowRight link={'/carwash-manager'} text={'program'} clas={'programBut'}/>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="main-container">
                    <div className={s.image_person2}>
                        <Image src='/service/persone.png' alt='' width={750} height={500}/>
                    </div>
                    <div className={s.text_sold}>
                        <div className="section-header">
                            <h2>
                                <small>ЗАПЧАСТИНИ ТА ХІМІЯ</small>
                                <strong>Повна післяпродажна підтримка</strong>
                            </h2>
                            <p>
                                У SAMWASH ми завжди дбаємо про наших клієнтів. Наш ефективний відділ продажів завжди у
                                вашому
                                розпорядженні. Ми гарантуємо наявність найважливіших запчастин, завдяки чому час
                                очікування
                                доопрацювання або обслуговування безконтактної мийки зводиться до мінімуму. <br/>
                                Бажаєте замовити хімікати чи запчастини? Зв'яжіться з нами.
                            </p>
                        </div>
                        <div className={s.between}>
                            <div onClick={openForm} className={s.div_but}>
                                <ButtonRedWithoutLink text={'contactBut'}/>
                                {/*clas={'addTrans'}*/}
                            </div>
                            <div className={s.phoneDiv}>
                                <Image src='/contact/phoneContact.png' alt='' height={50} width={50}/>
                                <a href="tel:0975794930">097 579 4930</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {form ?
                <div ref={ref}><FormUserDate textH2='ЯК МИ МОЖЕМО ВАМ ДОПОМОГТИ?' threeInput='НОМЕР ТЕЛЕФОНУ'/></div>
                : ''}

            <section className={s.background_section}>
                <div className="main-container">
                    <div className={s.two_div}>
                        <div className={s.image_div}>
                            <Image src='/chemistry/laptop.png' alt='' width={1000} height={700}/>
                        </div>
                    </div>
                    <div className={s.two_div}>
                        <div className={s.text_block3}>
                            <div className="section-header">
                                <h2>
                                    <small style={{color: 'white'}}>ПІДРЯДНА ПАНЕЛЬ</small>
                                    <strong style={{color: 'white'}}>Замовляйте онлайн</strong>
                                </h2>
                                <p style={{color: 'white', lineHeight: '1.5'}}>
                                    Потрібні запчастини для автомийки? Ви можете замовити їх у нас онлайн. Зручність та
                                    економія часу гарантовані. Щоб спростити покупки, ми впровадили для наших клієнтів
                                    інтуїтивно зрозумілу панель B2B. Завдяки цьому ви можете надзвичайно швидко та
                                    просто замовити запчастини для автомийки. Усі продукти доступні онлайн. Просто
                                    увійдіть, додайте певні товари зі списку доступних у свій кошик і все.
                                </p>
                                <p style={{color: 'white', lineHeight: '1.5'}}>
                                    Якщо у вас ще немає облікового запису, зв’яжіться з відділом продажів: <br/><br/>
                                    <a style={{color: 'red'}} href="tel:0975794930">097 579 4930</a> <br/>
                                    <a style={{color: 'red'}} href="mailto:info@samwash.ua"><span>samwash.ua</span></a>
                                </p>
                            </div>
                            <div className={s.div_but+' '+s.div_but2}>
                                <ButtonRedArrowRight text={'B2B'} link={'/'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <div className={s.chemistry_div}>
                        <div className={s.text_div}>
                            <h2>Професійні миючі засоби</h2>
                            <p>Повний асортимент хімікатів для безконтактних і портальних мийок автомобілів є
                                ідеальним доповненням до комплексної пропозиції SAMWASH.</p>
                            <p>
                                Серія висококласних хімікатів, створених спеціально для потреб автомийок SAMWASH,
                                забезпечить відмінну якість мийки на Вашій автомийці. Якісна підготовка дозволить Вам
                                підтримувати високий рівень послуг, а в результаті Ваші клієнти будуть більше задоволені
                                користуванням закладом. Засоби для чищення, доступні в BKF, не пошкодять кузов і
                                ретельно очистять його. Адже хороша автомийка – це та, яка дозволить вам легко та якісно
                                помити автомобіль.
                            </p>
                            <div>
                                <ButtonRedArrowRight text='chemicals' link='/chemistry' />
                            </div>
                        </div>
                        <div className={s.imageDiv}>
                            <div className={s.image_box_wrapper}>
                                <Image src='/service/bak.png' alt='' width={500} height={500}/>
                            </div>
                            <div className={s.image_box_wrapper}>
                                <Image src='/service/bak.png' alt='' width={500} height={500}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Service;