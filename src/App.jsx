import React from 'react'
import { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  //const apiKey = JSON.stringify(import.meta.env.VITE_PIXABAY_API_KEY);
  const [images, setImage] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImage(data.hits)
      setIsloading(false)
    })
    .catch(err => console.log(err))
  }, [term]);

  return (

    
       <div className='container mx-auto'>
        <h1 style={{fontSize: "35px", fontWeight: 'bold', textAlign: 'center', marginTop: "40px"}}>Discover Thousands of Images!</h1>
        <ImageSearch searchText = {(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className='text-6xl text-center mx-auto mt-32'>No Images Found</h1>}

        {isLoading? <h1 className='text-6xl text-center mx-auto mt-32'>loading</h1> : <div className='grid grid-cols-3 gap-4'>
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>}
       </div>
  )
}

export default App
