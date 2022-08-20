import { ReactNode } from "react";
declare global {
    declare namespace Types {
        export interface IconProps {
            className?: string;
        }
        export interface Props { }
        export type PropTypes<T, P> = T & P;
        export type Content = {
    icon: ReactNode,
    header: string,
    text: string
}
    }
}
export = Types;