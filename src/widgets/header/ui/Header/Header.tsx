"use client";
import Link from 'next/link';
import './Header.module.scss'

export const Header = () => {
    return <header className='header'>
        <div className='header__container'>
            <div className='header__main'>
                <span className='header__logo'>LOGO NAME</span>
                <p className='header__description'>Краткое описание чем занмиаемся</p>
            </div>
            <div className='header__menu'>
                <Link className='header__link' href={'/'}>Правила</Link>
                <Link className='header__link' href={'/'}>Обратная связь</Link>
                <Link className='header__link' href={'/'}>Список квизов</Link>
            </div>
        </div>
    </header>
}