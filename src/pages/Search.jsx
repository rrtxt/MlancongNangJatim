// import "../assets/styles/search.css";
import '../components/footer/footer.css';
import SearchBar from '../components/SearchBar/searchbar';
import Foot from '../components/footer/footer';
import Nav from '../components/navbar/navbar';
import DestinationCard from '../components/destinationcard/destinationcard';
import ListItem from "../components/listitems/listitems";

export default function SearchPage() {
    return (
        <div>
        <Nav />
        
        <SearchBar />
        <ListItem/>
    
        <Foot />
        </div>
    )
}

