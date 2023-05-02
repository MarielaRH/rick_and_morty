const Button = ({label}: {label:string}) => {
  return (
    <button className="p-3 bg-indigo-500 m-3 rounded-md hover:bg-indigo-700 hover:scale-105 transition-all duration-200">{label}</button>
  )
}

export default Button;