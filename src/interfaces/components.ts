import { ChangeEvent } from "react";

export type rounded = "circle" | "pill" | "none";


export interface PropsType {
    children?: React.ReactNode | Array<React.ReactElement>;
    classes?: string;
    slot?: string;
    align?: string;
    color?: string;
    colorText?: string;
    size?: string;
    colorLevel?: string;
    gap?: string | number;
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

export interface PropsTypeImage extends PropsType {
    src: string | any;
    alt?: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    rounded?: rounded | "pill";
}
