/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import Dropdown from "../ui/Dropdown"

const styles = {
    btn: "sm:w-9 w-7 sm:h-9 h-7 rounded-full flex justify-center items-center border active:border-green-900",
};

const UserDropdown = ({ userDrop, setUserDrop }: any) => {
    return (<div>
        <button
            onClick={() => setUserDrop(!userDrop)}
            className={styles.btn}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="sm:w-5 w-4 sm:h-5 h-4"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
            </svg>
        </button>
        <Dropdown
            active={userDrop}
            styles={"absolute right-0 top-16 rounded-lg text-left"}
        >
            <h1 className="text-3xl font-bold">Hello, User</h1>
            <ul className="mt-5">
                <li>
                    <Link to="/dashboard/add-product" className="text-lg hover:text-red">
                        My Dashboard
                    </Link>
                </li>
            </ul>
        </Dropdown>
    </div>
    )
}

export default UserDropdown