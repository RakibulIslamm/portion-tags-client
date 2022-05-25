import { Link } from 'react-router-dom';
import customLink from '../../CustomLink/CustomLink';
import { AiFillHome, AiOutlineMenu, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { BsFillStarFill, BsCartFill, BsInboxesFill } from 'react-icons/bs';

const SideBar = ({ setIsOpen, isOpen }) => {
    const { SideBarLink } = customLink();

    return (
        <div className={`w-60 dark:bg-gray-900 min-h-screen sticky top-0 flex flex-col justify-between p-3  dark:text-gray-100`}>
            <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                    <h2>Site Title</h2>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineMenu />
                    </button>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">

                        <SideBarLink to='/dashboard'>
                            <span className="flex items-center p-2 space-x-3 rounded-md">
                                <AiFillHome className='text-xl' />
                                <span>Home</span>
                            </span>
                        </SideBarLink>

                        <SideBarLink to='/dashboard/manage-orders'>
                            <span className="flex items-center p-2 space-x-3 rounded-md">
                                <FiEdit className='text-xl' />
                                <span>Manage Orders</span>
                            </span>
                        </SideBarLink>

                        <SideBarLink to='/dashboard/add-product'>
                            <span className="flex items-center p-2 space-x-3 rounded-md">
                                <AiOutlineAppstoreAdd className='text-xl' />
                                <span>Add Product</span>
                            </span>
                        </SideBarLink>

                        <SideBarLink to='/dashboard/add-review'>
                            <span className="flex items-center p-2 space-x-3 rounded-md">
                                <BsFillStarFill className='text-xl' />
                                <span>Add Review</span>
                            </span>
                        </SideBarLink>

                        <SideBarLink to='/dashboard/my-orders'>
                            <span className="flex items-center p-2 space-x-3 rounded-md">
                                <BsCartFill className='text-xl' />
                                <span>My Orders</span>
                            </span>
                        </SideBarLink>

                        <SideBarLink to='/dashboard/manage-products'>
                            <span className="flex items-center p-2 space-x-3 rounded-md">
                                <BsInboxesFill className='text-xl' />
                                <span>Manage All Products</span>
                            </span>
                        </SideBarLink>

                        <button>
                            <span className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                    <rect width="32" height="64" x="256" y="232"></rect>
                                </svg>
                                <span>Logout</span>
                            </span>
                        </button>
                    </ul>
                </div>
            </div>
            <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
                <div>
                    <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                    <span className="flex items-center space-x-1">
                        <Link to='/' className="text-xs hover:underline dark:text-gray-400">View profile</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;