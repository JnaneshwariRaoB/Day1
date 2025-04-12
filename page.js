'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '₹2,499',
    image: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg',
  },
  {
    id: 2,
    name: 'Smartwatch',
    price: '₹1,999',
    image: 'https://m.media-amazon.com/images/I/61ZuL8CUigL._SY450_.jpg',
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: '₹799',
    image: 'https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg',
  },
  {
    id: 8,
    name: 'iPhone 15 Pro',
    price: '₹1,34,900',
    image: 'https://m.media-amazon.com/images/I/81SigpJN1KL._SX679_.jpg',
  },
];

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    setUsername(name);
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    setUsername(name);
    setIsLoggedIn(true);
    setShowSignup(false);
  };

  return (
    <main className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="Flipkart Logo"
            width={100}
            height={30}
            unoptimized
          />
        </div>

        <input type="text" placeholder="Search for products" className={styles.search} />

        <div className={styles.authButtons}>
          {isLoggedIn ? (
            <span className={styles.profile}>Hi, {username}</span>
          ) : (
            <>
              <button onClick={() => setShowLogin(true)} className={styles.login}>Login</button>
              <button onClick={() => setShowSignup(true)} className={styles.signup}>Sign Up</button>
            </>
          )}
        </div>
      </nav>

      {/* Sale Banner */}
      <div className={styles.banner}>
        <Image
          src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d2b446d3353ffb30.jpg?q=20"
          alt="Flipkart Sale Banner"
          width={1600}
          height={270}
          className={styles.bannerImage}
          unoptimized
        />
      </div>

      <h1 className={styles.heading}>Flipkart Style Deals</h1>

      {/* Product Grid */}
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className={styles.image}
                unoptimized
              />
            </div>
            <h2 className={styles.title}>{product.name}</h2>
            <p className={styles.price}>{product.price}</p>
            <button className={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className={styles.modal}>
          <form onSubmit={handleLogin} className={styles.form}>
            <h2>Login</h2>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p onClick={() => { setShowLogin(false); setShowSignup(true); }} className={styles.switch}>
              Don’t have an account? Sign up
            </p>
            <button type="button" className={styles.close} onClick={() => setShowLogin(false)}>X</button>
          </form>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className={styles.modal}>
          <form onSubmit={handleSignup} className={styles.form}>
            <h2>Sign Up</h2>
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Create Account</button>
            <p onClick={() => { setShowSignup(false); setShowLogin(true); }} className={styles.switch}>
              Already have an account? Login
            </p>
            <button type="button" className={styles.close} onClick={() => setShowSignup(false)}>X</button>
          </form>
        </div>
      )}
    </main>
  );
}
