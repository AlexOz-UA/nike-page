import './App.css';
import Nike from './images/nike.webp'

function App() {
  return (
    <div className="App">
       <nav className='relative z-10'>
        <div className="flex items-center text-black bg-gray-200 border-b-2 border-black">
        <svg className="w-16 h-16 ml-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nike</title><path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"/></svg>
        </div>
      </nav>
      <div className="content">
        <div className='text-center relative z-10'>
        <h1 className="text-2xl mt-8 mb-4" style={{fontFamily: "Helvetica Now Display"}}>Nike Air Force 1 Next Nature</h1> 
        <h2>“Dark Powder Blue” And “Black” Dress Up This Kids Nike Air Force 1 Low.</h2>
        </div>
        <div className='flex items-center mt-24 justify-evenly'>
        <p className='w-80 font-semibold z-10'>“This pair, which is ostensibly exclusive to the Swoosh’s younger audience, is helmed by “Dark Powder Blue,” the same color that has dressed many a notable release of the Air Jordan 1 in the past. Here, the cool tone marks the Bruce Kilgore-designed classic’s overlays, while black neutrals outfit the Swoosh, outsole, and the “AIR” across the midsole. The rest of the latter fixture is done up in white, matching the base of the upper as well as the tongue, lining, and adjacent branding.”</p>
        <div>
          <img className='w-96 h-72 mr-4' src={Nike} alt="Nike" />
        </div>
        <p className=' w-80  font-semibold z-10'>As we delve further into the details of this release, we can observe that the rest of the midsole is done up in pristine white, beautifully matching the base of the upper as well as the tongue, lining, and adjacent branding elements. This combination of colors and materials creates a dynamic and stylish look that captures the essence of youthful energy and timeless design.</p>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    </div>
  );
}

export default App;
