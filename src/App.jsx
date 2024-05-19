import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRamdon from './services/getRamdon'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import Pagination from './components/Pagination'


function App() {  

  const [locationID, setLocationID] = useState(getRamdon(126)) 
  const [currentPage, setCurrentPage] = useState(1);
  

  const url = `https://rickandmortyapi.com/api/location/${locationID}`


  const [ location, getLocation, hasError] = useFetch(url) 

  useEffect(() => {

  getLocation()
  
  },[locationID]) 



const inputId = useRef()

const handlesubmit = e =>{
  e.preventDefault()
  setLocationID(inputId.current.value.trim());
} 

const residentsPerPage = 8;
  const startIndex = (currentPage - 1) * residentsPerPage;
  const endIndex = startIndex + residentsPerPage;
  const residentsToShow = location?.residents.slice(startIndex, endIndex);

  const handlePageChange = page => {
    setCurrentPage(page);
  }; 



  return (
  <div>  
       
       <div className='font_image-page'></div>

       <div className='form'>

    <form onSubmit={handlesubmit} className='searcher'>
      <input ref={inputId} type="text" />
        <button className='main__button'>Search</button>
      </form> 

       </div>


      {
        hasError
        ?
        <h2 className='error_Message'> 
          ✖️ Oops! You most provided and Id between 1 and 126
        </h2>
        : (
          <>
        
                 <div>

                 <LocationInfo location = {location} />

                  <div className='card__container'>
                     {
                       residentsToShow?.map(url => ( 
                           <ResidentCard 
                          key={url}
                          url={url}
                               />)
                             )
                        }  


                  </div>  

                  {location?.residents.length > residentsPerPage && (
              <Pagination 
                totalItems={location?.residents.length || 0}
                itemsPerPage={residentsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}

                 </div>


          </>

    )  }  

       


  </div>
            )
}

export default App
