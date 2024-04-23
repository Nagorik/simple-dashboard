"use client";
import Link from "next/link";
import React from "react";
import styles from "./HeaderStyles.module.css";
import { useUserContext } from "@/app/context/UserContent";

const Header = () => {
  const { userData } = useUserContext();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link" href='/'>
                    Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" href="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="position-relative">
        <div className={styles.userInfo}>
          <Link href="/user"> {userData.username} </Link>
          <p className="p-0"> {userData.userEmail} </p>
        </div>
      </div>
    </>
  );
};
export default Header;
