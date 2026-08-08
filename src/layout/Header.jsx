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

    const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
    
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

            <div className="flex flex-col lg:flex-row justify-between items-center py-3 px-7 lg:px-9.5 text-sm/14.5 bg-white mt-2 lg:mt-0">
                
                <div className="flex justify-between items-center w-full lg:w-auto">
                    <Link to="/" className="text-2xl font-bold text-primary-text">Bandage</Link>
                    <div className="flex items-center gap-7 lg:hidden text-primary-text">
                        <Search size={24} className="cursor-pointer" />
                        <ShoppingCart size={24} className="cursor-pointer" />
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:text-third-color transition-colors">
                            <TbMenuDeep size={24} />
                        </button>
                    </div>
                </div>

                <div className="flex lg:hidden flex-col items-center w-full gap-7.5 mt-5 pb-4 text-secondary-text text-3xl font-normal transition-all z-50">
                    {isMenuOpen && (
                        <>
                            <Link to="/" className="hover:text-third-color transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            
                            <div className="flex flex-col items-center w-full">
                                <div 
                                    className="flex items-center gap-2 cursor-pointer hover:text-third-color transition-colors"
                                    onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                                >
                                    <span>Shop</span>
                                    <ChevronDown size={28} className={`transition-transform duration-300 ${isMobileShopOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {isMobileShopOpen && (
                                    <div className="flex flex-col items-center gap-3 mt-4 mb-2 text-xl">
                                        <h3 className="font-bold text-primary-text text-2xl mb-1">Kadın</h3>
                                        <Link to="/shop/kadin/bags/1" className="hover:text-third-color" onClick={() => setIsMenuOpen(false)}>Bags</Link>
                                        <Link to="/shop/kadin/belts/2" className="hover:text-third-color" onClick={() => setIsMenuOpen(false)}>Belts</Link>
                                        <Link to="/shop/kadin/ayakkabi/3" className="hover:text-third-color mb-3" onClick={() => setIsMenuOpen(false)}>Ayakkabı</Link>
                                        
                                        <h3 className="font-bold text-primary-text text-2xl mb-1">Erkek</h3>
                                        <Link to="/shop/erkek/bags/4" className="hover:text-third-color" onClick={() => setIsMenuOpen(false)}>Bags</Link>
                                        <Link to="/shop/erkek/belts/5" className="hover:text-third-color" onClick={() => setIsMenuOpen(false)}>Belts</Link>
                                        <Link to="/shop/erkek/gomlek/11" className="hover:text-third-color" onClick={() => setIsMenuOpen(false)}>Gömlek</Link>
                                    </div>
                                )}
                            </div>

                            <Link to="/about" className="hover:text-third-color transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                            <Link to="/blog" className="hover:text-third-color transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                            <Link to="/contact" className="hover:text-third-color transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            <Link to="/pages" className="hover:text-third-color transition-colors" onClick={() => setIsMenuOpen(false)}>Pages</Link>
                            
                            <div className="flex flex-col items-center gap-4 mt-2 text-third-color font-bold">
                                <div className="flex items-center gap-2 text-2xl mt-4 cursor-pointer">
                                    <User className="w-8 h-8" />
                                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login / Register</Link>
                                </div>

                                <div className="flex items-center gap-2 text-2xl cursor-pointer">
                                    <Heart className="w-8 h-8" />
                                    <span>Favorilerim</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <nav className="hidden lg:flex items-center gap-4 mr-100 text-secondary-text text-sm font-bold">
                    <Link to="/" className="hover:text-third-color transition-colors">Home</Link>
                    
                    <div className="relative group flex items-center gap-1.25 cursor-pointer py-4">
                        <Link to="/shop" className="hover:text-third-color transition-colors">Shop</Link>
                        <ChevronDown size={16} className="text-secondary-text group-hover:text-third-color transition-colors" />
                        <div className="absolute top-full -left-10 w-112.5 hidden group-hover:flex z-50 cursor-default shadow-xl border border-gray-100 rounded bg-white">
                            <div className="w-full flex p-6 gap-6">
                                <div className="flex-1 flex flex-col gap-4">
                                    <h3 className="font-bold text-primary-text mb-1">Kadın</h3>
                                    <div className="flex flex-col gap-3 font-normal">
                                        <Link to="/shop/kadin/bags/1" className="text-sm text-secondary-text hover:text-third-color transition-colors">Bags</Link>
                                        <Link to="/shop/kadin/belts/2" className="text-sm text-secondary-text hover:text-third-color transition-colors">Belts</Link>
                                        <Link to="/shop/kadin/ayakkabi/3" className="text-sm text-secondary-text hover:text-third-color transition-colors">Ayakkabı</Link>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col gap-4">
                                    <h3 className="font-bold text-primary-text mb-1">Erkek</h3>
                                    <div className="flex flex-col gap-3 font-normal">
                                        <Link to="/shop/erkek/bags/4" className="text-sm text-secondary-text hover:text-third-color transition-colors">Bags</Link>
                                        <Link to="/shop/erkek/belts/5" className="text-sm text-secondary-text hover:text-third-color transition-colors">Belts</Link>
                                        <Link to="/shop/erkek/gomlek/11" className="text-sm text-secondary-text hover:text-third-color transition-colors">Gömlek</Link>
                                    </div>
                                </div>

                                <div className="flex-1 bg-third-color rounded flex items-center justify-center p-4 min-h-30">
                                </div>
                            </div>
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