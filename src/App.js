import {useState} from 'react';

import styles from './App.module.css';
import {Users, UserDetails, Posts} from './components';

export const App = () => {
    const [user, setUser] = useState(null);
    const [userIdForPosts, setUserIdForPosts] = useState(null);

  return (
    <div className={styles.parent}>
      <div className={styles.usersAndInfo}>
          <div className={styles.users}>
        <Users setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>
          </div>
          <div className={styles.info}>
        {user && <UserDetails user={user} setUserIdForPosts={setUserIdForPosts}/>}
          </div>
      </div>
        <div className={styles.block}>
        {userIdForPosts && <Posts userId={userIdForPosts}/>}
        </div>
    </div>
  );
}
