"use client"

import s from './header.module.css'
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";

function Header() {

    const t = useTranslations("header");
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
            if (e.target.id === 'mozhna') {
                let but = document.getElementById('button')
                let but2 = document.getElementById('boxManu')
                but.children[0].classList.remove(s['first_child'])
                but.children[2].classList.remove(s['last_child'])
                but.children[1].classList.remove(s['nth_child'])
                but2.classList.remove(s['boxMenuWrapper2'])
            }
            else if (e.target.id !== 'lang') {
                setToggleLang(false)
            }
            else if (e.target.id === 'lang') {}
            else if (e.target.id !== 'button' && e.target.id !== 'button9') {
                let but = document.getElementById('button')
                let but2 = document.getElementById('boxManu')
                but.children[0].classList.remove(s['first_child'])
                but.children[2].classList.remove(s['last_child'])
                but.children[1].classList.remove(s['nth_child'])
                but2.classList.remove(s['boxMenuWrapper2'])
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

    const configWash = () => {
        if(router === '/' || router === '/ru' || router === '/en'){
            setTimeout(() => {
                const wash = document.getElementById('washConf')
                wash.scrollIntoView({block: "center", behavior: 'smooth'});
            }, 300)
        } else {
            localStorage.setItem("configWash", "true");
        }
    }


    return (
        <header>
            <div className={`${s.laptop} ${fixHeader ? s.laptop2 : ''}`}>
                <div className={s.grayLine}>
                    <div className={s.box1}>
                        <>
                            <span className={s.boxContact}>{t("header36")}:</span>
                            <span>
                                <a className={s.phone_link} href="tel:0975794930">097 579 4930</a>
                            </span>
                        </>
                        <div className={s.divisions}>
                            <ul>
                                <li>
                                    <a href="/manager-office">{t("header37")}</a>
                                </li>
                                <li>
                                    <a href="/owner-office">{t("header38")}</a>
                                </li>
                                <li>
                                    <a href="/service-request">{t("header2")}</a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.language_selector} id='lang'>
                            <div className={s.language_link2} id='lang'
                                 onClick={() => setToggleLang(prev => !prev)}>
                                <img src={`/header/flug/${locale}.svg`} alt="" className={s.flag} id='lang'/>
                                {
                                    locale === 'uk' ? 'Українська' : locale === 'en' ? "English" : "Російська"
                                }
                            </div>
                            {
                                !toggleLang ?
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={10} height={10}
                                           className={s.imgArrow} id='lang'/>
                                    : <Image src='/header/flug/arrow-up.svg' alt='arrow up' width={10} height={10}
                                             className={s.imgArrow} id='lang'/>
                            }
                            <div style={{display: toggleLang ? 'flex' : "none"}} className={s.toggleManu}>
                                <Link href='/' locale="uk" className={s.language_link}
                                      style={locale === 'uk' ? {
                                          backgroundColor: 'white',
                                          color: '#d9d9d9'
                                      } : undefined}>
                                    <img src={"/header/flug/uk.svg"} alt="" className={s.flag}/>Українська
                                </Link>
                                <Link href='/' locale="en" className={s.language_link}
                                      style={locale === 'en' ? {
                                          backgroundColor: 'white',
                                          color: '#d9d9d9'
                                      } : undefined}>
                                    <img src={"/header/flug/en.svg"} alt="" className={s.flag}/>English
                                </Link>
                                <Link href='/' locale="ru" className={s.language_link}
                                      style={locale === 'ru' ? {
                                          backgroundColor: 'white',
                                          color: '#d9d9d9'
                                      } : undefined}>
                                    <img src={"/header/flug/ru.svg"} alt="" className={s.flag}/>Російська
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${s.mainManu}`}>
                    <div className={s.bottomLine}>
                        <div className={s.logoWrapper}>
                            <Link href='/' className={s.brand} onClick={scroll}>
                                <Image src='/new_logo.svg' alt='samwash' className={s.logo} width={200} height={200} />
                            </Link>
                        </div>
                        <div className={s.menu_icon} id='button' onClick={showMobileMenu}>
                            <div id='button9'></div>
                            <div id='button9'></div>
                            <div id='button9'></div>
                        </div>
                        <div className={s.boxMenuWrapper} id='boxManu'>
                            <div className={s.dropdown}>
                                <button>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                           className={s.imgArrowManu}/>
                                    {t("header3")}
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/" id='mozhna'>{t("header4")}</Link>
                                    <Link href="/" id='mozhna'>{t("header5")}</Link>
                                    <Link href="/" id='mozhna'>{t("header6")}</Link>
                                    <Link href="/" id='mozhna'>{t("header7")}</Link>
                                </div>
                            </div>
                            <div className={s.dropdown}>
                                <button>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                           className={s.imgArrowManu}/>
                                    {t("header8")}
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/" id='mozhna'>{t("header9")}</Link>
                                    <Link href="/" id='mozhna'>{t("header10")}</Link>
                                    <Link href="/vacuume-for-car" id='mozhna'>{t("header11")}</Link>
                                    <Link href="/payment-terminal" id='mozhna'>{t("header12")}</Link>
                                    <Link href="/beloyal-program" id='mozhna'>BE LOYAL</Link>
                                    <Link href="/carwash-manager" id='mozhna'>{t("header13")}</Link>
                                </div>
                            </div>
                            <div className={s.dropdown}>
                                <button>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                           className={s.imgArrowManu}/>
                                    {t("header14")}
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/" id='mozhna'>{t("header15")}</Link>
                                    <Link href="/" id='mozhna'>{t("header16")}</Link>
                                    <Link href="/" id='mozhna'>{t("header17")} BKF</Link>
                                    <Link href="/" id='mozhna'>{t("header18")}</Link>
                                    <Link href="/" id='mozhna'>{t("header19")}</Link>
                                    <Link href="/" id='mozhna'>{t("header20")}</Link>
                                    <Link href="/" id='mozhna'>{t("header21")}</Link>
                                </div>
                            </div>
                            <div className={s.dropdown}>
                                <button>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                           className={s.imgArrowManu}/>
                                    {t("header22")}
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/" id='mozhna'>{t("header23")}</Link>
                                    <Link href="/" id='mozhna'>{t("header24")}</Link>
                                    <Link href="/" id='mozhna'>{t("header25")}</Link>
                                    <Link href="/" id='mozhna'>{t("header26")}</Link>
                                    <Link href="/" id='mozhna'>{t("header27")}</Link>
                                </div>
                            </div>
                            <div className={s.dropdown}>
                                <button>
                                    <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={15} height={15}
                                           className={s.imgArrowManu}/>
                                    {t("header28")}
                                </button>
                                <div className={s.dropdown_content}>
                                    <Link href="/" id='mozhna'>{t("header29")}</Link>
                                    <Link href="/" id='mozhna'>{t("header30")}</Link>
                                    <Link href="/" id='mozhna'>{t("header31")}</Link>
                                </div>
                            </div>
                            <div className={s.dropdown2} id='mozhna'>
                                <Link href='/blog' id='mozhna'>{t("header32")}</Link>
                            </div>
                            <div className={s.dropdown2} id='mozhna'>
                                <Link href='/' id='mozhna'>{t("header33")}</Link>
                            </div>
                            <div className={s.dropdown2} id='mozhna'>
                                <Link href='/contact' id='mozhna'>{t("header34")}</Link>
                            </div>
                            <div className={s.dropdown3} id='mozhna'>
                                <Link href='/' onClick={configWash} id='mozhna'>{t("header35")}</Link>
                            </div>
                            <ul className={s.navbar_nav}>
                                <li>
                                    <a href="/manager-office">{t("header37")}</a>
                                </li>
                                <li>
                                    <a href="/owner-office">{t("header38")}</a>
                                </li>
                                <li>
                                    <a href="/service-request">{t("header2")}</a>
                                </li>
                            </ul>
                            <div className={s.language_selector2} id='lang'>
                                <div className={s.language_link2} id='lang'
                                     onClick={() => setToggleLang(prev => !prev)}>
                                    <img src={`/header/flug/${locale}.svg`} alt="" className={s.flag} id='lang'/>
                                    {
                                        locale === 'uk' ? 'Українська' : locale === 'en' ? "English" : "Російська"
                                    }
                                    {
                                        !toggleLang ?
                                            <Image src='/header/flug/arrow-down.svg' alt='arrow up' width={10} height={10}
                                                   className={s.imgArrow} id='lang'/>
                                            : <Image src='/header/flug/arrow-up.svg' alt='arrow up' width={10} height={10}
                                                     className={s.imgArrow} id='lang'/>
                                    }
                                </div>
                                <div style={{display: toggleLang ? 'flex' : "none"}} className={s.toggleManu}>
                                    <Link href='/' locale="uk" className={s.language_link}
                                          style={locale === 'uk' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/header/flug/uk.svg"} alt="" className={s.flag}/>Українська
                                    </Link>
                                    <Link href='/' locale="en" className={s.language_link}
                                          style={locale === 'en' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/header/flug/en.svg"} alt="" className={s.flag}/>English
                                    </Link>
                                    <Link href='/' locale="ru" className={s.language_link}
                                          style={locale === 'ru' ? {
                                              backgroundColor: 'white',
                                              color: '#d9d9d9'
                                          } : undefined}>
                                        <img src={"/header/flug/ru.svg"} alt="" className={s.flag}/>Російська
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;