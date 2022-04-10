import styles from './User.module.css';

export const User = ({user, setUser, setUserIdForPosts}) => {
    const click = () => {
      setUserIdForPosts(false);
      setUser(user);
    }

    return (
        <div className={styles.user}>
            {user.name}
            <input className={styles.button} type="button" value="User's Details" onClick={click}/>
        </div>
    );
}
