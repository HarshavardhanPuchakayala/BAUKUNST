import React from 'react'
import "./News.css"
export default function News() {
    const NewsData=[
        {
            img:"/assets/News1.png",
            title:"Two linked skyscrapers proposed for casino complex in New York City",
            name:"Ellen Eberhardt",
            date:"26 July 2023"
        },
        {
            img:"/assets/News2.png",
            title:"Crystalline volume added to Audubon Aquarium and Insectarium in New Orleans",
            name:"Jenna McKnight",
            date:"12 AUG 2023"
        },
        {
            img:"/assets/News3.png",
            title:"Foster + Partners designs Equinox hotel for Saudi Arabia's Amaala resort",
            name:"Cajsa Carlson",
            date:"16 Nov 2023"
        }
    ]
  return (
    <>
    <section className="NewsSection" id='News'>
        <div className="NewsTitle">
            <h1>Recent News</h1>
            <p>______________</p>
        </div>
        <div className="NewsCards">
            {NewsData.map((item,index)=>(
            <div className="NewsCard" key={index}>
                <img src={item.img}/>
                <div className="NewsCardContent">
                    <h4>{item.title}</h4>
                    <span>
                        <p>{item.name}</p>|<p>{item.date}</p>
                    </span>
                </div>
            </div>
            ))}
        </div>
    </section>
    </>
  )
}
