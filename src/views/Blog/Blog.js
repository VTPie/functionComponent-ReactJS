import useFetch2 from "../../customize/fetch2"
import { useState, useEffect } from "react";
import './Blog.scss'
import {
    Link,
    useHistory
} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import AddNewBlog from './AddNewBlog'

const Blog = () => {
    const { data: dataBlog, loading, errMessage } = useFetch2('https://jsonplaceholder.typicode.com/posts')
    const [newData, setNewData] = useState([])

    const handleAddNewBlog = (blog) => {
        let data = newData
        data.unshift(blog)
        setShow(false)
        setNewData(data)
    }
    const handleDeleteBlog = (blog) => {
        let data = newData
        data = data.filter(item => item.id !== blog.id)
        setNewData(data)
    }
    useEffect(() => {
        if (dataBlog && dataBlog.length > 0) {
            let data = dataBlog.slice(0, 9)
            setNewData(data)
        }
    }, [dataBlog])

    //Execute Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="primary" onClick={handleShow} className="my-3">
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNewBlog={handleAddNewBlog} />
                </Modal.Body>
            </Modal>

            <div className="blogs-container">
                {newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-blog">
                            <div className="blog-title">
                                <span>{item.title}</span>
                                <span onClick={() => handleDeleteBlog(item)}>X</span>
                            </div>
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
        </>
    )

}
export default Blog
