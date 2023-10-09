import React, {useRef} from 'react';
import '../App.css';

export const SearchInput = () => {

  const searchValue = useRef();

  return (
    <>
      <section className='section search'>
        <form className="search">
          <div className="form-control">
            <label htmlFor="name">Search Cocktail</label>
            <input type="text" name="name" id="name" ref={searchValue}></input>
          </div>
        </form>

      

      </section>
    </>
  )
}
