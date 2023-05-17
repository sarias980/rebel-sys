import React from "react";
import './Input.css';

interface ItemProps {
    value: string | number;
    placeholder: string;
    setValue: Function;
    type: string
}

const ItemInput: React.FC<ItemProps> = ({placeholder, value, setValue, type}) => {
    return (
        <div className={'input-block'}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <span className="placeholder">
                {placeholder}
            </span>
        </div>
    )
}

export default ItemInput
