import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AlbumDetails from "../../components/AlbumDetails/AlbumDetails";

class Album extends Component {
  state = {
    albums: [],
    activeAlbum: null,
  };

  componentDidMount() {
    const getAlbumsEndpoint =
      "https://616de824a83a850017caa799.mockapi.io/albums";
    axios.get(getAlbumsEndpoint).then((response) => {
      this.setState({
        albums: response.data,
      });

      /**
       * case #1: default id should be response.data[0].id
       * case #2: id is provided in the url -> how can we access this here?
       *    this.props.match.params.id
       **/
      const activeAlbumId = this.props.match.params.id || response.data[0].id;
      this.fetchActiveAlbum(activeAlbumId);

      /**
        if (this.props.match.params.id) {
            this.fetchActiveAlbum(this.props.match.params.id);
        } else {
            this.fetchActiveAlbum(response.data[0].id);
        }
        */
    });
  }

  fetchActiveAlbum = (albumId) => {
    axios
      .get(`https://616de824a83a850017caa799.mockapi.io/albums/${albumId}`)
      .then((response) => {
        this.setState({
          activeAlbum: response.data,
        });
      });
  };

  componentDidUpdate(previousProps) {
    const previousId = previousProps.match.params.id;
    const currentId = this.props.match.params.id;

    // Only update the active album if we are on a new url!
    if (previousId !== currentId) {
      this.fetchActiveAlbum(currentId);
    }
  }

  render() {
    const { albums, activeAlbum } = this.state;

    return (
      <>
        <h1>Albums</h1>

        {!albums.length && <p>Loading...</p>}

        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`}>{album.title}</Link> by{" "}
              {album.artist}
            </li>
          ))}
        </ul>

        {activeAlbum && <AlbumDetails album={activeAlbum} />}
      </>
    );
  }
}

export default Album;
