import React from 'react';
import { getColorsArrayByLenght } from '../../services/services';
import { Dropdown, DropdownMenuItem } from './custom-menu.styles';
import { handleMenuItemSelect } from './custom-menu.service';
import { CustomMenuProps } from './custom-menu.types';

export const CustomMenu = ({ countOfItems }: CustomMenuProps) => {
    console.log('TCL: CustomMenu -> countOfItems', countOfItems);
    const renderMenuItems = () =>
        getColorsArrayByLenght(Number(countOfItems)).map((color: string, index: number) => (
            <DropdownMenuItem key={index} onClick={handleMenuItemSelect(color)}>
                {color}
            </DropdownMenuItem>
        ));
    return (
        <health-menu>
            <health-button name="Open menu" slot="toggler" type="success"></health-button>
            <Dropdown slot="items">{renderMenuItems()}</Dropdown>
        </health-menu>
    );
};
