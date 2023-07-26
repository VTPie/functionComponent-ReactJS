import './Blog.scss'
import { useState } from 'react'
import axios from 'axios'

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmitBtn = async () => {
        //check: data !== '' && data !== null && data !== undefined
        if (!title) {
            alert('Empty title!')
            return
        }
        if (!content) {
            alert('Empty content!')
            return
        }

        let data = {
            title: title,
            body: content,
            userID: 1,
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)

        if (res && res.data) {
            let newBlog = res.data
            props.handleAddNewBlog(newBlog)
            console.log('>>> check new blog: ', newBlog)
        }
    }

    return (
        <div className="newblog-container">
            <div className="newblog-addtitle">
                <label>Title: </label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
            </div>
            <div className="newblog-addcontent">
                <label>Content: </label>
                <input type="text" value={content} onChange={(event) => setContent(event.target.value)}></input>
            </div>
            <button className='newblog-submitbtn' onClick={() => handleSubmitBtn()}>Submit</button>
        </div>
    )
}
export default AddNewBlog