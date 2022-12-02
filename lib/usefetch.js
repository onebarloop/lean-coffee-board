import { useEffect } from "react";

export default function useFetch(setEntries, url) {
  async function getQuestions() {
    const response = await fetch(url);
    const data = await response.json();

    const newContent = data.map((item) => ({
      name: item.name,
      thoughts: item.text,
      id: item.id,
      edit: false,
    }));
    console.log("GET");

    setEntries(newContent);
  }

  useEffect(() => {
    getQuestions();

    const interval = setInterval(getQuestions, 20000);
    return () => {
      clearInterval(interval);
    };
  }, []);
}
