import useSWR from "swr";


const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/contact");
  const data = await response.json();
  return data;
};

const Footer = () => {

  const { data, error } = useSWR("http://localhost:3000/api/contact", fetcher);
  if (error) return "an error has occured";
  if (!data) return "Loading";

  const { information } = data;
  console.log(information[0])

    return (
      <div className="footer">
        <div className="fLists">
          <ul className="fList">
            <li className="fListItem">website : {information[0].website}</li>
            <li className="fListItem">domain : {information[0].domain} </li>
            <li className="fListItem">mailer : {information[0].mailer}</li>
            <li className="fListItem">email : {information[1].email}</li>
            <li className="fListItem">phone : {information[1].phone}</li>
            <li className="fListItem">telegram : {information[1].telegram}</li>
            <li className="fListItem">twitter : {information[1].twitter}</li>
          </ul>
        </div>
        <div className="fText">Copyright © 2022 Shadenbooking.</div>
      </div>
    );
  };
  
  export default Footer;
  