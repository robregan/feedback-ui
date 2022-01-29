import {useState} from 'react';

const RatingSelect = ({ select }) => {
    const [selected, setSelected] = useState(5);
    

    const handleChange = (e) => {
        const rating = +e.currentTarget.value
        setSelected(rating)
        select(rating)
    }

  return(
    <ul className='rating'>
    <li>
      <input
        type='radio'
        id='rating1'
        name='rating'
        value='1'
        onChange={handleChange}
        checked={selected === 1}
      />
      <label htmlFor='rating1'>1</label>
    </li>
    <li>
      <input
        type='radio'
        id='rating2'
        name='rating'
        value='2'
        onChange={handleChange}
        checked={selected === 2}
      />
      <label htmlFor='rating2'>2</label>
    </li>
    <li>
      <input
        type='radio'
        id='rating3'
        name='rating'
        value='3'
        onChange={handleChange}
        checked={selected === 3}
      />
      <label htmlFor='rating3'>3</label>
    </li>
    <li>
      <input
        type='radio'
        id='rating4'
        name='rating'
        value='4'
        onChange={handleChange}
        checked={selected === 4}
      />
      <label htmlFor='rating4'>4</label>
    </li>
    <li>
      <input
        type='radio'
        id='rating5'
        name='rating'
        value='5'
        onChange={handleChange}
        checked={selected === 5}
      />
      <label htmlFor='rating5'>5</label>
    </li>
    <li>
      <input
        type='radio'
        id='rating6'
        name='rating'
        value='6'
        onChange={handleChange}
        checked={selected === 6}
      />
      <label htmlFor='rating6'>6</label>
    </li>
    <li>
      <input
        type='radio'
        id='rating7'
        name='rating'
        value='7'
        onChange={handleChange}
        checked={selected === 7}
      />
      <label htmlFor='rating7'>7</label>
    </li>
    <li>
      <input
        type='radio'
        id='rating8'
        name='rating'
        value='8'
        onChange={handleChange}
        checked={selected === 8}
      />
      <label htmlFor='rating8'>8</label>
    </li>
    <li>
      <input
        type='radio'
        id='rating9'
        name='rating'
        value='9'
        onChange={handleChange}
        checked={selected === 9}
      />
      <label htmlFor='rating9'>9</label>
    </li>
    <li>
      <input
        type='radio'
        id='rating10'
        name='rating'
        value='10'
        onChange={handleChange}
        checked={selected === 10}
      />
      <label htmlFor='rating10'>10</label>
    </li>
  </ul>
  )
}

export default RatingSelect;
