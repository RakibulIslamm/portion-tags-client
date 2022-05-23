import React from 'react';
import img from '../../../../images/product-image/ec886b9d333f1f390913683db60fbe4b_f7175.png'

const Product = () => {
    return (
        <div className="w-full">
            <div className="bg-white shadow-lg hover:shadow-xl rounded-lg border">
                <div className="h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-contain" style={{
                    backgroundImage: `url(${img})`
                }}>
                    <div className="text-right">
                        <button className="text-pink-500 hover:text-pink-600 p-2 rounded-full" style={{
                            background: 'rgba(0,0,0,0.3)'
                        }}>
                            <svg className="w-6 h-6" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-start px-2 pt-2">
                    <div className="p-2 flex-grow">
                        <h1 className="font-medium text-xl font-poppins">Hex Head Cap Screws</h1>
                        <p className="text-gray-500 font-nunito">Provides higher clamp loads than class 8.8 where needed.</p>
                    </div>
                    <div className="p-2 text-right">
                        <div className="text-teal-500 font-semibold text-lg font-poppins">$0.50</div>
                        <div className="text-xs text-gray-500 font-poppins">Per item</div>
                        <div className="text-xs text-gray-500 font-poppins">4.5 star</div>
                    </div>
                </div>
                <div className="flex items-center px-2 pb-2">
                    <div className="w-1/2 p-2">
                        <button className="bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-4 py-2 rounded uppercase font-poppins font-medium">
                            <svg viewBox="0 0 24 24" className="inline w-4 h-4">
                                <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                            </svg> Buy Now
                        </button>
                    </div>
                    <div className="w-1/2 p-2 text-right">
                        <p>200 Items left</p>
                        <p className='text-xs'>Minimum order limit 20</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;