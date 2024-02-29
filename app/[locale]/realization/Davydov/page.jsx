'use client'

import s from './davydov.module.css';
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
import Image from "next/image";
import {useState} from "react";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import FormWash from "@/app/component/form-wash/FormWash";

function Davydov() {

    const t = useTranslations("project");

    const [active, setActive] = useState({
        first: true, second: false, three: false, four: false, five: false, six: false
    })
    const [openForm, setOpenForm] = useState(false)

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    const show = () => {
        setOpenForm(true)
        setTimeout(() => {
            const email = document.getElementById('form-wash')
            email.scrollIntoView({block: "center", behavior: 'smooth'});
        }, 500)
    }

    const setList = (position) => {
        setActive({
            first: position === 1,
            second: position === 2,
            three: position === 3,
            four: position === 4,
            five: position === 5,
            six: position === 6
        });
    }


    return (
        <div>

            <section className={s.sectionBread}>
                <div className='main-container'>
                    <ul className={`bread-crumbs-project`}>
                        <li style={{marginLeft: '0'}}>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            <Link href='/realization'>{t("project1")}</Link>
                        </li>
                        <li><span>{t("project2")}</span></li>
                    </ul>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className='section-header'>
                        <h1>
                            <small></small>
                            <strong>Безконтактна автомийка {t("project2")}</strong>
                        </h1>
                    </div>
                    <div className={s.box_wrapper}>
                        <div className={s.four_panels_box}>
                            <div className={s.panel_box}>
                                <Image src='/project/davydov/1.svg' alt='' width={200} height={200}/>
                                <span>
                                    <small>ТИП АВТОМИЙКИ</small>
                                    <strong>КОНТЕЙНЕР</strong>
                                </span>
                            </div>
                            <div className={s.panel_box}>
                                <Image src='/project/davydov/2.svg' alt='' width={200} height={200}/>
                                <span>
                                    <small>КІЛЬКІСТЬ ПОЗИЦІЙ</small>
                                    <strong>4</strong>
                                </span>
                            </div>
                            <div className={s.panel_box}>
                                <Image src='/project/davydov/3.svg' alt='' width={200} height={200}/>
                                <span>
                                    <small>БУДІВНИЦТВО</small>
                                    <strong>SMART</strong>
                                </span>
                            </div>
                            <div className={s.panel_box}>
                                <Image src='/project/davydov/4.svg' alt='' width={200} height={200}/>
                                <span>
                                    <small>ЗОВНІШНЯ ПОЗИЦІЯ</small>
                                    <strong>ТАК</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.gray_background}>
                <div className="main-container">
                    <div className='section-header'>
                        <h2>
                            <small>КОНФІГУРАЦІЯ АВТОМИЙКИ</small>
                            <strong>Компоненти, встановлені в цій реалізації</strong>
                        </h2>
                    </div>
                    <div className={s.one_column_list_with_tabs}>
                        <div className={`${s.tabs_list_wrapper} ${active.first ? s.ui_active : undefined}`}
                             onClick={() => setList(1)}>
                            <span className={`${s.tabs_number} ${active.first ? s.flex_active : undefined}`}>1</span>
                            <span className={`${s.tabs_description} ${active.first ? s.active_desc : undefined}`}>
                                ПРОФЕСІЙНИЙ ДИЗАЙН</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.first ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/project/davydov/1D.jpg' alt='' fill />
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>Професійний дизайн</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Конструкція з оцинкованої сталі відповідає стандарту EN ISO 1461.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Плоский дах з трапецієвидного листового металу.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Мансарда, висота 90 см, пофарбована порошковою фарбою в обраний колір RAL, 3D
                                        логотип, тиснення, підсвічування написів.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Світлодіодне підсвічування по всій довжині мансарди.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        6 світлових точок для кожної мийки.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Корпус крайніх, передніх і задніх стовпів.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Станційні перегородки - рекламні банери ПВХ з інструкцією по експлуатації.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.second ? s.ui_active : undefined}`}
                             onClick={() => setList(2)}>
                            <span className={`${s.tabs_number} ${active.second ? s.flex_active : undefined}`}>2</span>
                            <span className={`${s.tabs_description} ${active.second ? s.active_desc : undefined}`}>
                                2-Х СТАНЦІЙНИЙ ПИЛОСОС ПРЕМІУМ-КЛАСУ З КОМПРЕСОРОМ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.second ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/project/davydov/2D.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>2-х станційний пилосос преміум-класу з компресором</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Корпус пилососа з нержавіючої сталі.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Стріли для шлангів з нержавіючої сталі.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Дві промислові турбіни потужністю 3 кВт, 3-фазне живлення, 400В.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Два сепаратора ємністю 60 л з фільтром.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Електронні монетоприймачі.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        4-секційні світлодіодні дисплеї BKF CAN-IO з можливістю відображення залишку
                                        імпульсів, кількості або часу.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Скарбнички з нержавіючої сталі.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Безмасляний компресор для накачування коліс.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.three ? s.ui_active : undefined}`}
                             onClick={() => setList(3)}>
                            <span className={`${s.tabs_number} ${active.three ? s.flex_active : undefined}`}>3</span>
                            <span className={`${s.tabs_description} ${active.three ? s.active_desc : undefined}`}>
                                ПРОГРАМА АКТИВНОЇ ПІНИ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.three ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/project/davydov/3D.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>Програма активної піни</h3>
                                </div>
                                <p>Пом'якшує стійкі забруднення, полегшує основне прання, утворює ефективну густу
                                    піну.</p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Система дозування миючого засобу з високим піноутворенням.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Пінопласт з контейнером і додатковою стрілою.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.four ? s.ui_active : undefined}`}
                             onClick={() => setList(4)}>
                            <span className={`${s.tabs_number} ${active.four ? s.flex_active : undefined}`}>4</span>
                            <span className={`${s.tabs_description} ${active.four ? s.active_desc : undefined}`}>
                                ПРОГРАМА МИТТЯ ЩІТОК</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.four ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/project/davydov/4D2.webp' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>Програма миття щіток</h3>
                                </div>
                                <p>Миття щіткою з активним шампунем як додаткова програма прання. Видаляє особливо важкі
                                    забруднення і не пошкоджує фарбу.</p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Система дозування миючого засобу.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Щітка для миття, контейнер для щіток і додаткова штанга.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.five ? s.ui_active : undefined}`}
                             onClick={() => setList(5)}>
                            <span className={`${s.tabs_number} ${active.five ? s.flex_active : undefined}`}>5</span>
                            <span className={`${s.tabs_description} ${active.five ? s.active_desc : undefined}`}>
                                ПРОФЕСІЙНА ЗМІННА МАШИНА</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.five ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/project/davydov/5D.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>
                                        Професійна змінна машина</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Корпус чейнджера з нержавіючої сталі.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        4-рядковий РК-дисплей.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Два монетника (хопера).
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Зчитувач банкнот XBA.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        П'єзоелектричні кнопки з нержавіючої сталі.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Можливість поповнення автомийок від розмінного автомата (платіжного терміналу).
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Можливість встановлення зчитувача безконтактних карт.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${s.tabs_list_wrapper} ${active.six ? s.ui_active : undefined}`}
                             onClick={() => setList(6)}>
                            <span className={`${s.tabs_number} ${active.six ? s.flex_active : undefined}`}>6</span>
                            <span className={`${s.tabs_description} ${active.six ? s.active_desc : undefined}`}>
                                ТЕХНІКА ПРАННЯ</span>
                        </div>
                        <div className={s.tabs_content_wrapper} style={active.six ? undefined : {display: 'none'}}>
                            <div className={s.half_column}>
                                <div className={s.image_wrapper}>
                                    <Image src='/project/davydov/6D.jpg' alt='' fill/>
                                </div>
                            </div>
                            <div className={s.half_column}>
                                <div className='section-header'>
                                    <h3>Техніка прання</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Каркас автомийки виготовлений з нержавіючої сталі.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Система високого тиску з насосами CAT BKF 340D і двошвидкісними двигунами
                                        Siemens.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Електронні насоси для дозування рідких хімікатів.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Система дозування порошку і резервуар для води з порошком - виготовлені з
                                        нержавіючої сталі.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Система зворотного осмосу продуктивністю 300 / 600 л/год.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Осмотичний резервуар для води 750 / 2000 л.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Двоколонна система пом'якшення води.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Комбінований котел.
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        Шафа керування з промисловим комп’ютером B&R та фірмовим програмним
                                        забезпеченням Samwash.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_margin_bottom_small}>
                <div className="main-container">
                    <div className='section-header'>
                        <h2>
                            <small></small>
                            <strong></strong>
                        </h2>
                    </div>
                    <div className={s.gallery_reel_wrapper}>
                        <div className={`${s.gallery_reel_item} ${s.top_360_view}`}>
                            <a data-fancybox="gallery" href={'/project/davydov/1gallery.jpg'}>
                                <Image src='/project/davydov/1gallery.jpg' alt='' width={1900} height={500} />
                            </a>
                        </div>
                        <div className={`${s.gallery_reel_item} `}>
                            <a data-fancybox="gallery" href={'/project/davydov/2gallery.jpg'}>
                                <Image src='/project/davydov/2gallery.jpg' alt='' width={500} height={400} />
                            </a>
                        </div>
                        <div className={`${s.gallery_reel_item} `}>
                            <a data-fancybox="gallery" href={'/project/davydov/3gallery.jpg'}>
                                <Image src='/project/davydov/3gallery.jpg' alt='' width={500} height={400} />
                            </a>
                        </div>
                        <div className={`${s.gallery_reel_item} `}>
                            <a data-fancybox="gallery" href={'/project/davydov/4gallery.jpg'}>
                                <Image src='/project/davydov/4gallery.jpg' alt='' width={500} height={400} />
                            </a>
                        </div>
                        <div className={`${s.gallery_reel_item} `}>
                            <a data-fancybox="gallery" href={'/project/davydov/5gallery.jpg'}>
                                <Image src='/project/davydov/5gallery.jpg' alt='' width={500} height={400} />
                            </a>
                        </div>
                        <div className={`${s.gallery_reel_item} `}>
                            <a data-fancybox="gallery" href={'/project/davydov/6gallery.jpg'}>
                                <Image src='/project/davydov/6gallery.jpg' alt='' width={500} height={400} />
                            </a>
                        </div>
                        <div className={`${s.gallery_reel_item} `}>
                            <a data-fancybox="gallery" href={'/project/davydov/7gallery.jpg'}>
                                <Image src='/project/davydov/7gallery.jpg' alt='' width={500} height={400} />
                            </a>
                        </div>
                        <div className={`${s.gallery_reel_item} `}>
                            <a data-fancybox="gallery" href={'/project/davydov/8gallery.jpg'}>
                                <Image src='/project/davydov/8gallery.jpg' alt='' width={500} height={400} />
                            </a>
                        </div>
                        <div className={`${s.gallery_reel_item} `}>
                            <a data-fancybox="gallery" href={'/project/davydov/9gallery.jpg'}>
                                <Image src='/project/davydov/9gallery.jpg' alt='' width={500} height={400} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.dark_gray_background}>
                <div className={s.box_wrapper}>
                    <div className={s.text_block}>
                        <div className='section-header'>
                            <h2>
                                <small style={{color: 'white'}}>ІНВЕСТИЦІЙНИЙ КАЛЬКУЛЯТОР</small>
                                <strong style={{color: 'white'}}>Перевірте ціну цієї конфігурації</strong>
                            </h2>
                        </div>
                        <div className={s.divClick} onClick={show}>
                            <ButtonRedWithoutLink text={'beloyalBut'} clas={'hover-white'} />
                        </div>
                    </div>
                    <div className={s.image_block}>
                        <Image src='/project/davydov/konstuktor.png' alt='' width={500} height={500} />
                    </div>
                </div>
            </section>

            {openForm === true ? <FormWash textH2={'form-wash'} /> : ''}

        </div>
    );
}

export default Davydov;