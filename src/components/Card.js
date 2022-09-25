import React from 'react'
import "../css/card.scss"

const Card = ({item}) => {
  console.log(item.imageUrl);
  return (
    <article>
        <h2> {item.title} </h2>
        <img src={item.imageUrl} alt="blog img" />
        <p> 
          {item.dummyText}
        </p>
        <div className="tags">
            {
              item.tags?.map((tag)=>{
                return <span>{tag}</span>
              })
            }
        </div>
        <div className="about-post">
            <span>author - Ankit Kumar</span>
            <span> 21 Sep 2022 </span>
        </div>
    </article>
  )
}

export default Card