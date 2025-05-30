import Stat from './Stat';

const Overview = () => {

    const statsammary = [
        {
            title:"Appointments",
            number: 0,
            subTitle:"Total Appointments",
            bg:"bg-blue-100"
        },
        {
            title:"Cancelled",
            number: 0,
            subTitle:"Cancelled Appointments",
            bg:"bg-red-100"
        },
        {
            title:"Pending",
            number: 0,
            subTitle:"Pending Appointment",
            bg:"bg-yellow-100"
        },
        {
            title:"Completed",
            number: 0,
            subTitle:"Completed Appointment",
            bg:"bg-green-100"
        }
    ]
  return (
   <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">Welcome back, Anya Sharma</p>
             <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-green-400 via-green-500 to-green-600  group-hover:from-teal-300 group-hover:to-lime-300 hover:text-white ">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-transparent ">
            Book a Session +
            </span>
            </button>
            </div>
            <h2 className="text-[#0d141c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Quick Stats</h2>
            <div className="flex flex-wrap gap-4 p-4">
                {
                    statsammary.map((item,index)=>{
                        return <Stat title={item.title} number={item.number} subTitle={item.subTitle} bg={item.bg}/>
                    })
                }
            </div>
        </div>
    </div>
  );
};

export default Overview;