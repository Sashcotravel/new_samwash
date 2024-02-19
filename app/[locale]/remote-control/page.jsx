import s from './remoteControl.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import FixManu from "@/app/component/fixManu/FixManu";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";


function RemoteControl() {

    const t = useTranslations("remote-control");


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
                            {t("control1")}
                        </li>
                    </ul>
                    <h1>{t("control1")}</h1>
                </div>
            </section>

            <FixManu active={4}/>

            <section className={s.text_section}>
                <div className="main-container">
                    <div className={s.text_blog}>
                        <div className={s.section_header}>
                            <h2>
                                <small>{t("control1")}</small>
                                <strong>Інтернет на автомийці?</strong>
                            </h2>
                            <p>
                                Зараз все більше пристроїв передають інформацію в мережу. Ми можемо віддалено дізнатися,
                                що відбувається з нашим будинком, автомобілем, скрубером або пристроєм з ЧПК. <b>Чому
                                б не зробити це на автомийці?</b>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.blue_section}>
                <div className="main-container">
                    <div className={s.description_wrapper}>
                        <div className={s.text_block_wrapper}>
                            <h3>Що можна робити <b>на автомийці з інтернетом?</b></h3>
                            <p>Підключивши автомийку Samwash до Інтернету, ви можете робити з нею практично все, що
                                могли
                                робити на місці. Все завдяки системі дистанційного керування автомийкою - Carwash
                                Manager і віддаленому доступу до контролера автомийки (VNC). Подивіться, що ви можете
                                робити віддалено:</p>
                            <ul>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    перевірити технічний стан автомийки та периферійних пристроїв
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    дізнатися, скільки ви заробили
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    встановити акції
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    налаштувати облікові записи користувачів з різними рівнями доступу
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    підзарядка мийних станцій дистанційно
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    дистанційно поповнюйте карти постійного клієнта
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    з'ясуйте, чи є монети в розмінному автоматі, чи потрібно заправляти касети
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    встановити освітлення для окремих станцій
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    увімкнути/вимкнути станції
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    встановити дозування хімікату
                                </li>
                                <li>
                                    <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                    та багато інших!
                                </li>
                            </ul>
                            <ButtonRedArrowRight link={'/'} text={'manager'} clas={'programBut'}/>
                        </div>
                        <div className={s.image_wrapper}>
                            <Image src='/other/remote.jpg' alt='arrow' width={500} height={500}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_video}>

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
                            <ButtonRedArrowRight link={'/'} text={'program'} clas={'programBut'}/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default RemoteControl;