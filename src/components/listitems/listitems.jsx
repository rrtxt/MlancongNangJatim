import DestinationCard from "../destinationcard/destinationcard";
import PaginationButtons from "../pagination/pagination";
import './listitems.css'

export default function ListItem() {
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="result">
            <div className="top">
                <h3>Top Rank</h3>

                <div className="results">
                  <DestinationCard />
                  <DestinationCard />
                  <DestinationCard />
                </div>

            </div>
            <div className="other">
                <h3>Result</h3>
                <div className="results">
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                    <DestinationCard />
                </div> 
                <PaginationButtons />


            </div>
        </div>
  );
}

