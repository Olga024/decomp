import { Nav } from "react-bootstrap"
/**
 * Ссылка на фильм. 
*/
export const MovieLink = () => {
    return (
        <Nav>
            <Nav className="media">
                <Nav.Link href={'#'}>{'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}</Nav.Link>
            </Nav>
        </Nav>
    );
}

export default MovieLink