"use client"

import s from './header.module.css'
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {useLocale, useTranslations, Link} from "next-intl";
import Image from "next/image";

function Header() {

    const t = useTranslations();
    const locale = useLocale();
    const router = usePathname()

    let prevScrollY = 0;
    const [toggleLang, setToggleLang] = useState(false)
    const [fixHeader, setFixHeader] = useState(false)

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY) {
            setFixHeader(true);
        } else {
            setFixHeader(false);
        }
        prevScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('click', function (e) {
            if (e.target.id !== 'lang') {
                setToggleLang(false)
            }
        })

        window.addEventListener('scroll', handleScroll)
    }, []);

    const scroll = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }

    const showMobileMenu = () => {
        let but = document.getElementById('button')
        let but2 = document.getElementById('boxManu')
        if(but.children[0].classList.value === ''){
            but.children[0].classList.add(s['first_child'])
            but.children[2].classList.add(s['last_child'])
            but.children[1].classList.add(s['nth_child'])
            but2.classList.add(s['boxMenuWrapper2'])
        }
        else{
            but.children[0].classList.remove(s['first_child'])
            but.children[2].classList.remove(s['last_child'])
            but.children[1].classList.remove(s['nth_child'])
            but2.classList.remove(s['boxMenuWrapper2'])
        }
    }

    return (
        <div>
            <div className={`${s.laptop} ${fixHeader ? s.laptop2 : ''}`}>
                <div className={s.grayLine}>
                    <div className={s.box1}>
                        <>
                            <span className={s.boxContact}>Контакти:</span>
                            <span>
                                <a className={s.phone_link} href="tel:0975794930">097 579 4930</a>
                            </span>
                        </>
                        <div className={s.divisions}>
                            <ul>
                                <li>
                                    <a href="https://cm.bkf.pl/login">Менеджер автомийки</a>
                                </li>
                                <li>
                                    <a href="https://app.beloyal24.com/#/login">BeLOYAL</a>
                                </li>
                                <li>
                                    <a href="/zgloszenie-serwisowe">Запит на обслуговування</a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.language_selector} id='lang'>
                            <div className={s.language_link2} id='lang'
                                 onClick={() => setToggleLang(prev => !prev)}>
                                <img src={`/flug/${locale}.svg`} alt="" className={s.flag} id='lang'/>
                                {
                                    locale === 'uk' ? 'Українська' : locale === 'en' ? "English" : "Російська"
                                }
                            </div>
                            {
                                !toggleLang ?
                                    <Image src='/flug/arrow-down.svg' alt='arrow up' width={10} height={10}
                                           className={s.imgArrow} id='lang'/>
                                    : <Image src='/flug/arrow-up.svg' alt='arrow up' width={10} height={10}
                                             className={s.imgArrow} id='lang'/>
                            }
                            <div style={{display: toggleLang ? 'flex' : "none"}} className={s.toggleManu}>
                                <Link href='/' locale="uk" className={s.language_link}
                                      style={locale === 'uk' ? {
                                          backgroundColor: 'white',
                                          color: '#d9d9d9'
                                      } : undefined}>
                                    <img src={"/flug/uk.svg"} alt="" className={s.flag}/>Українська
                                </Link>
                                <Link href='/' locale="en" className={s.language_link}
                                      style={locale === 'en' ? {
                                          backgroundColor: 'white',
                                          color: '#d9d9d9'
                                      } : undefined}>
                                    <img src={"/flug/en.svg"} alt="" className={s.flag}/>English
                                </Link>
                                <Link href='/' locale="ru" className={s.language_link}
                                      style={locale === 'ru' ? {
                                          backgroundColor: 'white',
                                          color: '#d9d9d9'
                                      } : undefined}>
                                    <img src={"/flug/ru.svg"} alt="" className={s.flag}/>Російська
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${s.mainManu}`}>
                    <div className={s.bottomLine}>
                        <div className={s.logoWrapper}>
                            <Link href='/' className={s.brand} onClick={scroll}>
                                <Image src='/new_logo.svg' alt='samwash' className={s.logo} fill/>
                            </Link>
                        </div>
                        <div className={s.menu_icon} id='button' onClick={showMobileMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={s.boxMenuWrapper} id='boxManu'>
                            <div className={s.dropdown}>
                                <button>
                                    <Image src='/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                           className={s.imgArrowManu}/>
                                    Автомийки
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/">Безконтактні мийки</Link>
                                    <Link href="/">Мийка BKF Mono</Link>
                                    <Link href="/">Техніка миття автомобіля</Link>
                                    <Link href="/">Конструкції</Link>
                                </div>
                            </div>
                            <div className={s.dropdown}>
                                <button>
                                    <Image src='/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                           className={s.imgArrowManu}/>
                                    Аксесуари
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/">Хімічні засоби для миття автомобіля</Link>
                                    <Link href="/">Розподільник склоомивача</Link>
                                    <Link href="/">Пилососи</Link>
                                    <Link href="/">Змінити машини</Link>
                                    <Link href="/">BE LOYAL</Link>
                                    <Link href="/">Менеджер автомийки</Link>
                                </div>
                            </div>
                            <div className={s.dropdown}>
                                <button>
                                    <Image src='/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                           className={s.imgArrowManu}/>
                                    Я хочу автомийку
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/">Перші кроки</Link>
                                    <Link href="/">Будівництво автомийки</Link>
                                    <Link href="/">Можливості з BKF</Link>
                                    <Link href="/">Калькулятор рентабельност</Link>
                                    <Link href="/">Конфігуратор автомийки</Link>
                                    <Link href="/">Галерея проектів</Link>
                                    <Link href="/">Карта реалізації</Link>
                                </div>
                            </div>
                            <div className={s.dropdown}>
                                <button>
                                    <Image src='/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                           className={s.imgArrowManu}/>
                                    У мене є автомийка
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/">Хімічні засоби для миття автомобіля</Link>
                                    <Link href="/">Модернізації та розширення</Link>
                                    <Link href="/">Фіскалізація</Link>
                                    <Link href="/">Сервіс</Link>
                                    <Link href="/">Запит на обслуговування</Link>
                                </div>
                            </div>
                            <div className={s.dropdown}>
                                <button>
                                    <Image src='/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                           className={s.imgArrowManu}/>
                                    Про компанію
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/">Презентація</Link>
                                    <Link href="/">Список реалізацій</Link>
                                    <Link href="/">Політика якості</Link>
                                </div>
                            </div>
                            <div className={s.dropdown2}>
                                <Link href='/'>Блог</Link>
                            </div>
                            <div className={s.dropdown2}>
                                <Link href='/'>Магазин</Link>
                            </div>
                            <div className={s.dropdown2}>
                                <Link href='/contact'>Контакти</Link>
                            </div>
                            <div className={s.dropdown3}>
                                <Link href='/contact'>Конфігуратор автомийки</Link>
                            </div>
                            <ul className={s.navbar_nav}>
                                <li>
                                    <a href="https://cm.bkf.pl/login">Менеджер автомийки</a>
                                </li>
                                <li>
                                    <a href="https://app.beloyal24.com/#/login">BeLOYAL</a>
                                </li>
                                <li>
                                    <a href="/zgloszenie-serwisowe">Запит на обслуговування</a>
                                </li>
                            </ul>
                            <div className={s.language_selector2} id='lang'>
                                <div className={s.language_link2} id='lang'
                                     onClick={() => setToggleLang(prev => !prev)}>
                                    <img src={`/flug/${locale}.svg`} alt="" className={s.flag} id='lang'/>
                                    {
                                        locale === 'uk' ? 'Українська' : locale === 'en' ? "English" : "Російська"
                                    }
                                    {
                                        !toggleLang ?
                                            <Image src='/flug/arrow-down.svg' alt='arrow up' width={10} height={10}
                                                   className={s.imgArrow} id='lang'/>
                                            : <Image src='/flug/arrow-up.svg' alt='arrow up' width={10} height={10}
                                                     className={s.imgArrow} id='lang'/>
                                    }
                                </div>
                                <div style={{display: toggleLang ? 'flex' : "none"}} className={s.toggleManu}>
                                    <Link href='/' locale="uk" className={s.language_link}
                                          style={locale === 'uk' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/flug/uk.svg"} alt="" className={s.flag}/>Українська
                                    </Link>
                                    <Link href='/' locale="en" className={s.language_link}
                                          style={locale === 'en' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/flug/en.svg"} alt="" className={s.flag}/>English
                                    </Link>
                                    <Link href='/' locale="ru" className={s.language_link}
                                          style={locale === 'ru' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/flug/ru.svg"} alt="" className={s.flag}/>Російська
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.mobile}></div>
        </div>
    );
}

export default Header;