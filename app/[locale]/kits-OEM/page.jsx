import s from './kits.module.css';
import FixManu4 from "@/app/component/fixManu4/FixManu4";
import Image from "next/image";
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
import FormUserDate from "@/app/component/formUserData/FormUserDate";
import WrapperClick from "@/app/component/wrapper_click/WrapperClick";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";

function Kits() {

    const t = useTranslations("OEM-kits");


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
                            {t("kits1")}
                        </li>
                    </ul>
                    <h1>{t("kits1")}</h1>
                </div>
            </section>

            <FixManu4 active={3}/>

            <section>
                <div className="main-container">
                    <div className={s.image_box}>
                        <Image src='/other/persone.jpg' alt='' width={800} height={600}/>
                    </div>
                    <div className={s.text_box}>
                        <div className="section-header">
                            <h2>
                                <small>ВИЩА ЯКІСТЬ ПІД ВАШИМ БРЕНДОМ</small>
                                <strong>OEM комплекти</strong>
                            </h2>
                            <p>
                                Ви місцевий виробник автомийок? Пропонуємо співпрацю з продажу мийної техніки SAMWASH
                                для використання на автомийці для Вашого клієнта по Вашій комплектації. Ви визначаєте,
                                що вам потрібно, ми пропонуємо готове рішення на основі перевірених технологій.
                            </p>
                        </div>
                        <div className={s.between}>
                            <WrapperClick>
                                <ButtonRedWithoutLink text={'contactBut'}/>
                            </WrapperClick>
                            <div className={s.phoneDiv}>
                                <Image src='/contact/phoneContact.png' alt='' height={50} width={50}/>
                                <a href="tel:0975794930">097 579 4930</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={s.form1} id='form1'>
                <FormUserDate textH2={'РЕЗЮМЕ'} threeInput={'НОМЕР ТЕЛЕФОНУ'}/>
            </div>

        </div>
    );
}

export default Kits;