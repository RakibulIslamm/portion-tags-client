import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import customLink from '../../CustomLink/CustomLink';
import Drawer from 'react-modern-drawer'
import { AiFillHome, AiOutlineClose, AiOutlineAppstoreAdd, AiOutlineUserAdd } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { BsFillStarFill, BsCartFill, BsInboxesFill, BsPeople, BsNutFill, BsArrowRightSquare } from 'react-icons/bs';

const MobileSideBar = ({ toggleDrawer, isOpen }) => {
    const { SideBarLink } = customLink();
    const { user, logOut, admin } = useAuth();
    return (
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
        >
            <div className={`w-full dark:bg-gray-900 min-h-screen fixed top-0 left-0 flex flex-col justify-between p-3  text-gray-100`}>
                <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-700">
                        <h2 className='text-lg font-semibold'>
                            <Link className='flex items-center gap-2' to='/'><BsNutFill /> Portion Tags</Link>
                        </h2>
                        <button onClick={toggleDrawer}>
                            <AiOutlineClose />
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

                            {admin && <SideBarLink to='/dashboard/manage-orders'>
                                <span className="flex items-center p-2 space-x-3 rounded-md">
                                    <FiEdit className='text-xl' />
                                    <span>Manage Orders</span>
                                </span>
                            </SideBarLink>}

                            {admin && <SideBarLink to='/dashboard/add-product'>
                                <span className="flex items-center p-2 space-x-3 rounded-md">
                                    <AiOutlineAppstoreAdd className='text-xl' />
                                    <span>Add Product</span>
                                </span>
                            </SideBarLink>}

                            {!admin && <SideBarLink to='/dashboard/add-review'>
                                <span className="flex items-center p-2 space-x-3 rounded-md">
                                    <BsFillStarFill className='text-xl' />
                                    <span>Add A Review</span>
                                </span>
                            </SideBarLink>}

                            {!admin && <SideBarLink to='/dashboard/my-orders'>
                                <span className="flex items-center p-2 space-x-3 rounded-md">
                                    <BsCartFill className='text-xl' />
                                    <span>My Orders</span>
                                </span>
                            </SideBarLink>}

                            {admin && <SideBarLink to='/dashboard/manage-products'>
                                <span className="flex items-center p-2 space-x-3 rounded-md">
                                    <BsInboxesFill className='text-xl' />
                                    <span>Manage All Products</span>
                                </span>
                            </SideBarLink>}
                            {admin && <SideBarLink to='/dashboard/make-admin'>
                                <span className="flex items-center p-2 space-x-3 rounded-md">
                                    <AiOutlineUserAdd className='text-xl' />
                                    <span>Make An Admin</span>
                                </span>
                            </SideBarLink>}
                            {admin && <SideBarLink to='/dashboard/all-users'>
                                <span className="flex items-center p-2 space-x-3 rounded-md">
                                    <BsPeople className='text-xl' />
                                    <span>Manage Users</span>
                                </span>
                            </SideBarLink>}

                            <button onClick={logOut}>
                                <span className="flex items-center p-2 space-x-3 rounded-md">
                                    <BsArrowRightSquare className='text-xl' />
                                    <span>Logout</span>
                                </span>
                            </button>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                    <img src={user.photoURL} alt="" className="w-12 h-12 rounded-lg dark:bg-gray-500" />
                    <div>
                        <h2 className=" text-base font-semibold">{user.displayName}</h2>
                        <span className="flex items-center space-x-1">
                            <Link to='/profile' className="text-xs hover:underline dark:text-gray-400">View profile</Link>
                        </span>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default MobileSideBar;