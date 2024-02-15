import s from '../privacy-policy/privacyPolicy.module.css'
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";


function LegalDisclaimer() {

    const t = useTranslations("legal-disclaimers");

    return (
        <div>

            <section className={s.sectionBread}>
                <div className='main-container' style={{height: 'auto'}}>
                    <ul className={`bread-crumbs ${s.crambs} ${s.addClass}`}>
                        <li style={{marginLeft: '0'}} className={s.addClass}>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li className={s.addClass}>
                            {t("legal")}
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.mainSection}>
                <div className='main-container' style={{height: 'auto'}}>
                    <div className={s.text_box}>
                        <h1 className={s.addClassH2}>{t("h2")}</h1>
                        <p className={s.p}>{t("p")}</p>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default LegalDisclaimer;