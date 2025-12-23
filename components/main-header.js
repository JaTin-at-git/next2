import Link from "next/link";
import logo from "@/assets/logo.png"

export default function MainHeader() {
    return <header>
        <Link href="/"><img src={logo.src} alt="homepage"/>NextLevel Food</Link>
        <nav>
            <ul>
                <li><Link href="/meals">Meals</Link></li>
                <li><Link href="/meals/share">Share</Link></li>
                <li><Link href="/community">Community</Link></li>
            </ul>
        </nav>
    </header>
}