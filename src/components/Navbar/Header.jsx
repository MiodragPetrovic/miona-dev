import React from 'react';
import { CiFacebook, CiInstagram } from 'react-icons/ci';

const Navbar = () => {
    return (
            <header className='container flex mx-auto items-center justify-between py-5'>
                <a href=""><img src="./img/MionaDev-Logo.svg"  width="150px" alt="Logo MionaDev" /></a>
                <nav>
                    <ul className='flex gap-5 uppercase'>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/Ueberuns">Über uns</a>
                        </li>
                        <li>
                            <a href="/Services">Services</a>
                        </li>
                        <li>
                            <a href="/Portfolio">Projekte</a>
                        </li>
                        <li>
                            <a href="/Kontakt">Kontakt</a>
                        </li>
                    </ul>
                </nav>
                <span className='flex gap-3'><CiFacebook /><CiInstagram /></span>
                <button className="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded">
  Button
</button>
            </header>
    )
}

export default Navbar;