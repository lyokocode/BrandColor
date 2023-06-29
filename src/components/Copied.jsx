import { useEffect } from "react"
import { clearCopied, setCopied } from "../../store/copiedSlice"
import { useDispatch, useSelector } from "react-redux";
import { getContrastYIQ } from "../../utils/colorHelper";

export function Copied({ color }) {
    const copied = useSelector((state) => state.copied);
    const dispatch = useDispatch();


    useEffect(() => {
        if (copied) {
            const timeout = setTimeout(() => {
                dispatch(clearCopied());
            }, 1000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [copied, dispatch]);

    return (
        <div className="fixed bottom-[20px] right-[20px] px-5 py-4  z-50 rounded-md text-base	 "
            style={{ background: `#${color}`, color: `${getContrastYIQ(color)}` }}
        >
            copied #{color} to clipboard
        </div>
    )
}
