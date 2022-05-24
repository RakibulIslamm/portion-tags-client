import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchasePage = () => {
    const [product, setProduct] = useState({});

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err.message));
    }, [id]);

    console.log(product);

    return (
        <div>
            <div className='px-[80px] max-w-[1920px] mx-auto min-h-screen'>
                This is Purchase page
            </div>
        </div>
    );
};

export default PurchasePage;