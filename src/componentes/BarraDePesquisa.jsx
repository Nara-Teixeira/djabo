import React, { useState } from 'react';
import "../styles/BarraDePesquisa.sass"
import search from "../assets/images/search_circle.svg"


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Execute a ação de pesquisa com o termo inserido
    onSearch(searchTerm);
  };

  return (
    <div className='divDaBarra'>
      <input 
        className='barra'
        type="text"
        placeholder="Oque seu pet precisa?"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='botaoPesquisar' onClick={handleSearch}> <img src={search} alt="procurar" /> </button>
    </div>
  );
};

export default SearchBar;
