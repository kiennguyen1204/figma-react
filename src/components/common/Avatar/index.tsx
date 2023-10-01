import { PropsTypeImage } from "interfaces/components";

export const Avatar = (props: PropsTypeImage) => {
    const { width, height, alt, src, rounded, classes } = props;
    const roundedImage = rounded ? rounded : '';

    const isSVG = (code: string): boolean => {
        const svgRegex = /^<svg.*<\/svg>$/;
        return svgRegex.test(code);
    }

    const isImageSrc = (code: string): boolean => {
        const imgRegex = /\.(png|jpe?g|gif|svg|webp)$/;
        return imgRegex.test(code);
    }

    const renderedSRC = (source: string) => {
        if (isSVG(source)) {
            return (
                <svg className={`${roundedImage ?? roundedImage} ${classes ? classes : ''}`} dangerouslySetInnerHTML={{ __html: src }} />
            );
        }

        if (isImageSrc(source)) {
            
            return (
                <img width={width} height={height} decoding="async" loading="lazy" src={src} className={`avatar img-fluid ${roundedImage ?? roundedImage} ${classes ? classes : ''}`} alt={alt ?? ''} />
            );
        }
    }

    return (
        <div className={`avatar-container ${classes ? classes : ''}`}>
            {renderedSRC(src)}
        </div>
    )
}