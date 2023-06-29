import { useDispatch, useSelector } from 'react-redux';
import { toggleBrandSelection } from '../../store/selectionSlice';
import { getContrastYIQ } from '../../utils/colorHelper';

export function Brand({ brand }) {
    const dispatch = useDispatch();
    const selectedBrands = useSelector((state) => state.selection);

    const toggleSelected = () => {
        dispatch(toggleBrandSelection(brand.slug));
    };

    const isSelected = selectedBrands.includes(brand.slug);

    return (
        <div
            className={`p-4 border-b-[1px] border-[#333] flex items-center ${isSelected ? 'bg-gray-200' : ''}`}
        >
            <h5 className="w-40 my-auto py-4 cursor-pointer"
                onClick={toggleSelected}
            >{brand.title}</h5>
            <div className="flex-1 flex gap-2 flex-wrap">
                {brand &&
                    brand.colors.map((color, i) => (
                        <span
                            key={i}

                            className={`flex  items-center justify-center h-12 w-20 indent-[-9999px] ${isSelected ? 'flex-1 min-w-[150px] indent-0 ' : 'w-12'
                                }`}
                            style={{ backgroundColor: `#${color}`, color: `${getContrastYIQ(color)}` }}
                        >
                            {color}
                        </span>
                    ))}
            </div>
        </div>
    );
}
