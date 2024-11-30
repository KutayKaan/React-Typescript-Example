import { ReactNode } from "react";

type HeaderProps = {
    image: {
        src:string,
        alt:string,
    }
    children: ReactNode
}

const Header = (props:HeaderProps) => {
    return(
        <>
            <img src={props.image.src} alt={props.image.alt} />
            {props.children}
        </>
    )
}

export default Header;