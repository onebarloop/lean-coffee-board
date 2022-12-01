import { nanoid } from "nanoid";
export default function Card({ entries }) {
  return (
    <ul>
      {entries.map((entry) => (
        <li key={nanoid()}>
          {" "}
          <p>{entry.thoughts}</p>
          <p>{entry.name}</p>
        </li>
      ))}
    </ul>
  );
}
