import React from 'react'

export  function Card() {
  return ( <>
  
  <div className="flex mt-40 h-96 border-solid border-2 border-indigo-600 ">
      {/* Left Side - Content */}
      <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-4">Left Side Content</h1>
        <p className="text-gray-600">
          This is where your content goes. You can add text, images, or any other
          components on the left side.
        </p>
        <button className='mt-5 cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Click</button>
      </div>

      {/* Right Side - Video */}
      <div className="w-1/2">
        {/* Replace the video source with your actual video URL */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/your-video-id"
          title="Embedded Video"
          allowFullScreen
        />
      </div>
    </div>
  </>
    
  )
}
