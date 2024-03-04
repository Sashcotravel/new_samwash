import s from './vacuumeForCar.module.css';
import {useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import FixManu2 from "@/app/component/fixManu2/FixManu2";


function VacuumeForCar() {

    const t = useTranslations("vacuume");


    return (
        <div>

            <section className='head-image'>
                <Image src='/vacuume/vacuume.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("vacuume1")}
                        </li>
                    </ul>
                    <h1>{t("vacuume1")}</h1>
                </div>
            </section>

            <FixManu2 active={2}/>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text_block}>
                        <div className="section-header">
                            <h2>
                                <small style={{color: '#777'}}>НАДІЙНІ ПИЛОСОСИ Samwash</small>
                                <strong>Станція комплексного очищення транспортних засобів</strong>
                            </h2>
                        </div>
                        <p>
                            Пилососи Samwash - це стаціонарні пристрої самообслуговування, які активуються монетою,
                            жетоном або карткою лояльності/платіжної картки, додаток Beloyal.
                            Одно- або двостанційна, використовується для миття салонів транспортних засобів.
                            Виготовлені з нержавіючої сталі, <b>оснащені потужними промисловими або професійними
                            турбінами та великими баками для відходів,</b> вони гарантують тривалу та ефективну роботу
                            та повне задоволення користувачів.
                        </p>
                        <p>
                            <Image src='/vacuume/foto.jpg' alt='' width={1900} height={300}/>
                        </p>
                    </div>
                </div>
            </section>

            <section className={s.gray_background}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Переваги наявності пилососа на автомийці</strong>
                        </h2>
                    </div>
                    <ul className={s.features}>
                        <li>
                            <div className={s.circle_icon}>
                                <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                            </div>
                            <p>Ви надасте клієнтам комплексну пропозицію на вашій автомийці.</p>
                        </li>
                        <li>
                            <div className={s.circle_icon}>
                                <Image src='/vacuume/svg2.svg' alt='' width={300} height={300}/>
                            </div>
                            <p>Ви надасте клієнтам комплексну пропозицію на вашій автомийці.</p>
                        </li>
                        <li>
                            <div className={s.circle_icon}>
                                <Image src='/vacuume/svg3.svg' alt='' width={300} height={300}/>
                            </div>
                            <p>Ви надасте клієнтам комплексну пропозицію на вашій автомийці.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className={s.text_block}>
                        <div className="section-header">
                            <h2>
                                <small style={{color: '#777'}}>ПИЛОСОСИ SAMWASH</small>
                                <strong>Виберіть пилосос, який відповідає вашим вимогам</strong>
                            </h2>
                        </div>
                        <table className={s.table}>
                            <thead>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <Image src='/vacuume/vacuume1.png' alt='' width={300} height={300}/>
                                </td>
                                <td>
                                    <Image src='/vacuume/vacuume2.png' alt='' width={300} height={300}/>
                                </td>
                                <td>
                                    <Image src='/vacuume/vacuume3.png' alt='' width={300} height={300}/>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>
                                    <h3>
                                        Базове <br/>
                                        <small>для хорошого початку</small>
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Basic Plus <br/>
                                        <small>оптимальний</small>
                                    </h3>
                                </td>
                                <td>
                                    <h3>
                                        Преміум <br/>
                                        <small>для вимогливих клієнтів</small>
                                    </h3>
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Блок живлення</td>
                                <td>230В</td>
                                <td>230В</td>
                                <td>230 або 400 В</td>
                            </tr>
                            <tr>
                                <td>Справа</td>
                                <td>нержавіюча сталь</td>
                                <td>нержавіюча сталь</td>
                                <td>нержавіюча сталь</td>
                            </tr>
                            <tr>
                                <td>Розмір</td>
                                <td>компактний</td>
                                <td>компактний</td>
                                <td>великий</td>
                            </tr>
                            <tr>
                                <td>Номінальна місткість бака</td>
                                <td>32 роки</td>
                                <td>32 роки</td>
                                <td>62 роки</td>
                            </tr>
                            <tr>
                                <td>Стріли</td>
                                <td>НІ</td>
                                <td>так (балансир)</td>
                                <td>так (з пружиною)</td>
                            </tr>
                            <tr>
                                <td>Компресор</td>
                                <td>НІ</td>
                                <td>НІ</td>
                                <td>так (варіант)</td>
                            </tr>
                            <tr>
                                <td>Дисплей</td>
                                <td>НІ</td>
                                <td>Так</td>
                                <td>Так</td>
                            </tr>
                            <tr>
                                <td>Світлодіодне освітлення</td>
                                <td>НІ</td>
                                <td>НІ</td>
                                <td>Так</td>
                            </tr>
                            <tr>
                                <td>Підтримка монет</td>
                                <td>1 номінал</td>
                                <td>багато конфесій</td>
                                <td>багато конфесій</td>
                            </tr>
                            <tr>
                                <td>Підтримка карт лояльності</td>
                                <td>НІ</td>
                                <td>так (варіант)</td>
                                <td>так (варіант)</td>
                            </tr>
                            <tr>
                                <td>Підтримка платіжних карток</td>
                                <td>НІ</td>
                                <td>так (варіант)</td>
                                <td>так (варіант)</td>
                            </tr>
                            <tr>
                                <td>Be Loyal</td>
                                <td>НІ</td>
                                <td>так (варіант)</td>
                                <td>так (варіант)</td>
                            </tr>
                            <tr>
                                <td>Підключення до Carwash Manager</td>
                                <td>НІ</td>
                                <td>НІ</td>
                                <td>так (варіант)</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className={s.navy_background}>
                <div className="main-container">
                    <div className={s.gallery_reel_wrapper}>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                        <div className={s.gallery_reel_item}>
                            <Image src='/vacuume/svg1.svg' alt='' width={300} height={300}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section_margin_bottom_small}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ПОТУЖНІСТЬ І ЯКІСТЬ БЕЗ КОМПРОМІСІВ</small>
                            <strong>Пилосос SAMWASH Premium</strong>
                        </h2>
                    </div>
                    <div className={s.two_column}>
                        <div className={s.third_column}>
                            <ul>
                                <li>
                                    <span><strong>Корпус з нержавіючої сталі</strong></span>
                                    <p>Гарантує стійкість до мінливих погодних умов і елегантний зовнішній вигляд.</p>
                                </li>
                                <li>
                                    <span><strong>Промислові турбіни</strong></span>
                                    <p>Промислові довговічні всмоктувальні турбіни, що живляться від 400 В, є одночасно
                                        гарантією задоволення клієнтів автомийки та гарантією тривалої роботи.</p>
                                </li>
                                <li>
                                    <span><strong>Великі сміттєві баки</strong></span>
                                    <p>Довга і ефективна робота пристрою без необхідності частого спорожнення бака.</p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_wrapper}>
                                <Image src='/vacuume/vacuume3.png' alt='' width={500} height={500}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.dispenser_list_reverse}>
                                <li>
                                    <span><strong>Можлива повна персоналізація</strong></span>
                                    <p>За бажанням замовника на пилосос може бути розміщений логотип або товарний
                                        знак.</p>
                                </li>
                                <li>
                                    <span><strong>Електронний монетоприймач</strong></span>
                                    <p>За замовчуванням він підтримує монети номіналом 1, 2 і 5 злотих, а також жетони
                                        номіналом 2 і 5 злотих.</p>
                                </li>
                                <li>
                                    <span><strong>Можливість моніторингу з рівня менеджера автомийки</strong></span>
                                    <p>Технічний стан, популярність послуги серед клієнтів автомийки, ефективність і
                                        середній час мийки - це лише деякі з параметрів, які ви зможете контролювати на
                                        своєму комп'ютері.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.section}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small>ВІДМІННІ РОБОЧІ ПАРАМЕТРИ В КОМПАКТНОМУ КОРПУСІ</small>
                            <strong>Пилососи Basic / Basic Plus</strong>
                        </h2>
                    </div>
                    <div className={s.two_column}>
                        <div className={s.third_column}>
                            <ul>
                                <li>
                                    <span><strong>Корпус з нержавіючої сталі</strong></span>
                                    <p>Гарантує стійкість до мінливих погодних умов і елегантний зовнішній вигляд.</p>
                                </li>
                                <li>
                                    <span><strong>Компактні розміри</strong></span>
                                    <p>Менша турбіна з резервуаром для відходів впливає на кінцевий зовнішній вигляд
                                        пилососа, що призводить до більшої економії місця.</p>
                                </li>
                            </ul>
                        </div>
                        <div className={s.third_column}>
                            <div className={s.image_wrapper}>
                                <Image src='/vacuume/vacuume2.png' alt='' width={500} height={500}/>
                            </div>
                        </div>
                        <div className={s.third_column}>
                            <ul className={s.dispenser_list_reverse}>
                                <li>
                                    <span><strong>Професійні турбіни</strong></span>
                                    <p>Професійні всмоктувальні турбіни, що живляться від мережі 230 В, є одночасно
                                        гарантією задоволення клієнтів автомийки та гарантією комфортної роботи.</p>
                                </li>
                                <li>
                                    <span><strong>Можлива будь-яка конфігурація</strong></span>
                                    <p>Широкий вибір доступних опцій (у версії BASIC Plus): дисплей, штанга з
                                        балансиром, підтримка додаткових номіналів, підтримка карт лояльності,
                                        підключення до програми BE LOYAL.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.gray_background}>
                <div className="main-container">
                    <div className="section-header">
                        <h2>
                            <small></small>
                            <strong>Доступні конфігурації</strong>
                        </h2>
                    </div>

                </div>
            </section>

        </div>
);
}

export default VacuumeForCar;