import DestinationCard from "../destinationcard/destinationcard";
import PaginationButtons from "../pagination/pagination";
import './listitems.css'

export default function ListItem() {
    const destinationData = [
        // Replace with your actual data
        {
          image: "/src/assets/image/tunjungan.png",
          title: "Jalan Tunjungan",
          description: "Disebut sebagai Malioboro nya Surabaya, Jalan Tunjungan punya keunikannya sendiri lho! Ada banyak macam kuliner yang bisa kamu nikmati!",
          videoUrl: "https://youtu.be/H3K6a2-QG24?si=QyI4bsxupnSQSnTf ", // Optional video placeholder
        },
        {
            image: "/src/assets/image/alun.png",
            title: "Alun Alun Kota Surabaya",
            description: "Berbeda dari kebanyakan alun-alun, Alun-Alun Surabaya memiliki layout kawasan komplek yang terdiri dari bangunan design kolonial. Terdapat pameran seni yang indah di bawah alun-alun ini!",
            videoUrl: "https://youtu.be/H3K6a2-QG24?si=QyI4bsxupnSQSnTf ", // Optional video placeholder
          },
          {
            image: "/src/assets/image/bungkul.png",
            title: "Taman Bungkul",
            description: "Taman Bungkul adalah Ruang Terbuka Hijau (RTH) yang berada di tengah kota Surabaya. fasilitas yang tersedia beragam seperti air minum gratis, taman bermain anak, skateboard track, dan jogging track",
            videoUrl: "https://youtu.be/H3K6a2-QG24?si=QyI4bsxupnSQSnTf ", // Optional video placeholder
          },
          {
            image: "/src/assets/image/musolah.png",
            title: "Museum Olahraga",
            description: "Museum ini sebagai sumber informasi dari berbagai cabang olahraga. Kita dapat melihat koleksi olah raga tradisional hingga olah raga berprestasi. Ada piala, piagam, medali, dan lainnya",
            videoUrl: "https://youtu.be/H3K6a2-QG24?si=QyI4bsxupnSQSnTf ", // Optional video placeholder
          },
        // Add more data objects for additional cards
      ];

  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="result">
            <div className="top">
                <h3>Top Rank</h3>

                <div className="results">
                    <DestinationCard data={destinationData[0]} />
                    <DestinationCard data={destinationData[1]} />
                    <DestinationCard data={destinationData[2]} />
                </div>

            </div>
            <div className="other">
                <h3>Result</h3>
                <div className="results">
                    {destinationData.map((data, index) => (
                        <DestinationCard key={index} data={data} />
                    ))}
                </div>
                <PaginationButtons />


            </div>
        </div>
  );
}

