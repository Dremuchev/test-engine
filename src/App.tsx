import React, { useState, useCallback, useRef, useEffect } from 'react';
import { StyledButton } from './components/default-button/default-button.component';
import styled from 'styled-components';
import { CustomMouseEvent } from 'hp-engine/dist/types/custom.types';

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const App = () => {
    const [open, setOpen] = useState(false);

    const toggleMenuRef = useRef(null);

    const handleTest = () => console.log('Test method works!');

    const handleItemSelect = (event: CustomEvent<CustomMouseEvent>) => {
        console.log(event.detail.name);
    };

    useEffect(() => {
        if (toggleMenuRef.current) {
            toggleMenuRef.current!.test = handleTest;
            toggleMenuRef.current!.addEventListener('toggleMenuItemSelect', handleItemSelect);
        }
        return () => {
            toggleMenuRef.current!.removeEventListener('toggleMenuItemSelect', handleItemSelect);
        };
    }, []);

    const options = JSON.stringify(['Andrey Dremuchev', 'Andrey Karnaukhov', 'Andrey Bogoroditsky']);

    const handleButtonClick = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <>
            <StyledButton>Default button</StyledButton>
            <Container>
                <health-toggle-menu dopdownIsOpen={open} options={options} ref={toggleMenuRef}>
                    <health-button
                        name="Custom button"
                        type="link"
                        onClick={handleButtonClick}
                        slot="toggler"
                    ></health-button>
                </health-toggle-menu>
            </Container>
        </>
    );
};
