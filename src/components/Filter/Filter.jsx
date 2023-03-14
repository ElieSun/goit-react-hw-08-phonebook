import { Input } from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';


const Filter = () => {
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleChange = evt => {
        dispatch(setFilter(evt.target.value));
    };

    return (
        <>
        <Input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
            placeholder='Search...'
        />
        </>
    )
}

export default Filter;
