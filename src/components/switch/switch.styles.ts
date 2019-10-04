import styled from 'styled-components';

export const Container = styled.span`
    display: inline-flex;
    position: relative;
    width: 50px;
    height: 26px;
`;

export const Thumb = styled.span`
    display: block;
    width: 24px;
    height: 24px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 50%;
`;

export const SwitchBase = styled.span<{ checked: boolean }>`
    width: 26px;
    height: 26px;
    top: 0;
    left: 0;
    color: #bdbdbd;
    z-index: 1;
    position: absolute;
    transform: translateX(${({ checked }) => (checked ? '100%' : '0%')});
    transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    & ${Thumb} {
        transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-color: ${({ checked }) => (checked ? '#bdbdbd' : '#90caf9')};
    }
`;

export const Track = styled.span<{ checked: boolean }>`
    width: 50px;
    height: 26px;
    border: 1px;
    opacity: ${({ checked }) => (checked ? '0.3' : '0.5')};
    background-color: ${({ checked }) => (checked ? '#bdbdbd' : '#90caf9')};
    border-radius: 13px;
`;

export const Checker = styled.input`
    position: absolute;
    top: 0;
    left: -100%;
    right: 0;
    bottom: 0;
    width: 300%;
    height: 100%;
    margin: 0;
    cursor: pointer;
    opacity: 0;
`;

export const Ball = styled.span``;
