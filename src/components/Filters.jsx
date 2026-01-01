import Button from './Button'
export default function Filters({filter, setFilter}) {

  const handleClick = (e) => {
    setFilter(e.target.textContent)
  }

  return (
    <>
      <div className='md:flex md:items-center md:justify-between text-center w-full md:px-5'>
        <div>
          <h1 className="text-4xl w-full text-center my-5 font-bold dark:text-white text-nowrap">Extensions List</h1>
        </div>
        <div className='text-center flex items-center justify-center gap-5 mb-3'>
          <Button active={filter === "All"} handleClick={handleClick} >All</Button>
          <Button active={filter === "Active"} handleClick={handleClick} >Active</Button>
          <Button active={filter === "Inactive"} handleClick={handleClick} >Inactive</Button>
        </div>
      </div>
    </>
  )
}