import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useEffect, useState } from "react";
import Preloader from "../../components/common/Preloader";

const Main = () => {
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
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>
            )}
        </>
    )
};

export default Main;