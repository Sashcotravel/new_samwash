"use client"

import s from './gallery.module.css';
import Image from "next/image";
import Link from "next-intl/link";
import {useTranslations} from "next-intl";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function GalleryOfProjects() {

    const t = useTranslations("OEM-kits");

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {Carousel: {fill: false, center: true,},},
    });

    return (
        <div>

            <section className='head-image'>
                <Image src='/gallery/gallery.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            ГАЛЕРЕЯ ПРОЕКТІВ
                        </li>
                    </ul>
                    <h1>Наші проекти</h1>
                </div>
            </section>

            <section>
                <div className="main-container">
                    <div className={s.text_box}>
                       <div className={s.wrapper}>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                           <a data-fancybox="gallery" href={'/gallery/image1.jpg'} className={s.item}>
                               <Image src='/gallery/image1.jpg' alt='' width={1200} height={900}/>
                           </a>
                       </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default GalleryOfProjects;