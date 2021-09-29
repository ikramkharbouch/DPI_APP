import React from "react";

const Input = ({ type, classnames, placeholder, label }) => {
    return (
        <React.Fragment>
            <div>
                <label className="text-xs text-blue-500 absolute font-bold">{label}</label>
                <input type={type} className={`${classnames} py-2 mt-5 lg:py-5 rounded border text-sm pl-5`} placeholder={placeholder} />
            </div>
        </React.Fragment>
    );
}

export default Input;