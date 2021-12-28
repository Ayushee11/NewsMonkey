import React, {useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>  {

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page, setPage]= useState(1)
  const [totalResults,setTotalResults]=useState(0)
  // 
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }


  
  
const updateNews=async ()=> {
    props.setProgress(20)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(40)
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(70)
    
     setArticles(parsedData.articles)
     
      setLoading(false)
      setTotalResults(parsedData.totalResults)
 
    props.setProgress(100)
  }
useEffect(() => {
  document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`
updateNews()
 
}, [])
 const fetchMoreData = async () => {
   
  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0ffd8c9bd364509a51c8e29053d2e9a&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
   setArticles(articles.concat(parsedData.articles))
 
   setTotalResults(parsedData.totalResults)
   
  };
  // handlePreviousClick = async () => {
  //   //            console.log("Previous")
  //   //            let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0ffd8c9bd364509a51c8e29053d2e9a&page=${this.state.page-1}&pageSize=${props.pageSize}`
  //   // let data=await fetch(url)
  //   // let parsedData=await data.json()
  //   // console.log(parsedData)

  //   // this.setState({
  //   //     page:this.state.page-1,
  //   //     articles:parsedData.articles
  //   // })
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   //            console.log("Next")
  //   //            if(!(this.state.page+1> Math.ceil(this.state.totalArticles/props.pageSize)))
  //   //          {
  //   //            let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b0ffd8c9bd364509a51c8e29053d2e9a&page=${this.state.page+1}&pageSize=${props.pageSize}`

  //   //          this.setState({loading:true})
  //   // let data=await fetch(url)
  //   // let parsedData=await data.json()

  //   // this.setState({
  //   //     page:this.state.page+1,
  //   //     articles:parsedData.articles,
  //   //     loading:false
  //   // })

  //   //          }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

    console.log("render");
    return (
      <>
      <br />
      <br />
      <br />
  
        <h1 className="text-center"> NewsMonkey - Top   {capitalizeFirstLetter(props.category)} Headlines</h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
         
        <div className="row">
          {articles.map((element) => {
            return (
              <div
                key={
                  element.imageUrl
                    ? element.url
                    : "https://live-production.wcms.abc-cdn.net.au/972e5008cc44bd0106546c617e2f1aac?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=257&width=862&height=485"
                }
                className="col-md-6 col-lg-3"
              >
                
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  catgeory: "general",

};

 News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News