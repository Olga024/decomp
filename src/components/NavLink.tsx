import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { JSX } from "react";
import { Nav } from "react-bootstrap";

const defaultNavProps = {
    className: "text-primary",
}

export type TNavLinkProps = {
    icon?: IconDefinition;
    href: string;
    label: string | JSX.Element;
    key?: string | number;
};
/** 
* Позволяет добавлять иконку перед текстом ссылки.
*/
export const NavLink: React.FC<TNavLinkProps> = ({
    icon,
    label,
    href,
    key
}) => {
    return <Nav.Link {...{ ...defaultNavProps, key, href }}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {label}
    </Nav.Link>
}