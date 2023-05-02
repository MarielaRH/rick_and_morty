import {} from 'next/font/google'
import { useRouter } from 'next/router'

type CardsType ={
    title: string,
    description: string,
    redirectRoute: string
}

const Cards = ({title,description, redirectRoute}: CardsType) => {
  const router = useRouter();

  // Redirect the page
  const handleClick = (event: React.MouseEvent<HTMLDivElement> ) => {
    router.push(redirectRoute);
  }

  return (
    <div className="m-3 p-3  flex flex-col gap-3 max-w-[250px] w-[250px] rounded-md bg-gray-light"onClick={handleClick}>
        <p className='text-2xl text-center font-medium'>{title}</p>
        <p className='text-center font-thin'>{description}</p>
    </div>
  )
}

export default Cards