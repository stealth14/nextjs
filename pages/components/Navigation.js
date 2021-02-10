import React from 'react';
import Link from "next/link";

export default function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about' >About</Link>
                </li>
                <li>
                    <Link href='/post/1/comment2'>post/1</Link>
                </li>
                <li>
                    <Link href='/post/2/comment1'>/post/2/comment/1</Link>
                </li>
                <li>
                    <Link href='/article/2'>/article/2/comment/1</Link>
                </li>
            </ul>
        </div>
    )
}
