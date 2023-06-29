import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLink, AiOutlineDownload, AiOutlineClose } from "react-icons/ai"
import { clearSelectedBrands } from "../../store/selectionSlice";

export function Navbar() {
    const dispatch = useDispatch()
    const selectedBrands = useSelector((state) => state.selection);

    const handleClearSelection = () => {
        dispatch(clearSelectedBrands());
    };

    return (
        <nav className="flex items-center justify-between w-[350px] px-4">
            <div className="flex items-center  gap-1 ">
                <button> <AiOutlineDownload size={20} /> </button>
                <button><AiOutlineLink size={20} /></button>
                <button onClick={handleClearSelection}><AiOutlineClose size={20} /></button>
                <span>{selectedBrands.length} brands collected</span>
            </div>
            <div className="w-[1px] h-[50%] bg-[#ccc]"></div>
            <div className="flex items-center gap-2 ">
                <h4>all brands</h4>
                <button> <AiOutlineDownload size={20} /></button>
            </div>
        </nav>
    )

}
