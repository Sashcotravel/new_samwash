import s from './footer.module.css';
import Image from "next/image";
import Link from "next-intl/link";
import {useTranslations} from "next-intl";

function Footer() {

    const t = useTranslations("footer");

    return (
        <footer className={s.footerDiv}>
            <Image src='/footer.jpg' alt='samwash' width={1100} height={11000} className={s.imageFooter}/>
            <div className={s.footerMain}>
                <ul>
                    <li>
                        <Link href='/'>{t("footer1")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("footer2")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("footer3")}</Link>
                    </li>
                    <li>
                        <Link href='/'>{t("footer4")}</Link>
                    </li>
                    <li>
                        <Link href='/privacy-policy'>{t("footer5")}</Link>
                    </li>
                    <li>
                        <Link href='/legal-disclaimers'>{t("footer6")}</Link>
                    </li>
                </ul>
            </div>
            <div className={s.footer_logo}>
                <Link href='/'>
                    <Image src='/new_logo.svg' alt='samwash' className={s.logo} width={10} height={10}/>
                </Link>
            </div>
            <div className={s.info}>
                <div className={s.divInfo}>
                    <span>БКФ Автомийка | </span>
                    <a href="tel:0975794930">tel. +38 097 579 4930</a><span> | </span>
                    <Link href="/biuro@bkf.pl">biuro@bkf.pl</Link>
                </div>
                <div className={s.divInfoSoc}>
                    <font>Skarbimierzyce 22, 72-002 Dołuje k/Szczecin | NIP: 782-237-01-46, KRS: 0000262269</font>
                    <div className={s.soc}>
                        <a href='https://www.facebook.com/samwashcarwash' target='_blank'>
                            <Image src='/header/soc/facebook.svg' alt="Facebook"
                                   width={10} height={10}/>
                        </a>

                        <a href='https://www.instagram.com/samwash_carwash/' target='_blank'>
                            <Image src='/header/soc/instagram.svg' alt="Instagram"
                                   width={10} height={10}/>
                        </a>

                        <a href={'https://maps.app.goo.gl/Wy7g6KUUGf4VWwme6?g_st=it'} target='_blank'>

                            <Image src='/header/soc/gmap.svg' alt="gmap"
                                   width={10} height={10}/>

                        </a>

                        <a href={'https://www.youtube.com/@samwash'} target='_blank'>
                            <Image src='/header/soc/youtube.svg' alt="YouTube"
                                   width={10} height={10}/>
                        </a>

                        <a href={'https://www.tiktok.com/@samwash.official'} target='_blank'>
                            <Image src='/header/soc/tik-tok.svg' alt='tiktok'
                                   width={10} height={10}/>
                        </a>
                    </div>
                </div>
                <div className={s.oc}>
                    <p>Copyright © 2019 BKF Sp. z o.o. Wszystkie prawa zastrzeżone.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;