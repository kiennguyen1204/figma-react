import { ChangeEvent } from "react";

export interface PropsType {
    children?: React.ReactNode;
    classes?: string;
    slot?: string;
    align?: string;
    color?: string;
    colorText?: string;
    size?: string;
    colorLevel?: string;
}

export interface PropsTypeRate extends PropsType {
    defaultValue?: number;
    value?: number;
    max?: number;
    min?: number;
    step?: number;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}