import Banner from "./components/Banner";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServices from "./components/OurServices";
import WebsiteTypes from "./components/WebsiteTypes";
import Stages from "./components/Stages";


export default function Home() {
  return (
    <>
      <header>
        <Banner /> {/* בתוך ה-header כי זה חלק מהכותרת הראשית */}
      </header>
      <main>
        <WhyChooseUs />
        <OurServices />
        <WebsiteTypes />
        <Stages />
      </main>
    </>
  );
}
