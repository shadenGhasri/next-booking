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
      <div className="cards flex flex-row">
       {cards.map((e) => (
          <div class="cardItem">
            <div class="">
              <img class="cardImg" src={e.imageCover} alt="" />
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {e.organizer}
                </h5>
              </div>
            </div>
          </div>
        ))}
       </div>
    </>
  );
};

export default Cards;
