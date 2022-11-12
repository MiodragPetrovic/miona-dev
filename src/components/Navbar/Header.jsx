import React from 'react';

const Navbar = () => {
    return (
            <header className='container flex mx-auto items-center justify-around'>
                <a href=""><img src="./img/MionaDev-Logo.svg"  width="150px" alt="Logo MionaDev" /></a>
                <nav className='flex-1'>
                    <ul className='flex gap-4'>
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
            </header>
    )
}

export default Navbar;