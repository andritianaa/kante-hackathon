import { Facebook, Instagram, Twitter } from "lucide-react"

export const Footer = () => {
    return (

        // <footer className="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
        //     <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        //         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        //             <div className="col-span-full lg:col-span-1">
        //                 <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">Brand</a>
        //             </div>

        //             <div className="col-span-1">
        //                 <h4 className="font-semibold text-gray-100">Product</h4>

        //                 <div className="mt-3 grid space-y-3">
        //                     <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Pricing</a></p>
        //                     <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Changelog</a></p>
        //                     <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Docs</a></p>
        //                 </div>
        //             </div>

        //             <div className="col-span-1">
        //                 <h4 className="font-semibold text-gray-100">Company</h4>

        //                 <div className="mt-3 grid space-y-3">
        //                     <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">About us</a></p>
        //                     <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Blog</a></p>
        //                     <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Careers</a> <span className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">We're hiring</span></p>
        //                     <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Customers</a></p>
        //                 </div>
        //             </div>

        //             <div className="col-span-2">
        //                 <h4 className="font-semibold text-gray-100">Stay up to date</h4>

        //                 <form>
        //                     <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
        //                         <div className="w-full">
        //                             <label className="sr-only">Search</label>
        //                             <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email" />
        //                         </div>
        //                         <a className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
        //                             Subscribe
        //                         </a>
        //                     </div>
        //                     <p className="mt-3 text-sm text-gray-400">
        //                         New UI kits or big discounts. Never spam.
        //                     </p>
        //                 </form>
        //             </div>
        //         </div>

        //         <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
        //             <div className="flex justify-between items-center">
        //                 <p className="text-sm text-gray-400 dark:text-neutral-400">© 2000/2021 ChocoClic tous droits réservés. Utilisation des images et des textes interdits sans autorisations</p>
        //             </div>

        //             <div>
        //                 <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
        //                     <Facebook />
        //                 </a>
        //                 <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
        //                     <Instagram />
        //                 </a>
        //                 <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
        //                     <Twitter />
        //                 </a>

        //             </div>
        //         </div>
        //     </div>
        // </footer>
        <section className="py-12 bg-orange-950 dark:bg-black">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
                    <div className="xl:flex xl:items-center xl:justify-start">
                        <img className="w-16 mx-auto h-16" src="/309518993_493093029495190_642745300732547415_n.jpg" alt="" />

                        <p className="mt-5 text-sm text-white xl:ml-6 xl:mt-0">© 2000/2021 ChocoClic tous droits réservés.</p>
                    </div>

                    <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
                        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                            <li>
                                <a href="#" title="" className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> A propos </a>
                            </li>

                            <li>
                                <a href="#" title="" className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Nos produits </a>
                            </li>

                            {/* <li>
                                <a href="#" title="" className="text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Contacts </a>
                            </li> */}


                        </ul>

                        <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

                        <ul className="flex items-center justify-center space-x-8 xl:justify-end">
                            <li>
                                <a href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                        <path
                                            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}