import NavigationBar from '@/components/common/NavigationBar';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavigationBar />
      <Component {...pageProps} />
    </div>
  );
  
}