import MainBanner from "@/components/Banner/MainBanner";
import Navbar from "@/components/navbar/Navbar";
import NovelsToMoviesAndSeries from "@/components/NovelsToMoviesAndSeries/NovelsToMoviesAndSeries";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <NovelsToMoviesAndSeries />
    </>
  );
}
