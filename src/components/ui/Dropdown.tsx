/* eslint-disable @typescript-eslint/no-explicit-any */

const Dropdown = ({ children, styles, active }: any) => {
    return (
        <div
            className={`${styles} ${active ? "block" : "hidden"
                } w-[300px] h-[400px] px-5 py-7 bg-white border`}
        >
            {children}
        </div>
    );
}

export default Dropdown;

