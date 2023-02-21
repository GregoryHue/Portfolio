import { useState } from "react";

export function Test({ string }: any) {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1 onClick={()=> setNumber(number + 1)}>
        i am a {string} with {number}.
      </h1>
    </div>
  );
}
