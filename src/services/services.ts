export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
};

export const getColorsArrayByLenght = (lenght: number) =>
    new Array(lenght || 100).fill(undefined).map(el => (el = getRandomColor()));

export const testMethod = () => console.log('Test method works!');

export const getElementListener = (
    elementRef: React.MutableRefObject<null | HTMLTemplateElement>,
    eventName: string,
    callback: (e: CustomEventInit) => void,
) => {
    if (elementRef.current) {
        elementRef.current.addEventListener(eventName, callback);
    }
};

export const clearElementListener = (
    elementRef: React.MutableRefObject<null | HTMLTemplateElement>,
    eventName: string,
    callback: (e: CustomEventInit) => void,
) => {
    if (elementRef.current) {
        elementRef.current.removeEventListener(eventName, callback);
    }
};
