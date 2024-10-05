import React, { useEffect, useState } from 'react'
import "./style.css";
import { useNavigate } from 'react-router-dom';
import  { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"

 const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url}= useSelector((state)=> state.home)

  const { data, loading } = useFetch("/movie/upcoming");

   useEffect(() => {
     // here bg will be the entire path of img
     //  backdrop will be https//.../original/
     
    const bg = url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`)
    }
  }

  return (
    <div className="heroBanner">
      {
        !loading && <div className="backdrop-img">
         <Img src={background}/>
      </div>
      }

      <div className="opacity-layer"></div>

      <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome to Movie</span>
            <span className='subTitle'>
            Discover an exciting array of films at Movie! From the latest blockbusters to timeless classics, 
            explore our curated selections and find your next favorite film. Enjoy the show!
            </span> 
            <div className="searchInput">
              <input 
                type="text"
                placeholder='Search for a movie or tv show...'
                onChange={(e) => { setQuery(e.target.value) }}
                onKeyUp={searchQueryHandler}
              />
              <button>Search</button>
            </div>
          </div>
      </ContentWrapper>
      
    </div>
  )
}

export default HeroBanner;