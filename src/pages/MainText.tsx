import React from 'react'
import LanguageChange from '../components/LanguageChange'

const MainText = () => {
  return (
    <div>
      <h1 style={{color:'rgba(0, 0, 0, 0.604)',font: '1.5em "Fira Sans", sans-serif',lineHeight: '1.5'}}>Description</h1>
      <LanguageChange 
      russianText='Проект выполнен с помощю React TypeScript, Redux Toolkit, RTKQuery,CSS.
      Использованы данные с JSON Plaseholder и с открытого публичного API Github.
      Использован дополнительный пакет для роутинга BrowserRouter.
      Так же использовал компонент react Pagination ReactPaginate
      В проекте представлены кастомные хуки, различные переиспользуемые компоненты, 
      папка models где хранятся интерфейсы, страницы по которым производится роутинг.
      Store где хранятся: слайсы, экшены, редюсеры.'
      englishText='The project is built using React TypeScript, Redux Toolkit, RTK Query, CSS.
      Data is used from JSON Placeholder and the public GitHub API. 
      The BrowserRouter package was used for routing. Additionally, the ReactPaginate component was used for pagination.
      The project includes custom hooks, various reusable components, a models folder containing interfaces, and pages for routing.
      The store directory stores slices, actions, and reducers.'
/>
    <hr style={{color:'rgba(0, 0, 0, 0.604)',font: '1.3em "Fira Sans", sans-serif',lineHeight: '1.5',maxWidth:'464px',margin:'2rem auto'}}/>
    </div>
  )
}

export default MainText