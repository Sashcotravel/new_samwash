import s from './chemistry.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import FixManu2 from "@/app/component/fixManu2/FixManu2";
import ButtonRedArrowRight from "@/app/buttons/redButton/buttonRedArrowRight";

function Chemistry() {

    const t = useTranslations("chemistry");

    return (
        <div>

            <section className='head-image'>
                <Image src='/chemistry/chemistry.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("chemistry1")}
                        </li>
                    </ul>
                    <h1>{t("chemistry1")}</h1>
                </div>
            </section>

            <FixManu2 active={5}/>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Хімічні засоби для автомийок</strong>
                        </h2>
                    </div>
                    <div className={s.div_video}>
                        <div className={s.half_div}>
                            <p>
                                Комплексну пропозицію SAMWASH доповнює <b>повний спектр спеціальних хімікатів для
                                безконтактних і портальних мийок автомобілів</b>. Спеціально для потреб автомийок
                                SAMWASH у співпраці з досвідченим польським виробником професійної миючої хімії була
                                створена серія висококласних хімікатів.
                            </p>
                            <p>
                                Чистячі засоби SAMWASH надзвичайно ефективні для видалення будь-якого дорожнього бруду.
                                Продукти безпечні як для фарби, так і для інших чутливих компонентів автомобіля. Крім
                                того, вони екологічно чисті.
                            </p>
                        </div>
                        <div className={s.half_div}>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Хімічні засоби для автомийок" loading="lazy" className={s.frame}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.gray_section}>
                <div className="main-container">
                    <div className={s.text}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Шампуні, попереднє розпилення</strong>
                            </h2>
                        </div>
                        <div className={s.div_shop}>
                            <div className={s.item}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>TurboPlus</span> <br/>
                                    <span className={s.span2}>Мийка вантажівок (шампунь)</span>
                                </p>
                                <p>Концентрований засіб для миття вантажівок.</p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        ефективно пом'якшує забруднення
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        висококонцентрований
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        безпечний для фарби
                                    </li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Турбо</span> <br/>
                                    <span className={s.span2}>Регулярне миття автомобіля (шампунь)</span>
                                </p>
                                <p>Високоефективний лужний миючий засіб для кузовів легкових автомобілів,
                                    мікроавтобусів і автобусів.</p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        готовий до використання
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        полегшує основне прання
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        безпечний для фарби
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.div_but}>
                            <ButtonRedArrowRight text={'shopShampoos'} link={'/'}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Активна піна</strong>
                            </h2>
                        </div>
                        <div className={s.div_shop}>
                            <div className={s.item + ' ' + s.quarter}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Снігова Піна</span> <br/>
                                    <span className={s.span2}></span>
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        суперконцентрована піна
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        чудово розчиняє всі види забруднень
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        безпечний для фарби
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        знижена кількість фосфатів
                                    </li>
                                </ul>
                            </div>
                            <div className={s.item + ' ' + s.quarter}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Funky Foam</span>
                                    <span className={s.span2}></span>
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        густа різнокольорова піна
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        інтенсивний аромат
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        безпечний для фарби
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        легко змивається
                                    </li>
                                </ul>
                            </div>
                            <div className={s.item + ' ' + s.quarter}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Синя піна</span>
                                    <span className={s.span2}></span>
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        густа різнокольорова піна
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        інтенсивний аромат
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        безпечний для фарби
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        легко змивається
                                    </li>
                                </ul>
                            </div>
                            <div className={s.item + ' ' + s.quarter}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Green Alka Foam</span>
                                    <span className={s.span2}></span>
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        зелена піна з лужним pH
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        чудово розчиняє всі види забруднень
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        запах зеленого яблука
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        безпечний для фарби
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.div_but}>
                            <ButtonRedArrowRight text={'shopShampoos'} link={'/'}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.blue_section}>
                <div className="main-container">
                    <div className={s.text}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong style={{color: 'white'}}>Перегляньте відео</strong>
                            </h2>
                        </div>
                        <div className={s.div_video}>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітою автомийки" loading="lazy" className={s.frame2}/>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітою автомийки" loading="lazy" className={s.frame2}/>
                            <iframe
                                src="https://www.youtube.com/embed/OJv67JG7QRo?autoplay=0&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0"
                                title="Управління освітою автомийки" loading="lazy" className={s.frame2}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Основні пральні порошки</strong>
                            </h2>
                        </div>
                        <div className={s.div_shop}>
                            <div className={s.item}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Пудра Ultra Fresh</span>
                                    <span className={s.span2}></span>
                                </p>
                                <p>
                                    Ароматний порошкоподібний препарат з мікрогранулами для миття під тиском легкових
                                    автомобілів і транспортних засобів на безконтактних мийках.
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        найвища продуктивність
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        приємний, свіжий аромат
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        захищає фарбу
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        не залишає смуг
                                    </li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Порошок ЛФ</span>
                                    <span className={s.span2}></span>
                                </p>
                                <p>
                                    Порошкоподібний препарат з мікрогранулами зі зниженим вмістом фосфатів, для мийки
                                    під тиском легкових автомобілів і транспортних засобів доставки на безконтактних
                                    мийках.
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        добре розчинний
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        ніжний цитрусовий аромат
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        висока ефективність
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        сильно піниться
                                    </li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Порошок Апельсин FF</span>
                                    <span className={s.span2}></span>
                                </p>
                                <p>
                                    Екологічний порошкоподібний препарат з мікрогранулами для миття під тиском
                                    легкових автомобілів і транспортних засобів на безконтактних мийках.
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        не містить фосфатів
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        ніжний апельсиновий аромат
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        хороша ефективність і миючі властивості
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        не залишає смуг
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.div_but}>
                            <ButtonRedArrowRight text={'shopShampoos'} link={'/'}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.gray_section}>
                <div className="main-container">
                    <div className={s.text}>
                        <div className="section-header">
                            <h2>
                                <small></small>
                                <strong>Інші хімікати</strong>
                            </h2>
                        </div>
                        <div className={s.div_shop}>
                            <div className={s.item}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Alu Ultra</span> <br/>
                                    <span className={s.span2}>диски та ковпаки – щоденне миття</span>
                                </p>
                                <p>
                                    Концентрований лужний препарат для видалення забруднень, спричинених використанням,
                                    таких як покриття гальмівних колодок, ободів і ковпаків.
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        видаляє відкладення з гальмівних колодок
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        безпечний для алюмінієвих дисків
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        висококонцентрований
                                    </li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Небесний віск</span> <br/>
                                    <span className={s.span2}>фарба та кузов – полірування та сушка</span>
                                </p>
                                <p>
                                    Блискуче просочення для автотранспорту. Ідеально захищає фарби автомобіля
                                    від негативного впливу погодних умов. Ефект зливу води з кузова.
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        висихає автоматично, без додаткового потоку повітря
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        тривалий ефект
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        висококонцентрований
                                    </li>
                                </ul>
                            </div>
                            <div className={s.item}>
                                <Image src='/chemistry/bak.png' alt='' width={400} height={400}/>
                                <p>
                                    <span>Tex Pro</span> <br/>
                                    <span className={s.span2}>килими та оббивка – екстракційне прання</span>
                                </p>
                                <p>
                                    Препарат призначений для прання автомобільних сидінь, килимів і
                                    оббивки методом «сухої піни».
                                </p>
                                <ul>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        чистить і доглядає
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        знежирюючі властивості
                                    </li>
                                    <li>
                                        <Image src='/program/arrow.png' alt='arrow' width={10} height={10}/>
                                        безпечний для кольорів
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.div_but}>
                            <ButtonRedArrowRight text={'shopShampoos'} link={'/'}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.background_section}>
                <div className="main-container">
                    <div className={s.two_div}>
                        <div className={s.image_div}>
                            <Image src='/chemistry/laptop.png' alt='' width={1000} height={700}/>
                        </div>
                    </div>
                    <div className={s.two_div}>
                        <div className={s.text_block}>
                            <div className="section-header">
                                <h2>
                                    <small style={{color: 'white'}}>ЗРУЧНО ЗАМОВЛЯЙТЕ ОНЛАЙН</small>
                                    <strong style={{color: 'white'}}>Панель контрагента</strong>
                                </h2>
                                <p style={{color: 'white', lineHeight: '1.5'}}>
                                    Ми пропонуємо професійну B2B платформу, яка дозволяє швидко та зручно купувати
                                    хімікати та запчастини для вашої автомийки онлайн. Використовуючи веб-браузер, ви
                                    отримуєте доступ до завжди актуальної комерційної пропозиції, до якої ви можете
                                    отримати доступ з будь-якого місця в будь-який час. Ви також можете використовувати
                                    платформу на своєму телефоні!
                                </p>
                                <p style={{color: 'white', lineHeight: '1.5'}}>
                                    Якщо у вас ще немає облікового запису, зв’яжіться з відділом продажів: <br/>
                                    <a style={{color: 'red'}} href="tel:0975794930">097 579 4930</a> <br/>
                                    <a style={{color: 'red'}} href="mailto:info@samwash.ua"><span>samwash.ua</span></a>
                                </p>
                            </div>
                            <div className={s.div_but}>
                                <ButtonRedArrowRight text={'shopShampoos'} link={'/'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Chemistry;