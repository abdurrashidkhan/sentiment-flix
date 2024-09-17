import MainBanner from "@/components/Banner/MainBanner";
import Books from "@/components/Books/Books";
import Navbar from "@/components/navbar/Navbar";
import NovelsToMoviesAndSeries from "@/components/NovelsToMoviesAndSeries/NovelsToMoviesAndSeries";
import PopularBooks from "@/components/PopularBook/PopularBook";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <NovelsToMoviesAndSeries />
      <Books />
      <PopularBooks />
    </>
  );
}
