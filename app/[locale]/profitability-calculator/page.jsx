"use client"

import s from './profitability-calculator.module.css';
import FixManu3 from "@/app/component/fixManu3/FixManu3";
import {useTranslations} from "next-intl";
import Link from "next-intl/link";
import ConfigureWash from "@/app/component/configureWash/ConfigureWash";

function ProfitabilityCalculator() {

    const t = useTranslations("profitability-calculator");

    return (
        <div>

            <section className={s.sectionBread}>
                <div className='main-container'>
                    <ul className={`bread-crumbs-project`}>
                        <li style={{marginLeft: '0'}}>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            <span>{t("calculator1")}</span>
                        </li>
                    </ul>
                </div>
            </section>

            <FixManu3 active={4}/>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.padding}>
                        <div className='section-header'>
                            <h1>
                                <small></small>
                                <strong>Калькулятор рентабельності</strong>
                            </h1>
                        </div>
                        <div className={s.text_table}>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            { ConfigureWash() }

            <section className={s.section_brown}>
                <div className="main-container">
                    <div className={s.text_block}>
                        <h2>Скільки заробляє безконтактна мийка?</h2>
                        <p>
                            Дізнайся всю правду про заробіток на безконтактній мийці. Подивіться 3 різні приклади
                            інвестицій в автомийки в Щецині та оборот, який вони створюють.
                        </p>
                    </div>
                    <div className={s.video_block}>
                        <iframe
                            src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                            title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ProfitabilityCalculator;