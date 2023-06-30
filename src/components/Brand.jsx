import { useDispatch, useSelector } from 'react-redux';
import { toggleBrandSelection } from '../../store/selectionSlice';
import { getContrastYIQ } from '../../utils/colorHelper';
import Clipboard from 'react-clipboard.js';
import { setCopied } from '../../store/copiedSlice';
import { AiOutlineCheck } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { useState } from 'react';

export default function Brand({ brand }) {
    const dispatch = useDispatch();
    const selectedBrands = useSelector((state) => state.selection);
    const copied = useSelector((state) => state.copied);

    const [hoveredColor, setHoveredColor] = useState(null);

    const toggleSelected = () => {
        dispatch(toggleBrandSelection(brand.slug));
    };

    const isSelected = selectedBrands.includes(brand.slug);

    const handleCopy = (color) => {
        dispatch(setCopied(color));
    };

    const handleMouseEnter = (color) => {
        setHoveredColor(color);
    };

    const handleMouseLeave = () => {
        setHoveredColor(null);
    };

    return (
        <>
            {brand ? (
                <section
                    className={`p-4 border-b-[1px] relative border-[#333] flex items-center `}
                >
                    {isSelected && (
                        <span className='absolute left-[-5px] z-50 text-blue-400'>
                            <AiOutlineCheck size={30} />
                        </span>
                    )}
                    <h5
                        className="w-40 my-auto py-4 cursor-pointer"
                        onClick={toggleSelected}
                    >
                        {brand.title}
                    </h5>
                    <div className="flex-1 flex gap-2 flex-wrap">
                        {brand.colors ? (
                            <>
                                {brand.colors.map((color, i) => (
                                    <Clipboard
                                        className={`flex  items-center justify-center h-12 w-20   ${isSelected ? 'flex-1 min-w-[150px] indent-0' : 'w-12'}`}
                                        key={i}
                                        data-clipboard-text={`#${color}`}
                                        onSuccess={() => handleCopy(color)}
                                    >
                                        <span
                                            className={`flex gap-3 items-center justify-center h-10 w-[60px]   ${isSelected ? 'flex-1 min-w-[150px] indent-0' : 'indent-[-9999px]  w-12'}`}
                                            style={{ backgroundColor: `#${color}`, color: `${getContrastYIQ(color)}` }}
                                            onMouseEnter={() => handleMouseEnter(color)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {hoveredColor === color && (
                                                <MdContentCopy size={20} className="ml-2 " />
                                            )}
                                            #{color}
                                        </span>
                                    </Clipboard>
                                ))}
                            </>
                        ) : ("brand colors not found")}
                    </div>
                </section>
            ) : ("brand not found")}
        </>
    );
}
