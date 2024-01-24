import Slide from "./slide";

const VerticalCarousel = ({ about, subIndex, addIndex, direction }) => {
   return (
      <>
          <div className='rotating-gallery-container'>
                  <div className='rotating-images'>
                      <Slide about={about} subIndex={subIndex} addIndex={addIndex} direction={direction} />
                  </div>
          </div>
      </>
  )
}

export default VerticalCarousel;