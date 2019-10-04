import React, { useState } from 'react';
import { Container, SwitchBase, Track, Ball, Checker, Thumb } from './switch.styles';
import { SwitchProps } from './switch.types';

export const Switch = ({ onChange }: SwitchProps) => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
        onChange(!checked);
    };
    return (
        <Container>
            <SwitchBase checked={checked}>
                <Ball>
                    <Checker type="checkbox" onChange={handleChange} checked={checked} />
                    <Thumb />
                </Ball>
            </SwitchBase>
            <Track checked={checked} />
        </Container>
    );
};
