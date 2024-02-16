"use client"

import s from './programForWash.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import FixManu from "@/app/component/fixManu/FixManu";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";


function ProgramForWash() {

    const t = useTranslations("program-for-wash");


    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    return (
        <div>

            <section className='head-image'>
                <Image src='/managerCarwash/head-carwash-manager.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("program1")}
                        </li>
                    </ul>
                    <h1>{t("program1")}</h1>
                </div>
            </section>

            <FixManu active={1}/>

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
                        <a data-fancybox="gallery" className={s.hover_video}
                           href={'/video/animation.mp4'}>
                            <video src={'/video/animation.mp4'} poster={'/video/mainVideo.mp4'}
                                   title='' preload="yes" autoPlay='no' playsInline muted loop/>
                        </a>
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
                            <ButtonRedArrowRight link={'/'} text={'program'} clas={'programBut'}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.navy_background}>
                <div className='main-container'>
                    <div className={s.section_header}>
                        <h2>
                            <small style={{color: 'white'}}>МОБІЛЬНІ ПЛАТЕЖІ</small>
                            <strong style={{color: 'white'}}>Зручні та безпечні платіжні сервіси</strong>
                        </h2>
                    </div>
                    <div className={s.play_icon_wrapper+' '+s.fload}>
                        <a data-fancybox="gallery" className={s.hover_video}
                           href={'/video/animation.mp4'}>
                            <video src={'/video/animation.mp4'} poster={'/video/mainVideo.mp4'}
                                   title='' preload="yes" autoPlay='no' playsInline muted loop/>
                        </a>
                    </div>
                    <div className={s.text_wrapper}>
                        <div className={s.text_block}>
                            <h2 style={{color: 'white'}}>BE LOYAL</h2>
                            <p style={{color: 'white'}}>BE LOYAL – це розрахункова платформа, створена для власників
                                автомийок Samwash, доступна
                                через телефонний додаток або на веб-сайті. Додаток дозволяє здійснювати мобільні платежі
                                на автомийках BKF за допомогою смартфона.</p>
                            <ul>
                                <li style={{color: 'white'}}>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Сучасна зручна форма оплати.
                                </li>
                                <li style={{color: 'white'}}>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Автоматичне виставлення рахунків для клієнтів автомийки.
                                </li>
                                <li style={{color: 'white'}}>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Просте обслуговування для клієнтів автопарку.
                                </li>
                                <li style={{color: 'white'}}>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    Система лояльності.
                                </li>
                            </ul>
                            <ButtonRedArrowRight link={'/'} text={'program2'} clas={'programBut'}/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ProgramForWash;