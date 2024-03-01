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
    const [active, setActive] = useState(1)

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
        // setActive({
        //     first: position === 1,
        //     second: position === 2,
        //     three: position === 3,
        //     four: position === 4,
        //     five: position === 5,
        //     six: position === 6
        // });
        setActive(position)
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
                                    <strong>{listWash?.car_washes_design_relations[0]?.car_washes_design?.
                                        car_washes_design_content[0]?.title}</strong>
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
                                {
                                    listWash.car_washes_service_relations.map((item, index) => {
                                         return (
                                             <div>
                                                 <div
                                                     className={`${s.tabs_list_wrapper} ${active.first ? s.ui_active : undefined}`}
                                                     onClick={() => setList(index + 1)}>
                                                     <span className={`${s.tabs_number} 
                                                     ${active === index + 1 ? s.flex_active : undefined}`}>{index + 1}</span>
                                                     <span className={`${s.tabs_description} 
                                                     ${active === index + 1 ? s.active_desc : undefined}`}>
                                                        {item.car_washes_services.car_washes_services_content[0].title}
                                                     </span>
                                                 </div>
                                                 <div className={s.tabs_content_wrapper}
                                                      style={active === index + 1 ? undefined : {display: 'none'}}>
                                                     <div className={s.half_column}>
                                                         <div className={s.image_wrapper}>
                                                             <Image src='/project/davydov/1D.jpg' alt='' fill/>
                                                         </div>
                                                     </div>
                                                     <div className={s.half_column}>
                                                         <div className='section-header'>
                                                             <h3>{item.car_washes_services.car_washes_services_content[0].title}</h3>
                                                         </div>
                                                         <ul>
                                                             <li>
                                                                 <Image src='/program/arrow.png' alt='arrow' width={10}
                                                                        height={10}/>
                                                                 Конструкція з оцинкованої сталі відповідає стандарту EN
                                                                 ISO 1461.
                                                             </li>
                                                             <li>
                                                                 <Image src='/program/arrow.png' alt='arrow' width={10}
                                                                        height={10}/>
                                                                 Плоский дах з трапецієвидного листового металу.
                                                             </li>
                                                             <li>
                                                                 <Image src='/program/arrow.png' alt='arrow' width={10}
                                                                        height={10}/>
                                                                 Мансарда, висота 90 см, пофарбована порошковою фарбою в
                                                                 обраний колір
                                                                 RAL, 3D
                                                                 логотип, тиснення, підсвічування написів.
                                                             </li>
                                                             <li>
                                                                 <Image src='/program/arrow.png' alt='arrow' width={10}
                                                                        height={10}/>
                                                                 Світлодіодне підсвічування по всій довжині мансарди.
                                                             </li>
                                                             <li>
                                                                 <Image src='/program/arrow.png' alt='arrow' width={10}
                                                                        height={10}/>
                                                                 6 світлових точок для кожної мийки.
                                                             </li>
                                                             <li>
                                                                 <Image src='/program/arrow.png' alt='arrow' width={10}
                                                                        height={10}/>
                                                                 Корпус крайніх, передніх і задніх стовпів.
                                                             </li>
                                                             <li>
                                                                 <Image src='/program/arrow.png' alt='arrow' width={10}
                                                                        height={10}/>
                                                                 Станційні перегородки - рекламні банери ПВХ з
                                                                 інструкцією по
                                                                 експлуатації.
                                                             </li>
                                                         </ul>
                                                     </div>
                                                 </div>
                                             </div>
                                         )
                                    })
                                }
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