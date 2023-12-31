import React, { useState } from 'react'
import Navcss from "../../styles/Nav.module.css"
import { FaSearch, FaHome, FaUser, FaCog } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';


const Sidebar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const [isOpen, setIsOpen] = useState(false);
    const handleCartClick = () => {
        setIsOpen(!isOpen);
    };



    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");

    const handleSearch = (e) => {
        e.preventDefault();
        // perform search action here
    };



    return (
        <div>
            <Head>
                <title>ECommerce Store</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous" />
            <nav className={`navbar navbar-expand-lg ${Navcss.mrNavbar}`}>
                <div className={`container ${Navcss.mrcontainer}`}>

                    <div className={Navcss.mrlogo}>
                        <div className={Navcss.showOnCart}>
                            <button className={`${Navcss.showOnBtn}`} onClick={handleCartClick}>
                                <BsFillCartFill />
                            </button>
                            {isOpen && (
                                <div className={Navcss.showOnPopup}>
                                    <h2>Your Item</h2>
                                    <ul>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                        <li>Item 4</li>
                                        <li>Item 5</li>
                                        <li>Item 6</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Link href="/">
                            <h2>Men&apos; HEAVEN</h2>
                        </Link>
                    </div>
                    <div className="menu-icon" onClick={handleMenuClick}>
                        {showMenu ? <FaTimes /> : <FaBars />}
                    </div>







                    {/* <form className={`d-flex ${Navcss.mrform} mx-auto`} role="search">
                        <div className={Navcss.searchInput}>
                            <button type="submit" className={Navcss.mrsearchbtn}>
                                <FaSearch />
                            </button>
                            <input className={Navcss.mrsearchField} type="text" placeholder="Search" />
                        </div>
                    </form> */}


                    <form className={Navcss.mrform} onSubmit={handleSearch}>
                        <div className={Navcss.searchBox}>
                            <select
                                className={Navcss.selectCategory}
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="Books">Books</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Home">Home</option>
                                <option value="Clothing">Clothing</option>
                            </select>
                            <input
                                type="text"
                                className={Navcss.mrsearchField}
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className={Navcss.mrsearchbtn}>
                                <FaSearch />
                            </button>
                        </div>
                    </form>








                    <ul className={`${Navcss.mrul} ${showMenu ? "nav-menu active" : "nav-menu"}`}>
                        <li className="nav-item">
                            <Link className={`nav-link active ${Navcss.mrLI}`} aria-current="page" href="/Home"> <span><FaHome /></span> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active ${Navcss.mrLI}`} aria-current="page" href="/Home"> <span><GoAlert /></span>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active ${Navcss.mrLI}`} aria-current="page" href="/Home"> <span><FaCog /></span> Settings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active ${Navcss.mrLI}`} aria-current="page" href="/Home"> <span><FaUser /></span> Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active ${Navcss.mrLI}`} aria-current="page" href="/Home"> <span><IoMdNotifications /></span> Notifications</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active ${Navcss.mrLI}`} aria-current="page" href="/Home"> <span><FaSearch /></span> Search</Link>
                        </li>
                        <li>
                            <div className={Navcss.popupCart}>
                                <button className={`${Navcss.cartBtn} btn btn-primary`} onClick={handleCartClick}>
                                    <BsFillCartFill />
                                </button>
                                {isOpen && (
                                    <div className={Navcss.cartPopup}>
                                        <h2>Your Cart</h2>
                                        <ul>
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                            <li>Item 4</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar