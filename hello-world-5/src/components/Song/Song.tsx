const Song = (props: SongProps) : React.ReactElement => {
    return (<p>{props.Title} by {props.Artist}</p>);
}

type SongProps = {Title: string, Artist: string};
export default Song;
