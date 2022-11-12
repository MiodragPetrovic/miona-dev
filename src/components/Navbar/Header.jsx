import React from 'react';
import { CiFacebook, CiInstagram } from 'react-icons/ci';

const Navbar = () => {
    return (
            <header className='container flex mx-auto items-center justify-between py-5'>
                <a href=""><img src="./img/MionaDev-Logo.svg"  width="150px" alt="Logo MionaDev" /></a>
                <nav>
                    <ul className='flex gap-4 uppercase'>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Über uns</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Projekte</a>
                        </li>
                        <li>
                            <a href="">Kontakt</a>
                        </li>
                    </ul>
                </nav>
                <span className='flex gap-3'><CiFacebook /><CiInstagram /></span>
                <button class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded">
  Button
</button>
            </header>
    )
}

export default Navbar;