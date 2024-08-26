import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import Preloader from "../../components/common/Preloader";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <Outlet />
                </>
            )}
        </>
    )
}

export default Dashboard