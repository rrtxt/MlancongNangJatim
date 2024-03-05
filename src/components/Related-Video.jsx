import "../assets/styles/components/related-video.css";

function RelatedVideo({ videoId }) {
  return (
    <div>
      {videoId ? (
        <iframe
          src={`https://www.tiktok.com/embed/${videoId}`}
          style={{ height: "500px", width: "320px" }}
          allowFullScreen
          allow="encrypted-media;"></iframe>
      ) : (
        <div>Video cannot be found</div>
      )}
    </div>
  );
}

export default RelatedVideo;
