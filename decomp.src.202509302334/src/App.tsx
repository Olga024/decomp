import './App.css'
import ExchangeLink from './components/ExchangeLink';
import InfoCard from './components/InfoCard';
import LinkGroup from './components/LinkGroup'
import MovieLink from './components/MovieLink';
import NewsLink from './components/NewsLink'
import SearchString from './components/SearchString';

interface TLink {
  icon?: string;
  href: string,
  label: string,
}

function App() {
  const links1: TLink[] = [
    { href: '/', label: 'Сейчас в СМИ' },
    { href: '/about', label: 'в Германии' },
    { href: '/contact', label: 'Рекомендуем' }
  ]

  const links2: TLink[] = [
    { href: '/', label: 'Lorem Ipsum is simply' },
    { href: '/', label: 'Lorem Ipsum is simply' },
    { href: '/', label: 'Lorem Ipsum is simply' },
  ]

  const infoCardsData: InfoCard[] = [
    {
      title: 'Lorem Ipsum is simply',
      content: 'It is a long established fact',
      link: undefined
    },
    {
      title: 'Lorem Ipsum is simply',
      content: 'It is a long established fact',
      link: undefined
    },
    {
      title: 'Lorem Ipsum is simply',
      content: 'It is a long established fact',
      link: undefined
    },
    {
      title: 'Lorem Ipsum is simply',
      content: 'It is a long established fact',
      link: undefined
    },
    {
      title: 'Lorem Ipsum is simply',
      content: 'It is a long established fact',
      link: undefined
    },
  ]

  return (
    <>
      <LinkGroup links={links1} />
      <NewsLink links={links2} />
      <ExchangeLink currencyName={'currency'} rate={10} change={10} />
      <SearchString onSearch={function (): void {
        throw new Error('Function not implemented.');
      }} />
      <MovieLink />
      <InfoCard cardsData={infoCardsData} />
    </>
  )
}

export default App
