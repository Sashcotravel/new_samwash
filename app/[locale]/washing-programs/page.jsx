import s from './washing.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";


function Dispenser() {

    const t = useTranslations("washing-programs");


    return (
        <div>

            <section className='head-image'>
                <Image src='/washing-programs/washing.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("programs1")}
                        </li>
                    </ul>
                    <h1>{t("programs1")}</h1>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>УНІКАЛЬНА ТЕХНОЛОГІЯ ПРАННЯ</small>
                            <strong>Комплексна програма догляду за автомобілем</strong>
                        </h2>
                    </div>
                    <div className={s.div_frame}>
                        <iframe
                            src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                            title="Управління освітою автомийки" loading="lazy" className={s.frame}/>
                    </div>
                    <div className={s.div_text}>
                        <p>
                            Завдяки багаторічному досвіду та тісній співпраці з компанією Tenzi нам вдалося створити
                            унікальну систему безконтактної мийки. Співпраця наших інженерів і хімічних технологів
                            нашого партнера призвела до розробки програм миття, які поєднують відповідні пропорції таких
                            факторів, як тиск, температура, хімікати та демінералізована вода.
                        </p>
                    </div>
                </div>
            </section>

            <section className={s.section2}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Програми прання – стандартні</strong>
                        </h2>
                    </div>
                    <div className={s.divItems}>
                        <div className={s.third_column}>
                            <ul>
                                <li>
                                    <Image src='/washing-programs/li_icon1.svg' alt='' width={90} height={90}/>
                                    <span>Основне прання</span>
                                    <p>
                                        <b>БЕЗКОНТАКТОВЕ МИЙНЕ ПІД ТИСКОМ</b>. Тепла, пом'якшена фільтрована вода з
                                        додаванням рідких хімікатів (шампунь) або хімічно нейтральний до лаку порошок
                                        дозволяє видалити стійкі забруднення (включаючи комах).
                                    </p>
                                </li>
                                <li>
                                    <Image src='/washing-programs/li_icon2.svg' alt='' width={90} height={90}/>
                                    <span>Почервоніння</span>
                                    <p>
                                        <b>ПІДГОТОВКА ДО ОБСЛУГОВУВАННЯ</b>. Видалення бруду та залишків хімікатів
                                        після безконтактного прання. Бруд змивається холодною водою.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_box}>
                                <Image src='/washing-programs/car.png' alt='' width={600} height={800}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.rightUl}>
                                <li>
                                    <Image src='/washing-programs/li_icon3.svg' alt='' width={90} height={90}/>
                                    <span>Консервація полімерів</span>
                                    <p>
                                        <b>ЗАХИСТ ФАРБИ</b>. Вода фільтрована, пом'якшена - з полімером останнього
                                        покоління, що покриває чисту фарбу тонким твердим шаром. Завдяки високій
                                        температурі він «прилипає» до фарби. Систематичний полімерний догляд захищає
                                        кузов автомобіля від бруду та шкідливих погодних умов (води, сонця), запобігає
                                        осіданню пилу та піску.
                                    </p>
                                </li>
                                <li>
                                    <Image src='/washing-programs/li_icon4.svg' alt='' width={90} height={90}/>
                                    <span>Полірування та сушка</span>
                                    <p>
                                        <b>БЛИСК БЕЗ ПЛЯМ</b>. Ополіскування кузова пом'якшеною водою без мінералів
                                        (демінералізована) дозволяє досягти ефекту без плям і смуг. Крім того,
                                        використання сушильно-полірувального агента в автомийках типу BKF CarWash
                                        залишає ефект блиску та позбавляє від необхідності протирати або сушити
                                        автомобіль.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_back}>
                <Image src='/washing-programs/backgrounds.jpg' alt='' width={2600} height={800}/>
                <div className={s.half_div_text}>
                    <div className='section-header'>
                        <h2>
                            <small style={{color: '#e2e2e2'}}>НЕХАЙ ВАШІ КЛІЄНТИ ВІДЧУЮТЬ РІЗНИЦЮ</small>
                            <strong style={{color: 'white'}}>Активна піна</strong>
                        </h2>
                        <p style={{color: 'white', marginBottom: '20px'}}>
                            Не дозвольте конкуренції обігнати вас і забезпечте своїм клієнтам найвищу якість миття за
                            допомогою програми Active Foam на вашій автомийці.
                        </p>
                        <p style={{color: 'white', marginBottom: '20px'}}>
                            Спеціальний пістолет виробляє вражаючу густу піну, яка щільно покриває весь автомобіль.
                            Завдяки цьому активні частинки, що містяться в піні, пом'якшують навіть стійкі забруднення
                            та полегшують базове прання.
                        </p>
                    </div>
                    <ButtonRedArrowRight text='chemicals' link='/' clas='add_img'/>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.div_prog}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Програми прання – доп</strong>
                            </h2>
                        </div>
                        <div className={s.prog}>
                            <div className={s.div_image2}>
                                <Image src='/washing-programs/icon1.svg' alt='' width={120} height={120}/>
                            </div>
                            <div className={s.text}>
                                <h2>Попереднє обприскування</h2>
                                <p><b>розм'якшення бруду</b></p>
                                <p>Нанесення хімічного засобу пом'якшеною водою, підготовка до безконтактного
                                    прання (розм'якшення сильних забруднень).</p>
                            </div>
                        </div>
                        <div className={s.prog}>
                            <div className={s.div_image2}>
                                <Image src='/washing-programs/icon2.svg' alt='' width={120} height={120}/>
                            </div>
                            <div className={s.text}>
                                <h2>Миття щіткою</h2>
                                <p><b>очищення</b></p>
                                <p>Миття щіткою з активним шампунем. Видаляє особливо важкі забруднення і не
                                    пошкоджує фарбу.</p>
                            </div>
                        </div>
                        <div className={s.prog}>
                            <div className={s.div_image2}>
                                <Image src='/washing-programs/icon3.svg' alt='' width={120} height={120}/>
                            </div>
                            <div className={s.text}>
                                <h2>Миття турбощіткою</h2>
                                <p><b>очищення</b></p>
                                <p>Миття щіткою з активним шампунем під сильним тиском. Видаляє особливо важкі
                                    забруднення, не пошкоджує фарбу, утворює дуже густу піну.</p>
                            </div>
                        </div>
                        <div className={s.prog}>
                            <div className={s.div_image2}>
                                <Image src='/washing-programs/icon4.svg' alt='' width={120} height={120}/>
                            </div>
                            <div className={s.text}>
                                <h2>Активна піна</h2>
                                <p><b>пом'якшення стійких забруднень</b></p>
                                <p>Холодна вода під високим тиском з активною піною розм'якшує стійкі забруднення. Піна
                                    наноситься за допомогою спеціальної фурми.</p>
                            </div>
                        </div>
                        <div className={s.prog}>
                            <div className={s.div_image2}>
                                <Image src='/washing-programs/icon5.svg' alt='' width={120} height={120}/>
                            </div>
                            <div className={s.text}>
                                <h2>Напилювальні диски</h2>
                                <p>Програма для напилення дисків - сталевих, алюмінієвих. Допомагає видалити стійкий
                                    бруд з гальмівних колодок. Його також можна використовувати для видалення комах
                                    (використовуючи відповідний хімічний засіб).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.blur_section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small style={{color: 'white'}}>ГАРАНТІЯ НАЙВИЩОЇ ЯКОСТІ ПРАННЯ</small>
                            <strong style={{color: 'white'}}>SAMWASH хімікати</strong>
                        </h2>
                    </div>
                    <div className={s.two_div}>
                        <div className={s.div_text2}>
                            <p>
                                Пропозицію SAMWASH доповнює повний спектр хімікатів для безконтактних і портальних
                                мийок. Спеціально для потреб автомийок фірми BKF у співпраці з досвідченим польським
                                виробником професійної миючої хімії створено висококласну хімію.
                            </p>
                            <p>
                                Дізнайтеся більше про хімічні речовини SAMWASH.
                            </p>
                            <div>
                                <ButtonRedArrowRight text='cleaning-products' link='/'/>
                            </div>
                        </div>
                        <div className={s.div_image}>
                            <Image src='/washing-programs/chemistri.png' alt='' width={500} height={500}/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Dispenser;