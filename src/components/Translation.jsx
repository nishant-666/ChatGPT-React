import React, { useState } from "react";

export default function Translation({
  doStuff,
  setInput,
  result,
  back,
  option,
  loading,
}) {
  const [prompt, setPrompt] = useState(option.prompt);

  return (
    <div>
      <h5>{option.name}</h5>
      <div>
        <span>Prompt:</span>
        <textarea
          rows={2}
          cols={100}
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />
      </div>
      <button className=" button-warning pure-button" onClick={back}>
        Back
      </button>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <button
        className="button-warning pure-button"
        onClick={() => doStuff(prompt)}
      >
        DO YOU STUFF!
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
      )}
    </div>
  );
}
