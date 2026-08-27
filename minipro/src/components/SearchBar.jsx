

export default function SearchBar({ value, onChange }) {
  
  return (
      <div className="flex justify-center ">
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e)=>onChange(e.target.value)}
          variant="filled" />
      </div>
)

}