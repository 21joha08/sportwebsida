import { useEffect, useState } from "react";

const baseUrl =
    'https://api.everysport.com/v1/leagues/87302/'

const apiKey = 
    '?apikey=26192887ec48f76ab54167238ae16688'

    

const useFetch = (extras) => {
   return useFetchRecords(baseUrl + extras + apiKey);
};


function useFetchRecords(url, extras) {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setRecords(data.--------[extras]-------)) // Use dynamic key to access the property
            .catch(err => console.log(err))
    }, []);

    return [records];
}





export default useFetch;