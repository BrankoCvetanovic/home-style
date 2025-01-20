export default function Image({ imgURL, imgAlt, note }) {
  return (
    <>
      <img src={imgURL} alt={imgAlt} />
      <div className="image-note">
        {note.first}
        <span>{note.second}</span>
      </div>
    </>
  );
}
