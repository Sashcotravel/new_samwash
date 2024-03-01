"use client"

import s from './realization.module.css';
import axios from "axios";
import {useLocale, useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Link from "next-intl/link";
import Image from "next/image";
import WhiteWithoutHover from "@/app/buttons/whiteWithoutHover/WhiteWithoutHover";
import ButtonRedWithoutLink from "@/app/buttons/redButtonWithoutLink/buttonRedArrowRight";


const getData = ((locale, listWash, setListWash, setResTrue) => {
    if (listWash?.length === 0) {
        axios
            .get(`https://cb.samwash.ua/api/v1/car-washes/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}`)
            .then(res => {
                const data = res.data.data
                setListWash(data)
                setResTrue(true)
            })
    }
    else {
        return listWash
    }
})


function Realization() {

    const t = useTranslations("realization");
    const locale = useLocale();

    const [listWash, setListWash] = useState([])
    const [resTrue, setResTrue] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    let paginatedData = []
    let pageUrl = searchParams.get('page') || 1

    const main = () => {
        // if(articleAll?.length !== 0) return
        const postsData = listWash
        let currentPage = Number(pageUrl)
        let rows = 6;

        function displayList(arrData, rowPerPage, page) {
            const postsEl = document.getElementById('posts');
            postsEl.innerHTML = "";
            page--;

            const start = rowPerPage * page;
            const end = start + rowPerPage;
            paginatedData = arrData?.slice(start, end);
            if (paginatedData?.length === 0) {
                paginatedData = arrData?.slice(0, 6);
            }
            setListWash(paginatedData)
        }

        function displayPagination(arrData, rowPerPage) {
            const paginationEl = document.getElementById('pagination');
            const pagesCount = Math.ceil(arrData.length / rowPerPage);
            if (pagesCount < Number(pageUrl)) {
                router.push(pathname + '?page=' + 1)
                currentPage = 1
            }
            const ulEl = document.createElement("ul");
            ulEl.classList.add(s['pagination__list']);

            for (let i = 0; i < pagesCount; i++) {
                const liEl = displayPaginationBtn(i + 1);
                ulEl.appendChild(liEl)
            }
            paginationEl.appendChild(ulEl)
        }

        function displayPaginationBtn(page) {
            const liEl = document.createElement("li");
            liEl.classList.add(s['pagination__item'])
            liEl.innerText = page
            const pagesCount = Math.ceil(postsData.length / rows);

            if (currentPage === page) {
                if(Number(currentPage) === 1){
                    liEl.classList.add(s['pagination__item__active_first']);
                }
                else if (Number(pagesCount) === Number(currentPage)){
                    liEl.classList.add(s['pagination__item__active_end']);
                }

                liEl.classList.add(s['pagination__item__active']);
                liEl.id = 'pagination__item__active'
            }

            liEl.addEventListener('click', () => {
                window.scrollTo(0, 0);
                currentPage = page
                displayList(postsData, rows, currentPage)

                let currentItemLi = document.getElementById('pagination__item__active');

                router.push(pathname + '?page=' + page)

                currentItemLi.classList.remove(s['pagination__item__active']);
                if(Number(currentItemLi?.textContent) === 1){
                    currentItemLi.classList.remove(s['pagination__item__active_first']);
                }
                currentItemLi.id = ''

                if(Number(currentPage) === 1){
                    liEl.classList.add(s['pagination__item__active_first']);
                } else if (Number(pagesCount) === Number(currentPage)){
                    liEl.classList.add(s['pagination__item__active_end']);
                }
                liEl.classList.add(s['pagination__item__active']);
                liEl.id = 'pagination__item__active'
            })

            return liEl;
        }

        displayList(postsData, rows, currentPage);
        displayPagination(postsData, rows);
    }

    useEffect(() => {
        getData(locale, listWash, setListWash, setResTrue)
        if(resTrue){
            main()
        }
    }, [resTrue]);


    return (
        <div>

            <section className={s.head_image}>
                <Image src='/realization/boleslawic.jpg' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li style={{marginLeft: '0'}}>
                            <Link href='/'>{t("home")}</Link>
                        </li>
                        <li>
                            {t("realization1")}
                        </li>
                    </ul>
                    <h1>{t("realization1")}</h1>
                </div>
            </section>

            <section className={s.section_no_top_padding}>
                <div className="main-container">
                    <div className={s.finder_wrapper}>
                        <form className={s.form}>
                            <div className={s.select_wrapper}>
                                <label htmlFor='type'>ТИП АВТОМИЙКИ</label>
                                <select id='type'>
                                    <option value="all">Всі</option>
                                    <option value="Контейнер">Контейнер</option>
                                    <option value="Модульний">Модульний</option>
                                    <option value="Порталова">Порталова</option>
                                </select>
                            </div>
                            <div className={s.select_wrapper}>
                                <label htmlFor='type'>БУДІВНИЦТВО</label>
                                <select id='type'>
                                    <option value="all">Всі</option>
                                    <option value="Smart">Smart</option>
                                    <option value="Pixel">Pixel</option>
                                    <option value="Marco Banner">Marco Banner</option>
                                    <option value="Marco Glass">Marco Glass</option>
                                    <option value="Marchello">Marchello</option>
                                    <option value="Ufo">Ufo</option>
                                </select>
                            </div>
                            <div className={s.select_wrapper}>
                                <label htmlFor='type'>КІЛЬКІСТЬ ПОЗИЦІЙ</label>
                                <select id='type'>
                                    <option value="all">Всі</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div className={s.select_wrapper}>
                                <label htmlFor='type'>ЗОВНІШНЄ ПОЛОЖЕННЯ</label>
                                <select id='type'>
                                    <option value="all">Всі</option>
                                    <option value="Так">Так</option>
                                    <option value="Ні">Ні</option>
                                </select>
                            </div>
                            <ButtonRedWithoutLink text={'search'} clas={'searchWash'} />
                        </form>
                        <div className={s.search_result_wrapper}>
                            {
                                listWash.map(item => {
                                    return (
                                        <div className={s.search_result_item} key={item.id}>
                                            <div className={s.realization_picture}>
                                                <Image src={'https://cb.samwash.ua/storage/' +
                                                item.car_washes_images[0].path} alt='' fill />
                                            </div>
                                            <div className={s.realization_description}>
                                                <h2>{item.car_washes_content[0].city}</h2>
                                                <ul>
                                                    <li>
                                                        <Image src='/project/davydov/1.svg' alt=''
                                                               width={200} height={200}/>
                                                    </li>
                                                    <li>ТИП АВТОМИЙКИ</li>
                                                    <li>КОНТЕЙНЕР</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Image src='/project/davydov/2.svg' alt=''
                                                               width={200} height={200}/>
                                                    </li>
                                                    <li>БУДІВНИЦТВО</li>
                                                    <li>
                                                        {item.car_washes_design_relations.length !== 0 &&
                                                        item.car_washes_design_relations[0].car_washes_design.
                                                        car_washes_design_content[0].title}
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Image src='/project/davydov/3.svg' alt=''
                                                               width={200} height={200}/>
                                                    </li>
                                                    <li>КІЛЬКІСТЬ ПОЗИЦІЙ</li>
                                                    <li>{item.post}</li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Image src='/project/davydov/4.svg' alt=''
                                                               width={200} height={200}/>
                                                    </li>
                                                    <li>ЗОВНІШНЄ ПОЛОЖЕННЯ</li>
                                                    <li>TAK</li>
                                                </ul>
                                                <Link href={`/realization/` + item.slug}
                                                      className={`${s.red_text_btn} btn`}>{t("realization2")}</Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={s.search_navigation}>
                            <div id="posts" className={s.articleBlog}></div>
                            <div id="pagination" className={s.pagination}></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Realization;