import { useState } from 'react';
import './Forums.css';

function Comment() {
    let [comments, setComments] = useState([]);

    function addComment(event){
        event.preventDefault();
        let form = event.target;
        let commentsArray=[...comments];
        let commentInfo = {
            title:  form.title.value,
            author: form.author.value,
            body:  form.commentBody.value,
            date:  form.commentDate.value
        }
        commentsArray.push(commentInfo);
        setComments(commentsArray);
    }
    
    function removeComment(event) {
        let events = event.target.parentNode;
        let ccomments = [];
        comments.filter(function(val,index) {
            if(val.title !== events.querySelector(".commentTitle").textContent){
                ccomments.push(val);
            }
        });
        setComments(ccomments);
    }
    return (
        <div>
            <h1 className='topicHeading'>What the fuck is React ????</h1>
            <div className='commentContainer'>
                {
                    comments.map(function(val,index) {
                        return (
                            <div className='comment'>
                                <div className='commentTitlebar'>
                                    <h3 className='commentTitle'>{val.title}</h3>
                                    <p className='commentAuthorDate'>By {val.author} on {val.date}</p>
                                </div>
                                <button className='commentRemoveButton' onClick={removeComment}>X</button>
                                <p className='commentBody'>{val.body}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="commentForm">
                <h2>Add a Comment Here</h2>
                <form onSubmit={addComment}>
                    <input type="text" name="author" placeholder="Author Name"/><br/>
                    <input type="text" name="title" placeholder="Comment Title"/><br/>
                    <textarea name="commentBody" cols="30" rows="10" placeholder='Enter Comment'></textarea><br/>
                    <input type="date" name='commentDate'/>
                    <input type="submit" name='commentSubmitButton'/>
                </form>
            </div>
        </div>
    );
}
export default Comment;