import React from 'react'
import ContentWrapper from './ContentWrapper'
import CategoryCard from './CategoryCard'

const GridSection = ({cols}) => {
  return (
    <ContentWrapper>
        <div className={`grid grid-cols-${cols} gap-4`}>
            <CategoryCard cols={cols}/>
        </div>
    </ContentWrapper>
  )
}

export default GridSection