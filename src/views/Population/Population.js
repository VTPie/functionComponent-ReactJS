import './Population.scss'
import useFetch from '../../customize/fetch'


const Population = () => {
    const { data: dataCity, loading, errMessage } = useFetch('https://countriesnow.space/api/v0.1/countries/population/cities')

    return (
        <div>
            <p className='title'>Population of cities in 2013</p>
            <table className='content'>
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
        </div>
    )
}
export default Population