import styles from './Post.module.css';

export const Post = ({post}) => {
    return (
        <div className={styles.box}>
        <div className={styles.post}>

            <div>userId: {post.userId}</div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
        </div>
    );
}