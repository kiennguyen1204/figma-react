type Position = 'center' | 'top' | 'start' | 'end' | 'bottom' | 'none';

export interface PropsType {
    children?: React.ReactNode | Array<React.ReactElement>;
    classes?: string;
    position?: Position;
}
