import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "./NavLink";

interface ILink {
    href: string;
    label: string;
}

type Props = {
    links: ILink[];
};
/**
 * Ссылка на новость с иконкой.
*/
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
                {links.map((link, key) => (
                    <NavLink {...{ ...link, key }} />
                ))}
            </Nav>
        </Navbar>
    );
}

export default NewsLink;