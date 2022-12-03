import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Stack } from '@mui/material'

import { MainLayout } from 'shared';
import api from 'modules/main/config/api';
import { ProductItem, Special } from './components';
import { SearchIcon, } from 'assets/icons/';

import { getPageProducts } from './Main.utils'
import s from './Main.module.sass';
import { setIsLoading } from 'modules/main/store/slice';
import { setProducts } from 'modules/main/store/slice';

const PRICES = [
    {
        label: 'Цена: от: /до:',
        value: '0'
    },
    {
        label: 'От 0 до 200',
        value: '1'
    },
    {
        label: 'От 201 до 500',
        value: '2'
    },
    {
        label: 'От 501 и выше',
        value: '3'
    },
]
const Main = () => {
    const { isLoading, products } = useSelector((state) => state.mainReducer)
    const dispatch = useDispatch()

    const [searchInput, setSearchInput] = useState('') // Title Filtering
    const [foundProducts, setFoundProducts] = useState([]) // Filtered dataset
    const [selectedTitles, setSelectedTitles] = useState('0') // Selected <select> value
    const [totalProducts, setTotalProducts] = useState([]) // Dataset for rendering
    const [page, setPage] = useState(0) // Pagination
    const [pageSize, setPageSize] = useState(8)

    useEffect(() => {
        console.log(page)
    }, [page])


    const searchButtonRef = useRef(null)

    // Initial loading
    useEffect(() => {
        dispatch(setIsLoading(true))

        api.fetchProducts().then((data) => {
            dispatch(setProducts(data))
            dispatch(setIsLoading(false))
            setFoundProducts(data)
        })
    }, [dispatch])

    // Set final dataset
    useEffect(() => {
        const totalProducts = foundProducts;
        setTotalProducts(getPageProducts(totalProducts, page, pageSize))
    }, [foundProducts, page, pageSize])


    // -----

    const onSearch = () => {
        if (!searchInput && (selectedTitles === PRICES[0].value || !selectedTitles)) {
            setFoundProducts(products);
        } else {
            if (searchInput && (selectedTitles === PRICES[0].value || !selectedTitles)) {
                setFoundProducts(
                    products.filter((product) =>
                        product.title.toLowerCase().includes(searchInput.toLowerCase().trim())
                    )
                )
            } else if (!searchInput && selectedTitles !== PRICES[0].value) {

                // ---
                if (selectedTitles === PRICES[1].value) {
                    setFoundProducts(products.filter((product) =>
                        product.price < 201))
                }
                if (selectedTitles === PRICES[2].value) {
                    setFoundProducts(products.filter((product) =>
                        product.price > 201 && product.price < 501))
                }
                if (selectedTitles === PRICES[3].value) {
                    setFoundProducts(products.filter((product) =>
                        product.price > 500))
                }
                // ---
            } else if (searchInput && selectedTitles !== PRICES[0].value) {
                // ---
                if (selectedTitles === PRICES[1].value) {
                    setFoundProducts(products.filter((product) =>
                        product.price < 201 && product.title.toLowerCase().includes(searchInput.toLowerCase().trim())))
                }
                if (selectedTitles === PRICES[2].value) {
                    setFoundProducts(products.filter((product) =>
                        product.price > 201 && product.price < 501 && product.title.toLowerCase().includes(searchInput.toLowerCase().trim())))
                }
                if (selectedTitles === PRICES[3].value) {
                    setFoundProducts(products.filter((product) =>
                        product.price > 500 && product.title.toLowerCase().includes(searchInput.toLowerCase().trim())))
                }
                // ---
            }
        }
    }

    //Component render
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

                {/* PRODUCTS WRAPPER */}
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
            <Stack spacing={2} className={s.stack}>
                <Pagination
                    page={page + 1}
                    count={5}
                    onChange={(event, page) => {

                        setPage(page - 1)
                    }}
                    color='primary'
                />
            </Stack>
        </MainLayout>
    )
}

export default Main