import Apointments from "../../components/Dashboard/Apointments";
import Navbar from "../../components/Dashboard/Navbar";
import Overview from "../../components/Dashboard/Overview";
import Resources from "../../components/Dashboard/Resources";



const UserDashboardPage = () => {
  return (
    <div className=" bg-white">
       <Navbar/>
       <Overview/>
       <Apointments/>
       <Resources/>
    </div>
  ) ;
};

export default UserDashboardPage;