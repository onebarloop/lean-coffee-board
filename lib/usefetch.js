import { useEffect } from "react";

export default function useFetch(setEntries, url) {
  async function getQuestions() {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        const newContent = data.map((item) => ({
          name: item.name,
          thoughts: item.text,
          id: item.id,
          edit: false,
        }));
        console.log("GET");

        setEntries(newContent);
      } else {
        console.error("Bad Response");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getQuestions();

    const interval = setInterval(getQuestions, 20000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
