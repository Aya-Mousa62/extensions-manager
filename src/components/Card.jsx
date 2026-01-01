import { useState } from "react";
import data from "../../data.json"
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';
export default function Card({filter}) {
    const [extensions, setExtensions] = useState(data);
    
    let filteredExtensions = [];

    filter === "Inactive" ? filteredExtensions = extensions.filter(extension => !extension.isActive) : extensions;
    filter === "Active" ? filteredExtensions = extensions.filter(extension => extension.isActive) : extensions;
    filter === "All" ? filteredExtensions = extensions : extensions;

    const onChangeActive = (e) => {
        const currentExtension = extensions.find(extension => extension.name === e.name);

        const dataChange = extensions.map((extension) => {
            if(extension.name === currentExtension.name){
                extension = { ...extension, isActive: !extension.isActive
            };
            }
            return extension;
        })

        setExtensions(dataChange)
    }

    const onRemove = (e) => {
        const showCard = extensions.filter(extension => extension.name !== e.name);
        setExtensions(showCard)
    }
    
    const datas = filteredExtensions.map((val) => {
        return (
            <div key={val.name} className="w-full shadow rounded-[10px] block outline-none mb-3 boder border-[1px] border-neutral-200 bg-white p-3 dark:bg-Neutral-700 dark:border-neutral-500">
                <div className="flex gap-3 mb-5">
                    <div>
                        <img src={val.logo} width={100} height={100} alt={val.name} />
                    </div>
                    <div>
                        <p className="dark:text-white block font-bold mb-1">{val.name}</p>
                        <p className="dark:text-white block">{val.description}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <button type="button" onClick={()=> onRemove(val)} className="bg-white border border-neutral-300 py-1 px-3 rounded-full cursor-pointer hover:bg-Red-500 hover:text-white transition dark:bg-Neutral-700 dark:text-neutral-100">Remove</button>
                    </div>
                    <div>
                        <Toggle onClick={ () => onChangeActive(val) } checked={val.isActive} color="red"/>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {datas}
            </div>
        </>
    )
}
