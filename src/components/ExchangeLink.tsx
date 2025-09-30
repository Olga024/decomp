import { Card } from "react-bootstrap"

interface ICurrencyProps {
    currencyName: string,
    rate: number,
    change: number
}
/** 
* Показывает наименование валюты, курс и изменение курса.
*/
const ExchangeLink: React.FC<ICurrencyProps> = ({ currencyName, rate, change }) => {
    return (
        <div>
            <Card style={{
                position: 'fixed',
                top: '200px',
                width: '100%',
                borderColor: 'white',
                backgroundColor: 'white'
            }}>
                <Card.Body style={{
                    display: 'flex',
                    flexDirection: 'row',
                    color: 'black',
                }}>
                    <Card.Title>{currencyName}</Card.Title>
                    <Card.Title>{rate}</Card.Title>
                    <Card.Title>{change}</Card.Title>
                </Card.Body>

            </Card>
        </div>
    )
}

export default ExchangeLink