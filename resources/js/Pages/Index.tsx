import { Head, Link, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";

import logo from '@/assets/images/sylostem-logo-text.png';
import ladySittingPhoto from '@/assets/images/lady-sitting-with-laptop-unspash.jpg';
import macbookPhoto from '@/assets/images/macbook-with-code-unsplash.jpg'
import statsDashboardPhoto from '@/assets/images/statistics-on-a-laptop.jpg'
import wireframePhoto from '@/assets/images/wirefram-tablet.jpg'
import { ArrowRight, BriefcaseBusiness, ChartNoAxesCombined, ListMinus, Mail, MonitorSmartphone, Phone, Play, WandSparkles, XCircle } from "lucide-react";
import { useEffect } from "react";
import Layout from "@/Layouts/Layout";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import { isValidPhoneNumber } from "@/utils/validations";


const services = [
    {
        title: 'Product Design and Development',
        description: 'turn your ideas into reality with our innovative design and development expertise. We create products that are not only functional but also captivating.',
        icon: <WandSparkles size={32} strokeWidth={2} />
    },
    {
        title: 'Software Engineering',
        description: 'Leverage cutting-edge technology and expert craftsmanship to build robust, scalable, and high-performing software solutions tailored to your business needs.',
        icon: <MonitorSmartphone size={32} strokeWidth={2} />
    },
    {
        title: 'Business & IT Consulting',
        description: 'Focus on your core business while we handle your IT challenges. Our consulting services provide strategic insights and solutions to streamline your operations and enhance efficiency.',
        icon: <BriefcaseBusiness size={32} strokeWidth={2} />
    },
    {
        title: 'Digital Strategy',
        description: 'Stay ahead of the competition with our strategic digital solutions. We help you navigate the digital landscape, optimizing your online presence and driving growth.',
        icon: <ChartNoAxesCombined size={32} strokeWidth={2} />
    }
]

interface ContactForm {
    fullname: string,
    email: string,
    phone: string,
    subject: string,
    message: string,
    files?: FileList,
}

export default function Home() {
    const { flash } = usePage<PageProps & { flash: any }>().props
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>()

    useEffect(() => {
        if (flash?.success) {
            toast(flash.success);
        }
    }, [flash]);

    const onSubmit = async (data: ContactForm) => {
        // Create a FormData object to handle the file uploads
        const formData = new FormData();

        // Append all other form fields to the FormData object
        formData.append('fullname', data.fullname);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('subject', data.subject);
        formData.append('message', data.message);

        // If there are files, append them to the FormData object
        if (data.files && data.files.length > 0) {
            Array.from(data.files).forEach((file, index) => {
                formData.append(`files[${index}]`, file);
            });
        }

        try {
            // Send the form data with files using axios
            await axios.post(route('contact.store'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Show success toast notification
            toast.success('Message sent successfully!');

            // Reset the form
            reset();
        } catch (error) {
            // Handle errors (optional)
            console.error('Error submitting form:', error);
            toast.error('Failed to send the message.');
        }
    }

    return (
        <Layout>
            <Head title="Sylostem - Designing and curating great products..." />
            <div className="bg-[var(--background-light)] relative">
                <header className="site-header px-12">
                    <div className="w-full flex justify-between items-center gap-5">
                        <div className="max-w-[250px]">
                            <img src={logo} alt="sylostem logo" />
                        </div>
                        <div className="flex justify-end items-center gap-5">
                            <nav className="hidden lg:flex justify-between items-center gap-3">
                                <Link href={route('home')} className="nav-link">Home</Link>
                                <Link href={route('about')} className="nav-link">About</Link>
                                <Link href={route('contact')} className="nav-link">Contact</Link>
                                <Link href={route('caseStudy')} className="nav-link">Case study</Link>
                            </nav>
                            <button className="nav-cta hover:scale-105">Free consultation</button>
                            <span className="cursor-pointer">
                                <ListMinus size={28} />
                            </span>
                        </div>
                    </div>

                </header>
                <main className="site-main ">
                    {/* Hero section */}
                    <section className="site-section h-screen bg-dark ">
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
                            <div className="w-full h-full max-lg:hidden relative">
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
                    </section>

                    {/* services section */}
                    <section className="site-section  " id="services">
                        <div className="w-full px-[60px] py-[40px] flex flex-col justify-start items-center gap-12">
                            <div className="w-full flex justify-between items-center gap-5">
                                <div className="basis-1/2 space-y-4 ">
                                    <h3 className="w-fit text-sm font-bold text-brand-color underline uppercase">
                                        Our Services
                                    </h3>
                                    <p className=" text-5xl font-light" style={{ fontStyle: 'oblique' }}>
                                        Experience the <span className="text-brand-color">Sylostem</span> Difference <br /> Today!
                                    </p>
                                </div>
                                <div className="flex-grow ">
                                    <div className="w-[140px] mx-auto aspect-square relative ">
                                        <div className="absolute inset-0 w-full h-full rounded-full bg-brand-color-secondary animate-ping "></div>
                                        <div className="absolute inset-0 w-full h-full rounded-full flex justify-center items-center border-[5px] border-brand-color-secondary " style={{
                                            backgroundImage: `url(${ladySittingPhoto})`,
                                            backgroundPosition: 'top center',
                                            backgroundSize: 'cover',
                                        }}>
                                            <Play size={56} strokeWidth={2} stroke="white" fill="white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center gap-10">
                                <div className="w-full grid grid-cols-1 lg:grid-cols-2 _gap-x-20 _gap-y-10">
                                    {services.map(({ description, icon, title }, idx) => (
                                        <div key={idx} className="group min-h-[500px] overflow-hidden relative" style={{
                                            // backgroundImage: idx === 0 ? `url(${wireframePhoto})` : idx === 3 ? `url(${statsDashboardPhoto})` : 'none',
                                            // backgroundPosition: 'center',
                                            // backgroundSize: 'cover'
                                            // boxShadow: 'rgba(59, 122, 158, 0.2) 0px 7px 29px 0px'
                                        }}>
                                            {(idx == 0 || idx == 3) && (
                                                <img src={idx === 0 ? wireframePhoto : statsDashboardPhoto} alt="service photo" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 duration-500" />
                                            )}
                                            <div className="absolute inset-0 w-full h-full">
                                                <div key={idx} className={`
                                                w-full h-full p-10 space-y-4 z-10
                                                ${(idx === 0 || idx === 3) ? 'bg-dark/70' : 'bg-gradient-to-b from-dark to-dark/90'}
                                                flex flex-col justify-center
                                                group-hover:scale-105 duration-500
                                            `} >
                                                    <div className=" text-white">
                                                        {icon}
                                                    </div>
                                                    <div className="grid gap-2">
                                                        <h3 className="text-white text-xl font-medium">{title}</h3>
                                                        <p className="text-light text-sm">
                                                            {description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mx-auto">
                                <button className="group px-5 py-3 rounded bg-brand-color-secondary text-white flex items-center gap-2 hover:scale-105">
                                    <span>Explore our services</span>
                                    <ArrowRight className="group-hover:translate-x-1" stroke="white" />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Contact section */}
                    <section className="site-section flex flex-col " id="contact">
                        <div className="w-full flex-grow lg:max-h-[300px] px-[60px] py-[20px] flex flex-col md:flex-row items-center gap-5 bg-dark ">
                            <div className="space-y-3">
                                <h3 className=" text-sm font-bold text-brand-color underline uppercase">
                                    Our Partners
                                </h3>
                                <span className="text-light text-5xl font-semibold">
                                    Satisfied Clients
                                </span>
                                <p className="text-light-secondary text-sm">
                                    We have successfully created a new approach to IT management and product development - a system tested and trusted by our esteemed partners.
                                </p>
                            </div>
                            <hr className="w-[180px] border-t border-brand-color md:rotate-90" />
                            <div className="flex-grow px-3 py-4 w-full flex items-center gap-7 overflow-auto no-scrollbar">
                                {['SyloStem', 'SyloStem', 'SyloStem', 'SyloStem', 'SyloStem', 'SyloStem', 'SyloStem', 'SyloStem'].map((partner, index) => (
                                    <div key={index} className="w-[150px] px-4 py-5 bg-light/10 rounded-md ">
                                        <span className="text-brand-color/50 text-2xl font-extrabold">{partner}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full px-[60px] py-[40px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 ">
                            <div className="space-y-[30px] basis-1/2">
                                <div className="max-w-[500px] flex flex-col justify-start items-start gap-[20px]">
                                    <h3 className=" text-sm font-bold text-brand-color underline uppercase">
                                        Contact Us
                                    </h3>
                                    <span className="text-dark text-5xl font-medium" style={{ fontStyle: 'oblique' }}>
                                        Do you run a <span className="text-brand-color">Business</span>?
                                        {/* Want your <span className="text-brand-color">Product</span> built right? */}
                                        {/* Have you got an <span className="text-brand-color">Idea</span>? */}
                                    </span>
                                    <p className="text-dark-secondary text-sm">
                                        Tell us about your business or an idea you want to bring to life.
                                        Discover for yourself the innovation we put into our work, and how reliable our solutions are.<br /><br />
                                        Pro tip: You can upload documents in word, pdf, power point or excel formats to better explain your idea.
                                    </p>
                                </div>
                                <div className="w-full space-y-[20px]">
                                    <div className="flex">
                                        <div className="w-[50px] h-[50px] p-3 rounded-full bg-brand-color fill-white flex justify-center items-center ring-1 ring-offset-4 ring-brand-color">
                                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
                                        </div>
                                        <div className="w-[50px] h-[50px] p-3 rounded-full bg-brand-color fill-light flex justify-center items-center ring-1 ring-offset-4 ring-brand-color">
                                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
                                        </div>
                                        <div className="w-[50px] h-[50px] p-3 rounded-full bg-brand-color fill-light flex justify-center items-center ring-1 ring-offset-4 ring-brand-color">
                                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                        </div>
                                    </div>
                                    <div className="space-y-[10px]">
                                        <div className="flex gap-5">
                                            <span className="w-[50px] h-[50px] p-3 rounded-full bg-brand-color-secondary/10 flex justify-center items-center">
                                                <Phone size={24} className="stroke-brand-color" />
                                            </span>
                                            <div className="flex flex-col font-medium">
                                                <Link href="tel:+234 814 197 1579"><span>+1 234 567 890</span></Link>
                                                <Link href="tel:+234 811 217 6948"><span>+1 234 567 890</span></Link>
                                            </div>
                                        </div>
                                        <div className="flex gap-5">
                                            <span className="w-[50px] h-[50px] p-3 rounded-full bg-brand-color-secondary/10 flex justify-center items-center">
                                                <Mail size={24} className="stroke-brand-color" />
                                            </span>
                                            <div className="flex flex-col font-medium">
                                                <span>info@sylostem.com</span>
                                                <span>support@sylostem.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6 basis-1/2 ">
                                <div className="grid gap-4">
                                    <div className="w-full grid md:grid-cols-2 gap-4">
                                        <div className="group grid gap-2 ">
                                            <label className="">Full name</label>
                                            <input type="text" {...register('fullname')} className="form-input" placeholder="John Doe" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <label htmlFor="">Company (or Personal) email</label>
                                            <input type="email" {...register('email')} className="form-input" placeholder="john.doe@example.com" required />
                                        </div>
                                    </div>
                                    <div className="w-full grid md:grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <label htmlFor="">Phone number</label>
                                            <input type="tel" {...register('phone', {
                                                required: "Phone number is required",
                                                validate: (value) => isValidPhoneNumber(value) || 'Invalid phone number format',
                                            })} className="form-input" placeholder="+1 234 567 890" required />
                                        </div>
                                        <div className="grid gap-2">
                                            <label htmlFor="">Subject:</label>
                                            <input type="text" {...register('subject')} className="form-input" placeholder="Enter your subject" required />
                                        </div>
                                    </div>
                                    <div className="w-full grid gap-2">
                                        <label htmlFor="">Message</label>
                                        <div className="form-input h-fit">
                                            <textarea rows={5} {...register('message')} className="w-full border-none outline-none focus:ring-0" placeholder="Enter your message" required></textarea>
                                            <span className="sr-only">Select files</span>
                                            <input type="file" multiple {...register('files')} className={`
                                                block w-full text-sm text-slate-500
                                                file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-light file:text-brand-color-secondary
                                                hover:file:bg-violet-100
                                                `}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full grid">
                                        {errors && Object.keys(errors).map((key) => (
                                            <small className="text-red-500 flex gap-1" key={key}>
                                                <XCircle size={16} />
                                                {(errors as Record<string, any>)[key]?.message}
                                            </small>
                                        ))}
                                    </div>
                                    <div className="w-full space-y-1">
                                        <button className="w-full p-4 bg-gradient-to-b from-brand-color-secondary to-brand-color text-white font-medium rounded-md">Submit</button>
                                        <small>*typically replies within minutes</small>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    {/* <section className="site-section bg-yellow-400">Section 4</section> */}
                </main>

                {/* Footer */}
                <footer className="w-full p-5 md:p-10 bg-[#020E12] text-light space-y-6">
                    <div className="max-w-[350px] mr-auto">
                        <img src={logo} alt="sylostem logo" />
                    </div>
                    <div className="w-full lg:p-10 flex flex-col justify-start lg:flex-row lg:justify-between items-start">
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold text-brand-color">Our Goal:</h3>
                            <p className="w-full max-w-[350px] text-left text-sm font-extralight">
                                Our goal is to be your trusted IT partners - to be an extension of your team on all matters as regarding product management and software development.
                                Reach out to us, let's talk about what we can do for your business. Let our work speak for us. Don't worry, consultation is <span className="font-semibold uppercase">free!</span>
                            </p>
                        </div>
                        <div className="grid gap-5">
                            <h3 className="text-lg font-bold text-brand-color">Quick Links:</h3>
                            <div className="flex justify-start items-start gap-4">
                                <ul className="list-none">
                                    <li><Link href={route('home')}>Home</Link></li>
                                    <li><Link href={route('services')}>Services</Link></li>
                                    <li><Link href={route('about')}>About Us</Link></li>
                                    <li><Link href={route('contact')}>Contact Us</Link></li>
                                </ul>
                                <hr className="w-[90px] border-t-2 border-brand-color rotate-90 translate-y-[45px]" />
                                <ul className="list-none">
                                    <li><Link href="#">FAQ</Link></li>
                                    <li><Link href="/case-study">Case studies</Link></li>
                                    <li><Link href="/clients">Our clients</Link></li>
                                    <li><Link href="/testimonials">Testimonials</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full max-w-[450px] grid gap-4">
                            <label htmlFor="newsletter_email" className="text-brand-color">Subscribe to get the latest offers.</label>
                            <div className="w-full text-light rounded-lg pl-2 flex items-center">
                                <input id="newsletter_email" type="text" className="w-full bg-gray/20 px-4 py-4 border-0 border-b-2 border-b-brand-color outline-none focus:border-b-brand-color focus:outline-none focus:ring-transparent  " placeholder="johndoe@gmail.com" required />
                                <button type="submit" className="h-full px-5 py-3  bg-brand-color-secondary text-white font-medium">Submit</button>
                            </div>
                        </div>

                    </div>
                    <div className="w-[80%] mx-auto p-3 border-0 border-t border-t-dark-secondary">
                        <p className="w-full text-center text-sm font-extralight">Copyright &copy; {new Date().getFullYear()}. All rights reserved. | Powered by <Link href={route('home')} className="text-brand-color">Sylostem</Link></p>
                    </div>
                </footer>
            </div>
        </Layout>
    )
}