const Livefeeds = () => {

    const feedlist = [
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
        {
            title: "Soybean (SBBS)",
            amount: "₦30,834.59",
        },
    ]

    return (
        <div className="flex gap-2 bg-white">
             <div className="text-[15px] font-[500] bg-black text-white text-center px-4 py-2">
                <h1>Live Market</h1>
             </div>
             <div className="flex justify-between overflow-x-auto w-100 gap-2">
             {feedlist.map((feed, index) => <div>
                <div key={index} className="flex flex-col text-[11px] font-[500] py-1 px-2">
                        <h4 className="">{feed.title}</h4>
                        <p className="">{feed.amount}</p>
             </div>
            </div>)}
             </div>
           

        </div>
    )
}

export default Livefeeds;