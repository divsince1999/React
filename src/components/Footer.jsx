import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const ListItem = [
    {
        ItemName: 'Quality',
        ItemLink: '#',
    },
    {
        ItemName: 'Help',
        ItemLink: '#',
    },
    {
        ItemName: 'Share',
        ItemLink: '#',
    },
    {
        ItemName: 'Share',
        ItemLink: '#',
    },
    {
        ItemName: 'Carrers',
        ItemLink: '#',
    },
    {
        ItemName: 'Work',
        ItemLink: '#',
    },
    {
        ItemName: 'Testimonials',
        ItemLink: '#',
    },
]

const Footer = () => {
    return (
        <footer className='py-[100px]'>
            <div className='container'>
            <div className='flex'>
                <div className='w-[30%]'>
                    <div className='logo-block'>
                        <a href="#"><img src="src/assets/site-logo.svg" className='h-[100px]' alt="site-logo" /></a>
                    </div>
                    <ul className='flex ft-social-links gap-6 mt-12'>
                        <li><a href="#"><FaTwitter/></a></li>
                        <li><a href="#"><CiLinkedin/></a></li>
                        <li><a href="#"><FaYoutube/></a></li>
                        <li><a href="#"><FaFacebookF/></a></li>
                    </ul>
                </div>
                <div className='w-[70%] flex justify-between'>
                    <ul className='ft-menu-list'>
                        {ListItem.map((data, index) => {
                            return(
                                <li key={index}><a href={data.ItemLink}>{data.ItemName}</a></li>
                            )
                        })}
                    </ul>
                    <ul className='ft-contact-list'>
                        <li><a href="tel:244-5333-7783">244-5333-7783</a></li>
                        <li><a href="#">hello@food.com</a></li>
                        <li><a href="#">press@food.com</a></li>
                        <li><a href="#">contact@food.com</a></li>
                    </ul>
                    <div className='legal-links'>
                        <div><a href="#">Terms & Conditions</a></div>
                        <div><a href="#">Privacy Policy</a></div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer