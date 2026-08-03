import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Search, ShoppingCart, User, Heart,
    Phone, Mail, ChevronDown
} from 'lucide-react';
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { TbMenuDeep } from "react-icons/tb";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="flex flex-col w-full font-montserrat">
            <div className="hidden lg:flex justify-between items-center bg-primary-text text-white text-sm/6 py-4 px-10 font-bold">
                <div className="flex gap-5">
                    <div className="flex items-center gap-1">
                        <Phone size={16} />
                        <span>+90 505 688-5153</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Mail size={16} />
                        <span>cakmakselimfb58@gmail.com</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <p>Follow Us and get a chance to win 80% off</p>
                </div>
                <div className="flex items-center gap-2.25">
                    <span>Follow Us :</span>
                    <FaInstagram size={16} className="cursor-pointer" />
                    <FaYoutube size={16} className="cursor-pointer" />
                    <FaFacebook size={16} className="cursor-pointer" />
                    <FaXTwitter size={16} className="cursor-pointer" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center py-3 px-7 lg:px-9.5 text-sm/14.5 bg-white">
                
                <div className="flex justify-between items-center w-full lg:w-auto">
                    <Link to="/" className="text-2xl font-bold text-primary-text">Bandage</Link>
                    <div className="flex items-center gap-7 lg:hidden text-primary-text">
                        <Search size={24} className="cursor-pointer" />
                        <ShoppingCart size={24} className="cursor-pointer" />
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <TbMenuDeep size={24} />
                        </button>
                    </div>
                </div>

                <div className="flex lg:hidden flex-col items-center w-full gap-7.5 mt-10 pb-4 text-secondary-text text-3xl font-normal transition-all">
                    {!isMenuOpen ? (

                        <>
                            <Link to="/" className="hover:text-third-color transition-colors">Home</Link>
                            <Link to="/product" className="hover:text-third-color transition-colors">Product</Link>
                            <Link to="/pricing" className="hover:text-third-color transition-colors">Pricing</Link>
                            <Link to="/contact" className="hover:text-third-color transition-colors">Contact</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/about" className="hover:text-third-color transition-colors">About</Link>
                            <Link to="/blog" className="hover:text-third-color transition-colors">Blog</Link>
                            <Link to="/pages" className="hover:text-third-color transition-colors">Pages</Link>
                            
                            <div className="flex items-center gap-2 text-third-color font-bold text-2xl mt-4 cursor-pointer">
                                <User className="w-8 h-8" />
                                <Link to="/login">Login / Register</Link>
                            </div>

                            <div className="flex items-center gap-2 text-third-color font-bold text-2xl cursor-pointer">
                                <Heart className="w-8 h-8" />
                                <span>Favorilerim</span>
                            </div>
                        </>
                    )}
                </div>

                <nav className="hidden lg:flex items-center gap-4  mr-100 text-secondary-text text-sm font-bold">
                    <Link to="/" className="hover:text-third-color transition-colors">Home</Link>
                    <div className="relative group flex items-center gap-1.25 cursor-pointer">
                        <Link to="/shop" className="hover:text-third-color transition-colors">Shop</Link>
                        <ChevronDown size={16} className="text-secondary-text group-hover:text-third-color transition-colors" />
                        <div className="absolute top-full left-0 pt-4 w-22 bg-white border border-gray-100 shadow-lg rounded flex-col hidden group-hover:flex z-50">
                            <Link to="/product" className="px-4 py-3 hover:bg-gray-100 text-primary-text font-normal">Product</Link>
                            <Link to="/pricing" className="px-4 py-3 hover:bg-gray-100 text-primary-text font-normal">Pricing</Link>
                        </div>
                    </div>
                    <Link to="/about" className="hover:text-third-color transition-colors">About</Link>
                    <Link to="/blog" className="hover:text-third-color transition-colors">Blog</Link>
                    <Link to="/contact" className="hover:text-third-color transition-colors">Contact</Link>
                    <Link to="/pages" className="hover:text-third-color transition-colors">Pages</Link>
                </nav>

                <div className="hidden lg:flex items-center gap-4 text-third-color font-bold text-sm">
                    <div className="flex items-center gap-1.5 cursor-pointer">
                        <User size={16} />
                        <Link to="/login">Login / Register</Link>
                    </div>
                    <div className="flex items-center gap-7.5">
                        <Search size={16} className="cursor-pointer" />
                        <div className="flex items-center gap-1.25 cursor-pointer">
                            <ShoppingCart size={16} />
                            <span className="text-xs font-normal">1</span>
                        </div>
                        <div className="flex items-center gap-1.25 cursor-pointer">
                            <Heart size={16} />
                            <span className="text-xs font-normal">1</span>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;