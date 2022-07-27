import productViewIcon from '../assets/trending-up.svg';
import orderIcon from '../assets/book.svg';
import priceHistoryIcon from '../assets/Shape.svg';
import openDoorIcon from '../assets/eye.svg';
import closedTrade from '../assets/Shape-2.svg';
import cancelTradeIcon from '../assets/x-circle.svg';
import searchIcon from '../assets/ic_Plus.svg';

const BaseSideLinks = () => {
    const links = [
        {
            name: 'Product View ',
            icon: productViewIcon,
            path: '/',
            active: false,
        },

        {
            name: 'Order Book ',
            icon: orderIcon,
            path: '/',
            active: true,
        },
        {
            name: 'Price History',
            icon: priceHistoryIcon,
            path: '/',
            active: false,

        },
        {
            name: 'Open Orders ',
            icon: openDoorIcon,
            path: '/',
            active: false,
        },
        {
            name: 'Closed Trades',
            icon: closedTrade,
            path: '/',
            active: false,
        },
        {
            name: 'Cancelled Trades',
            icon: cancelTradeIcon,
            path: '/',
            active: false,
        },
    ]
    return (
        <nav className="bg-white p-2 py-2 h-fit w-fit">
            <div className='flex'>
            <label class="relative block">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
               <img src={searchIcon} alt="search" className="w-4 h-4" />
                    </span>
                <input class=" placeholder:text-[#B3B3B3] block h-fit bg-[#f9fafb] w-full border border-[#ededed] rounded py-1 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm" placeholder="Search" type="text" name="search"/>
            </label>
            </div>
            <ul className="flex flex-col mt-3">
                {links.map((link, index) => {
                    return (
                        <li key={index} className={`mt-2 p-3  ${link.active ? "bg-[#F8FAFB] rounded" : ""} hover:bg-[#F8FAFB] rounded cursor-pointer`}>
                            <a href={link.path} className='flex items-center gap-3 pl-4'>
                                <img width={15} src={link.icon} className="text-orange-800" alt="home" />   
                                <a href={link.path} className={`text-[12px] font-[500] ${link.active ? "text-[#D71E0E]" : ""} `}>{link.name}</a>
                            </a>
                        </li>
                    )
                }
                )}
            </ul>
        </nav>
    )

}

export default BaseSideLinks;