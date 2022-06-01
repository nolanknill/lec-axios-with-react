import { Link } from "react-router-dom";

const Album = () => {
    const albums = [];
        
    return (<ul>
        {albums.map(album => (
            <li><Link to={`/album/${album.id}`}>
                {album.title}
            </Link></li>
        ))}
    </ul>
    );
}

export default Album;
