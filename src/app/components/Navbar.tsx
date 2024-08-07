import { FC } from "react";

import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

import style from '@/app/components/Navbar.module.css'

const Navbar: FC = () => {
  return (
    <nav className={style.navbar}>
        <a href="/" className='logo'>
            <span >Lyiar</span>
        </a>
      

        <input type="checkbox" name="" id="navbarToggle" />
        <label htmlFor="navbarToggle">
            <span></span>
            <span></span>
            <span></span>
        </label>

        <ul className='navbarMenu'>
            <NavLink href='/'>Game Development</NavLink>
            <NavLink href='/'>Web Development</NavLink>
        </ul>
    </nav>
  )
}

/**
 * Returns a &lt;li&gt; tag
 */
const NavLink: FC<{ children: string; href: string }> = ({children, href}) => {
    return (
        <li>
            <a href={href}>
                {children}
                <ArrowUpRight size={20} style={{fill: 'white'}} fill='Regular' />
            </a>
        </li>
    )
}

export default Navbar