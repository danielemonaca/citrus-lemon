/* Gets the video ID from a YouTube URL */
/* http://www.youtube.com/watch?v=u8nQa1cJyX8 becomes u8nQa1cJyX8 */
export default function youtubeParser(url){
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match&&match[7].length===11)? match[7] : false;
}
