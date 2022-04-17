import css from './MainLayout.module.css';
import {Outlet, NavLink, useNavigate} from 'react-router-dom';

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <hr/>
            <div>
                <button onClick={() => navigate(-1)}>Prev</button>
                <button onClick={() => navigate(1)}>Next</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};