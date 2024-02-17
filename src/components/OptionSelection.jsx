import React from "react";

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading">ChatGPT Clone</h1>

      <div className="grid-main">
        {arrayItems.map((item, key) => {
          return (
            <div
              key={key}
              className="grid-child"
              onClick={() =>
                selectOption({
                  ...item.option,
                  name: item.name,
                  description: item.description,
                  prompt: item.prompt,
                })
              }
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
