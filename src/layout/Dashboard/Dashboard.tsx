import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import Preloader from "../../components/common/Preloader";
import Header from "./Header";
import Sidebar from "./Sidebar";

const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "md:py-24 sm:py-16 py-10",
};

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <div className="grid grid-cols-8 h-full w-full bg-[#E2E6E0]">
                        <Sidebar
                            isSidebarOpen={isSidebarOpen}
                            setIsSidebarOpen={setIsSidebarOpen}
                        />
                        <div
                            className={`${isSidebarOpen
                                ? "col-span-12 sm:col-span-5 lg:col-span-6"
                                : "col-span-12"
                                }`}
                        >
                            <Header
                                setIsSidebarOpen={setIsSidebarOpen}
                                isSidebarOpen={isSidebarOpen}
                            />
                            <div
                                className={`${styles.paddingX} ${isSidebarOpen ? "max-w-7xl" : "max-w-screen-2xl"
                                    } min-h-screen w-full mx-auto `}
                            >
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Dashboard