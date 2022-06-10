import Head from "next/head";
import useSWR from "swr";
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
      <div className="featured">
        <div className="grid grid-cols-4">
          {inf.map((e) => 
            <div className="featuredItem" key={e.id}>
              <img src={e.thumbnail} alt="ax" className="featuredImg" />
              <div className="featuredTitles">
                <h1 className="featuredTitle">{e.name}</h1>
                <h4 className="featuredTitle text-3xl font-bold">Experiences {e.regionId}</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
