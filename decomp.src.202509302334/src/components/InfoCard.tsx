import { Card, Col, Row } from "react-bootstrap";

interface InfoCard {
    link: string | undefined;
    title: string,
    content: string,
}

interface IProps {
    cardsData: InfoCard[],
}
/**
 * Карточка с информацией, включающая заголовок-ссылку и контент.
 */
const InfoCard = ({ cardsData }: IProps) => (
    <Row xs={1} md={3} className="no-gutters">
        {cardsData.map((card, index) => (
            <Col key={`info-card-${index}`}>
                <Card style={{
                    width: '18rem',
                    border: 'none',
                }}>
                    <Card.Body>
                        <Card.Title>
                            <Card.Link href={card.link}>{card.title}</Card.Link>
                        </Card.Title>
                        <Card.Text>{card.content}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
);

export default InfoCard;