import React, { useState } from 'react';
import { Input } from './components/input/input.components';
import { CustomMenu } from './components/custom-menu/custom-menu.component';
import { ToggleMenu } from './components/toggle-menu/toggle-menu.component';
import styled from 'styled-components';
import { Switch } from './components/switch/switch.component';

const HEALTH_MENU = 'Health menu';
const TOGGLE_MENU = 'Toggle menu';

const initialValues = { [HEALTH_MENU]: 1, [TOGGLE_MENU]: 1 };

const Wrapper = styled.div`
    margin: 5px;
    padding: 5px;
    border: 1px solid #aaa;
    border-radius: 6px;
`;

export const App = () => {
    const [values, setValues] = useState(initialValues);

    const handleChangeValue = (value: number, name: string) => {
        initialValues[name] = value;
        setValues({ ...initialValues });
    };

    const handleSwitchChange = (checked: boolean) => {
        console.log('TCL: handleSwitchChange -> checked', checked);
        if (checked) {
            document.body.setAttribute('style', '--health-btn-rested-color: #30b6dd');
        } else {
            document.body.removeAttribute('style');
        }
    };

    return (
        <>
            <Switch onChange={handleSwitchChange} />
            <Wrapper>
                <Input onChangeValue={handleChangeValue} name={HEALTH_MENU} count={values[HEALTH_MENU]} />
                <CustomMenu countOfItems={values[HEALTH_MENU]} />
            </Wrapper>
            <Wrapper>
                <Input onChangeValue={handleChangeValue} name={TOGGLE_MENU} count={values[TOGGLE_MENU]} />
                <ToggleMenu countOfItems={values[TOGGLE_MENU]} />
            </Wrapper>
        </>
    );
};
