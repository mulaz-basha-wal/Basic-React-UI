import { useState } from 'react';
import './Forums.css';

function Forum(props) {
    let [replies, setReplies] = useState([]);

    function addReply(event){
        event.preventDefault();
        let repliES = [...replies];
        let form = event.target;
        let reply = {
            author: form.author.value,
            reply: form.replyBody.value
        }
        repliES.push(reply);
        setReplies(repliES);
        document.querySelector("tbody").innerHTML="";
        repliES.forEach(function(reply) {
            document.querySelector("tbody").innerHTML+=`
            <tr>
                <td>${reply.author}</td>
                <td>${reply.reply}</td>
            </tr>`;
        })
    }
    
    return (
        <div>
            <h1 className='topicHeading'>{props.topic}</h1>
            <div className='replyContainer'>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Reply</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div className="replyForm">
                <h2>Add a Reply Here</h2>
                <form onSubmit={addReply}>
                    <input type="text" name="author" placeholder="Author Name"/><br/>
                    <textarea name="replyBody" cols="30" rows="10" placeholder='Enter Reply'></textarea><br/>
                    <input type="submit" name='replySubmitButton'/>
                </form>
            </div>
        </div>
    );
}
export default Forum;