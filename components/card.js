import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/cards");
  const data = await response.json();
  return data;
};

const Cards = () => {
  const { data, error } = useSWR("http://localhost:3000/api/cards", fetcher);
  if (error) return "an error has occured";
  if (!data) return "Loading";
  const { cards } = data;

  return (
    <>
      <div>
        {
            cards.map( e => 
            <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img class="rounded-t-lg" src={e.imageCover} alt="" />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">{e.organizer}</h5>
          </div>
        </div>
      </div>)}
      </div>
    </>
  );
};

export default Cards;
