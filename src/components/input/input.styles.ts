import styled, { css } from 'styled-components';

const unfocusedLabelStyles = css`
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    font-size: 12px;
`;

const focusedLabelStyles = css`
    position: absolute;
    top: -16px;
    left: 0;
    font-size: 12px;
    color: #4caf50;
    transition: 0.3s;
`;

export const InputContainer = styled.div`
    margin: 20px;
    position: relative;
`;

export const StyledLabel = styled.label`
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
`;

export const FocusedBorder = styled.span``;

export const StyledInput = styled.input<{ hasContent: boolean }>`
    font: 15px/24px 'Source Sans Pro';
    color: #333;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    padding: 4px 0;
    border-bottom: 1px solid #ccc;
    background-color: transparent;

    & ~ ${StyledLabel} {
        ${({ hasContent }) => (hasContent ? focusedLabelStyles : unfocusedLabelStyles)}
    }

    & ~ ${FocusedBorder} {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #4caf50;
        transition: 0.4s;
    }

    &:focus {
        outline: none;

        & ~ ${FocusedBorder} {
            width: 100%;
            transition: 0.4s;
        }

        & ~ ${StyledLabel} {
            ${({ hasContent }) => (hasContent ? focusedLabelStyles : unfocusedLabelStyles)}
        }
    }
`;
