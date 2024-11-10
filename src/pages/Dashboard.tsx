import HomeFooter from "../component/HomeFooter.tsx";
import DashboardHeader from "../component/DashboardHeader.tsx";
import HomeDashboard from "../component/HomeDashboard.tsx";

const Dashboard = () => {
  return (
    <div className="">
      <DashboardHeader />
      <HomeDashboard />
      <HomeFooter />
    </div>
  );
};

export default Dashboard;
