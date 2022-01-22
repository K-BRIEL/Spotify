package viewModel

import SpotifyService

import org.github.unqui.*
import org.uqbar.commons.model.annotations.Observable

@Observable
class UserVM(user:User, var system:SpotifyService) {

    var selected : PlaylistVM? = null
    var systemVM:SpotifyVM= SpotifyVM(system)

    var user:User= user;
    var userName:String=user.displayName;
    var userPassword:String=user.password;
    var userImage : String=user.image;


    var songs: MutableList<SongVM>? = mutableListOf();
    var isEdit : Boolean=false;


    var songsAll: List<SongVM> = system.getAllSongs().map{
        SongVM(it, systemVM)
    }

   var nameList:String="";
    var descriptionList:String="";
    var imagenList:String="";
    var selectSongAll:SongVM?=null
    var selectSongMyList:SongVM?=null



    public final var displayName:String = user.displayName

    public final val email: String  = user.email

    public final val id: String = user.id

    public final var image: String  = user.image

    public final val likes: MutableList<Playlist>  = user.likes

    var myPlaylists: MutableList<PlaylistVM>  = user.myPlaylists.map{PlaylistVM(it,system)}.toMutableList()


    public final var password: String  = user.password


    fun leafInWhite(){
        isEdit=false;
        songs= mutableListOf()
        nameList="";
        descriptionList="";
        imagenList="";

    }

    fun leafFull(){
        isEdit=true;
        songs= selected!!.songs.map{SongVM(it,systemVM)}.toMutableList();
        nameList =selected!!.name;
        descriptionList =selected!!.description;
        imagenList =selected!!.image;

    }

    fun createDraftList(): PlayListDraft {

        return PlayListDraft(nameList,descriptionList,imagenList,mutableListOf())
    }
    fun editUser(){

        system.editUser(user.id,EditUser(userImage,userPassword,userName))
    }




}