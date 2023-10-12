export async function fetchData() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState(true);

  useEffect(() => {
    const apiKey = "?apikey=26192887ec48f76ab54167238ae16688";
    const apiBaseUrl = "http://api.everysport.com/";

    fetch(apiBaseUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setRecords(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setRecords(true);
      });
  }, []);
}
