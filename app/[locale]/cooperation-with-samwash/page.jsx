import s from './cooperation.module.css';
import Image from "next/image";
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
import FormUserDate from "@/app/component/formUserData/FormUserDate";
import WrapperClick from "@/app/component/wrapper_click/WrapperClick";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";

function CooperationWithSamwash() {

    const t = useTranslations("cooperation-with-samwash");


    return (
        <div>

            <section className='head-image'>
                <Image src='/cooperation/cooperation.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("cooperation1")}
                        </li>
                    </ul>
                    <h1>{t("cooperation1")}</h1>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>КОМЕРЦІЙНИЙ ВІДДІЛ SAMWASH</small>
                            <strong>Комплексна підтримка</strong>
                        </h2>
                        <p>
                            Ми поєднуємо знання у сфері стратегії, технологій та управлінського консалтингу. Ми надамо
                            Вам знання, отримані завдяки багаторічному досвіду. Ви отримаєте підтримку протягом усього
                            інвестиційного процесу. У вас все вийде, це наша спільна мета.
                        </p>
                    </div>
                    <ul className={s.ul_list}>
                        <li>
                            <div className={s.icon_div}>
                                <Image src='/cooperation/image1.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Підтримка на кожному етапі співпраці</h3>
                            <p>
                                Ваш спеціальний менеджер з роботи з клієнтами підтримуватиме вас на кожному етапі
                                інвестування. Ми крок за кроком проведемо вас через увесь процес, що заощадить ваш
                                час і гроші.
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div}>
                                <Image src='/cooperation/image2.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Інструменти для віддаленого управління бізнесом</h3>
                            <p>
                                Ви зможете керувати автомийкою SAMWASH прямо зі свого комп’ютера чи мобільного пристрою
                                з будь-якої точки світу. Ви заощадите час і гроші, а також матимете постійний нагляд за
                                фінансами свого бізнесу.
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div}>
                                <Image src='/cooperation/image3.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Додатки для полегшення залучення клієнтів</h3>
                            <p>
                                Ми пропонуємо рішення, які допоможуть вам виділитися серед конкурентів. Ви збільшите
                                свій оборот завдяки сучасним платіжним системам і отримаєте постійних клієнтів за
                                програмою лояльності BE LOYAL.
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div}>
                                <Image src='/cooperation/image4.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Післяпродажне обслуговування</h3>
                            <p>
                                Ваше задоволення дуже важливе для нас. Ми пропонуємо ефективне гарантійне та
                                післягарантійне обслуговування. Ми забезпечуємо постійні поставки перевірених хімікатів
                                для автомийки та маркетингову підтримку.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={s.image_div}>
                    <Image src='/cooperation/persone.jpg' alt='' width={1000} height={800}/>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ВИБРАТИ SAMWASH</small>
                            <strong>Переваги співпраці</strong>
                        </h2>
                    </div>
                    <ul className={s.ul_list2}>
                        <li>
                            <div className={s.icon_div3}>
                                <Image src='/cooperation/icon1.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Підтримка інвесторів</h3>
                            <p>
                                Ми продали понад 1700 автомийок, на яких інвестори розвивають свій бізнес. Ми
                                підтримуємо їх протягом усього процесу інвестування та направляємо їх крок за кроком.
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div3}>
                                <Image src='/cooperation/icon2.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Переваги інновацій</h3>
                            <p>
                                Зробіть ставку на більший прибуток, використовуючи новітні рішення: мобільні платежі,
                                дистанційне керування автомийкою, передові системи контролю пристроїв.
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div3}>
                                <Image src='/cooperation/icon3.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Технологічна гнучкість</h3>
                            <p>
                                Мийка автомобіля на замовлення, у нас це можливо. Налаштуйте автомийку відповідно до
                                ваших потреб, розташування та вподобань клієнтів.
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div3}>
                                <Image src='/cooperation/icon4.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Можливості розширення</h3>
                            <p>
                                Чи захочете ви в майбутньому розширити свою автомийку новою станцією, додати нові
                                способи оплати та запропонувати додаткові програми мийки? Без проблем!
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div3}>
                                <Image src='/cooperation/icon5.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Величезна кількість додатків</h3>
                            <p>
                                Ми дбаємо про те, щоб бізнес наших клієнтів завжди відповідав очікуванням ринку. Тому ми
                                маємо постійно зростаючу базу присадок, завдяки якій ви можете підвищити рентабельність
                                вашої автомийки в будь-який час.
                            </p>
                        </li>
                        <li>
                            <div className={s.icon_div3}>
                                <Image src='/cooperation/icon6.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Постійний розвиток</h3>
                            <p>
                                Тільки в Польщі у нас працює понад 140 людей, завдяки яким ми постійно вдосконалюємо
                                нашу пропозицію, впроваджуючи нові версії програмного забезпечення та нові функціональні
                                можливості автомийки. Наша продукція представлена на 20 ринках Європи та Азії.
                            </p>
                        </li>
                    </ul>
                    <div className={s.div_but}>
                        <ButtonRedArrowRight text='building-car' link='/first-steps'/>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ГАРАНТІЯ ЯКОСТІ</small>
                            <strong>Ви отримуєте вигоду, купуючи наші рішення</strong>
                        </h2>
                    </div>
                    <div>
                        <ul className={s.ul_list3}>
                            <li>
                                <div className={s.icon_div2}>
                                    <Image src='/cooperation/green.svg' alt='' width={70} height={70}/>
                                </div>
                                <h3>Підтримка до і після інвестицій</h3>
                                <p>
                                    Наші спеціалісти підтримують вас на кожному етапі інвестування. Ми крок за кроком
                                    проведемо вас через увесь процес, що заощадить ваш час і гроші.
                                </p>
                            </li>
                            <li>
                                <div className={s.icon_div2}>
                                    <Image src='/cooperation/green.svg' alt='' width={70} height={70}/>
                                </div>
                                <h3>Система дистанційного керування автомийкою</h3>
                                <p>
                                    Керуйте автомийкою безпосередньо з комп’ютера або мобільного пристрою з будь-якої
                                    точки світу. Ви заощадите час і гроші, а також матимете постійний нагляд за
                                    фінансами свого бізнесу.
                                </p>
                            </li>
                            <li>
                                <div className={s.icon_div2}>
                                    <Image src='/cooperation/green.svg' alt='' width={70} height={70}/>
                                </div>
                                <h3>Персоналізація автомийки</h3>
                                <p>
                                    Ваш власний логотип? Різні кольори? Автомийки SAMWASH також можна візуально
                                    персоналізувати. Ми маємо велику базу готових рішень, а також відкриті до
                                    пропозицій наших клієнтів.
                                </p>
                            </li>
                            <li>
                                <div className={s.icon_div2}>
                                    <Image src='/cooperation/green.svg' alt='' width={70} height={70}/>
                                </div>
                                <h3>Привабливі знижки на хімію</h3>
                                <p>
                                    Замовляйте перевірену та рекомендовану SAMWASH хімію для миття автомобіля.
                                    Пропонуємо дуже вигідні умови співпраці.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={s.image_div2}>
                    <Image src='/cooperation/persone2.jpg' alt='' width={700} height={800}/>
                    <div className={s.icon1}>
                        <div className={s.icon1_1}>
                            <Image src='/cooperation/green-icon1.svg' alt='' width={700} height={800}/>
                        </div>
                    </div>
                    <div className={s.icon2}>
                        <div className={s.icon2_2}>
                            <Image src='/cooperation/green-icon2.svg' alt='' width={700} height={800}/>
                        </div>
                    </div>
                    <div className={s.icon3}>
                        <div className={s.icon3_3}>
                            <Image src='/cooperation/green-icon3.svg' alt='' width={700} height={800}/>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="main-container">
                    <div className={s.image_box}>
                        <Image src='/other/persone.jpg' alt='' width={800} height={600}/>
                    </div>
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small>У ВАС Є ЗАПИТАННЯ?</small>
                                <strong>Будь ласка, зв'яжіться з нами</strong>
                            </h2>
                        </div>
                        <div className={s.between}>
                            <WrapperClick>
                                <ButtonRedWithoutLink text={'contactBut'}/>
                            </WrapperClick>
                            <div className={s.phoneDiv}>
                                <Image src='/contact/phoneContact.png' alt='' height={50} width={50}/>
                                <a href="tel:0975794930">097 579 4930</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={s.form1} id='form1'>
                <FormUserDate textH2={'ЯК МИ МОЖЕМО ВАМ ДОПОМОГТИ?'} threeInput={'НОМЕР ТЕЛЕФОНУ'}/>
            </div>

        </div>
    );
}

export default CooperationWithSamwash;