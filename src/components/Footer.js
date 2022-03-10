import React from 'react';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaTwitter, FaLink } from 'react-icons/fa';
import { SiBuymeacoffee } from "react-icons/si";

export default function Footer() {
    return (
        <div className="flex flex-wrap p-4 md:px-8 bg-blue-500 items-center justify-between py-10 mt-20 text-white">
            <div className="text-base md:text-xl">
                <p>Created and curated by <a href="https://rohan-kiratsata.github.io" className="font-semibold underline" target="_blank" rel="noopener noreferrer">Rohan Kiratsata</a>
                </p>
            </div>
            <div className="text-3xl flex flex-row mt-5 md:mt-0">
                <a href="" className="mx-2"><SiBuymeacoffee /></a>
                <a href="" className="mx-2"><AiFillInstagram /></a>
                <a href="" className="mx-2"><FaTwitter /></a>
                <a href="" className="mx-2"><AiFillMail /></a>
            </div>
        </div>
    )
    // [ ] Add Privacy Policy and Other details
    // [ ] Add Links to Footer Socials
}
