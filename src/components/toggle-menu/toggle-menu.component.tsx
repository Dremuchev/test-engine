import React, { useState, useCallback, useRef, useEffect } from 'react';
import { getColorsArrayByLenght, getElementListener, clearElementListener } from '../../services/services';
import { handleMenuItemSelect } from './toggle-menu.service';
import { TOGGLE_MENU_EVENT_NAME } from './toggle-menu.constants';
import { CustomMenuProps } from '../custom-menu/custom-menu.types';

export const ToggleMenu = ({ countOfItems }: CustomMenuProps) => {
    const [open, setOpen] = useState(false);

    const toggleMenuRef = useRef(null);

    useEffect(() => {
        getElementListener(toggleMenuRef, TOGGLE_MENU_EVENT_NAME, handleMenuItemSelect);
        return () => {
            clearElementListener(toggleMenuRef, TOGGLE_MENU_EVENT_NAME, handleMenuItemSelect);
        };
    }, []);

    const toggleMenuOptions = JSON.stringify(getColorsArrayByLenght(Number(countOfItems)));

    const handleButtonClick = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <health-toggle-menu dopdownIsOpen={open} options={toggleMenuOptions} ref={toggleMenuRef}>
            <health-button name="Custom button" onClick={handleButtonClick} slot="toggler"></health-button>
        </health-toggle-menu>
    );
};
