import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdLink, MdClose, MdDownload } from 'react-icons/md';
import { clearSelectedBrands } from '../../store/selectionSlice';
import { setDownloadUrl, clearDownloadUrl } from '../../store/downloadSlice';
import { Link } from 'react-router-dom';

export function Navbar() {
    const dispatch = useDispatch();
    const brands = useSelector((state) => state.brands);
    const selectedBrands = useSelector((state) => state.selection);
    const downloadUrl = useSelector((state) => state.download.downloadUrl);

    const handleClearSelection = () => {
        dispatch(clearSelectedBrands());
    };


    const handleClearDownload = () => {
        URL.revokeObjectURL(downloadUrl);
        dispatch(clearDownloadUrl());
    };

    useEffect(() => {
        if (selectedBrands.length > 1) {
            let output = '';

            selectedBrands.forEach((slug) => {
                const brand = brands.find((brand) => brand.slug === slug);
                const colors = brand.colors
                    .map((color, key) => `--${slug}-${key}: #${color};`)
                    .join('');
                output += `${slug} {\n  ${colors}\n}\n`;
            });

            const blob = new Blob([output], { type: 'text/css' });
            const url = URL.createObjectURL(blob);
            dispatch(setDownloadUrl(url));

            return () => {
                URL.revokeObjectURL(url);
                dispatch(clearDownloadUrl());
            };
        }
    }, [selectedBrands, brands, dispatch]);
    return (
        <nav className="flex items-center justify-evenly w-[400px] px-2 ">
            <div className={`flex items-center justify-center gap-1  h-full ${selectedBrands.length != 0 ? "text-[#555]" : "text-[#888]"}`}>
                <a href={downloadUrl} download="brands.css">
                    <MdDownload size={25} />
                </a>
                <button onClick={handleClearDownload}>
                    <MdClose size={25} />
                </button>
                <Link to={selectedBrands.length !== 0 && `/c/${selectedBrands.join(',')}`} >
                    <MdLink size={25} />
                </Link>
                <button onClick={handleClearSelection}>
                    <MdClose size={25} />
                </button>
                <div className="brands-length">{selectedBrands.length} brands collected</div>
            </div>

            <span className='w-[2px] h-[50%] bg-[#888] '></span>

            <div className="hidden sm:flex items-center justify-center gap-1  h-full text-[#555]">
                <MdDownload size={25} />
                <span>All Brands</span>
            </div>
        </nav>
    );
}

