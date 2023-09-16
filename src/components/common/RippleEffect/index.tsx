import { useLayoutEffect, useState } from "react";
import './index.css'

interface Ripple {
    x: number;
    y: number;
    size: number;
}

interface Props {
    duration: number;
    color: string;
}

/**
 * Component that displays ripples on click.
 * @param props - The duration and color of the ripples.
 */
const RippleEffect: React.FC<Props> = (props) => {
    const { duration, color } = props;
    const [rippleArray, setRippleArray] = useState<Ripple[]>([]);

    const useDebounceRippleCleanUp = (
        rippleCount: number, 
        duration: number, 
        cleanUpFunction: () => void
    ) => {
        useLayoutEffect(() => {
            let debounce: any = null;
            if (rippleCount > 0) {
                clearTimeout(debounce);
    
                debounce = setTimeout(() => {
                    cleanUpFunction();
                }, duration * 1800);
            }
    
            return () => clearTimeout(debounce);
        }, [rippleCount, duration, cleanUpFunction]);
    }

    useDebounceRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });

    /**
     * Converts a hex color code into RGB.
     *
     * @param {string} hexColor - The hex color code to convert.
     * @return {string} The RGB color code.
     */
    const hexToRGB = (hexColor: string): string => {
        // Remove the # symbol from the hex color code
        const hex = hexColor.replace("#", "");
    
        // Split the hex color code into RGB components
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
    
        // Return the RGB color code as a string
        return `${r}, ${g}, ${b}`;
    };

    const addRipple = (event: React.MouseEvent<HTMLSpanElement>): void => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();
    
        const size = rippleContainer.width > rippleContainer.height 
            ? rippleContainer.width 
            : rippleContainer.height;
        
        console.log(event)
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        // const x = event.clientX - rippleContainer.x - (size / 2);
        // const y = event.clientY - rippleContainer.y - (size / 2);

        const newRipple: Ripple = { x, y, size };

        setRippleArray([...rippleArray, newRipple]);
    }


    return (
        <div className="waves-effect" onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                return (
                        <span
                            className="waves-ripple"
                            key={"span" + index}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size,
                                background: `radial-gradient(rgba(${hexToRGB(color)}, 0.2) 0, rgba(${hexToRGB(color)}, 0.3) 40%, rgba(${hexToRGB(color)}, 0.4) 50%, rgba(${hexToRGB(color)}, 0.5) 60%, rgba(${hexToRGB(color)}, 0) 70%)`,
                                // animationDuration: `${duration}ms`
                                transform: `scale(${ripple.size / ripple.size}) translate(${ripple.size / 2}px, ${ripple.size / 2}px)`,
                            }}
                        />
                    );
                }
            )}
        </div>
    );
}

export default RippleEffect;