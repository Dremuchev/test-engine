import { ButtonType, ControlSize } from 'hp-engine/dist/types/components/health-button/health-button.types';
import { DropdownAlignConfig } from 'hp-engine/dist/types/components/health-dropdown/health-dropdown.types';

type Deafault = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'health-button': {
                disabled?: boolean;
                name?: string;
                type?: ButtonType;
                size?: ControlSize;
            } & Deafault;
            'health-dropdown': {
                open?: boolean;
                alignConfig?: DropdownAlignConfig;
                container: HTMLElement;
            } & Deafault;
            'health-toggle-menu': {
                test?: () => void;
                options?: string;
                dopdownIsOpen?: boolean;
            } & Deafault;
            'health-menu': {} & Deafault;
        }
    }
}
