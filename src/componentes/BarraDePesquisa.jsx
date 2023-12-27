import React, { useState } from 'react';
import "../styles/BarraDePesquisa.sass";
import search from "../assets/images/search_circle.svg";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Verifica se onSearch é uma função antes de chamar
    if (typeof onSearch === 'function') {
      onSearch(searchTerm);
    } else {
      console.error('onSearch não é uma função válida');
    }
  };

  return (
    <div className='divDaBarra'>
      <input
        className='barra'
        type="text"
        placeholder="O que seu pet precisa?"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='botaoPesquisar' onClick={handleSearch}>
        <img src={search} alt="procurar" />
      </button>
    </div>
  );
};

export default SearchBar;
