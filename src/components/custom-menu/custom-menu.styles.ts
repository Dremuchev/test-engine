import styled from 'styled-components';

export const Dropdown = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

export const DropdownMenuItem = styled.li<{ color?: string }>`
    font-family: 'Source Sans Pro';
    letter-spacing: 0.1px;
    font-size: 14px;
    display: flex;
    color: #525462;
    align-items: center;
    height: 36px;
    padding: 0 18px;
    margin: 3px 0 0;
    background-color: ${({ color = '#fff' }) => color};

    &:last-child {
        margin: 0 0 3px;
    }

    &:hover {
        background-color: #f2f3f7;
    }
`;
