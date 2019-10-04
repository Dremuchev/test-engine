export interface InputProps {
    name: string;
    count: number;
    onChangeValue: (value: number, name: string) => void;
}
