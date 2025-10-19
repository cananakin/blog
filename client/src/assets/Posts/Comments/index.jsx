export default function CommentList({ comments }) {
    
    const renderedComments = comments.map(comment => {
        let content;

        if(comment.status === 'approved') {
            content = comment.content;
        } else if(comment.status === 'rejected') {
            content = 'Comment rejected';
        } else if(comment.status === 'pending') {
            content = 'Comment is pending';
        }
        return (
            <li key={comment.id}>{content}</li>
        )
    });

    return (
        <ul>
            {renderedComments}
        </ul>
    )
}