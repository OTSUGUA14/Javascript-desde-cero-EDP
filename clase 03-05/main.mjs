import { getProducts, filterProduct, selectBrand, filterMarca } from "./productos/getProduct.mjs"

const $ = selector => document.querySelector(selector)

const $productsContainer = $('.card-container')
const $btnShowProducts = $('#show-product')
const $filterProducts = $('#filter-products')
const $selectMarca = $('#marca')

selectBrand();

$btnShowProducts.addEventListener('click', () => {
    $productsContainer.innerHTML = ""
    getProducts()
})

$filterProducts.addEventListener('blur', () => {
    $productsContainer.innerHTML = ""
    filterProduct($filterProducts.value)
})

$selectMarca.addEventListener('change', () => {
    $productsContainer.innerHTML = ""
    filterMarca($selectMarca.value)
})
