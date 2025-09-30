import React from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from './NavLink';

interface YandexSearchBarProps {
    onSearch: (query: string) => void;
}
/**
* Ссылки, логотип, поле ввода строки поиска с обработчиком события поиска и кнопка.
*/
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
                {[
                    { href: "#", label: "Видео" },
                    { href: "#", label: "Картинки" },
                    { href: "#", label: "Новости" },
                    { href: "#", label: "Карты" },
                    { href: "#", label: "Маркет" },
                    { href: "#", label: "Переводчик" },
                    { href: "#", label: "Ещё" },
                ].map((link, key) => (
                    <NavLink {...{ ...link, key }} />
                ))}
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