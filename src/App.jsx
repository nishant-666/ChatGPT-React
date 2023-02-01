import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";
import axios from "axios";
function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  // console.log(import.meta.env.VITE_Open_AI_Key);
  const selectOption = (option) => {
    setOption(option);
  };
  const back = () => {
    setOption({});
    setResult("");
    setInput("");
  };

  // const doStuff = async (prompt) => {
  //   setLoading(true);
  //   let optionwithoutnameanddesc = option;
  //   delete optionwithoutnameanddesc.name;
  //   delete optionwithoutnameanddesc.description;

  //   let object = { ...optionwithoutnameanddesc, prompt: prompt + ":" + input };
  //   console.log(object);
  //   const response = await openai.createCompletion(object);
  //   setLoading(false);
  //   setResult(response.data.choices[0].text);
  // };
  const doStuff = async (prompt) => {
    try {
      setLoading(true);
      const { name, description, ...rest } = option;
      const object = { ...rest, prompt: `${prompt}:${input}` };
      console.log(object);
      const response = await openai.createCompletion(object);
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation
          doStuff={doStuff}
          setInput={setInput}
          result={result}
          back={back}
          option={option}
          loading={loading}
        />
      )}
    </div>
  );
}

export default App;
