import { useState } from "react";

function App() {
  const dataList = [];

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  const excludeColumns = ['id', 'color'];

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowerCaseValue = value.toLoverCase().trim();
    if (!lowerCaseValue) {
      setData(dataList);
    } else {
      const filteredData = dataList.filter(item => {
      return Object.keys(item).some(key => {
          return excludeColumns.includes(key) ? false: item[key].toString().toLowerCase().includes(lowerCaseValue);
      })
    });
      setData(filteredData);
    }
  };

  return (
    <div className="App">
      Search{" "}
      <input
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="box-container">
        {data.map((d, i) => {
          return (
            <div className="box" key={i} style={{ background: d.color }}>
              <b>Name: </b>
              {d.name}
              <br />
              <b>Year: </b>
              {d.year}
              <br />
              <b>Color: </b>
              {d.color}
              <br />
              <b>Pantone value: </b>
              {d.pantone_value}
              <br />
            </div>
          );
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>¡VAYA NOMBRE PARA UN COCTEL!</span>}
      </div>
    </div>
  );
}

export default App;
