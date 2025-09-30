import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Nav, Navbar } from "react-bootstrap";

interface ILink {
    href: string;
    label: string;
}

type Props = {
    links: ILink[];
};

const NewsLink: React.FC<Props> = ({ links }) => {
    return (
        <Navbar style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'fixed',
            top: '60px',
            width: '100%',
        }}>
            <Nav className="d-flex flex-column">
                {links.map((link, index) => (
                    <Nav.Link key={index} href={link.href}>
                        <FontAwesomeIcon icon={faImage} /> {link.label}
                    </Nav.Link>
                ))}
            </Nav>
        </Navbar>
    );
}

export default NewsLink;