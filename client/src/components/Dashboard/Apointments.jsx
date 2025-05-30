import AppointmentImg01 from '../../assets/images/AppointmentImg01.png'
import AppointmentImg02 from '../../assets/images/AppointmentImg02.png'
import AppointmentImg03 from '../../assets/images/AppointmentImg03.png'
import Session from "./Session";

const Apointments = () => {

    const upcommingAppointment = [
        {
            date:"July 22, 2024",
            time:"10:00 AM",
            session:"Virtual Session with Dr. Emily Carter",
            topic:"Stress Management",
            image:AppointmentImg01,
            state:"Join",
            btnClr:"bg-gradient-to-r from-green-400 via-green-500 to-green-600"
        }
    ]

    const pastAppointment  = [
        {
            date:"July 15, 2024",
            time:"04:00 PM",
            session:"Virtual Session with Dr. Maya Jeevan",
            topic:"Anxiety",
            image:AppointmentImg02,
            state:"Review",
            btnClr:"bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
        },
        {
            date:"July 08, 2024",
            time:"11:00 AM",
            session:"Virtual Session with Dr. Lilly Thomson",
            topic:"Depression",
            image:AppointmentImg03,
            state:"Review",
            btnClr:"bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
        }
    ]
  return (
    <div id='appointment' className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Upcoming Appointments
        </h2>

        {
            upcommingAppointment.map((item)=>{
               return <Session date={item.date} time={item.time} session={item.session} topic={item.topic} image={item.image} state={item.state} btnClr={item.btnClr}/>
               
            })
        }
        
        <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Past Appointments
        </h2>

        {
            pastAppointment.map((item)=>{
                return <Session date={item.date} time={item.time} session={item.session} topic={item.topic} image={item.image} state={item.state} btnClr={item.btnClr}/>
            })
        }
      </div>
    </div>
  );
};

export default Apointments;
