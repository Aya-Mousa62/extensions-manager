export default function Button({ children, handleClick, active }) {
  
  return (
    <>
      <button type="button" onClick={handleClick} className={` border-1 outline-0 cursor-pointer font-medium py-2 px-4 rounded-full ${active ? "bg-Red-700 text-white dark:text-shadow-Neutral-900" : "bg-Neutral-500 border-Neutral-300 text-black dark:text-white dark:bg-Neutral-800"}`}>
        {children}
      </button>
    </>
  )
}
