package mapper

import org.github.unqui.Playlist
import java.time.LocalDateTime

class PlayListIdMapper(playlist: Playlist) {
    var id:String=playlist.id
    var name:String=playlist.name
    var description:String=playlist.description
    var image: String=playlist.image
    var songs: MutableList<SongMapper> = playlist.songs.map{ SongMapper(it) }.toMutableList()
    var Author: UserBasicMapper =UserBasicMapper(playlist.author)
    var lastModifiedDate:String=playlist.lastModifiedDate.toString()
    var likes: MutableList<UserBasicMapper> = playlist.likes.map{UserBasicMapper(it)}.toMutableList()
    var duration:Int=playlist.duration()



}