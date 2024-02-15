import s from './privacyPolicy.module.css';
import {useTranslations} from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";


function PrivacyPolicy() {

    const t = useTranslations("privacy-policy");

    return (
        <div>

            <section className='head-image'>
                <Image src='/other/confident.jpg' alt='' width={1900} height={300} priority/>
                <div className='main-container'>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("privacy-policy")}
                        </li>
                    </ul>
                    <h1>{t("privacy-policy")}</h1>
                </div>
            </section>

            <section className={s.mainSection}>
                <div className='main-container' style={{height: 'auto'}}>
                    <div className={s.text_box}>

                        <h2>{t("a")}</h2>

                        <p>{t("a1")}</p>
                        <p>{t("a2")}</p>

                        <h2>{t("b")}</h2>

                        <p>{t("b1")} ( <Link href={'/'}>https://samwash.ua/</Link> )</p>

                        <h2>{t("c")}</h2>

                        <div>
                            <div>
                                <p>{t("c1")}</p>
                                <p>{t("c2")}</p>
                                <p>{t("c3")}</p>
                                <p>{t("c4")}</p>
                                <p>{t("c5")}</p>
                                <p>{t("c6")}</p>
                                <p>{t("c7")}</p>
                            </div>
                            <div>
                                <p>{t("c8")}</p>
                                <p>{t("c9")}</p>
                                <p>{t("c10")}</p>
                                <p>{t("c11")}</p>
                                <p>{t("c12")}</p>
                            </div>
                        </div>

                        <h2>{t("d")}</h2>

                        <div>
                            <div>
                                <p>{t("d1")}</p>
                                <p>{t("d2")}</p>
                                <p>{t("d3")}</p>
                                <p>{t("d4")}</p>
                                <p>{t("d5")}</p>
                                <p>{t("d6")}</p>
                                <p>{t("d7")}</p>
                                <p>{t("d8")}</p>
                                <p>{t("d9")}</p>
                                <p>{t("d10")}</p>
                                <p>{t("d11")}</p>
                                <p>{t("d12")}</p>
                            </div>
                            <div>
                                <p>{t("d13")}</p>
                                <p>{t("d14")}</p>
                                <p>{t("d15")}</p>
                                <p>{t("d16")}</p>
                                <p>{t("d17")}</p>
                                <p>{t("d18")}</p>
                                <p>{t("d19")}</p>
                                <p>{t("d20")}</p>
                            </div>
                        </div>

                        <h2>{t("f")}</h2>

                        <div>
                            <div>
                                <p>{t("f1")}</p>
                                <p>{t("f2")}</p>
                                <p>{t("f3")}</p>
                                <p>{t("f4")}</p>
                                <p>{t("f5")}</p>
                            </div>
                            <div>
                                <p>{t("f6")}</p>
                                <p>{t("f7")}</p>
                                <p>{t("f8")}</p>
                            </div>
                        </div>

                        <h2>{t("e")}</h2>

                        <div>
                            <div>
                                <p>{t("e1")}</p>
                                <p>{t("e2")}</p>
                                <p>{t("e3")}</p>
                            </div>
                            <div>
                                <p>{t("e4")}</p>
                                <p>{t("e5")}</p>
                            </div>
                        </div>

                        <h2>{t("g")}</h2>

                        <div>
                            <p>{t("g1")}</p>
                            <p>{t("g2")}</p>
                        </div>

                        <h2>{t("l")}</h2>

                        <div>
                            <p>{t("l1")}</p>
                            <p>{t("l2")}</p>
                        </div>

                        <h2>{t("m")}</h2>

                        <p>{t("m1")}</p>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default PrivacyPolicy;