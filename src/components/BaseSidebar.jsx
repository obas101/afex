

// nav icons imports
import homeIcon from '../assets/dashboard-icon.svg';
import marketIcon from '../assets/icon-trade.svg';
import portfolioIcon from '../assets/briefcase.svg';
import communityIcon from '../assets/Group3.svg';
import reportIcon from '../assets/Group4.svg';
import settingsIcon from '../assets/Group5.svg';

const SideBar = () => {

    const navList = [
        {
            name: 'Overview',
            icon: homeIcon,
            path: '/',
            active: false,
        },

        {
            name: 'Market',
            icon: marketIcon,
            path: '/',
            active: true,
        },
        {
            name: 'Portfolio',
            icon: portfolioIcon,
            path: '/',
            active: false,

        },
        {
            name: 'Community',
            icon: reportIcon,
            path: '/',
            active: false,
        },
        {
            name: 'Reports',
            icon: settingsIcon,
            path: '/',
            active: false,
        },
        {
            name: 'Settings',
            icon: communityIcon,
            path: '/about',
            active: false,
        },
    ]
    return (
        <>
            <nav className='w-fit p-2 bg-[#FFFFFF]'>
                <ul className='flex flex-col gap-12 mt-10'>
                {navList.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.path} className='flex flex-col items-center'>
                                <img width={20} src={item.icon} className="text-orange-800" alt="home" />   
                                <a href={item.path} className={`text-[10px] font-[500] mt-2 ${item.active ? "text-[#D71E0E]" : ""}`}>{item.name}</a>
                            </a>
                        </li>
                    )
                    })}
                </ul>
            </nav>
        </>
    )
}


export default SideBar;