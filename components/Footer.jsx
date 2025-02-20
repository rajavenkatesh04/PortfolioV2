import React from 'react';
import Image from "next/image";
import {assets} from "@/assets/assets";

export default function Footer() {
    return (
        <div className={"mt-20"}>
            <div className={"text-center"}>
                <Image src={assets.logo} alt={"logo"} className={"w-36 mx-auto mb-2"} />

                <div className={"w-max flex items-center gap-2 mx-auto"}>
                    <Image src={assets.mail_icon} alt={"logo"} className={"w-6"} />
                    grv.9604@gmail.com
                </div>
            </div>

            <div className={"text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"}>
                <p>© 2025 Raja Venkatesh. All rights reserved.</p>
                <ul className={"flex items-center gap-10 justify-center mt-4 sm:mt-0"}>
                    <li><a target={"_blank"} href={"https://github.com/rajavenkatesh04"}>GitHub</a></li>
                    <li><a target={"_blank"} href={"https://www.hackerrank.com/profile/RA2211003010773"}>HackerRank</a></li>
                    <li><a target={"_blank"} href={"https://leetcode.com/u/rajavenkatesh20/"}>LeetCode</a></li>
                    {/*<li><a target={"_blank"} href={"https://www.linkedin.com/in/guthularajavenkatesh/"}>LinkedIn</a></li>*/}
                </ul>
            </div>
        </div>
    )
}