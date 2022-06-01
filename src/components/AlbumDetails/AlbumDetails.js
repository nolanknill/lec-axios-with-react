const AlbumDetails = ({ album }) => {
  return (
    <div>
      <h2>{album.title}</h2>
      <span>by {album.artist}</span>
      <img src={`${album.cover}?id=${album.id}`} alt={`${album.title} cover`} />
    </div>
  );
};

export default AlbumDetails;