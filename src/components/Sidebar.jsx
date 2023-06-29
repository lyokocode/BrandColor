import { useState } from "react"
import Modal from "react-modal"
import { GrClose } from "react-icons/gr"

export function Sidebar() {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const modalHandle = () => {
        setModalIsOpen(!modalIsOpen)
    }
    return (
        <header className="w-[320px] h-full min-w-[320px] border-r-[1px] border-[#ccc] p-6 flex flex-col  gap-5">
            <h1 className="text-2xl text-[#263238] flex items-center">
                <img src="/logo.jpg" alt="" className="w-14" />
                <a>Brand</a>
                <strong >Colors</strong>
            </h1>
            <h2 className="text-base  text-[#999]">
                The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
            </h2>
            <nav>
                <ul>
                    <li>
                        <a href="" className="block cursor-pointer font-bold text-[#000]">Suggest a Brand</a>
                    </li>
                    <li>
                        <button onClick={modalHandle} className="block cursor-pointer font-bold text-[#000]">About BrandColors</button>
                    </li>
                </ul>
            </nav>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={modalHandle}
                className="max-w-[720px] z-10 relative p-14 shadow-lg bg-white"
                overlayClassName="bg-[#f8fafc] opacity-80 fixed top-0 left-0 w-full h-full flex items-center justify-center"
            >
                <button
                    onClick={modalHandle}
                    className="absolute bg-[#333] top-4 right-4  w- font-semibold"
                >
                    <GrClose size={30} />
                </button>
                <h2>About BrandColors</h2>
                <p>BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
                <p>It is been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.</p>
            </Modal>
            <div className="w-full h-[1px] bg-[#999]"></div>
            <a href="" className="flex flex-col gap-4 text-sm">
                <span className="text-lg<">Brand<strong>Colors</strong> + DesignBombs</span>
                Learn how to make a website - we have put together an in-depth guide that will help you build your first website with WordPress.
            </a>
            <div className="w-full h-[1px] bg-[#999]"></div>
        </header>
    )
}
