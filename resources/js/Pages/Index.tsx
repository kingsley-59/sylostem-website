import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";

import logo from '@/assets/images/sylostem-logo-text.png';
import ladySittingPhoto from '@/assets/images/lady-sitting-with-laptop-unspash.jpg';
import macbookPhoto from '@/assets/images/macbook-with-code-unsplash.jpg'
import { ArrowRight } from "lucide-react";


export default function Home() {

    return (
        <>
            <Head title="Sylostem - Designing and curating great products..." />
            <div className="bg-[var(--background-light)] relative">
                <header className="site-header px-12">
                    <div className="w-full flex justify-between items-center gap-5">
                        <div className="max-w-[250px]">
                            <img src={logo} alt="sylostem logo" />
                        </div>
                        <div className="flex justify-end items-center gap-5">
                            <nav className="flex justify-between items-center gap-3">
                                <Link href={route('home')} className="nav-link">Home</Link>
                                <Link href={route('about')} className="nav-link">About</Link>
                                <Link href={route('contact')} className="nav-link">Contact</Link>
                                <Link href={route('caseStudy')} className="nav-link">Case study</Link>
                            </nav>
                            <button className="nav-cta hover:scale-105">Free consultation</button>
                        </div>
                    </div>

                </header>
                <main className="site-main ">
                    <section className="site-section _h-[calc(100vh-var(--header-height))] bg-dark ">
                        <div className="w-full h-full p-[40px] flex justify-between items-center gap-5">
                            <div className="space-y-[30px] max-w-[600px]">
                                <h1 className="font-bold text-6xl text-white ">Empowering your business through innovation and expertise</h1>
                                <p className="text-light">
                                    At Sylostem Technologies, we transform your vision into reality with our top-tier product design, software engineering,
                                    and IT consulting services. Our dynamic and professional team takes the stress out of technology management,
                                    allowing you to focus on what you do best—growing your business.
                                </p>
                                <button className="group px-5 py-3 rounded bg-brand-color-secondary text-white flex items-center gap-2 hover:scale-105">
                                    <span>Talk to us</span>
                                    <ArrowRight className="group-hover:translate-x-1" stroke="white" />
                                </button>
                            </div>
                            <div className="w-full h-full relative">
                                <div className="absolute top-0 right-0 rounded-full w-[200px] aspect-square ml-auto ring-2 ring-brandbg-brand-color-secondary ring-offset-2" style={{
                                    backgroundImage: `url(${macbookPhoto})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                }}></div>
                                <div className="w-[calc(100%-100px)] h-[calc(100%-139px)] mr-[100px] mt-[139px] rounded-tl-[92px] bg-black -z-30" style={{
                                    backgroundImage: `url(${ladySittingPhoto})`,
                                    backgroundPosition: 'top center',
                                    backgroundSize: 'cover',
                                }}></div>
                            </div>
                        </div>
                        {/* <div className="w-screen h-20"></div> */}
                    </section>
                    <section className="site-section bg-blue-400">Section 2</section>
                    <section className="site-section bg-green-400">Section 3</section>
                    <section className="site-section bg-yellow-400">Section 4</section>
                </main>
            </div>
        </>
    )
}