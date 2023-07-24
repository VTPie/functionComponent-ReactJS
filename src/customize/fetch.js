import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState([])
    //Ban đầu - chưa có data nên 'loading = true'
    const [loading, setLoading] = useState(true)
    const [errMessage, setErrMessage] = useState(false)

    //didUpdate
    useEffect(() => {
        //handle lỗi: sau khi request data, server chưa kịp trả dữ liệu về thì user đã chuyển sang tab khác, sau đó dữ liệu
        //mới phản hồi về thì không có nơi render các data đó.
        const ourRequest = axios.CancelToken.source() //Step 1


        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, //Step 2
                })
                let data = (res && res.data.data) ? res.data.data : []
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
            ourRequest.cancel('Operation canceled by the user.') //Step 3
        }

    }, [url])

    return {
        data, loading, errMessage
    }
}
export default useFetch