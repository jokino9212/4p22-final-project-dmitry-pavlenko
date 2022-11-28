import React, { useEffect, useRef, useState } from "react";

import { MainLayout } from 'shared';
import api from 'modules/main/config/api';
import { ProductItem, Special } from './components';



import s from './Main.module.sass';

const Main = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [searchInput, setSearchInput] = useState('')
    const [foundProducts, setFoundProducts] = useState([])

    const [titles, setTitles] = useState([])
    const [selectedTitles, setSelectedTitles] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])

    const [totalProducts, setTotalProducts] = useState([])
    const [isDirty, setIsDirty] = useState(false)

    const searchButtonRef = useRef(null)

    useEffect(() => {
        setIsLoading(true)
        api.fetchProducts().then((data) => {
            setProducts(data)
            setIsLoading(false)

            console.log(data.map(item => item.title))

            setTitles(['', ...Array.from(new Set(data.map((item) => item.title)))])
        })
    }, [])



    const onSearch = () => {
        setFoundProducts(
            products.filter((product) => product.title.toLowerCase().includes(searchInput.toLowerCase().trim())
            )
        )
    }

    useEffect(() => {
        if (selectedTitles) {

            setFilteredProducts(products.filter(product => product.title === selectedTitles))
        }

    }, [selectedTitles, products])

    useEffect(() => {
        console.log('found', foundProducts)
        console.log('filtered', filteredProducts)

        const totalProducts = foundProducts.filter((product) => filteredProducts.indexOf(product) !== -1)
        console.log(totalProducts)
        setTotalProducts(totalProducts)

    },
        [foundProducts, filteredProducts])

    return (
        <MainLayout>
            <div className={s.root}>
                <Special />
                <div className={s.navList}>
                    <div className={s.navItem}>
                        <a className={s.navLink} href=''>Все</a>
                    </div>
                    <div className={s.navItem}>
                        <a className={s.navLink} href=''>Диваны</a>
                    </div>
                    <div className={s.navItem}>
                        <a className={s.navLink} href=''>Столы</a>
                    </div>
                    <div className={s.navItem}>
                        <a className={s.navLink} href=''>Стулья</a>
                    </div>
                </div>
                <div className={s.search}>
                    <input
                        type='text'
                        value={searchInput}
                        onChange={(event) => {
                            setSearchInput(event.target.value)
                            if (!isDirty) {
                                setIsDirty(true)
                            }
                        }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                searchButtonRef.current.click()
                            }
                        }}
                    />
                    <button type={'button'} onClick={onSearch} ref={searchButtonRef}>Поиск</button>

                    <select name='select' 
                    onChange={(event) => {
                        setSelectedTitles(event.target.value) 
                        if (!isDirty) {
                            setIsDirty(true)
                        }
                    }}
                    >
                        {titles.map(title => (
                            <option value={title} key={title}>
                                {title}
                            </option>
                        ))}

                    </select>
                    <button onClick={() => {setIsDirty(false)}}>Сбросить фильтры и поиск</button>
                </div>
                <div className={s.wrapper}>
                    {!isLoading ? (
                     isDirty ? (
                        totalProducts.map((product) => (
                            <ProductItem
                                key={product.id}
                                id={product.id}
                                // image={product.image}
                                image={product.images[0]}
                                // category={product.category}
                                title={product.title}
                                price={product.price}
                            />
                        ))
                    ) : (
                        products.map((product) => (
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            // image={product.image}
                            image={product.images[0]}
                            // category={product.category}
                            title={product.title}
                            price={product.price}
                        />
                    )))) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
        </MainLayout>
    )
}

export default Main