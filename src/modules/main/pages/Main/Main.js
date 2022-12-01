import React, { useEffect, useRef, useState } from "react";

import { MainLayout } from 'shared';
import api from 'modules/main/config/api';
import { ProductItem, Special } from './components';
import { SearchIcon, } from 'assets/icons/';


import s from './Main.module.sass';

const PRICES = [
    {
        label: 'Цена: от: /до:',
        value: 0
    },
    {
        label: 'От 0 до 200',
        value: 1
    },
    {
        label: 'От 201 до 500',
        value: 2
    },
    {
        label: 'От 501 и выше',
        value: 3
    },
]
const Main = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [searchInput, setSearchInput] = useState('')
    const [foundProducts, setFoundProducts] = useState([])

    const [titles, setTitles] = useState([])
    const [selectedTitles, setSelectedTitles] = useState('')
    // const [filteredProducts, setFilteredProducts] = useState([])

    const [totalProducts, setTotalProducts] = useState([])
    // const [isDirty, setIsDirty] = useState(false)

    const searchButtonRef = useRef(null)

    useEffect(() => {

        console.log(selectedTitles)

    }, [selectedTitles])



    useEffect(() => {
        setIsLoading(true)
        api.fetchProducts().then((data) => {
            setProducts(data)
            setTotalProducts(data)
            setIsLoading(false)
            // setTitles(['Цена: от: /до:', 'От 0 до 200', 'От 201 до 500', 'От 501 и выше'])
        })
    }, [])




    const onSearch = () => {
        if (!searchInput && (selectedTitles === PRICES[0].label || !selectedTitles)) {
            setFoundProducts(products);
        } else {

            if (searchInput && (selectedTitles === PRICES[0].label || !selectedTitles)) {
                console.log('1')
                setFoundProducts(
                    products.filter((product) =>
                        product.title.toLowerCase().includes(searchInput.toLowerCase().trim())
                    )
                )
            } else if (!searchInput && selectedTitles !== PRICES[0].label) {

                console.log('branch 1')
                // ---
                if (selectedTitles === PRICES[1].label) {
                    console.log('branch 2')
                    setFoundProducts(products.filter((product) =>
                        product.price < 201))
                }
                if (selectedTitles === PRICES[2].label) {
                    setFoundProducts(products.filter((product) =>
                        product.price > 201 && product.price < 501))
                }
                if (selectedTitles === PRICES[3].label) {
                    setFoundProducts(products.filter((product) =>
                        product.price > 500))
                }
                // ---

            } else if (searchInput && selectedTitles !== PRICES[0].label) {

                // ---
                if (selectedTitles === PRICES[1].label) {
                    setFoundProducts(products.filter((product) =>
                        product.price < 201 && product.title.toLowerCase().includes(searchInput.toLowerCase().trim())))
                }
                if (selectedTitles === PRICES[2].label) {
                    setFoundProducts(products.filter((product) =>
                        product.price > 201 && product.price < 501 && product.title.toLowerCase().includes(searchInput.toLowerCase().trim())))
                }
                if (selectedTitles === PRICES[3].label) {
                    setFoundProducts(products.filter((product) =>
                        product.price > 500 && product.title.toLowerCase().includes(searchInput.toLowerCase().trim())))
                }
                // ---
            }
        }
    }

    useEffect(() => {
        console.log('found', foundProducts)
        const totalProducts = foundProducts;
        console.log(totalProducts)
        setTotalProducts(totalProducts)
    }, [foundProducts])

    return (
        <MainLayout>
            <div className={s.root}>
                <Special />

                <div className={s.search}>
                    <div className={s.searchBox}>

                        {/* INPUT SEARCH */}
                        <input className={s.searchInput}
                            type='text'
                            placeholder='Поиск..'
                            value={searchInput}
                            onChange={(event) => {
                                setSearchInput(event.target.value)

                            }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    searchButtonRef.current.click()
                                }
                            }}
                        />

                        {/* SELECT */}
                        <select className={s.searchSelect}
                            name='select'
                            value={selectedTitles}
                            onChange={(event) => {
                                setSelectedTitles(event.target.value)

                            }}
                        >
                            {PRICES.map((category) => (
                                <option value={category.value} key={category.value}>{category.label}</option>
                            ))}
                            {/* {titles.map((title, index) => (
                                <option value={title} key={index}>
                                    {title}
                                </option>
                            ))} */}
                        </select>

                        {/* BUTTON SEARCH */}
                        <button className={s.searchButton}
                            type={'button'}
                            onClick={onSearch}
                            ref={searchButtonRef}>
                            <SearchIcon alt='Иконка поиска' />
                        </button>
                    </div>

                    {/* BUTTON RESET */}
                    <button className={s.searchBtnReset}
                        onClick={() => {
                            setFoundProducts(products)
                            setSearchInput('')
                            setSelectedTitles('')
                        }}
                    >
                        Сбросить фильтры и поиск
                    </button>
                </div>

                <div className={s.wrapper}>
                    {!isLoading ?
                        totalProducts.map((product) => (
                            <ProductItem
                                key={product.id}
                                id={product.id}
                                image={product.images[0]}
                                title={product.title}
                                price={product.price}
                            />
                        )) :
                        <h1>Loading...</h1>
                    }
                </div>
            </div>
        </MainLayout>
    )
}

export default Main