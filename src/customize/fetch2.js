import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch2 = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [errMessage, setErrMessage] = useState(false)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                })
                let data = (res && res.data) ? res.data : []
                setData(data)
                setLoading(false)
                setErrMessage(false)
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled ', err.message)
                }
                else {
                    setLoading(false)
                    setErrMessage(true)
                }
            }

        }

        setTimeout(() => {
            fetchData()
        }, 3000)

        return () => {
            ourRequest.cancel('Operation canceled by the user.')
        }
    }, [url])

    return {
        data, loading, errMessage
    }
}
export default useFetch2