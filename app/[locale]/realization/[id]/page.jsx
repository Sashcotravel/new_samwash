'use client'

import s from './davydov.module.css';
import axios from "axios";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import FormWash from "@/app/component/form-wash/FormWash";
import {Fancybox} from "@fancyapps/ui";

const getData = ((locale, id, listWash, setListWash) => {
    if (listWash?.length === 0) {
        axios
            .get(`https://cb.samwash.ua/api/v1/car-washes/${id}/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}`)
            .then(res => {
                const data = res.data.data[0]
                console.log(data)
                setListWash(data)
            })
    } else {
        return listWash
    }
})


function OneWash() {

    const t = useTranslations("project");
    const {onePost, id, postPage} = useParams();
    const locale = useLocale();

    const [listWash, setListWash] = useState([])
    const [openForm, setOpenForm] = useState(false)
    const [active, setActive] = useState({
        first: true, second: false, three: false, four: false, five: false, six: false
    })

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });


    useEffect(() => {
        getData(locale, id, listWash, setListWash)
    }, []);

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

            {listWash.length === 0 ? <div className={s.loader}>Loading...</div> :
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
                                <li><span>{listWash?.car_washes_content[0]?.city}</span></li>
                            </ul>
                        </div>
                    </section>

                    <section className={s.section}>
                        <div className="main-container">
                            <div className='section-header'>
                                <h1>
                                    <small></small>
                                    <strong>Безконтактна автомийка {listWash?.length !== 0
                                        && listWash?.car_washes_content[0]?.city}</strong>
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
                                    <strong>{listWash?.post}</strong>
                                </span>
                                    </div>
                                    <div className={s.panel_box}>
                                        <Image src='/project/davydov/3.svg' alt='' width={200} height={200}/>
                                        <span>
                                    <small>БУДІВНИЦТВО</small>
                                    <strong>{listWash?.car_washes_design_relations[0]?.car_washes_design?.car_washes_design_content[0]?.title}</strong>
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
                                                     <span className={`${s.tabs_number} 
                                                     ${active.first ? s.flex_active : undefined}`}>{1}</span>
                                    <span className={`${s.tabs_description} 
                                                     ${active.first ? s.active_desc : undefined}`}>
                                        СЕРВІСИ НА АВТОМИЙЦІ
                                    </span>
                                </div>
                                <div className={s.tabs_content_wrapper}
                                     style={active.first ? undefined : {display: 'none'}}>
                                    <div className={s.half_column}>
                                        <div className={s.image_wrapper}>
                                            <Image src={'https://cb.samwash.ua/storage/'
                                                + listWash.car_washes_images[0].path} alt='' fill/>
                                        </div>
                                    </div>
                                    <div className={s.half_column}>
                                        <div className='section-header'>
                                            <h3>СЕРВІСИ НА АВТОМИЙЦІ</h3>
                                        </div>
                                        <ul>
                                            {
                                                listWash.car_washes_service_relations.map(item => {
                                                    return (
                                                        <li key={item.id}>
                                                            <Image src='/program/arrow.png' alt='arrow'
                                                                   width={10}
                                                                   height={10}/>
                                                            {item
                                                                .car_washes_services
                                                                .car_washes_services_content[0].title
                                                            }
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className={`${s.tabs_list_wrapper} ${active.second ? s.ui_active : undefined}`}
                                     onClick={() => setList(2)}>
                                                     <span className={`${s.tabs_number} 
                                                     ${active.second ? s.flex_active : undefined}`}>{2}</span>
                                    <span className={`${s.tabs_description} 
                                                     ${active.second ? s.active_desc : undefined}`}>
                                        ДОПОМІЖНІ ПОСЛУГИ
                                    </span>
                                </div>
                                <div className={s.tabs_content_wrapper}
                                     style={active.second ? undefined : {display: 'none'}}>
                                    <div className={s.half_column}>
                                        <div className={s.image_wrapper}>
                                            <Image src={'https://cb.samwash.ua/storage/'
                                                + listWash.car_washes_images[1].path} alt='' fill/>
                                        </div>
                                    </div>
                                    <div className={s.half_column}>
                                        <div className='section-header'>
                                            <h3>ДОПОМІЖНІ ПОСЛУГИ</h3>
                                        </div>
                                        <ul>
                                            {
                                                listWash.car_washes_additional_services_relations
                                                    .map(item => {
                                                        return (
                                                            <li key={item.id}>
                                                                <Image src='/program/arrow.png'
                                                                       alt='arrow' width={10}
                                                                       height={10}/>
                                                                {item
                                                                    .car_washes_additional_services
                                                                    .car_washes_additional_services_content[0]
                                                                    .title
                                                                }
                                                            </li>
                                                        )
                                                    })
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className={`${s.tabs_list_wrapper} ${active.three ? s.ui_active : undefined}`}
                                     onClick={() => setList(3)}>
                                                     <span className={`${s.tabs_number} 
                                                     ${active.three ? s.flex_active : undefined}`}>{3}</span>
                                    <span className={`${s.tabs_description} 
                                                     ${active.three ? s.active_desc : undefined}`}>
                                        СПОСОБИ ОПЛАТИ
                                    </span>
                                </div>
                                <div className={s.tabs_content_wrapper}
                                     style={active.three ? undefined : {display: 'none'}}>
                                    <div className={s.half_column}>
                                        <div className={s.image_wrapper}>
                                            <Image src={'https://cb.samwash.ua/storage/'
                                                + listWash.car_washes_images[2].path} alt='' fill/>
                                        </div>
                                    </div>
                                    <div className={s.half_column}>
                                        <div className='section-header'>
                                            <h3>СПОСОБИ ОПЛАТИ</h3>
                                        </div>
                                        <ul>
                                            {
                                                listWash.car_washes_payment_relations
                                                    .map(item => {
                                                        return (
                                                            <li key={item.id}>
                                                                <Image src='/program/arrow.png'
                                                                       alt='arrow' width={10}
                                                                       height={10}/>
                                                                {item
                                                                    .car_washes_payment
                                                                    .car_washes_payment_content[0]
                                                                    .title
                                                                }
                                                            </li>
                                                        )
                                                    })
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className={`${s.tabs_list_wrapper} ${active.four ? s.ui_active : undefined}`}
                                     onClick={() => setList(4)}>
                                                     <span className={`${s.tabs_number} 
                                                     ${active.four ? s.flex_active : undefined}`}>{4}</span>
                                    <span className={`${s.tabs_description} 
                                                     ${active.four ? s.active_desc : undefined}`}>
                                        ДИЗАЙН АВТОМИЙКИ
                                    </span>
                                </div>
                                <div className={s.tabs_content_wrapper}
                                     style={active.four ? undefined : {display: 'none'}}>
                                    <div className={s.half_column}>
                                        <div className={s.image_wrapper}>
                                            <Image src={'https://cb.samwash.ua/storage/'
                                                + listWash?.car_washes_images[3]?.path} alt='' fill/>
                                        </div>
                                    </div>
                                    <div className={s.half_column}>
                                        <div className='section-header'>
                                            <h3>ДИЗАЙН АВТОМИЙКИ</h3>
                                        </div>
                                        <ul>
                                            {
                                                listWash.car_washes_design_relations.map(item => {
                                                    return (
                                                        <li>
                                                            <Image src='/program/arrow.png' alt='arrow'
                                                                   width={10}
                                                                   height={10}/>
                                                            {
                                                                item.car_washes_design
                                                                    .car_washes_design_content[0].title
                                                            }
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className={`${s.tabs_list_wrapper} ${active.five ? s.ui_active : undefined}`}
                                     onClick={() => setList(5)}>
                                                     <span className={`${s.tabs_number} 
                                                     ${active.five ? s.flex_active : undefined}`}>{5}</span>
                                    <span className={`${s.tabs_description} 
                                                     ${active.five ? s.active_desc : undefined}`}>
                                        ДАТА ВІДКРИТТЯ
                                    </span>
                                </div>
                                <div className={s.tabs_content_wrapper}
                                     style={active.five ? undefined : {display: 'none'}}>
                                    <div className={s.half_column}>
                                        <div className={s.image_wrapper}>
                                            <Image src={'https://cb.samwash.ua/storage/'
                                                + listWash?.car_washes_images[4]?.path} alt='' fill/>
                                        </div>
                                    </div>
                                    <div className={s.half_column}>
                                        <div className='section-header'>
                                            <h3>ДАТА ВІДКРИТТЯ</h3>
                                        </div>
                                        <ul>
                                            <li>
                                                <Image src='/program/arrow.png' alt='arrow'
                                                       width={10} height={10}/>
                                                {listWash.date}
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
                                {
                                    listWash?.car_washes_images?.map((item, index) => {
                                        return (
                                            <div
                                                className={`${s.gallery_reel_item} ${index === 0 ? s.top_360_view : ''}`}>
                                                <a data-fancybox="gallery"
                                                   href={'https://cb.samwash.ua/storage/' + item.path}>
                                                    <Image src={'https://cb.samwash.ua/storage/' + item.path} alt=''
                                                           width={500} height={400}/>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
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
                                    <ButtonRedWithoutLink text={'beloyalBut'} clas={'hover-white'}/>
                                </div>
                            </div>
                            <div className={s.image_block}>
                                <Image src='/project/davydov/konstuktor.png' alt='' width={500} height={500}/>
                            </div>
                        </div>
                    </section>
                </div>}

            {openForm === true ? <FormWash textH2={'form-wash'}/> : ''}

        </div>
    );
}

export default OneWash;