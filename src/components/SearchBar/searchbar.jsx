import React, { useState } from "react";
import "./searchbar.css";
import "remixicon/fonts/remixicon.css";

export default function SearchBar() {
    
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected]= useState("Jenis Wisata");

  const [selectedCity, setSelectedCity] = useState("");
  const cities = ["Bangkalan", "Banyuwangi", "Batu", "Blitar", "Bojonegoro", "Gresik", "Lamongan", 
  "Lumajang", "", "Jember", "Kediri", "Madiun", "Malang", "Nganjuk", "Ngawi", "Magetan", "Mojokerto", 
  "Pamekasan", "Pasuruan", "Ponorogo", "Probolinggo", "Sidoarjo", "Sumenep", "Surabaya","Tuban", 
  "Tulungagung", "Trenggalek"];

  const [isMenuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!isMenuVisible);
    };
  

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action with the searchInput value
    console.log("Search input:", searchInput);
  };

  return (
        <div className="searchpage">
            <form action="#" onSubmit={handleSubmit} className="wraps">
                <div className="box">
                    
                    <div className="input-box">
                        <input
                        type="text"
                        className="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={handleInputChange}
                        />
                        <button type="submit" className="button-box">
                            <i className="ri-search-line"></i>
                        </button>
                    </div>
                    
                </div>
                <div className="filter">
                    <div className="posisi"> 
                        <div className="filterkota">
                        <FilterDropdown
                            dropdownType="kota"
                            countries={cities}  // Change prop name to 'countries'
                            selected={selectedCity}
                            setSelected={setSelectedCity}
                            placeholder={` ${selectedCity || 'Kota'}`}
                            />
                        </div>
                    </div>
                    <div className="posisi"> 
                        <div className="filterwisata">
                            <Dropdown selected={selected} setSelected={setSelected} />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

function Dropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ["Lingkungan", "Budaya", "Atraksi Hiburan", "Kafe dan Restoran"];
  
    return (
      <div className="filterwisata"> {/* Use the same class name */}
        <div className="select-btn" onClick={() => setIsActive(!isActive)}>
          <span>{selected}</span>
          <i className="ri-arrow-down-s-line dropdown__arrow"></i>
        </div>
  
        {isActive && (
          <div className="content">
            
            <ul className="options">
            {options.map((option, index) => (
                <li
                    key={index}
                    onClick={() => {
                    setSelected(option);
                    setIsActive(false);
                    }}
                    className="options-item" 
                >
                    {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  

  const FilterDropdown = ({ dropdownType, countries=[], selected, setSelected, placeholder }) => {
    const [isActive, setIsActive] = useState(false);
    const [searchWord, setSearchWord] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(selected || '');
  
    const filterCountries = () => {
      return countries
        .filter(data => data.toLowerCase().startsWith(searchWord.toLowerCase()))
        .map(data => (
          <li
            key={data}
            onClick={() => updateName(data)}
            className={data === selectedCountry ? 'selected' : ''}
          >
            {data}
          </li>
        ));
    };
  
    const addCountry = () => {
      return countries.map(data => (
        <li
          key={data}
          onClick={() => updateName(data)}
          className={data === selectedCountry ? 'selected' : ''}
        >
          {data}
        </li>
      ));
    };
  
    const updateName = (selectedCountry) => {
      setSearchWord('');
      setSelectedCountry(selectedCountry);
      setSelected(selectedCountry); // Update the selected state
      setIsActive(false);
    };
  
    const toggleDropdown = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div className={`filter${dropdownType}`}>
        <div className="select-btn" onClick={toggleDropdown}>
          <span>{selectedCountry || placeholder}</span>
          <i className="ri-arrow-down-s-line dropdown__arrow"></i>
        </div>
        {isActive && (
          <div className="content">
            <div className="search">
              <i className="ri-search-2-line"></i>
              <input
                spellCheck="false"
                type="text"
                placeholder="Search"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
              />
            </div>
            <ul className="options">
              {searchWord ? filterCountries() : addCountry()}
            </ul>
          </div>
        )}
      </div>
    );
  };