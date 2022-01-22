package viewModel

import SpotifyService
import org.github.unqui.PlayListDraft
import org.github.unqui.Playlist
import org.github.unqui.Song
import org.github.unqui.User
import org.uqbar.commons.model.annotations.Observable
import java.time.LocalDateTime



@Observable
class PlaylistVM (playList: Playlist, var system:SpotifyService){
    var playList:Playlist = playList;






    val user: User =playList.author

    var description: String  =playList.description

    val id: String  =playList.id

    var image: String  =playList.image

    var lastModifiedDate: LocalDateTime  =playList.lastModifiedDate

    val likes: MutableList<User>  =playList.likes

    var name: String  =playList.name

    var songs: MutableList<Song>  = playList.songs.toMutableList()

    var songVMs: MutableList<SongVM>  = songs.map{SongVM(it,SpotifyVM(system))}.toMutableList()

    var cantSong: Int = songs.size

    fun duration():Int {
        return playList.duration()
    }
    fun durationMin():String{
        return  (this.duration() /60).toString() + " min   "+ (this.duration()%60 ).toString() + " seg"
    }

    fun addSong(song:Song){
        songs.add(song)
    }

    fun removeSong(song:Song){
        songs.remove(song)
    }


    var isEdit : Boolean=false;


    var songsAll: List<SongVM> = system.getAllSongs().map{
        SongVM(it, SpotifyVM(system))
    }

    var nameList:String="";
    var descriptionList:String="";
    var imagenList:String="";
    var selectSongAll:SongVM?=null
    var selectSongMyList:SongVM?=null

    fun leafInWhite(){
        isEdit=false;
        songVMs= mutableListOf()
        nameList="";
        descriptionList="";
        imagenList="";

    }

    fun leafFull(){
        isEdit=true;
        nameList =name;
        descriptionList =description;
        imagenList =image;

    }

    fun editPlaylist(){
        system.modifyPlaylist(user.id, id, PlayListDraft(nameList,descriptionList,imagenList,songs))
    }

    fun addPlaylist(){
            system.addPlaylist(user.id, PlayListDraft(nameList, descriptionList, imagenList, songs))
    }

    fun addSong(){
        addSong(selectSongAll!!.song)
        songVMs=songs.map { SongVM(it,SpotifyVM(system)) }.toMutableList()
    }

    fun deleteSong(){
        removeSong(selectSongMyList!!.song)
        songVMs=songs.map { SongVM(it,SpotifyVM(system)) }.toMutableList()
    }


}