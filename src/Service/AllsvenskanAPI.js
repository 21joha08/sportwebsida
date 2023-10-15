import { useEffect, useState } from "react";

const AllsvenskanTeamsUrl =
    'https://api.everysport.com/v1/leagues/87302/teams?apikey=26192887ec48f76ab54167238ae16688';



const useFetch = () => {
   return useFetchRecords(AllsvenskanTeamsUrl);
};


function useFetchRecords(url) {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setRecords(data.teams))
            .catch(err => console.log(err))
    }, []);

    return [records];
}





export default useFetch;