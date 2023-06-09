import FooterBar from "@/components/FooterBar";
import NavigationBar from "@/components/NavigationBar";
import { store } from "@/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <NavigationBar />
        <Component {...pageProps} />
        <FooterBar />
      </Provider>
    </div>
  );
}
