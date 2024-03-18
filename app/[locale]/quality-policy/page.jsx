import s from './privacyPolicy.module.css';
import {useTranslations} from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";


function QualityPolicy() {

    const t = useTranslations("quality-policy");

    return (
        <div>

            <section className={s.sectionBread}>
                <div className='main-container'>
                    <ul className={`bread-crumbs-project`}>
                        <li style={{marginLeft: '0'}}>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            <span>{t("quality1")}</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.section}>
                <div className='main-container'>
                    <div className={s.div_text}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Інтегрована політика якості, охорони праці та охорони навколишнього
                                    середовища</strong>
                            </h2>
                        </div>
                        <p>
                            SAMWASH визначила та задокументувала Політику системи управління якістю, безпекою праці та
                            захистом навколишнього середовища. Політика включає цілі та зобов'язання щодо забезпечення
                            якості та безпеки праці у виробництві продукції та наданні послуг при дотриманні принципів
                            мінімізації викидів у природне середовище. Політика пов’язана з операційними цілями BKF,
                            економічним розрахунком SAMWASH та очікуваннями та потребами зацікавлених сторін. Політика
                            була затверджена Правлінням і доведена до відома працівників. Співробітники розуміють і
                            виконують політику. Політика переглядається для контролю за виконанням поставлених цілей.
                            Зміст Політики наведено нижче.
                        </p>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className='main-container'>
                    <div className={s.div_text}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Політика якості</strong>
                            </h2>
                        </div>
                        <p>
                            Ми є виробником безконтактних мийок та систем килимків. Також займаємося
                            розповсюдженням клінінгового обладнання. Наша діяльність на сьогоднішній день дозволила нам
                            досягти значної позиції в галузі, і наша мета - закріпити цю позицію серед існуючих і
                            потенційних клієнтів на внутрішньому та зовнішньому ринках.
                        </p>
                        <p>
                            Основною метою компанії є надання сучасної високоякісної продукції та забезпечення безпечної
                            експлуатації при дотриманні принципів мінімізації викидів у природне середовище. Організація
                            здійснює моніторинг і адаптацію до вимог зацікавлених сторін з точки зору законодавчих
                            положень, стандартів, вимог клієнтів і власних вимог. Для підприємства важливо забезпечити
                            безпечні умови праці персоналу та здійснювати моніторинг значущих аспектів навколишнього
                            середовища за масштабами та характером впливу на навколишнє середовище.
                        </p>
                        <p>Ми хочемо досягти цієї мети шляхом:</p>
                        <ul>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                створення безпечного, дружнього та надихаючого робочого середовища з
                                урахуванням думки та участі співробітників компанії,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                запобігання нещасним випадкам, професійним захворюванням і ризикованим нещасним
                                випадкам шляхом постійного вдосконалення гігієни та безпеки праці,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                забезпечення максимально можливого доходу, пристосованого до ринкових умов,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                постійне вдосконалення пропонованих продуктів і послуг,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                постійне вдосконалення процесів, що відбуваються в компанії,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                диверсифікація джерел доходу для забезпечення фінансової ліквідності та
                                стабільного становища компанії,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                навчання та підвищення кваліфікації персоналу,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                проектування, виробництво та постачання продуктів, які є безпечними для
                                використання на всіх етапах виробництва та для кінцевого споживача,
                            </li>
                            <li>
                                <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                участь у заходах із охорони здоров’я та безпеки, мінімізації відходів та скорочення
                                викидів шляхом формування ставлення та підвищення обізнаності працівників у цих сферах.
                            </li>
                        </ul>
                        <p>
                            Виходячи з наведених вище припущень, керівництво підприємства ставить конкретні цілі, які
                            мають бути досягнуті в наступні планові періоди. Ці цілі покликані допомогти оцінити та
                            вдосконалити кроки, спрямовані на впровадження політики якості, безпеки праці та захисту
                            навколишнього середовища. Організація проводить оцінку ризиків щодо цілей і процесів. У той
                            же час керівництво гарантує, що як компанія докладає всіх зусиль для забезпечення дотримання
                            положень чинного законодавства у своїй господарській діяльності та впровадження процесів
                            управління, безпеки та праці відповідно до вимог PN- Стандарти ISO 9001, PN-ISO 45001,
                            PN-ISO 14001.
                        </p>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className='main-container'>
                    <div className={s.div_text}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Сертифікати</strong>
                            </h2>
                        </div>
                        <div className={s.doc_div}>
                            <div className={s.item}>
                                <Image src='/other/svg/doc_icon.svg' alt='' width={55} height={55} />
                                <h2>СЕРТИФІКАТ УПРАВЛІННЯ ЯКІСТЮ</h2>
                                <Link className={`${s.red_text_btn} btn`}
                                      href={`https://bkfmyjnie.pl/wp-content/uploads/sites/2/2021/01/certyfikat-jakosci.pdf`}>
                                    Завантажте документ
                                </Link>
                            </div>
                            <div className={s.item}>
                                <Image src='/other/svg/doc_icon.svg' alt='' width={55} height={55} />
                                <h2>СЕРТИФІКАТ З ОХОРОНИ ПРАЦІ</h2>
                                <Link className={`${s.red_text_btn} btn`}
                                      href={`https://bkfmyjnie.pl/wp-content/uploads/sites/2/2023/09/certyfikat-bhp-2022.pdf`}>
                                    Завантажте документ
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default QualityPolicy;