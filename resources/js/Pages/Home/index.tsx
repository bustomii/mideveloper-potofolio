import Facebook from '@/Icons/facebook';
import Discord from '@/Icons/facebook copy';
import Instagram from '@/Icons/instagram';
import Twitter from '@/Icons/twitter copy';
import HeaderLandingPage from '@/Layouts/Home/header';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { Fragment } from 'react';

export default function Home({ auth }: PageProps) {
    return (
        <Fragment>
            <HeaderLandingPage />
            <div className='w-full max-w-7xl mx-auto px-5 lg:px-10 2xl:px-0 pb-32'>
                <Head title="Home" />
                {/* description */}
                <div className='py-10 lg:py-20 w-full lg:w-3/4'>
                    <h1 className='text-linear-green text-center lg:text-left text-5xl lg:text-[3.5rem] font-bold leading-[3rem] lg:leading-[4.5rem]'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h1>
                </div>

                {/* profile */}
                <div className='flex gap-10 flex-col-reverse lg:flex-row'>
                    <div className='flex gap-16 w-full lg:w-2/3 flex-col lg:flex-row'>
                        <div className='relative flex items-center justify-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="155" height="155" viewBox="0 0 155 155" fill="none">
                                    <circle cx="77.5" cy="77.5" r="75.5" fill="#3A3636" stroke="url(#paint0_linear_814_190)" stroke-width="4" />
                                    <defs>
                                        <linearGradient id="paint0_linear_814_190" x1="140" y1="12" x2="10.5" y2="167.5" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.255235" stop-color="#62D9FF" />
                                            <stop offset="1" stop-color="#3BF686" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='h-full w-full absolute flex items-center justify-center text-white text-5xl'>
                                X<span className='text-base'>++</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full lg:w-1/2'>
                            <h6 className='text-3xl text-white font-bold text-center lg:text-left'>Why do we use it?</h6>
                            <span className='text-[#D6D6D6] text-center lg:text-left'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, <span className='text-linear-green font-bold'>consectetur, adipisci velit...</span></span>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 flex'>
                        <div className='flex flex-col gap-4 w-full lg:w-2/3 items-center lg:items-start'>
                            <h6 className='text-3xl text-white font-bold'>Lorem Ipsum</h6>
                            <div className='flex gap-4'>
                                <div className='cursor-pointer'>
                                    <Instagram />
                                </div>
                                <div className='cursor-pointer'>
                                    <Twitter />
                                </div>
                                <div className='cursor-pointer'>
                                    <Facebook />
                                </div>
                                <div className='cursor-pointer'>
                                    <Discord />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* what i do */}
                <div className='flex gap-10 py-10 lg:py-20 items-center flex-col lg:flex-row'>
                    <div className='flex gap-16 w-full lg:w-1/3'>
                        <div className='flex flex-col gap-2 w-full'>
                            <h6 className='text-3xl text-white font-bold text-center lg:text-left'>Where does it come from?</h6>
                            <span className='text-[#D6D6D6] text-center lg:text-left'>There is no one who loves pain itself, who <span className='text-linear-green font-bold'>seeks after it and wants to have it,</span> simply because it is pain...</span>
                        </div>
                    </div>
                    <div className='w-full lg:w-2/3 flex gap-5 items-center'>
                        <div className='w-full relative'>
                            <div className='w-full flex justify-center relative -mb-[2rem]'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                        <circle cx="36" cy="36" r="35.5" fill="#323443" stroke="url(#paint0_linear_814_202)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_814_202" x1="-60.979" y1="28.5331" x2="32.3082" y2="118.644" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.49074" stop-color="#4CA9FF" />
                                                <stop offset="1" stop-color="#3BF686" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className='absolute w-full h-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9996 33.3002C21.8187 33.3002 25.4814 31.7409 28.1819 28.9654C30.8825 26.1898 32.3996 22.4254 32.3996 18.5002C32.3996 14.575 30.8825 10.8106 28.1819 8.03502C25.4814 5.25948 21.8187 3.7002 17.9996 3.7002C14.1805 3.7002 10.5178 5.25948 7.81727 8.03502C5.11675 10.8106 3.59961 14.575 3.59961 18.5002C3.59961 22.4254 5.11675 26.1898 7.81727 28.9654C10.5178 31.7409 14.1805 33.3002 17.9996 33.3002ZM7.79721 14.8501C8.46553 12.8831 9.65802 11.1485 11.2388 9.84405C11.7212 10.6007 12.5528 11.1002 13.4996 11.1002C14.2157 11.1002 14.9024 11.3926 15.4088 11.913C15.9151 12.4334 16.1996 13.1392 16.1996 13.8752V14.8002C16.1996 15.7815 16.5789 16.7226 17.254 17.4165C17.9292 18.1104 18.8448 18.5002 19.7996 18.5002C20.7544 18.5002 21.6701 18.1104 22.3452 17.4165C23.0203 16.7226 23.3996 15.7815 23.3996 14.8002C23.3993 13.9722 23.6693 13.168 24.1663 12.5163C24.6633 11.8646 25.3586 11.4031 26.141 11.2056C27.8588 13.2252 28.8036 15.8177 28.7996 18.5002C28.7996 19.1292 28.7492 19.7489 28.6502 20.3502H26.9996C26.0448 20.3502 25.1292 20.74 24.454 21.4339C23.7789 22.1278 23.3996 23.0689 23.3996 24.0502V28.1146C21.7585 29.0905 19.8956 29.603 17.9996 29.6002V25.9002C17.9996 24.9189 17.6203 23.9778 16.9452 23.2839C16.2701 22.59 15.3544 22.2002 14.3996 22.2002C13.4448 22.2002 12.5292 21.8104 11.854 21.1165C11.1789 20.4226 10.7996 19.4815 10.7996 18.5002C10.7999 17.6251 10.4985 16.7783 9.9488 16.11C9.39913 15.4418 8.6368 14.9954 7.79721 14.8501Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className='bg-[#323443] w-full rounded-lg flex flex-col pt-12 pb-5 text-white px-5 gap-2'>
                                <span className='text-center font-bold'>Lorem Ipsum</span>
                                <span className='text-[#EFEDE8A6] text-center'>There is no one who loves pain itself, who seeks after it seeks after it  and wants to have it, simply because it is pain..</span>
                            </div>
                        </div>
                        <div className='w-full relative'>
                            <div className='w-full flex justify-center relative -mb-[2rem]'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                                        <circle cx="36" cy="36" r="35.5" fill="#323443" stroke="url(#paint0_linear_814_202)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_814_202" x1="-60.979" y1="28.5331" x2="32.3082" y2="118.644" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.49074" stop-color="#4CA9FF" />
                                                <stop offset="1" stop-color="#3BF686" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className='absolute w-full h-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9996 33.3002C21.8187 33.3002 25.4814 31.7409 28.1819 28.9654C30.8825 26.1898 32.3996 22.4254 32.3996 18.5002C32.3996 14.575 30.8825 10.8106 28.1819 8.03502C25.4814 5.25948 21.8187 3.7002 17.9996 3.7002C14.1805 3.7002 10.5178 5.25948 7.81727 8.03502C5.11675 10.8106 3.59961 14.575 3.59961 18.5002C3.59961 22.4254 5.11675 26.1898 7.81727 28.9654C10.5178 31.7409 14.1805 33.3002 17.9996 33.3002ZM7.79721 14.8501C8.46553 12.8831 9.65802 11.1485 11.2388 9.84405C11.7212 10.6007 12.5528 11.1002 13.4996 11.1002C14.2157 11.1002 14.9024 11.3926 15.4088 11.913C15.9151 12.4334 16.1996 13.1392 16.1996 13.8752V14.8002C16.1996 15.7815 16.5789 16.7226 17.254 17.4165C17.9292 18.1104 18.8448 18.5002 19.7996 18.5002C20.7544 18.5002 21.6701 18.1104 22.3452 17.4165C23.0203 16.7226 23.3996 15.7815 23.3996 14.8002C23.3993 13.9722 23.6693 13.168 24.1663 12.5163C24.6633 11.8646 25.3586 11.4031 26.141 11.2056C27.8588 13.2252 28.8036 15.8177 28.7996 18.5002C28.7996 19.1292 28.7492 19.7489 28.6502 20.3502H26.9996C26.0448 20.3502 25.1292 20.74 24.454 21.4339C23.7789 22.1278 23.3996 23.0689 23.3996 24.0502V28.1146C21.7585 29.0905 19.8956 29.603 17.9996 29.6002V25.9002C17.9996 24.9189 17.6203 23.9778 16.9452 23.2839C16.2701 22.59 15.3544 22.2002 14.3996 22.2002C13.4448 22.2002 12.5292 21.8104 11.854 21.1165C11.1789 20.4226 10.7996 19.4815 10.7996 18.5002C10.7999 17.6251 10.4985 16.7783 9.9488 16.11C9.39913 15.4418 8.6368 14.9954 7.79721 14.8501Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className='bg-[#323443] w-full rounded-lg flex flex-col pt-12 pb-5 text-white px-5 gap-2'>
                                <span className='text-center font-bold'>Lorem Ipsum</span>
                                <span className='text-[#EFEDE8A6] text-center'>There is no one who loves pain itself, who seeks after it seeks after it  and wants to have it, simply because it is pain..</span>
                            </div>
                        </div>
                        <div className='pl-10 pt-[2rem] hidden lg:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="34" viewBox="0 0 39 34" fill="none">
                                <path d="M0 14.4218L0 19.223L29.0284 19.223L17.9304 30.321L21.2543 33.6079L38.0398 16.8224L21.2543 -4.57764e-05L17.9304 3.36075L29.0284 14.4218L0 14.4218Z" fill="#F3F3F3" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* project */}
                <div className='flex gap-10 py-10 items-center flex-col'>
                    <div className='w-full text-2xl sm:text-5xl font-bold text-white pb-2'>What is Lorem Ipsum?</div>
                    <div className='flex flex-col md:flex-row gap-10 md:items-center w-full pb-2'>
                        <div className='w-full md:w-1/2 relative'>
                            <div className='w-full bg-[#323443] h-[17.625rem] rounded-md relative px-10'>
                                <div className='absolute top-2 right-2 h-[2.25rem] w-[2.25rem] bg-[#3F4152] flex justify-center items-center rounded-xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.50326 9.28315C9.49787 9.01804 9.598 8.76164 9.78163 8.57035C9.96525 8.37905 10.2173 8.26852 10.4824 8.26305L18.9659 8.08942C19.2311 8.08404 19.4874 8.18416 19.6787 8.36779C19.87 8.55141 19.9806 8.80349 19.986 9.0686L20.1597 17.5521C20.1605 17.8143 20.0583 18.0663 19.8751 18.2539C19.6918 18.4415 19.4423 18.5496 19.1801 18.555C18.918 18.5603 18.6642 18.4625 18.4735 18.2826C18.2827 18.1027 18.1703 17.855 18.1604 17.593L18.0362 11.5231L10.013 19.8815C9.82932 20.0729 9.57717 20.1834 9.31201 20.1888C9.04685 20.1943 8.79039 20.0941 8.59906 19.9105C8.40772 19.7268 8.29718 19.4747 8.29176 19.2095C8.28633 18.9444 8.38646 18.6879 8.57012 18.4966L16.5933 10.1381L10.5234 10.2623C10.2582 10.2677 10.0019 10.1676 9.81056 9.98396C9.61926 9.80034 9.50873 9.54826 9.50326 9.28315Z" fill="#EBEBEB" />
                                    </svg>
                                </div>
                                <div className='flex flex-col h-full'>
                                    <div className='py-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <g clip-path="url(#clip0_814_230)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.76089 13.8841C5.6661 13.791 5.57061 13.698 5.47443 13.6056C4.49388 12.6657 3.52096 11.7247 2.60811 10.7167C2.38693 10.4726 1.97165 9.99901 1.55464 9.75526C1.25638 9.58095 0.947683 9.50805 0.665391 9.54416C0.48553 9.56707 0.222694 9.6577 0.0907497 10.0025C0.0685275 10.0605 0.0421445 10.1601 0.0317279 10.2872C0.0150612 10.4928 0.0313727 10.8615 0.036581 10.9126C0.109498 11.6563 0.182412 12.3674 0.316092 13.1032C0.439009 13.7803 0.523033 14.4626 0.655325 15.1386C0.853242 16.1501 1.10811 17.1237 1.47964 18.0869C1.61749 18.4445 2.01992 18.6226 2.37755 18.4848C2.73485 18.3469 2.91332 17.9449 2.77547 17.5872C2.43346 16.7001 2.20047 15.8035 2.01853 14.8719C1.88728 14.2021 1.80429 13.5257 1.68241 12.8549C1.60324 12.4185 1.54699 11.991 1.49907 11.5598L1.57859 11.649C2.51366 12.6813 3.50915 13.6455 4.51332 14.608C4.88901 14.9685 5.25187 15.3393 5.63346 15.6938C5.66437 15.7389 5.80706 15.9459 5.8772 16.0167C5.99387 16.1348 6.11991 16.2007 6.22964 16.2334C6.50846 16.3167 6.79145 16.2858 7.03867 15.9733C7.22374 15.7393 7.33032 15.3764 7.32233 14.9431C7.31157 14.3476 7.08555 13.5626 7.03763 13.2008C6.73416 10.9115 6.24319 8.63131 6.11263 6.32228C6.0911 5.93965 5.76298 5.64658 5.38034 5.66811C4.9977 5.68998 4.70428 6.0181 4.72616 6.40074C4.85845 8.74449 5.35256 11.0594 5.66055 13.3834C5.67721 13.507 5.7168 13.683 5.76089 13.8841Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8287 4.39477C11.0412 4.60345 10.2523 4.78539 9.61965 5.32636C8.95784 5.89268 8.62139 6.71526 8.5016 7.63192C8.34882 8.80137 8.55368 10.1281 8.68076 11.0736C8.74674 11.5632 8.77486 12.2455 8.91757 12.85C9.04049 13.3698 9.24985 13.8354 9.56895 14.1614C10.0703 14.6736 10.8398 14.7253 11.629 14.4059C12.5408 14.0368 13.4488 13.185 13.6957 12.6885C13.8665 12.3455 13.7266 11.9281 13.3832 11.7576C13.0401 11.5868 12.6231 11.7267 12.4523 12.0698C12.2957 12.3847 11.6863 12.8844 11.1078 13.1187C10.9787 13.1708 10.8509 13.2097 10.7301 13.2194C10.6672 13.2246 10.6044 13.2337 10.5617 13.1903C10.3523 12.976 10.2787 12.6278 10.2179 12.276C10.1328 11.7857 10.1092 11.2736 10.0575 10.8882C9.9436 10.0427 9.74223 8.85762 9.87868 7.81179C9.95195 7.25102 10.1176 6.72846 10.5228 6.38193C10.9929 5.97985 11.5985 5.89269 12.1842 5.73748C12.5547 5.63956 12.7759 5.25901 12.6776 4.88852C12.5797 4.51803 12.1992 4.29685 11.8287 4.39477Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7756 8.05415C11.1655 8.38644 10.5135 8.72808 9.85964 8.96281C9.49888 9.09232 9.31103 9.49025 9.4402 9.85102C9.56971 10.2118 9.96762 10.3996 10.3284 10.2701C11.0485 10.0118 11.7683 9.6399 12.4398 9.27428C12.7763 9.09094 12.9009 8.66872 12.7176 8.33226C12.5343 7.99545 12.1124 7.87116 11.7756 8.05415Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1624 8.42237C19.6554 7.80917 19.1197 7.20571 18.5537 6.65432C18.5075 6.60953 17.9367 6.13938 17.5975 5.96369C17.3686 5.84529 17.1659 5.82376 17.0471 5.83522C16.7016 5.86855 16.4909 6.05571 16.4044 6.37585C16.3218 6.68279 16.2919 7.00258 16.2919 7.32897C15.7784 6.36612 15.3086 5.37585 15.0232 4.33314C14.9995 4.24703 14.9804 4.20675 14.9773 4.19946C14.8811 3.98696 14.7447 3.91472 14.6961 3.88625C14.4572 3.74597 14.2419 3.7696 14.0603 3.85119C14.0381 3.86092 13.5485 4.07827 13.6655 4.63348C13.6749 4.67827 13.7548 4.99737 13.778 5.12202C13.7985 5.23035 13.8429 5.32792 13.9051 5.41056C14.3836 6.78486 15.1155 8.08314 15.8179 9.35084C15.9697 9.6248 16.0881 9.90708 16.1662 10.2102C16.1891 10.2988 16.1985 10.4991 16.2186 10.5974C16.253 10.7637 16.3211 10.8751 16.3645 10.9321C16.5902 11.2286 16.8683 11.2588 17.1249 11.1828C17.2346 11.1505 17.4544 11.0765 17.5881 10.7581C17.8888 10.0428 17.8547 9.25291 17.7676 8.45708C17.7419 8.22166 17.71 7.98625 17.6905 7.75361C18.3082 8.3675 18.8863 9.04458 19.4297 9.72131C19.4895 9.79562 20.0943 10.472 20.2551 10.5727C20.6572 10.8255 20.9693 10.6356 21.103 10.5224C21.3068 10.3494 21.4673 10.0526 21.5325 9.67446C21.6166 9.18522 21.5502 8.51194 21.5436 8.24111C21.4995 6.41819 21.4336 4.51265 21.0242 2.73279C20.9384 2.35918 20.5655 2.12583 20.1919 2.2116C19.8183 2.29736 19.585 2.67064 19.6707 3.0439C20.0593 4.73418 20.1131 6.54425 20.1551 8.2748C20.1561 8.31473 20.1589 8.36473 20.1624 8.42237Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9374 2.27124C23.1892 3.48826 23.4412 4.69415 23.6058 5.94554C23.6558 6.32575 24.0048 6.59381 24.385 6.54381C24.7648 6.49381 25.0329 6.14485 24.9829 5.76464C24.751 3.99971 24.3496 2.32402 24.0135 0.58305C23.884 -0.089867 23.2444 0.00423974 23.2051 0.0111842C23.1187 0.026462 22.6475 0.126808 22.6319 0.678544C22.6308 0.712225 22.6534 0.950402 22.6572 1.04276C22.6656 1.25422 22.6614 1.46083 22.6506 1.67263C22.6381 1.91673 22.7531 2.13791 22.9374 2.27124Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7345 9.44787C24.805 9.23329 24.7692 8.98816 24.6178 8.79823C24.3786 8.49857 23.9414 8.44962 23.6418 8.68885C23.3651 8.90968 23.3133 9.17879 23.3505 9.50795C23.3935 9.88886 23.738 10.1631 24.1189 10.1197C24.4671 10.0805 24.7262 9.78884 24.7345 9.44787Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6252 22.8437C11.5544 22.6937 11.4975 22.5753 11.4839 22.55C10.8388 21.3434 10.1388 20.1527 9.37663 19.0163C9.16309 18.6979 8.73151 18.6128 8.4131 18.8264C8.0947 19.0399 8.00963 19.4715 8.22317 19.7899C8.95963 20.8878 9.63566 22.0389 10.2593 23.2048C10.3068 23.2937 10.6239 24.0837 10.8503 24.4132C11.0555 24.7114 11.3131 24.818 11.4607 24.8399C11.695 24.8746 12.0617 24.7906 12.3593 24.3934C12.7478 23.875 13.2516 22.4899 13.3346 22.26C13.4867 21.8371 13.6155 21.3934 13.735 20.9618C13.9614 20.143 14.0916 19.3097 14.2079 18.4701C14.2607 18.0902 13.995 17.7396 13.6152 17.6868C13.2357 17.6343 12.8846 17.9 12.8322 18.2795C12.7242 19.0583 12.6065 19.8319 12.3964 20.5913C12.286 20.9896 12.168 21.3996 12.0277 21.7899C11.9853 21.9069 11.8207 22.3902 11.6252 22.8437Z" fill="#FBFBFB" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_814_230">
                                                    <rect width="25" height="25" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className='py-4 flex gap-3'>
                                        <div className='cursor-pointer'>
                                            <Discord />
                                        </div>
                                        <div className='cursor-pointer'>
                                            <Twitter />
                                        </div>
                                        <div className='cursor-pointer'>
                                            <Facebook />
                                        </div>
                                    </div>
                                    <div className='h-full w-full bg-[#3F4152] rounded-md'>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <div className='flex gap-16 w-full'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <h6 className='text-[#DEDEDE] font-bold'>Lorem Ipsum</h6>
                                    <h6 className='text-3xl text-white font-bold'>Where does it come from?</h6>
                                    <span className='text-[#D6D6D6]'>There is no one who loves pain itself, who <span className='text-linear-green font-bold'>seeks after it and wants to have it,</span> simply because it is pain...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 items-center w-full pb-2'>
                        <div className='w-full md:w-1/2 relative'>
                            <div className='w-full bg-[#323443] h-[17.625rem] rounded-md relative px-10'>
                                <div className='absolute top-2 right-2 h-[2.25rem] w-[2.25rem] bg-[#3F4152] flex justify-center items-center rounded-xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.50326 9.28315C9.49787 9.01804 9.598 8.76164 9.78163 8.57035C9.96525 8.37905 10.2173 8.26852 10.4824 8.26305L18.9659 8.08942C19.2311 8.08404 19.4874 8.18416 19.6787 8.36779C19.87 8.55141 19.9806 8.80349 19.986 9.0686L20.1597 17.5521C20.1605 17.8143 20.0583 18.0663 19.8751 18.2539C19.6918 18.4415 19.4423 18.5496 19.1801 18.555C18.918 18.5603 18.6642 18.4625 18.4735 18.2826C18.2827 18.1027 18.1703 17.855 18.1604 17.593L18.0362 11.5231L10.013 19.8815C9.82932 20.0729 9.57717 20.1834 9.31201 20.1888C9.04685 20.1943 8.79039 20.0941 8.59906 19.9105C8.40772 19.7268 8.29718 19.4747 8.29176 19.2095C8.28633 18.9444 8.38646 18.6879 8.57012 18.4966L16.5933 10.1381L10.5234 10.2623C10.2582 10.2677 10.0019 10.1676 9.81056 9.98396C9.61926 9.80034 9.50873 9.54826 9.50326 9.28315Z" fill="#EBEBEB" />
                                    </svg>
                                </div>
                                <div className='flex flex-col h-full'>
                                    <div className='py-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <g clip-path="url(#clip0_814_230)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.76089 13.8841C5.6661 13.791 5.57061 13.698 5.47443 13.6056C4.49388 12.6657 3.52096 11.7247 2.60811 10.7167C2.38693 10.4726 1.97165 9.99901 1.55464 9.75526C1.25638 9.58095 0.947683 9.50805 0.665391 9.54416C0.48553 9.56707 0.222694 9.6577 0.0907497 10.0025C0.0685275 10.0605 0.0421445 10.1601 0.0317279 10.2872C0.0150612 10.4928 0.0313727 10.8615 0.036581 10.9126C0.109498 11.6563 0.182412 12.3674 0.316092 13.1032C0.439009 13.7803 0.523033 14.4626 0.655325 15.1386C0.853242 16.1501 1.10811 17.1237 1.47964 18.0869C1.61749 18.4445 2.01992 18.6226 2.37755 18.4848C2.73485 18.3469 2.91332 17.9449 2.77547 17.5872C2.43346 16.7001 2.20047 15.8035 2.01853 14.8719C1.88728 14.2021 1.80429 13.5257 1.68241 12.8549C1.60324 12.4185 1.54699 11.991 1.49907 11.5598L1.57859 11.649C2.51366 12.6813 3.50915 13.6455 4.51332 14.608C4.88901 14.9685 5.25187 15.3393 5.63346 15.6938C5.66437 15.7389 5.80706 15.9459 5.8772 16.0167C5.99387 16.1348 6.11991 16.2007 6.22964 16.2334C6.50846 16.3167 6.79145 16.2858 7.03867 15.9733C7.22374 15.7393 7.33032 15.3764 7.32233 14.9431C7.31157 14.3476 7.08555 13.5626 7.03763 13.2008C6.73416 10.9115 6.24319 8.63131 6.11263 6.32228C6.0911 5.93965 5.76298 5.64658 5.38034 5.66811C4.9977 5.68998 4.70428 6.0181 4.72616 6.40074C4.85845 8.74449 5.35256 11.0594 5.66055 13.3834C5.67721 13.507 5.7168 13.683 5.76089 13.8841Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8287 4.39477C11.0412 4.60345 10.2523 4.78539 9.61965 5.32636C8.95784 5.89268 8.62139 6.71526 8.5016 7.63192C8.34882 8.80137 8.55368 10.1281 8.68076 11.0736C8.74674 11.5632 8.77486 12.2455 8.91757 12.85C9.04049 13.3698 9.24985 13.8354 9.56895 14.1614C10.0703 14.6736 10.8398 14.7253 11.629 14.4059C12.5408 14.0368 13.4488 13.185 13.6957 12.6885C13.8665 12.3455 13.7266 11.9281 13.3832 11.7576C13.0401 11.5868 12.6231 11.7267 12.4523 12.0698C12.2957 12.3847 11.6863 12.8844 11.1078 13.1187C10.9787 13.1708 10.8509 13.2097 10.7301 13.2194C10.6672 13.2246 10.6044 13.2337 10.5617 13.1903C10.3523 12.976 10.2787 12.6278 10.2179 12.276C10.1328 11.7857 10.1092 11.2736 10.0575 10.8882C9.9436 10.0427 9.74223 8.85762 9.87868 7.81179C9.95195 7.25102 10.1176 6.72846 10.5228 6.38193C10.9929 5.97985 11.5985 5.89269 12.1842 5.73748C12.5547 5.63956 12.7759 5.25901 12.6776 4.88852C12.5797 4.51803 12.1992 4.29685 11.8287 4.39477Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7756 8.05415C11.1655 8.38644 10.5135 8.72808 9.85964 8.96281C9.49888 9.09232 9.31103 9.49025 9.4402 9.85102C9.56971 10.2118 9.96762 10.3996 10.3284 10.2701C11.0485 10.0118 11.7683 9.6399 12.4398 9.27428C12.7763 9.09094 12.9009 8.66872 12.7176 8.33226C12.5343 7.99545 12.1124 7.87116 11.7756 8.05415Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1624 8.42237C19.6554 7.80917 19.1197 7.20571 18.5537 6.65432C18.5075 6.60953 17.9367 6.13938 17.5975 5.96369C17.3686 5.84529 17.1659 5.82376 17.0471 5.83522C16.7016 5.86855 16.4909 6.05571 16.4044 6.37585C16.3218 6.68279 16.2919 7.00258 16.2919 7.32897C15.7784 6.36612 15.3086 5.37585 15.0232 4.33314C14.9995 4.24703 14.9804 4.20675 14.9773 4.19946C14.8811 3.98696 14.7447 3.91472 14.6961 3.88625C14.4572 3.74597 14.2419 3.7696 14.0603 3.85119C14.0381 3.86092 13.5485 4.07827 13.6655 4.63348C13.6749 4.67827 13.7548 4.99737 13.778 5.12202C13.7985 5.23035 13.8429 5.32792 13.9051 5.41056C14.3836 6.78486 15.1155 8.08314 15.8179 9.35084C15.9697 9.6248 16.0881 9.90708 16.1662 10.2102C16.1891 10.2988 16.1985 10.4991 16.2186 10.5974C16.253 10.7637 16.3211 10.8751 16.3645 10.9321C16.5902 11.2286 16.8683 11.2588 17.1249 11.1828C17.2346 11.1505 17.4544 11.0765 17.5881 10.7581C17.8888 10.0428 17.8547 9.25291 17.7676 8.45708C17.7419 8.22166 17.71 7.98625 17.6905 7.75361C18.3082 8.3675 18.8863 9.04458 19.4297 9.72131C19.4895 9.79562 20.0943 10.472 20.2551 10.5727C20.6572 10.8255 20.9693 10.6356 21.103 10.5224C21.3068 10.3494 21.4673 10.0526 21.5325 9.67446C21.6166 9.18522 21.5502 8.51194 21.5436 8.24111C21.4995 6.41819 21.4336 4.51265 21.0242 2.73279C20.9384 2.35918 20.5655 2.12583 20.1919 2.2116C19.8183 2.29736 19.585 2.67064 19.6707 3.0439C20.0593 4.73418 20.1131 6.54425 20.1551 8.2748C20.1561 8.31473 20.1589 8.36473 20.1624 8.42237Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9374 2.27124C23.1892 3.48826 23.4412 4.69415 23.6058 5.94554C23.6558 6.32575 24.0048 6.59381 24.385 6.54381C24.7648 6.49381 25.0329 6.14485 24.9829 5.76464C24.751 3.99971 24.3496 2.32402 24.0135 0.58305C23.884 -0.089867 23.2444 0.00423974 23.2051 0.0111842C23.1187 0.026462 22.6475 0.126808 22.6319 0.678544C22.6308 0.712225 22.6534 0.950402 22.6572 1.04276C22.6656 1.25422 22.6614 1.46083 22.6506 1.67263C22.6381 1.91673 22.7531 2.13791 22.9374 2.27124Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7345 9.44787C24.805 9.23329 24.7692 8.98816 24.6178 8.79823C24.3786 8.49857 23.9414 8.44962 23.6418 8.68885C23.3651 8.90968 23.3133 9.17879 23.3505 9.50795C23.3935 9.88886 23.738 10.1631 24.1189 10.1197C24.4671 10.0805 24.7262 9.78884 24.7345 9.44787Z" fill="#FBFBFB" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6252 22.8437C11.5544 22.6937 11.4975 22.5753 11.4839 22.55C10.8388 21.3434 10.1388 20.1527 9.37663 19.0163C9.16309 18.6979 8.73151 18.6128 8.4131 18.8264C8.0947 19.0399 8.00963 19.4715 8.22317 19.7899C8.95963 20.8878 9.63566 22.0389 10.2593 23.2048C10.3068 23.2937 10.6239 24.0837 10.8503 24.4132C11.0555 24.7114 11.3131 24.818 11.4607 24.8399C11.695 24.8746 12.0617 24.7906 12.3593 24.3934C12.7478 23.875 13.2516 22.4899 13.3346 22.26C13.4867 21.8371 13.6155 21.3934 13.735 20.9618C13.9614 20.143 14.0916 19.3097 14.2079 18.4701C14.2607 18.0902 13.995 17.7396 13.6152 17.6868C13.2357 17.6343 12.8846 17.9 12.8322 18.2795C12.7242 19.0583 12.6065 19.8319 12.3964 20.5913C12.286 20.9896 12.168 21.3996 12.0277 21.7899C11.9853 21.9069 11.8207 22.3902 11.6252 22.8437Z" fill="#FBFBFB" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_814_230">
                                                    <rect width="25" height="25" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className='py-4 flex gap-3'>
                                        <div className='cursor-pointer'>
                                            <Discord />
                                        </div>
                                        <div className='cursor-pointer'>
                                            <Twitter />
                                        </div>
                                        <div className='cursor-pointer'>
                                            <Facebook />
                                        </div>
                                    </div>
                                    <div className='h-full w-full bg-[#3F4152] rounded-md'>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <div className='flex gap-16 w-full'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <h6 className='text-[#DEDEDE] font-bold'>Lorem Ipsum</h6>
                                    <h6 className='text-3xl text-white font-bold'>Where does it come from?</h6>
                                    <span className='text-[#D6D6D6]'>There is no one who loves pain itself, who <span className='text-linear-green font-bold'>seeks after it and wants to have it,</span> simply because it is pain...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='bg-[#323443] h-[2.75rem] flex w-[max-content] px-5 gap-4 rounded-md items-center text-white cursor-pointer'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H16C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4C17 4.26522 16.8946 4.51957 16.7071 4.70711C16.5196 4.89464 16.2652 5 16 5H4C3.73478 5 3.48043 4.89464 3.29289 4.70711C3.10536 4.51957 3 4.26522 3 4ZM3 8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H16C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8C17 8.26522 16.8946 8.51957 16.7071 8.70711C16.5196 8.89464 16.2652 9 16 9H4C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8ZM3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12ZM3 16C3 15.7348 3.10536 15.4804 3.29289 15.2929C3.48043 15.1054 3.73478 15 4 15H16C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17H4C3.73478 17 3.48043 16.8946 3.29289 16.7071C3.10536 16.5196 3 16.2652 3 16Z" fill="#C4C4C4" />
                                </svg>
                            </div>
                            <span className='text-sm'>See More</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}