type Position = 'center' | 'top' | 'start' | 'end' | 'bottom' | 'none';

export interface PropsType {
    children?: React.ReactNode;
    classes?: string;
    position?: Position;
}
