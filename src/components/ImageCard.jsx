import React from 'react'

const ImageCard = ({ image }) => {

    const tagie = image.tags.split(',');

  return (
    <div className='max-w-sm rounded-md shadow-lg overflow-hidden'>
        <img src={image.webformatURL} alt="" />
        <div className='px-6 py-4'>
          <div className='font-bold text-pink-400 text-xl'>
            Photo by: {image.user}
          </div>
          <div>
            <ul>
              <li>
                <strong>Views: </strong>
                {image.views}
              </li>
              <li>
                <strong>Likes: </strong>
                {image.likes}
              </li>
              <li>
                <strong>Downloads: </strong>
                {image.downloads}
              </li>
            </ul>
          </div>
        </div>
        <div className='px-6 py-4'>
            {tagie.map((tag, index) => (
                <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'> #{tag}</span>
            ))}
        </div>
      </div>   
  )
}

export default ImageCard