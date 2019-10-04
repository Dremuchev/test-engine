import React, { useState, ChangeEvent, useCallback, useRef } from 'react';
import { StyledInput, FocusedBorder, InputContainer, StyledLabel } from './input.styles';
import { InputProps } from './input.types';

export const Input = ({ onChangeValue, name, count }: InputProps) => {
    const [toggleMenuCount, setToggleMenuCount] = useState(count || 1);
    const labelRef = useRef(null);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const value = (event.target.value as any) as number;
            console.log('TCL: Input -> value', value);
            setToggleMenuCount(value);
            onChangeValue(value, name);
        },
        [toggleMenuCount],
    );

    return (
        <InputContainer>
            <StyledInput
                type="number"
                value={toggleMenuCount}
                onChange={handleChange}
                hasContent={Boolean(toggleMenuCount)}
            />
            <StyledLabel ref={labelRef}>Count of fields for "{name}"</StyledLabel>
            <FocusedBorder />
        </InputContainer>
    );
};
