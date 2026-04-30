import Banners from "@/components/Banners";
import Categories from "@/components/Categories";
import Community from "@/components/Community";
import FeaturedBooks from "@/components/FeaturedBooks";
import Footer from "@/components/Footer";
import MarqueePage from "@/components/Marquee";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {

  return (
    <>
      <Banners />
      <MarqueePage></MarqueePage>
      <FeaturedBooks></FeaturedBooks>
      <Community></Community>
      <Categories></Categories>
      <Footer></Footer>
    </>
  );
}
