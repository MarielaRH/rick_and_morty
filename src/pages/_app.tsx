import MainLayout from "@/layouts/mainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Encode_Sans } from "next/font/google";

export const encode_Sans = Encode_Sans({ weight: ["100","200","300","400","500","600","700","800"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={encode_Sans.className}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </main>
  );
}
