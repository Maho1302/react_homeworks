import styles from './UserDetails.module.css';

export const UserDetails = ({user, setUserIdForPosts}) => {
    return (
        <div className={styles.userDetails}>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
        <div>{user.website}</div>
        <input className={styles.gradient} type="button" value="Show posts" onClick={() => setUserIdForPosts(user.id)}/>
        </div>
    );
}

