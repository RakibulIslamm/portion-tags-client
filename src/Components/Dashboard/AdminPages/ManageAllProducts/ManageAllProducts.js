import { useEffect, useState } from 'react';
import ProductRow from './ProductRow/ProductRow';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse());
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete this order?');
        if (confirm) {
            fetch(`http://localhost:5000/product/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setProducts(products.filter(order => order._id !== id));
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }
        else {
            setLoading(false);
        }
    }


    return (
        <div className='min-h-screen'>
            <div className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] mx-auto'>
                <div className='my-5 flex items-center gap-5'>
                    <h2 className='text-2xl xs:text-lg xs:w-full font-semibold'>Manage Order</h2>
                </div>
                <div className='overflow-x-auto border w-full'>
                    <table className='mx-auto w-full rounded-lg bg-white divide-y divide-gray-300'>
                        <thead className="bg-gray-900 w-full">
                            <tr className="text-white text-left">
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Item </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Price </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Quantity </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Action </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> </th>
                            </tr>
                        </thead>
                        {
                            loading ? <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4">
                                        <p className="text-gray-500 text-xl font-semibold tracking-wide"> Loading... </p>
                                    </td>
                                </tr>
                            </tbody> : !products.length ? <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4">
                                        <p className="text-gray-500 text-xl font-semibold tracking-wide"> Product Not Found </p>
                                    </td>
                                </tr>
                            </tbody> : <tbody className="divide-y divide-gray-200">
                                {products.map(product => <ProductRow key={product._id} product={product} handleDelete={handleDelete} />)}
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllProducts;