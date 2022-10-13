import { useAuth } from 'contexts/AuthenticationContext';
import style from '_assets/scss/feed.module.scss';

export default function Feed() {
    const { user } = useAuth();

    return (
        <div className={style.content}>
            <h1>Feed</h1>
            <p>Pseudônimo: {user?.username}</p>
            <p>Nome: {user?.name}</p>
            <p>Url do avatar: {user?.avatar_url}</p>
        </div>
    );
}
