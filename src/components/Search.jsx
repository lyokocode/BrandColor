import { GrSearch } from "react-icons/gr"

export function Search() {

    return (
        <div className="flex-1 relative">
            <div className="absolute top-0 left-0 h-full w-14 flex items-center justify-center">
                <GrSearch size={20} />
            </div>
            <input
                type="text" placeholder="search brands"
                className="w-full h-full text-base pl-14 pr-5" />
        </div>
    )
}
