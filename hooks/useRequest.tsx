import { useState } from "react";
import axios from "axios";

const useRequest = (url: string) => {
    const result: Array<any> = [];
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(result);
  
    const doRequest = async () => {
      //Activar carga
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
  
    return { isLoading, data, doRequest };
  };

  export default useRequest;