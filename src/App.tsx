import Home from './Page/Home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function App() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Home />
    </div>
  )
}

export default App
