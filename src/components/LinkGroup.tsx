import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

interface ILink {
    href: string;
    label: string;
}

type Props = {
    links: ILink[];
};
/** 
* Отображает группу ссылок в строку.
*/
const LinkGroup: React.FC<Props> = ({ links }) => (
    <Navbar fixed="top" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        margin: '0 auto',
        width: 'fit-content',
        backgroundColor: 'white'
    }}>
        <Nav className="d-flex justify-content-center">
            {links.map((link, index) => (
                <Nav.Link key={index} href={link.href} className="text-primary">
                    {link.label}
                </Nav.Link>
            ))}
        </Nav>
    </Navbar>
);

export default LinkGroup;