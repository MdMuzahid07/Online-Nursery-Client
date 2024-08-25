
const Dropdown = ({ children, styles, active }) => {
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

