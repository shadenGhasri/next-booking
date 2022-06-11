import { info } from "autoprefixer";

const FeaturedProperties = ({imgInf ,name ,regionId , key}) => {
    return (
      <div className="featuredItem" key={key}>
              <img src={imgInf} alt="ax" className="featuredImg" />
              <div className="featuredTitles">
                <h1 className="featuredTitle">{name}</h1>
                <h4 className="featuredTitle">Experiences {regionId}</h4>
              </div>
            </div>
    );
  };
  
  export default FeaturedProperties;
  