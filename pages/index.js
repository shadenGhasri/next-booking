import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";
import FeaturedProperties from "../components/featuredProperties";
import Footer from "../components/footer";
import Header from "../components/header";
import Nav from "../components/navbar";

const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  const data = await response.json();
  return data;
};

export default function Home() {
  const { data, error } = useSWR("http://localhost:3000/api/posts", fetcher);
  // console.log(data);
  if (error) return "an error has occured";
  if (!data) return "Loading";

  const { inf } = data;

  return (
    <>
      <Head>
        <title>shaden booking</title>
      </Head>
      <Nav />

      <Header/>

      <div className="featured mt-2">
        <div className="grid grid-cols-6 gap-2 mx-10">
        {
        inf.map(e =>
          <FeaturedProperties imgInf={e.thumbnail} key = {e.id} name = {e.name} regionId = {e.regionId}/>)
      }
        </div>
      </div>

      <Footer/>
      

    </>
  );
}
