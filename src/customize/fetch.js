import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState([])
    //Ban đầu - chưa có data nên 'loading = true'
    const [loading, setLoading] = useState(true)
    const [errMessage, setErrMessage] = useState(false)

    //didMount
    useEffect(async () => {
        try {
            async function fetchData() {
                let res = await axios.get(url)
                let data = (res && res.data.data) ? res.data.data : []
                setData(data)
                setLoading(false)
                setErrMessage(false)
            }
            fetchData()
        } catch (e) {
            setLoading(false)
            setErrMessage(true)
        }
    }, [url])

    return {
        data, loading, errMessage
    }
}
export default useFetch