import React, {useState} from "react";
import './Button.css'

interface ItemButtonProps {
    text: string;
    size?: 'small' | 'medium' | 'big';
    color?: 'primary' | 'danger' | 'success';
    onClick: Function;
}

const ItemButton : React.FC<ItemButtonProps> = ({text, onClick, size='medium', color='primary'}) => {
    const getClassName = () => {
      switch (size) {
          case 'big':
              return 'item-button item-button-l '
          case 'medium':
              return 'item-button item-button-m '
          case 'small':
              return 'item-button item-button-s '
          default:
              return 'item-button item-button-s '
      }
    }

    const getClassColor = () => {
        switch (color) {
            case 'primary':
                return 'item-button-primary'
            case 'danger':
                return 'item-button-danger'
            case 'success':
                return 'item-button-success'
            default:
                return 'item-button-primary'
        }
    }

    const className = getClassName() + getClassColor();

    return (
        <div className={className}>
            <button onClick={() => onClick()} color={color ? color : 'primary'}>{text}</button>
        </div>
    )
}
export default ItemButton
