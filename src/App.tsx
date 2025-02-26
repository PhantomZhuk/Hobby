import Home from './Page/Home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react';

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-full min-h-screen flex flex-col'>
        <Home />
      </div>
    </QueryClientProvider>
  )
}

export default App
