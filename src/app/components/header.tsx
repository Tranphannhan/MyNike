'use client'
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { accountUser } from "../types/account/accountInterface";
import AvatarDropdown from "./avata";

export default function Header() {
  const [account, setAccount] = useState <accountUser | null>(null)
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Men", link: "/man" },
    { name: "Women", link: "/women" },
    { name: "Kids", link: "/kid" },
    { name: "Products", link: "/products" },
  ];

  useEffect(() => {
    const token = sessionStorage.getItem('token'); // hoặc 'accessToken', tuỳ bạn đặt tên gì

    if (token) {
      const decoded: accountUser = jwtDecode(token);
      setAccount(decoded)
    } else {
      console.log('Không có token trong sessionStorage');
    }
  }, []);
  const items = useAppSelector(state => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  console.log(account)

  function handleLogout(){
    sessionStorage.removeItem('token')
    window.location.href='/'
  }

  return (
    <>
      {/* Mobile Menu */}
      <div className="background_menu">
        <div className="menu_mobile">
          <div className="menu_mobile_container">
            <div className="close_menumobile">
              <i className="bi bi-x"></i>
            </div>

            {menuItems.map((item, index) => (
              <div className="textmenu_mobile" key={index}>
                <Link href={item.link} className="contenmenu_mobile">
                  {item.name}
                </Link>
                <i className="bi bi-chevron-right"></i>
              </div>
            ))}

            <div className="menu_logo_mobile">
              <Image height={100} width={100} src={`/images/logonikemini.png`} alt="Nike Logo" />
              <p>Jordan</p>
            </div>

            <p className="contain_menu_mobile">
              Become a Nike Member for the best products, inspiration and stories in sport.{" "}
              <Link href="">Learn more</Link>
            </p>

            <div className="sign_in_menu_mobile">
              <button><a href="/login">sign up</a></button>
              <button><a href="/login">Sign In</a></button>
            </div>

            <div className="incon_menu_mobile">
              <i className="fa-solid fa-question"></i>
              <p>Help</p>
            </div>
            <div className="incon_menu_mobile">
              <i className="fa-solid fa-phone"></i>
              <p>Contact</p>
            </div>
            <div className="incon_menu_mobile">
              <i className="fa-duotone fa-solid fa-magnifying-glass-location"></i>
              <p>Find a Store</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav_container">
        <div className="nav_main">
          <div className="logIn">
            <div className="container_logIn">
              <div className="logo">
                <Image src="/images/logonikemini.png" alt="Nike Mini Logo" width={30} height={30} />
              </div>
              <ul>
                <li><Link href="/">Find a store</Link></li>
                <div className="gachgiua"></div>
                <li><Link href="/policy">Policy</Link></li>
                <div className="gachgiua"></div>
                <li><Link href="/contact">Contact</Link></li>
                <div className="gachgiua"></div>
                {!account ? (
                <>
                  <li><Link href="/signup">Sign Up</Link></li>
                  <div className="gachgiua"></div>
                  <li><Link href="/login">Sign In</Link></li>
                </>
              ) : (
             
                (
                 
                    <AvatarDropdown account={account} onLogout={handleLogout} />
                 
                  
                ) 
              )}


              </ul>
            </div>
          </div>

          <div className="menu">
            <div className="container_menu">
              <div className="munu_logo">
                <Link className="a_logo" href="/">
                <Image src="/images/logonike.jpg" alt="Nike Logo" width={70} height={70} />
                </Link>
              </div>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="menu_icon">
                <div className="menu_search manu_list">
                  <input type="text" placeholder="Search" />
                  <i className="fa-sharp-duotone fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="menu_heart manu_list">
                  <i className="fa-regular fa-heart icon_menu"></i>
                </div>
                <div className="menu_bag manu_list">
                  <a href="/cart" className="iconCartPc"><i className="fa-solid fa-bag-shopping"></i><span style={{ display: totalQuantity === 0 ? "none" : "flex" }} className="quantityCart">{totalQuantity >= 9 ? '9+': totalQuantity}</span></a>
                </div>
                <div className="manu_list manu_mobile_open">
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <main>
        <div className="banner">
          <div className="banner_text">
            <div className="textcontainer">
              <div className="banner_text_container">
                <label>Free Delivery</label>
                <label>
                  Applies to orders of 5.000.000 đ or more.{" "}
                  <Link href="">View details</Link>
                </label>
              </div>

              <div className="banner_text_container">
                <label>New Styles On Sale: Up To 40% Off</label>
                <label>Shop All Our New Markdowns</label>
              </div>

              <div className="banner_text_container">
                <label>Move, Shop, Customise & Celebrate With Us</label>
                <label>
                  No matter what you feel like doing today, it’s better as a Member.{" "}
                  <Link href="">Join Us</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
