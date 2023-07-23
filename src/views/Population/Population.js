import './Population.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Population = () => {
    const [dataCity, setDataCity] = useState([])
    //Ban đầu - chưa có data nên 'loading = true'
    const [loading, setLoading] = useState(true)
    const [errMessage, setErrMessage] = useState(false)

    //didMount
    useEffect(async () => {
        try {
            let res = await axios.get('https://countriesnow.space/api/v0.1/countries/population/cities')
            let data = (res && res.data.data) ? res.data.data : []
            setDataCity(data)
            setLoading(false)
            setErrMessage(false)
        } catch (e) {
            setLoading(false)
            setErrMessage(true)
        }
    }, [])

    return (
        <table>
            {console.log('>>> check data: ', dataCity)}
            <thead>
                <tr>
                    <th>City</th>
                    <th>Country</th>
                    <th>Population</th>
                </tr>
            </thead>
            <tbody>
                {errMessage === false && loading === false && dataCity && dataCity.length > 0 &&
                    dataCity.map(item => {
                        return (
                            <tr key={`${item.city}.${2013}`}>
                                <td>{item.city}</td>
                                <td>{item.country}</td>
                                <td>{item.populationCounts[0].value}</td>
                            </tr>
                        )
                    })
                }
                {loading === true &&
                    <tr>
                        <td colSpan='3' style={{ 'textAlign': 'center' }}>Loading...</td>
                    </tr>
                }
                {errMessage === true &&
                    <tr>
                        <td colSpan='3' style={{ 'textAlign': 'center' }}>Something wrong ...</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}
export default Population