"use client"

import s from './washing-technique.module.css';
import FixManu4 from "@/app/component/fixManu4/FixManu4";
import Image from "next/image";
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";
import {usePathname} from "next/navigation";
import {useEffect} from "react";

function WashingTechnique() {

    const t = useTranslations("washing-technique");
    const router = usePathname()

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    const configWash = () => {
        localStorage.setItem("configModern", "true");
    }

    useEffect(() => {
        let loc = localStorage.getItem("tech");

        if(loc === 'true'){
            const wash = document.getElementById('tech')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("tech");
        }
    }, []);

    useEffect(() => {
        let loc = localStorage.getItem("tech2");

        if(loc === 'true'){
            const wash = document.getElementById('tech2')
            wash.scrollIntoView({block: "nearest", behavior: 'smooth'});
            localStorage.removeItem("tech2");
        }
    }, []);


    return (
        <div>

            <section className='head-image'>
                <Image src='/other/kits.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("technique1")}
                        </li>
                    </ul>
                    <h1>{t("technique1")}</h1>
                </div>
            </section>

            <FixManu4 active={1}/>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Техніка мийки для автомийок</strong>
                            </h2>
                        </div>
                        <p>
                            У нашій пропозиції також є сама техніка очищення. Це дає вам можливість як встановити
                            прилади у своєму технічному приміщенні, так і
                            <b> замінити стару техніку будь-якого виробника на інноваційне рішення SAMWASH</b>,
                            завдяки якому ваша автомийка завжди буде на ногах і не відставатиме від конкурентів.
                            Технологи SAMWASH здатні створити технологічно гнучке рішення відповідно до ваших потреб.
                        </p>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <ul className={s.box_div}>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/other/svg/cart.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Техніка прання</h3>
                            <p>У вас є власна автомийка? Наші фахівці налаштують установку мийної техніки, щоб Ви
                                могли використовувати сучасні рішення, запропоновані SAMWASH</p>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/other/svg/gears.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>Модернізації</h3>
                            <p>У вас є стара автомийка? Виберіть правильний тип техніки, додайте сучасні аксесуари
                                та насолоджуйтесь новою якістю рішень SAMWASH</p>
                        </li>
                        <li>
                            <div className={s.white_back}>
                                <Image src='/other/svg/tech.svg' alt='' width={64} height={64}/>
                            </div>
                            <h3>OEM комплекти</h3>
                            <p>Ви продюсер? Налаштуйте техніку SAMWASH будь-яким способом і запропонуйте
                                своєму клієнту</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.section} id='tech'>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Контейнерна техніка автомийки</strong>
                            </h2>
                        </div>
                        <div className={s.image1}>
                            <Image src='/technique/image1.jpg' alt='' width={1300} height={600}/>
                        </div>
                        <div className={s.name_company}>
                            <span className={s.hr}>
                                <Image src='/other/comp1.png' alt='' width={28} height={18}/>
                                <span>Автомийки SAMWASH </span>
                                <Image src='/other/comp2.png' alt='' width={28} height={18}/>
                                <span>Автомийки SAMWASH </span>
                            </span>
                        </div>
                    </div>
                    <div className={s.box_images}>
                        <div className={s.item}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={640} height={250}/>
                            </a>
                        </div>
                        <div className={s.item}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={640} height={250}/>
                            </a>
                        </div>
                        <div className={s.item}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={640} height={250}/>
                            </a>
                        </div>
                        <div className={s.item}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={640} height={250}/>
                            </a>
                        </div>
                        <div className={s.item}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={640} height={250}/>
                            </a>
                        </div>
                        <div className={s.item}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={640} height={250}/>
                            </a>
                        </div>
                        <div className={s.item}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={640} height={250}/>
                            </a>
                        </div>
                        <div className={s.item}>
                            <a data-fancybox="gallery" href={'/opportunities/wash.jpg'}>
                                <Image src='/opportunities/wash.jpg' alt='' width={640} height={250}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section2} id='tech2'>
                <div className="main-container">
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Технологія модульної мийки</strong>
                            </h2>
                        </div>
                        <div className={s.image1}>
                            <Image src='/technique/image2.png' alt='' width={1300} height={600}/>
                        </div>
                        <div className={s.name_company}>
                            <span className={s.hr}>
                                <Image src='/other/comp1.png' alt='' width={28} height={18}/>
                                <span>Автомийки SAMWASH </span>
                                <Image src='/other/comp2.png' alt='' width={28} height={18}/>
                                <span>Автомийки SAMWASH </span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.back_image}>
                <div className={s.text_box2}>
                    <div className="section-header">
                        <h2>
                            <small style={{color: 'white'}}>ЗАМІНИТИ СТАРУ ТЕХНІКУ НА НОВУ</small>
                            <strong style={{color: 'white'}}>Ви думаєте про заміну техніки мийки?</strong>
                        </h2>
                        <p style={{color: 'white'}}>Зв'яжіться з нами, ми допоможемо вам адаптувати рішення.</p>
                    </div>
                    <Link href='/modernizations-and-expansions' onClick={configWash} className={s.link_but}>
                        <ButtonRedWithoutLink text='beloyalBut' />
                    </Link>
                </div>
                <div className={s.image_box}>
                    <Image src='/technique/back.png' alt='' width={1300} height={500}/>
                </div>
            </section>

        </div>
    );
}

export default WashingTechnique;