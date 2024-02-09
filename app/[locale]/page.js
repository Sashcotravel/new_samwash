"use client"

import s from './main.module.css'
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
import Image from "next/image";
import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './page.css';
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";
import ButtonWhiteArrowRight from "@/app/buttons/whiteButton/buttonRedArrowRight";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";


export default function Home() {

    const t = useTranslations("main");

    const [stage, setStage] = useState({
        first: true, second: false, false: false, four: false
    })
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', typeAutowash: '', construction: '',
        colPosition: 0, outsidePosition: false, land: null, city: '', money: ''
    });
    const [imageUrl, setImageUrl] = useState('prevui')
    const [imageUrlModel, setImageUrlModel] = useState('')
    const [imageUrlNum, setImageUrlNum] = useState('')
    const [imageUrlOutside, setImageUrOutside] = useState('')
    const [mobile, setMobile] = useState(false)
    const [blog, setBlog] = useState([])
    const [itemsSlide, setItemsSlide] = useState(6)
    const [active, setActive] = useState(1)
    const [active2, setActive2] = useState(1)
    const [indexSlide, setIndexSlide] = useState(null)
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    const handleSlideChange = (swiper) => {
        setIndexSlide(swiper.realIndex)
    };

    const activeStyle = {
        borderLeft: '5px',
        borderLeftColor: 'red',
        borderLeftStyle: 'solid',
        background: '#f2f2f2',
        outline: 'none',
    }
    const activeStyle2 = {
        display: 'block'
    }
    const activeStyle3 = {
        display: 'flex'
    }

    useEffect(() => {
        setBlog([
            {
                title: 'Підбір деталей і аксесуарів',
                link: '/',
                data: '17 СЕРПНЯ 2023 Р',
                img: '/mainPage/blog/blog1.jpg',
                desc: 'Власники автомийок добре знають, що швидкий і легкий доступ до ключових запчастин для автомийки дуже важливий. чому Тому що здатність швидко виконувати роботу є важливим аспектом забезпечення безперервності...\n',
            },
            {
                title: 'Безпечні пензлики',
                link: '/',
                data: '3 СЕРПНЯ 2023 Р',
                img: '/mainPage/blog/blog2.jpg',
                desc: 'Власники автомийок добре знають, що швидкий і легкий доступ до ключових запчастин для автомийки дуже важливий. чому Тому що здатність швидко виконувати роботу є важливим аспектом забезпечення безперервності...\n',
            },
            {
                title: 'Чистка автомобіля на автомийці',
                link: '/',
                data: '1 СЕРПНЯ 2023 Р',
                img: '/mainPage/blog/blog3.png',
                desc: 'Власники автомийок добре знають, що швидкий і легкий доступ до ключових запчастин для автомийки дуже важливий. чому Тому що здатність швидко виконувати роботу є важливим аспектом забезпечення безперервності...\n',
            },
        ])

        if (window.innerWidth < 990) {
            setMobile(true)
        } else {
            setMobile(false)
        }

        if (window.innerWidth < 1200) {
            setItemsSlide(4)
        }
        if (window.innerWidth < 640) {
            setItemsSlide(1)
        }
    }, []);

    const check2 = () => {
        ref2.current.checked = !ref2.current.checked
    }
    const check3 = () => {
        ref3.current.checked = !ref3.current.checked
    }

    const select1 = (e) => {
        let value = e.target.value
        setImageUrl(value)
        setFormData(prev => {
            return { ...prev, typeAutowash: value }
        })
    }

    const select2 = (e) => {
        let value = e.target.value
        setImageUrlModel(value)
        if(value === 'без-конструкцій'){
            setImageUrlNum('')
            setImageUrOutside('')
            ref.current.checked = !ref.current.checked
            setFormData(prev => {
                return { ...prev, outsidePosition: false }
            })
            setFormData(prev => {
                return { ...prev, colPosition: 0 }
            })
            document.getElementById('col').value = '2'
        }
        setFormData(prev => {
            return { ...prev, construction: value }
        })
    }

    const select3 = (e) => {
        let value = e.target.value
        setImageUrlNum(value)
        if(Number(value) === 2){
            setImageUrOutside('')
        }
        setFormData(prev => {
            return { ...prev, colPosition: value }
        })
    }

    const check = () => {
        ref.current.checked = !ref.current.checked
        let value = ref.current.checked
        if(value === false){
            setImageUrOutside('')
        } else {
            setImageUrOutside(value.toString())
        }
        setFormData(prev => {
            return { ...prev, outsidePosition: value }
        })
    }

    const setStageNext0 = () => {
        setStage(prev => {
            return {...prev, second: false}
        })
        setStage(prev => {
            return {...prev, first: true}
        })
    }

    const setStageNext01 = () => {
        setStage(prev => {
            return {...prev, second: true}
        })
        setStage(prev => {
            return {...prev, third: false}
        })
    }

    const setStageNext = () => {

        const type = document.getElementById('type')
        const radioPrevi = document.getElementById('radioPrevi')
        const construction = document.getElementById('construction')
        const col = document.getElementById('col')

        if(formData.typeAutowash !== '' && formData.construction !== '' && formData.colPosition !== 0){
            type.style.border = '1px solid #ccc'
            construction.style.border = '1px solid #ccc'
            col.style.border = '1px solid #ccc'

            setStage(prev => { return { ...prev, second: true } })
            setStage(prev => { return { ...prev, first: false } })

            setTimeout(() => {
                radioPrevi.scrollIntoView({block: "center", behavior: 'smooth'});
            }, 500)
        }
        else if(formData.typeAutowash === '' && formData.construction === '' && formData.colPosition === 0){
            type.style.border = '2px solid red'
            construction.style.border = '2px solid red'
            col.style.border = '2px solid red'
            type.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.typeAutowash === '' && formData.construction === ''){
            type.style.border = '2px solid red'
            construction.style.border = '2px solid red'
            col.style.border = '1px solid #ccc'
            type.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.typeAutowash === '' && formData.colPosition === 0){
            type.style.border = '2px solid red'
            construction.style.border = '1px solid #ccc'
            col.style.border = '2px solid red'
            type.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.construction === '' && formData.colPosition === 0){
            type.style.border = '1px solid #ccc'
            construction.style.border = '2px solid red'
            col.style.border = '2px solid red'
            col.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.construction === ''){
            type.style.border = '1px solid #ccc'
            construction.style.border = '2px solid red'
            col.style.border = '1px solid #ccc'
            construction.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.colPosition === 0){
            type.style.border = '1px solid #ccc'
            construction.style.border = '1px solid #ccc'
            col.style.border = '2px solid red'
            col.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.typeAutowash === ''){
            type.style.border = '2px solid red'
            construction.style.border = '1px solid #ccc'
            col.style.border = '1px solid #ccc'
            type.scrollIntoView({block: "center", behavior: 'smooth'});
        }
    }

    const setStageNext2 = () => {

        const radio1 = document.getElementById('radio1')
        const radio2 = document.getElementById('radio2')
        const city = document.getElementById('city')
        const name = document.getElementById('name')

        if(formData.land !== null && formData.city !== ''){
            radio1.style.border = '1px solid #ccc'
            radio2.style.border = '1px solid #ccc'
            city.style.border = '1px solid #ccc'

            setStage(prev => { return { ...prev, second: false } })
            setStage(prev => { return { ...prev, third: true } })

            setTimeout(() => {
                name.scrollIntoView({block: "center", behavior: 'smooth'});
            }, 500)
        }
        else if(formData.land === null && formData.city === ''){
            radio1.style.border = '2px solid red'
            radio2.style.border = '2px solid red'
            city.style.border = '2px solid red'
            radio1.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.land === null){
            radio1.style.border = '2px solid red'
            radio2.style.border = '2px solid red'
            city.style.border = '1px solid #ccc'
            radio1.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.city === ''){
            radio1.style.border = '1px solid #ccc'
            radio2.style.border = '1px solid #ccc'
            city.style.border = '2px solid red'
            city.scrollIntoView({block: "center", behavior: 'smooth'});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = document.getElementById('email')
        const phone = document.getElementById('phone')
        const name = document.getElementById('name')
        const polit = document.getElementById('polit')
        const polit2 = document.getElementById('polit2')
        const regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        const regExpPhone = /^(\+380\d{9})$/
        let testEmail = regExpEmail.test(formData.email)
        let testPhone = regExpPhone.test(formData.phone)

        if(formData.name.length >= 2 && testEmail && testPhone && polit.checked){
            phone.style.border = '1px solid #ccc'
            email.style.border = '1px solid #ccc'
            name.style.border = '1px solid #ccc'
            polit2.style.border = '1px solid #ccc'

            let templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                typeAutowash: formData.typeAutowash,
                construction: formData.construction,
                colPosition: formData.colPosition,
                outsidePosition: formData.outsidePosition,
                land: formData.land ? "Так" : "Ні",
                city: formData.city,
                money: formData.money,
                namePage: 'КОНТАКТИ'
            };
            console.log(templateParams)
            // emailjs.send('service_qcggpom', 'template_ugaoz0u', templateParams, 'e8GXwhbbyk4tXovwB').then(
            //         () => {
            //           console.log('SUCCESS!');
            //           setStage(prev => {
            //             return {...prev, four: true}
            //         })
            //         setStage(prev => {
            //             return {...prev, third: false}
            //         })
            //         },
            //         (error) => {
            //           console.log('FAILED...', error.text);
            //         },
            //       );
            // emailjs.send('service_qcggpom', 'template_dxf8e6l', templateParams, 'e8GXwhbbyk4tXovwB');
        }
        if(formData.name.length < 2 && !testEmail && !testPhone && !polit.checked){
            email.style.border = '2px solid red'
            phone.style.border = '2px solid red'
            name.style.border = '2px solid red'
            polit2.style.border = '2px solid red'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(testEmail === false && testPhone === false && !polit.checked){
            email.style.border = '2px solid red'
            phone.style.border = '2px solid red'
            polit2.style.border = '2px solid red'
            name.style.border = '1px solid #ccc'
            email.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(testEmail === false && testPhone === false){
            email.style.border = '2px solid red'
            phone.style.border = '2px solid red'
            polit2.style.border = '1px solid #ccc'
            name.style.border = '1px solid #ccc'
            email.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.name.length < 2 && testPhone === false && !polit.checked){
            email.style.border = '1px solid #ccc'
            phone.style.border = '2px solid red'
            polit2.style.border = '2px solid red'
            name.style.border = '2px solid red'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.name.length < 2 && testPhone === false){
            email.style.border = '1px solid #ccc'
            phone.style.border = '2px solid red'
            name.style.border = '2px solid red'
            polit2.style.border = '1px solid #ccc'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.name.length < 2 && testEmail === false && !polit.checked){
            phone.style.border = '1px solid #ccc'
            email.style.border = '2px solid red'
            name.style.border = '2px solid red'
            polit2.style.border = '2px solid red'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if(formData.name.length < 2 && testEmail === false){
            phone.style.border = '1px solid #ccc'
            email.style.border = '2px solid red'
            name.style.border = '2px solid red'
            polit2.style.border = '1px solid #ccc'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (formData.name.length < 2) {
            name.style.border = '2px solid red'
            email.style.border = '1px solid #ccc'
            phone.style.border = '1px solid #ccc'
            polit2.style.border = '1px solid #ccc'
            name.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (testEmail === false) {
            email.style.border = '2px solid red'
            name.style.border = '1px solid #ccc'
            phone.style.border = '1px solid #ccc'
            polit2.style.border = '1px solid #ccc'
            email.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (testPhone === false) {
            phone.style.border = '2px solid red'
            email.style.border = '1px solid #ccc'
            name.style.border = '1px solid #ccc'
            polit2.style.border = '1px solid #ccc'
            phone.scrollIntoView({block: "center", behavior: 'smooth'});
        }
        else if (!polit.checked) {
            phone.style.border = '1px solid #ccc'
            email.style.border = '1px solid #ccc'
            name.style.border = '1px solid #ccc'
            polit2.style.border = '2px solid red'
            polit2.scrollIntoView({block: "center", behavior: 'smooth'});
        }
    }

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // useEffect(() => {
    //     console.log(`/mainPage/mainCalc/autowash/${imageUrl}${imageUrlModel}${imageUrlNum}${imageUrlOutside}.jpg`)
    // }, [imageUrl, imageUrlModel, imageUrlNum, imageUrlOutside]);


    return (
        <div>

            <div className={s.mainDiv}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{delay: 6000, disableOnInteraction: false}}
                    pagination={{clickable: true}}
                    modules={[Autoplay, Pagination]}
                    // modules={[Pagination]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                    onSlideChange={handleSlideChange}
                >
                    <SwiperSlide>
                        <div className={s.divImageSwiper}>
                            <h2 className={s.h2Slider}>
                                <p>{t("main2")}</p>
                            </h2>
                            <Link href='/' className={s.redBlock}>
                                <p className={s.pRedBlock}>{t("main1")}</p>
                                <div className={s.linkRedBlock}>
                                    <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={20} height={20}/>
                                </div>
                            </Link>
                            <Image src='/mainPage/mainSlider/slider_promo1.jpg' alt='' width={1000} height={1000}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.divImageSwiper}>
                            <h2 className={s.h2Slider}>
                                <p>{t("main3")}</p>
                            </h2>
                            <Link href='/' className={s.redBlock}>
                                <p className={s.pRedBlock}>{t("main1")}</p>
                                <div className={s.linkRedBlock}>
                                    <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={20} height={20}/>
                                </div>
                            </Link>
                            <Image src='/mainPage/mainSlider/slider_promo2.png' alt='' width={1000} height={1000}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.divImageSwiper}>
                            <h2 className={s.h2Slider}>
                                <p>{t("main4")}</p>
                            </h2>
                            <Link href='/' className={s.redBlock}>
                                <p className={s.pRedBlock}>{t("main1")}</p>
                                <div className={s.linkRedBlock}>
                                    <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={20} height={20}/>
                                </div>
                            </Link>
                            <Image src='/mainPage/mainSlider/slider_promo3.png' alt='' width={1000} height={1000}/>
                        </div>
                    </SwiperSlide>
                    <div className='divAnimate'>
                        <div className='divAnimP'>
                            <p className={indexSlide === 0 ? 'lineAnimation' : null}></p>
                            <p className={s.titleSlider2}>{t("main5")}</p>
                            <p className={s.titleSlider1}>{t("main6")}</p>
                        </div>
                        <div className='divAnimP'>
                            <p className={indexSlide === 1 ? 'lineAnimation' : null}></p>
                            <p className={s.titleSlider2}>{t("main7")}</p>
                            <p className={s.titleSlider1}>{t("main8")}</p>
                        </div>
                        <div className='divAnimP'>
                            <p className={indexSlide === 2 ? 'lineAnimation' : null}></p>
                            <p className={s.titleSlider2}>{t("main9")}</p>
                            <p className={s.titleSlider1}>{t("main10")}</p>
                        </div>
                    </div>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>

            <section className={s.box1}>
                <div className={s.main_containerBox1}>
                    <div style={stage.four ? {display: 'none'} : undefined} className={s.section_header}>
                        <h1 className={s.section_headerH1}>
                            <p className={s.section_headerH1P1}>{t("main11")}</p>
                            <p className={s.section_headerH1P2}>{t("main12")}</p>
                        </h1>
                    </div>
                    <div style={!stage.first && !stage.four ? {display: 'block'} : undefined}
                         className={s.selected_washer_details}>
                        <ul>
                            <li>
                                <span>1</span>
                                <span>{t("main13")}</span>
                                <div>
                                    <font>{formData.typeAutowash}</font>
                                </div>
                            </li>
                            <li>
                                <span>2</span>
                                <span>{t("main14")}</span>
                                <div>
                                    <font>{formData.construction}</font>
                                </div>
                            </li>
                            <li>
                                <span>3</span>
                                <span>{t("main15")}</span>
                                <div>
                                    <font>{formData.colPosition}</font>
                                </div>
                            </li>
                            <li>
                                <span>4</span>
                                <span>{t("main16")}</span>
                                <div>
                                    <font>{formData.outsidePosition ? "Так" : "Ні"}</font>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={s.top_arrow}>
                        <div style={!stage.first ? {display: 'none'} : undefined} className={s.configurator_body}>
                            <div className={s.half_colum}>
                                <div className={s.washer_image}>
                                    <Image alt='Choose your washes'
                                        src={`/mainPage/mainCalc/autowash/${imageUrl}${imageUrlModel}${imageUrlNum}${imageUrlOutside}.jpg`}
                                           width={500} height={500}/>
                                </div>
                            </div>
                            <div className={s.half_colum}>
                                <form id="config-form" onSubmit={handleSubmit} className={s.formMain}>
                                    <div className={s.select_wrapper + ' ' + s.select_wrapperPage} id='typePrevi'>
                                        <lable>
                                            <span>1</span>
                                            <font>{t("main13")}</font>
                                        </lable>
                                        <select onChange={select1} id='type'>
                                            <option disabled selected>{t("main17")}</option>
                                            <option value='безконтактні-модульні'>безконтактні -
                                                модульні
                                            </option>
                                            <option value='безконтактний-контейнер'>безконтактний -
                                                контейнер
                                            </option>
                                            <option value='автомат-щітка'>автомат - щітка</option>
                                            <option value='автомат-безконтактний'>автомат -
                                                безконтактний
                                            </option>
                                        </select>
                                    </div>
                                    <div className={s.select_wrapper + ' ' + s.select_wrapperPage}>
                                        <lable>
                                            <span>2</span>
                                            <font>{t("main14")}</font>
                                        </lable>
                                        <select onChange={select2} disabled={formData.typeAutowash === ''} id='construction'
                                                style={formData.typeAutowash === '' ? {backgroundColor: '#ccc'} : undefined}>
                                            <option disabled selected>{t("main18")}</option>
                                            <option value='Lumi'>Lumi</option>
                                            <option value='Nexo'>Nexo</option>
                                            <option value='Premium'>Premium</option>
                                            <option value='Basic'>Basic</option>
                                            <option value='без-конструкцій'>без конструкцій</option>
                                        </select>
                                    </div>
                                    <div className={s.select_wrapper + ' ' + s.select_wrapperPage}>
                                        <lable>
                                            <span>3</span>
                                            <font>{t("main15")}</font>
                                        </lable>
                                        <select onChange={select3} disabled={formData.construction === ''} id='col'
                                                style={formData.construction === '' ? {backgroundColor: '#ccc'} : undefined}>
                                            <option disabled selected>{t("main19")}</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                        </select>
                                    </div>
                                    <div className={s.input_wrapper}>
                                        {formData.colPosition > 2 &&  <lable className={s.container}>
                                            <span>4</span>
                                            <font>{t("main17")}</font>
                                            <input type='checkbox' ref={ref}
                                                   className={s.checkmark + ' ' + s.checkbox}/>
                                            <span className={s.checkmark} onClick={check}></span>
                                        </lable>}
                                    </div>
                                    <div onClick={setStageNext} className={s.redDivFirst}>
                                        <ButtonRedWithoutLink text={'mainButNext'}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div style={!stage.second ? {display: 'none'} : undefined} className={s.configurator_body}>
                            <h2>{t("main20")}</h2>
                            <form id="config-form" className={s.formMain}>
                                <div className={s.half_colum}>
                                    <div className={s.inline_item_user_data}>
                                        <div className={s.inline_description} id='radioPrevi'>
                                            <span>5</span>
                                            <span>{t("main21")} </span>
                                            <span> *</span>
                                        </div>
                                        <div className={s.inline_inputs}>
                                            <label className={s.container}>
                                                <font>{t("main22")}</font>
                                                <input type='radio' name='name'
                                                       onChange={prev =>
                                                    setFormData(prev => {
                                                        return {...prev, land: true}
                                                    })} />
                                                <span className={s.checkmark} id='radio1'></span>
                                            </label>
                                            <label className={s.container}>
                                                <font>{t("main23")}</font>
                                                <input type='radio' name='name'
                                                       onChange={prev =>
                                                           setFormData(prev => {
                                                    return {...prev, land: false}
                                                })} />
                                                <span className={s.checkmark} id='radio2'></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className={s.inline_item_user_data}>
                                        <div className={s.inline_description}>
                                            <span>6</span>
                                            <span>{t("main24")} </span>
                                            <span> *</span>
                                        </div>
                                        <div className={s.inline_inputs}>
                                            <div>
                                                <input type='text' placeholder={t("main25")} className={s.input_step2}
                                                       id='city' value={formData.city}
                                                       onChange={(e) =>
                                                           setFormData(prev => {
                                                               return {...prev, city: e.target.value}
                                                           })}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.half_colum}>
                                    <div className={s.inline_item_user_data}>
                                        <div className={s.inline_description}>
                                            <span>7</span>
                                            <span>{t("main26")} ( {t("main27")} <b>250 000 {t("main28")}</b> ) </span>
                                            <span> </span>
                                        </div>
                                        <div className={s.inline_inputs}>
                                            <div className={s.select_wrapper + ' ' + s.select_wrapper2}>
                                                <select onChange={(e) =>
                                                    setFormData(prev => {
                                                        return {...prev, money: e.target.value}
                                                    })}>
                                                    <option value="виберіть" disabled selected>{t("main29")}</option>
                                                    <option value="Власні кошти">{t("main30")}</option>
                                                    <option value="Кредит">{t("main31")}</option>
                                                    <option value="Лізинг">{t("main32")}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.configurator_navigation}>
                                    <div className={s.redButCenter} onClick={setStageNext2}>
                                        <ButtonRedWithoutLink text={'mainButNext'}/>
                                    </div>
                                    <div className={s.reguired_fields}>
                                        <span>* </span>
                                        <span> {t("main33")}</span>
                                    </div>
                                    <ul>
                                        <li onClick={setStageNext0}>{t("main35")}</li>
                                        <li>{t("main34")} 2/3</li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div style={!stage.third ? {display: 'none'} : undefined} className={s.configurator_body}>
                            <h2>{t("main36")}</h2>
                            <form id="config-form" onSubmit={handleSubmit} className={s.formMain}>
                                <div className={s.personal_configurator_data}>
                                    <ul>
                                        <li>
                                            <span>8</span>
                                            <span>{t("main37")} </span>
                                            <span> *</span>
                                            <input type='text' placeholder={t("main38")} value={formData.name}
                                                   onChange={handleChange} name='name' id='name' />
                                        </li>
                                        <li>
                                            <span>9</span>
                                            <span>{t("main39")} </span>
                                            <span> *</span>
                                            <input type='text' placeholder={t("main40")} value={formData.email}
                                                   onChange={handleChange} name='email' id='email' />
                                        </li>
                                        <li>
                                            <span>10</span>
                                            <span>{t("main41")} </span>
                                            <span> *</span>
                                            <input type='text' placeholder="+380975794930" value={formData.phone}
                                                   onChange={handleChange} name='phone' id='phone' />
                                        </li>
                                    </ul>
                                </div>
                                <div className={s.required_acceptance}>
                                    <div className={s.form_group_input_wrapper}>
                                        <lable className={s.container}>
                                            <span style={{color: "#ed1c24"}}>*</span>
                                            <p>
                                                {t("main42")}
                                                <Link href='/' className={s.form_group_link}> {t("main43")} Samwash </Link>
                                                {t("main44")}
                                            </p>
                                            <input type="checkbox" className={s.checkbox + ' ' + s.checkmark}
                                                   ref={ref2} id='polit' />
                                            <span className={s.checkmark} onClick={check2} id='polit2'></span>
                                        </lable>
                                    </div>
                                    <div className={s.form_group_input_wrapper}>
                                        <lable className={s.container}>
                                            <span style={{color: "#ed1c24"}}></span>
                                            <p>
                                                Так, я хочу отримувати комерційну та маркетингову інформацію BKF
                                                (зокрема про продукти, рекламні акції, події) в електронному вигляді від
                                                компанії BKF Myjnie Bezdotykowe sp. z o. o., розташованої у Скарбимежице
                                                (Skarbimierzyce 22, 72-002 Dołuje) на надану мною адресу електронної
                                                пошти.
                                            </p>
                                            <input type="checkbox" className={s.checkbox + ' ' + s.checkmark}
                                                   ref={ref3}/>
                                            <span className={s.checkmark} onClick={check3}></span>
                                        </lable>
                                    </div>
                                </div>
                                <div className={s.configurator_navigation}>
                                    <button className={s.redButCenter} type='submit'>
                                        <ButtonRedWithoutLink text={'mainButSend'}/>
                                    </button>
                                    <div className={s.reguired_fields}>
                                        <span>* </span>
                                        <span> {t("main33")}</span>
                                    </div>
                                    <ul>
                                        <li onClick={setStageNext01}>{t("main35")}</li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                        <div style={!stage.four ? {display: 'none'} : undefined} className={s.configurator_body2}>
                            <div className='thanks-message'>
                                <div className="thanks-message-service-form">
                                    <div className="message">
                                        <h2>
                                            <small>{t("main45")}</small>
                                            <strong>{t("main46")}</strong>
                                        </h2>
                                        <p></p>
                                        <div style={{textAlign: 'center'}}>
                                            <h3>{t("main47")}</h3>
                                        </div>
                                        <p>{t("main48")}</p>
                                        <p>&nbsp;</p>
                                        <p>&nbsp;</p>
                                        <div style={{textAlign: 'center'}}>
                                            <div className={s.redButCenter + ' ' + s.paddingBut}>
                                                <ButtonRedArrowRight text='mainButMain' link='/'/>
                                            </div>
                                        </div>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.box2}>
                <div className={s.main_container}>
                    <div className={s.section_header}>
                        <h2 className={s.section_headerH1}>
                            <p className={s.section_headerH1P1}>{t("main49")}</p>
                            <p className={s.section_headerH1P2}>{t("main50")} Samwash</p>
                        </h2>
                        <p className={s.section_headerP}>{t("main51")} <b>{t("main52")}</b>, {t("main53")}
                            <b> {t("main54")}</b> , {t("main55")} <b>{t("main56")}</b>, {t("main57")}</p>
                    </div>
                    <div className={s.list_box_v2}>
                        <Link href='/' className={s.features_box_select_item}>
                            <div className={s.box}>
                                <p>{t("main58")}</p>
                                <h4>{t("main59")}</h4>
                            </div>
                            <Image src='/mainPage/box2/box2_1.jpg' alt={t("main58")} width={100}
                                   height={300}
                                   className={s.boxImage}/>
                        </Link>
                        <Link href='/' className={s.features_box_select_item}>
                            <div className={s.box}>
                                <p>{t("main60")}</p>
                                <h4>{t("main61")}</h4>
                            </div>
                            <Image src='/mainPage/box2/box2_2.jpg' alt={t("main60")} width={100}
                                   height={300}
                                   className={s.boxImage}/>
                        </Link>
                        <Link href='/' className={s.features_box_select_item}>
                            <div className={s.box}>
                                <p>{t("main62")}</p>
                                <h4>{t("main63")}</h4>
                            </div>
                            <Image src='/mainPage/box2/box2_3.jpg' alt={t("main62")} width={100}
                                   height={300}
                                   className={s.boxImage}/>
                        </Link>
                        <Link href='/' className={s.features_box_select_item}>
                            <div className={s.box}>
                                <p>{t("main64")}</p>
                                <h4>{t("main65")}</h4>
                            </div>
                            <Image src='/mainPage/box2/box2_4.jpg' alt={t("main64")} width={100}
                                   height={300}
                                   className={s.boxImage}/>
                        </Link>
                        <Link href='/' className={s.features_box_select_item}>
                            <div className={s.box}>
                                <p>{t("main66")}</p>
                                <h4>{t("main67")}</h4>
                            </div>
                            <Image src='/mainPage/box2/box2_5.jpg' alt={t("main66")} width={100}
                                   height={300}
                                   className={s.boxImage}/>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={s.dark_gray_background}>
                <div className={s.main_container + ' ' + s.styleFlex}>
                    <div className={s.text_block}>
                        <h2>{t("main68")} Samwash</h2>
                        <p>{t("main69")}</p>
                        <p>{t("main70")}</p>
                        <Link href='/' className={s.formBtn2}>
                            {t("main71")}
                            <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={5} height={5}/>
                        </Link>
                    </div>
                    <div className={s.video_block}>
                        <a data-fancybox="gallery" className={s.bg_image}
                           href={'/video/mainVideo.mp4'}>
                            <video src={'/video/mainVideo.mp4'} poster={'/video/mainVideo.mp4'} controls={true}
                                   title='' preload="yes" autoPlay='no' playsInline muted loop/>
                        </a>
                    </div>
                </div>
            </section>

            <section className={s.box2}>
                <div className={s.main_container}>
                    <div className={s.section_header}>
                        <h2 className={s.section_headerH1}>
                            <p className={s.section_headerH1P1}>{t("main72")}</p>
                            <p className={s.section_headerH1P2}>{t("main73")} Samwash</p>
                        </h2>
                        <p className={s.section_headerP}>{t("main74")}</p>
                        <h3 className={s.section_headerH3}>{t("main75")}</h3>
                    </div>
                    <div className={s.box_wrapper}>
                        <div className={s.four_panels_box}>
                            <div className={s.panel_box + ' ' + s.first_of_type} onClick={() => setActive(1)}
                                 style={active === 1 ? activeStyle : undefined}>
                                <Image src='/mainPage/box4/ico-gray-інвестор.svg' alt={t("main76")}
                                       width={50} height={50}/>
                                <span>{t("main76")}</span>
                            </div>
                            <div className={s.divPanelBox} style={active === 1 && mobile ? activeStyle2 : undefined}>
                                <h3>{t("main76")}</h3>
                                <p>{t("main81")}</p>
                            </div>
                            <div className={s.panel_box + ' ' + s.second_of_type} onClick={() => setActive(2)}
                                 style={active === 2 ? activeStyle : undefined}>
                                <Image src='/mainPage/box4/ico-gray-basket.svg' alt={t("main77")}
                                       width={50} height={50}/>
                                <span>{t("main77")}</span>
                            </div>
                            <div className={s.divPanelBox} style={active === 2 && mobile ? activeStyle2 : undefined}>
                                <h3>{t("main77")}</h3>
                                <p>{t("main82")}</p>
                            </div>
                            <div className={s.panel_box + ' ' + s.third_of_type} onClick={() => setActive(3)}
                                 style={active === 3 ? activeStyle : undefined}>
                                <Image src='/mainPage/box4/АЗС.svg' alt={t("main78")}
                                       width={50} height={50}/>
                                <span>{t("main78")}</span>
                            </div>
                            <div className={s.divPanelBox} style={active === 3 && mobile ? activeStyle2 : undefined}>
                                <h3>{t("main78")}</h3>
                                <p>{t("main83")}</p>
                            </div>
                            <div className={s.panel_box + ' ' + s.fourth_of_type} onClick={() => setActive(4)}
                                 style={active === 4 ? activeStyle : undefined}>
                                <Image src='/mainPage/box4/ico-gray-service.svg' alt={t("main79")}
                                       width={50} height={50}/>
                                <span>{t("main79")}</span>
                            </div>
                            <div className={s.divPanelBox} style={active === 4 && mobile ? activeStyle2 : undefined}>
                                <h3>{t("main80")}</h3>
                                <p>{t("main84")}</p>
                            </div>
                        </div>
                        <div className={s.panel_box2}>
                            <h3>
                                {
                                    active === 1 ? t("main76") : active === 2 ? t("main77") :
                                        active === 3 ? t("main78") : t("main80")
                                }
                            </h3>
                            <p>
                                {
                                    active === 1 ? t("main81") : active === 2 ? t("main82")
                                        : active === 3 ? t("main83") : t("main84")
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.box5}>
                <div className={s.main_container}>
                    <div className={s.section_header}>
                        <h2 className={s.section_header2H1}>
                            <p className={s.section_header2H1P1}>{t("main85")}</p>
                            <p className={s.section_header2H1P2}>{t("main86")}</p>
                        </h2>
                    </div>
                    <div className={s.box_wrapper2}>
                        <div className={s.box_wrapper2Box1}>
                            <div className={s.box5_1 + ' ' + s.first_of_typeBox5} onClick={() => setActive2(1)}
                                 style={active2 === 1 ? activeStyle : undefined}>
                                <Image src='/mainPage/box5/ico-gray-beloyal-min.svg' alt='BE LOYAL'
                                       width={50} height={50}/>
                                <span>BE LOYAL - {t("main87")}</span>
                            </div>
                            <div className={s.box5_2} style={active2 === 1 && mobile ? activeStyle3 : undefined}>
                                <div className={s.image_block}>
                                    <Image src={`/mainPage/box5/box5_1.jpg`} alt='Індивідуальні інвестори'
                                           width={300} height={300}/>
                                </div>
                                <div className={s.text_block_image}>
                                    <h3>{t("main88")}</h3>
                                    <p>{t("main95")}</p>
                                    <Link href='/' className={s.formBtn + ' ' + s.add}>
                                        BE LOYAL
                                        <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={5} height={5}/>
                                    </Link>
                                </div>
                            </div>
                            <div className={s.box5_1 + ' ' + s.second_of_typeBox5} onClick={() => setActive2(2)}
                                 style={active2 === 2 ? activeStyle : undefined}>
                                <Image src='/mainPage/box5/ico-gray-carwash-manager.svg' alt='BE LOYAL'
                                       width={50} height={50}/>
                                <span>{t("main89")}</span>
                            </div>
                            <div className={s.box5_2} style={active2 === 2 && mobile ? activeStyle3 : undefined}>
                                <div className={s.image_block}>
                                    <Image src={`/mainPage/box5/box5_2.jpg`} alt='Індивідуальні інвестори'
                                           width={300} height={300}/>
                                </div>
                                <div className={s.text_block_image}>
                                    <h3>{t("main90")}</h3>
                                    <p>{t("main96")}</p>
                                    <Link href='/' className={s.formBtn + ' ' + s.add}
                                          style={{padding: '22px 10px 20px'}}>
                                        {t("main91")}
                                        <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={5} height={5}/>
                                    </Link>
                                </div>
                            </div>
                            <div className={s.box5_1 + ' ' + s.third_of_typeBox5} onClick={() => setActive2(3)}
                                 style={active2 === 3 ? activeStyle : undefined}>
                                <Image src='/mainPage/box5/ico-gray-change machine-min.svg' alt='BE LOYAL'
                                       width={50} height={50}/>
                                <span>{t("main92")}</span>
                            </div>
                            <div className={s.box5_2} style={active2 === 3 && mobile ? activeStyle3 : undefined}>
                                <div className={s.image_block}>
                                    <Image src={`/mainPage/box5/box5_3.jpg`} alt='Індивідуальні інвестори'
                                           width={300} height={300}/>
                                </div>
                                <div className={s.text_block_image}>
                                    <h3>{t("main93")}</h3>
                                    <p>{t("main97")}</p>
                                    <Link href='/' className={s.formBtn + ' ' + s.add}>
                                        {t("main94")} Samwash
                                        <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={5} height={5}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={s.box_wrapper2Box2}>
                            <Image src={`/mainPage/box5/${active2 === 1 ? 'box5_1.jpg'
                                : active2 === 2 ? 'box5_2.jpg' : 'box5_3.jpg'}`}
                                   alt='Індивідуальні інвестори' width={300} height={300}/>
                        </div>
                        <div className={s.box_wrapper2Box3}>
                            <h3>{ active2 === 1 ? t("main88") : active2 === 2 ? t("main90") : t("main93") }</h3>
                            <p>{ active2 === 1 ? t("main95") : active2 === 2 ? t("main96") : t("main97") }</p>
                            <Link href={active2 === 1 ? '/' : active2 === 2 ? '/' : '/'}
                                  className={s.formBtn + ' ' + s.add}>
                                {
                                    active2 === 1 ? 'BE LOYAL' : active2 === 2 ?
                                        <>
                                            <span className={s.noneFont}>{t("main98")}</span> {t("main99")}
                                        </>
                                        : `${t("main88")} Samwash`
                                }
                                <Image src='/mainPage/mainSlider/rightArrow.svg' alt='' width={5} height={5}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.box1}>
                <div className={s.main_container}>
                    <div className={s.section_header}>
                        <h2 className={s.section_headerH1}>
                            <p className={s.section_headerH1P1}>{t("main100")}</p>
                            <p className={s.section_headerH1P2}>{t("main101")}</p>
                        </h2>
                    </div>
                    <div className={s.showreel_wrapper}>
                        <div className={`${s.showreel} ${s.item_a}`}>
                            <div className={s.showreel_left_img_right_text}>
                                <div className={s.image_wrapper}>
                                    <Image src='/mainPage/box6/image1.jpg' alt='' width={200} height={400}/>
                                </div>
                                <div className={s.text_wrapper}>
                                    <h3>Kiekrz/Rokietnica</h3>
                                    <p></p>
                                    <Link href='/' className={`${s.red_text_btn} btn`}>{t("main102")}</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.showreel} ${s.item_b}`}>
                            <div className={s.showreel_left_img_right_text}>
                                <div className={s.image_wrapper}>
                                    <Image src='/mainPage/box6/image2.jpg' alt='' width={200} height={600}/>
                                </div>
                                <div className={s.text_wrapper}>
                                    <h3>ЩЕЦИН, 10ТКА</h3>
                                    <p></p>
                                    <Link href='/' className={`${s.red_text_btn} btn`}>{t("main102")}</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.showreel} ${s.item_c}`}>
                            <div className={s.showreel_left_img_right_text}>
                                <div className={s.image_wrapper}>
                                    <Image src='/mainPage/box6/image3.jpg' alt='' width={200} height={600}/>
                                </div>
                                <div className={s.text_wrapper}>
                                    <h3>{t("main103")}</h3>
                                    <p></p>
                                    <Link href='/' className={`${s.red_text_btn} btn`}>{t("main102")}</Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.showreel} ${s.item_d}`}>
                            <div className={s.showreel_top_img_bottom_text}>
                                <div className={s.image_wrapper_text}>
                                    <Image src='/mainPage/box6/image4.jpg' alt='' width={200} height={600}/>
                                </div>
                                <div className={s.text_wrapper_item}>
                                    <h3>нова сіль</h3>
                                    <p>Історія успіху - 15 років співпраці з BKF</p>
                                    <Link href='/' className={`${s.red_text_btn} btn`}>{t("main102")}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='center-btn'>
                        <ButtonRedArrowRight link={'/'} text={'main104'}/>
                    </div>
                </div>
            </section>

            <section className={s.box7}>
                <div className={s.main_container}>
                    <div className={s.section_header}>
                        <h2 className={s.section_headerH1}>
                            <p className={s.section_headerH1P1}>{t("main105")}</p>
                            <p className={s.section_headerH1P2} style={{fontFamily: 'Ubuntu Light, sans-serif'}}>
                                {t("main106")}</p>
                        </h2>
                    </div>
                    <div className={s.divSlider}>
                        <Swiper
                            slidesPerView={itemsSlide}
                            spaceBetween={50}
                            loop={true}
                            freeMode={true}
                            pagination={{clickable: true}}
                            autoplay={{delay: 6100, disableOnInteraction: false}}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo1.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo-2.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo-3.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo-4.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo-5.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo-6.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo1.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo-2.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo-3.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo-4.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo-5.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={s.divLogoImage}>
                                    <Image src='/mainPage/sliderLogo/logo-6.png' alt='' width={200} height={100}/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className={s.box1}>
                <div className={s.main_container}>
                    <div className={s.section_header}>
                        <h2 className={s.section_headerH1}>
                            <p className={s.section_headerH1P1}>{t("main107")} Samwash</p>
                            <p className={s.section_headerH1P2}>{t("main108")}</p>
                        </h2>
                    </div>
                    <div className={s.blog_features_wrapper}>
                        {
                            blog.map(item => {
                                return (
                                    <div className={s.blog_features_item}>
                                        <h3>
                                            <small>{item.data}</small>
                                            <Link href={item.link}><strong>{item.title}</strong></Link>
                                        </h3>
                                        <div className={s.image_wrapper_blog}>
                                            <Link href={item.link}>
                                                <Image src={item.img} alt={item.title} width={200} height={100}/>
                                            </Link>
                                        </div>
                                        <p>{item.desc}</p>
                                        <div className='center-btn'>
                                            <Link href={item.link} className={`${s.red_text_btn} btn`}
                                                  style={{padding: '20px', transform: 'translateX(0)'}}>
                                                {t("main109")}
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='center-btn'>
                        <ButtonWhiteArrowRight link={'/'} text={'mainBlog'}/>
                    </div>
                </div>
            </section>

            <section className={s.box2}>
                <div className={s.main_container}>
                    <div className={s.section_header}>
                        <h2 className={s.section_headerH1}>
                            <p className={s.section_headerH1P1}></p>
                            <p className={s.section_headerH1P2}></p>
                        </h2>
                    </div>
                    <div className={s.boxFinale}>
                        <h2>{t("main110")}</h2>
                        <p>{t("main111")} Samwash <b>{t("main112")}</b>, {t("main113")}</p>
                        <p>{t("main114")}</p>
                        <h2>{t("main115")}</h2>
                        <p>{t("main116")}</p>
                        <p>{t("main117")} <b>{t("main118")}</b> {t("main119")}</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
