import BestSellers from "./BestSellers"
import Reviews from "./reviews";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import Hero from "./Hero";
import AnnouncementBar12 from "./AnnouncementBar12";
import Collections from "./collections";
import CustomerResults from "./CustomerResults";
import PickYourTube from "./PickYourTube";
import JoinRadiantFam from "./JoinRadiantFam";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />
      <Hero />
      <AnnouncementBar12 />
      <BestSellers />
      <CustomerResults />
      <Reviews />      
      <Collections />
      <PickYourTube />
      <JoinRadiantFam />
      
    </main>
  );
}


