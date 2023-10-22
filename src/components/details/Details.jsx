
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./detailsCard";


const Details = () => {
    const { id } = useParams();
    const details = useLoaderData()
    console.log(details);
    
    

    return (
        <div>
            
                <DetailsCard details={details}></DetailsCard>
          
        </div>
    );
};

export default Details;
