import React from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface YandexSearchBarProps {
    onSearch: (query: string) => void;
}

const YandexSearchBar: React.FC<YandexSearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = React.useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <div>
            <div className="d-flex justify-content-center">

            </div>
            <Nav className="justify-content-center">
                <Nav.Link href="#">Видео</Nav.Link>
                <Nav.Link href="#">Картинки</Nav.Link>
                <Nav.Link href="#">Новости</Nav.Link>
                <Nav.Link href="#">Карты</Nav.Link>
                <Nav.Link href="#">Маркет</Nav.Link>
                <Nav.Link href="#">Переводчик</Nav.Link>
                <Nav.Link href="#">Ещё</Nav.Link>
            </Nav>
            <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
                <img src="/assets/YandexLogo.png" alt="Yandex Logo" style={{ width: '300px', height: '50px' }} />
                <Form.Control
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ width: '800px', marginRight: '10px' }}
                />
                <Button variant="btn btn-warning">
                    Найти
                </Button>
            </Form>
        </div>
    );
};

export default YandexSearchBar;