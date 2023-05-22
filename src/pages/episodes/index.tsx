import useSWR from 'swr';

const fetcher = (...args: [string]) => fetch(...args).then(resp => resp.json())
const Episodes = () => {

    const {data, isLoading} = useSWR('', fetcher)
  return (
    <div>Episodes</div>
  )
}

export default Episodes