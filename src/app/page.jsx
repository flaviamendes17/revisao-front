"use client";
import { useState, useEffect } from 'react';
import { produtosData } from '../../data/produtos.js';
import CardProdutos from '@/components/CardProdutos/CardProdutos.jsx';
import Header from '@/components/Header/Header.jsx';
import styles from './page.module.css';

export default function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    setProducts(produtosData);
}, []);

    return (
    <div>
    <Header totalProdutos={products.length} />
    <div className={styles.products}>
        {products.map(product => (
        <CardProdutos key={product.id} produto={product} />
        ))}
    </div>
    </div>
    );
}