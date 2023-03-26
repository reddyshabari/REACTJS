import React, { Component } from 'react'
import NewsItem from './NewsItem';
export class News extends Component {
  articles=  []
  constructor(){
    super();
    console.log("Hello I am a constructor from News Component");
    this.state={
      articles:this.articles,
      loading:false
      
    }
    }
    async componentDidMount(){
      console.log("cdm");
      let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c8349c0396164946b29eac7f1a3144fb"
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
    
    }

  render() {
    return (
      <div className="container my-4">

        <h2>NewsMonkey - Top headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,8):" "} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} url={element.url}/>
          </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
