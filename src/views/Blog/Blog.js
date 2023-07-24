import useFetch2 from "../../customize/fetch2"
import './Blog.scss'
import {
    Link
} from "react-router-dom";

const Blog = () => {
    const { data: dataBlog, loading, errMessage } = useFetch2('https://jsonplaceholder.typicode.com/posts')
    let newData = []

    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9)
        console.log('>>>check data: ', newData)

    }

    return (
        <div className="blogs-container">
            {newData && newData.length > 0 && newData.map(item => {
                return (
                    <div className="single-blog">
                        <div className="blog-title">{item.title}</div>
                        <div className="blog-content">{item.body}</div>
                        <button>
                            <Link to={`/blogs/${item.id}`}>View detail</Link>
                        </button>
                    </div>
                )
            })}
            {loading === true &&
                <tr>
                    <td colSpan='3' style={{ 'textAlign': 'center' }}>Loading...</td>
                </tr>
            }
        </div>
    )

}
export default Blog