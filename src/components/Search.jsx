import { GrSearch } from "react-icons/gr"
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/searchSlice';

export function Search() {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        dispatch(setSearch(searchValue));
    };

    return (
        <form className="flex-1 relative">
            <div className="absolute top-0 left-0 h-full w-14 flex items-center justify-center">
                <GrSearch size={20} />
            </div>
            <input
                onChange={handleSearch}
                type="text" placeholder="search brands"
                className="w-full h-full text-base pl-14 pr-5" />
        </form>
    )
}
