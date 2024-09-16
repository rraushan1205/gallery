import React from 'react'

function Top_Picks() {
  // Define the slides array correctly in JavaScript format
  const slides = [
    {
      "src": "../../img/IMG_5380.jpg",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "../../img/IMG_5462.jpg",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "../../img/IMG_5542.jpg",
      "alt": "Image 3 for carousel"
    },
    {
      "src": "../../img/IMG_5377.jpg",
      "alt": "Image 4 for carousel"
    },
    {
      "src": "../../img/IMG_5380.jpg",
      "alt": "Image 5 for carousel"
    }
  ];

  return (
    <section className='text-[30px] my-[50px] mx-[50px] text-black'>
      <header className='leading-[40px] w-fit '>Top Image Picks</header>
      <hr className='w-[320px] h-1 bg-black'/>
      <article className="carousel-container flex flex-row gap-5 my-5">
          {slides.map((slide, index) => (
            <div key={index} className="">
              <img src={slide.src} alt={slide.alt} className=" h-[200px] hover:scale-150 border-[1px] border-black rounded-lg hover:rounded-none hover:border-none" />
            </div>
          ))}
      </article>
    </section>
  );
}

export default Top_Picks;
