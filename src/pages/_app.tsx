import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export default function App({ Component, pageProps }: AppProps) {
  return (
     <div class="flex flex-col">
      <div class="mx-auto w-full rounded-xl bg-neutral-100 p-6">
        <MainHeader />
        <Component {...pageProps} />
        <MainFooter />
      </div>
    </div>
    )
}
