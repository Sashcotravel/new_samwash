"use client"

import s from './blog.module.css'
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";
import {useEffect, useState} from "react";
import axios from "axios";
import WhiteWithoutHover from "@/app/buttons/whiteWithoutHover/WhiteWithoutHover";
import {usePathname, useRouter, useSearchParams} from "next/navigation";



const getData = ((locale, articleAll, setArticleAll, setResTrue) => {
    if (articleAll?.length === 0) {
        axios
            .get(`https://cb.samwash.ua/api/v1/blog/${locale === 'en' ? 'en' : locale === 'ru' ? 'ru' : 'ua'}?perPage=10000`)
            .then(res => {
                const data = res.data.data.data
                setArticleAll(data)
                setResTrue(true)
            })
    }
    else {
        return articleAll
    }
})


function Blog() {

    const t = useTranslations("blog");

    const locale = useLocale();
    const [resTrue, setResTrue] = useState(false)
    const [click1, setClick1] = useState(false)
    const [click2, setClick2] = useState(false)
    const [click3, setClick3] = useState(false)
    const [cat, setCat] = useState('')
    const [cat2, setCat2] = useState('')
    const [cat3, setCat3] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    let paginatedData = []
    const [articleAll, setArticleAll] = useState([])
    let pageUrl = searchParams.get('page') || 1


    const main = () => {
        // if(articleAll?.length !== 0) return
        const postsData = articleAll
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
            setArticleAll(paginatedData)
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
        getData(locale, articleAll, setArticleAll, setResTrue)
        if(resTrue){
            main()
        }
    }, [resTrue]);

    const category = (e) => {
        setCat(e.target.title)
        setClick1(prevState => !prevState)
        if(e.target.title === 'Статті'){
            router.push('/blog/articles')
        } else if(e.target.title === 'Новини'){
            router.push('/blog/news')
        }
    }

    const category2 = (e) => {
        setCat2(e.target.title)
        setClick2(prevState => !prevState)
    }

    const category3 = (e) => {
        setCat3(e.target.title)
        setClick3(prevState => !prevState)
    }



    return (
        <div>

            <section className={s.head_image}>
                <Image src='/blog/blogMain.png' alt='' width={1900} height={300}/>
                <div className={s.main_container}>
                    <ul className='bread-crumbs'>
                        <li>
                            <Link href='/'>{t("blog1")}</Link>
                        </li>
                        <li>
                            {t("blog2")}
                        </li>
                    </ul>
                    <h1>{t("blog2")}</h1>
                </div>
            </section>

            <section className={s.sectionBlog}>
                <div className={s.container_blog}>
                    <div className={s.row}>
                        <div className={s.first_item_search}>
                            <div className='hi-dropdown'>
                                <button className={s.blog_searchbox}
                                        onClick={() => setClick1(prevState => !prevState)}
                                >
                                    <span className='title'>Фільтрувати за категоріми</span>
                                    <span className='value'>{cat === '' ? "Всі категорії" : cat}</span>
                                    <span className={`caret ${click1 ? "caret2" : ''}`}></span>
                                </button>
                                <ul className={`dropdown-menu ${s.menu} ${click1 ? s.block : ''}`}>
                                    <li title='' className={cat === '' ? 'selected' : ''}
                                        onClick={(e) => category(e)}>
                                        Всі
                                    </li>
                                    <li title='Статті' className={cat === 'Статті' ? 'selected' : ''}
                                        onClick={(e) => category(e)}>
                                        Статті
                                    </li>
                                    <li title='Новини' className={cat === 'Новини' ? 'selected' : ''}
                                        onClick={(e) => category(e)}>
                                        Новини
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.first_item_search}>
                            <div className='hi-dropdown'>
                                <button className={s.blog_searchbox}
                                        onClick={() => setClick2(prevState => !prevState)}
                                >
                                    <span className='title'>ФІЛЬТРУВАТИ ЗА ДАТИ</span>
                                    <span className='value'>{cat2 === '' ? "Всі записи" : cat2}</span>
                                    <span className={`caret ${click2 ? "caret2" : ''}`}></span>
                                </button>
                                <ul className={`dropdown-menu ${s.menu} ${click2 ? s.block : ''}`}>
                                <li title='' className={cat2 === '' ? 'selected' : ''}
                                        onClick={(e) => category2(e)}>Всі
                                    </li>
                                    <li title='2023' className={cat2 === '2023' ? 'selected' : ''}
                                        onClick={(e) => category2(e)}>2023
                                    </li>
                                    <li title='2022' className={cat2 === '2022' ? 'selected' : ''}
                                        onClick={(e) => category2(e)}>2022
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.first_item_search}>
                            <div className='hi-dropdown'>
                                <button className={s.blog_searchbox}
                                        onClick={() => setClick3(prevState => !prevState)}>
                                    <span className='title'>ФІЛЬТРУВАТИ ЗА ЗАПИС</span>
                                    <span className='value'>{cat3 === '' ? "Всі записи" : cat3}</span>
                                    <span className={`caret ${click3 ? "caret2" : ''}`}></span>
                                </button>
                                <ul className={`dropdown-menu ${s.menu} ${click3 ? s.block : ''}`}>
                                    <li title='' className={cat3 === '' ? 'selected' : ''}
                                        onClick={(e) => category3(e)}>Останній
                                    </li>
                                    <li title='найбільш популярний'
                                        className={cat3 === 'найбільш популярний' ? 'selected' : ''}
                                        onClick={(e) => category3(e)}>найбільш популярний
                                    </li>
                                    <li title='рекомендований' className={cat3 === 'рекомендований' ? 'selected' : ''}
                                        onClick={(e) => category3(e)}>рекомендований
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <form>
                            <div className={s.four_item_search}>
                                <div className='hi-searchbar'>
                                    <span className='title'>Пошукова система</span>
                                    <input type="search" placeholder='Введіть ключове слово' className='value' />
                                    <Image src='/blog/search.svg' alt='' width={16} height={16} className={s.fa_search} />
                                </div>
                            </div>
                            <div className={s.col_lg_2}></div>
                        </form>
                    </div>
                </div>
            </section>

            <section>
                <div className={s.container_blog}>
                    <ul className={s.blog_container+' '+ s.blog_container_C}>
                        {
                            articleAll?.map(item => {
                                // console.log(item)
                                return (
                                    <li key={item.id}>
                                        <Image src={'https://cb.samwash.ua/storage/image/'
                                            + item.id + '/' + item.images[0]?.path}
                                               alt={item?.content[0]?.title}
                                               width={400} height={400} />
                                        <span>{item?.start_date_time.replace(/-/g, ".").slice(0, 10)}</span>
                                        <div className={s.box_ctg}>
                                            {
                                                item.type === "news"
                                                    ? <span style={{backgroundColor: "#b217aa"}}>Новина</span>
                                                    : <span style={{backgroundColor: "#e2001a"}}>Стаття</span>
                                            }
                                        </div>
                                        <Link href={'/blog/' + item.slug}>
                                            <h2>{
                                            item?.content[0]?.title.length > 40
                                                ? item?.content[0]?.title.slice(0, 30) + '...'
                                                : item?.content[0]?.title
                                            }</h2>
                                        </Link>
                                        <WhiteWithoutHover text={'readMore'} link={'/blog/' + item.slug}
                                                           clas={'addBut'} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>

            <div className={s.search_navigation}>
                <div id="posts" className={s.articleBlog}></div>
                <div id="pagination" className={s.pagination}></div>
            </div>

        </div>
    );
}

export default Blog