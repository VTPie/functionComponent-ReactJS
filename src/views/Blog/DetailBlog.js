import { useParams, useHistory } from 'react-router-dom'
import useFetch2 from "../../customize/fetch2"
import './Blog.scss'

const DetailBlog = () => {
    //useParams(): trả về 1 obj có properties do user đặt bên Route (sau dấu :)
    let { id } = useParams()
    let history = useHistory()
    const { data: dataDetailBlog, loading, errMessage } = useFetch2(`https://jsonplaceholder.typicode.com/posts/${id}`)


    const handleBackToBlog = () => {
        history.push("/blogs")
    }

    return (
        <div>
            <div>
                <span onClick={() => handleBackToBlog()}>&lt;-- Back --</span>
            </div>
            <div className='detailBlog-container'>
                {dataDetailBlog &&
                    <>
                        <div className='detailBlog-title'>
                            Block ID: {dataDetailBlog.id}
                            <br></br>
                            {dataDetailBlog.title}
                        </div>
                        <div className='detailBlog-content'>
                            {dataDetailBlog.body}
                        </div>
                    </>
                }
                {loading === true &&
                    <tr>
                        <td colSpan='3' style={{ 'textAlign': 'center' }}>Loading...</td>
                    </tr>
                }
            </div>
        </div>
    )
}
export default DetailBlog