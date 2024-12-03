import Song from "./Song";

const SongList = () : React.ReactElement => {
    return (
    <ul>
        <li><Song Title="Last thing on my mind" Artist="Steps"></Song></li>
        <li><Song Title="If you're over me" Artist="Years and Years"></Song></li>
    </ul>    
    );
}

export default SongList;