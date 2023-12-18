import { MouseEventHandler } from "react";

export interface CustomButtonTypeProps { 
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>; 
    btnType?: 'button' | 'reset' | 'submit'
}