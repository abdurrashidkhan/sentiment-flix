import MainBanner from "@/components/Banner/MainBanner";
import Books from "@/components/Books/Books";
import Navbar from "@/components/navbar/Navbar";
import NovelsToMoviesAndSeries from "@/components/NovelsToMoviesAndSeries/NovelsToMoviesAndSeries";
import PopularBooks from "@/components/PopularBook/PopularBook";
import Streaming from "@/components/Streaming/Streaming";
import WatchEverywhere from "@/components/WatchEverywhere/WatchEverywhere";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <NovelsToMoviesAndSeries />
      <Books />
      <PopularBooks />
      <Streaming />
      <WatchEverywhere />
    </>
  );
}
