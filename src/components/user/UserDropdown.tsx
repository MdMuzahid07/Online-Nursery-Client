/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom"
import Dropdown from "../ui/Dropdown"

const UserDropdown = ({ userDrop }: any) => {
    return (
        <Dropdown
            active={userDrop}
            styles={"absolute right-0 top-16 rounded-lg text-left"}
        >
            <h1 className="text-3xl font-bold">Hello, User</h1>
            <ul className="mt-5">
                <li>
                    <Link to="/dashboard" className="text-lg hover:text-red">
                        Dashboard
                    </Link>
                </li>
            </ul>
        </Dropdown>
    )
}

export default UserDropdown