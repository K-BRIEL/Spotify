package viewModel

import SpotifyService

import org.github.unqui.*
import org.uqbar.commons.model.annotations.Observable

@Observable
class SpotifyVM (system:SpotifyService){
    var system:SpotifyService =system
    var email:String="a@gmail.com"
    var password:String="a"
    var lists:MutableList<PlaylistVM> = mutableListOf()




    fun addOrRemoveLike(userId: String, playlistId: String): Unit {
        system.addOrRemoveLike(userId,playlistId)
    }

    fun addPlaylist(userId: String, playListDraft: PlayListDraft): Playlist {
      return  system.addPlaylist(userId, playListDraft)
    }

    fun addSong(songDraft: SongDraft): Song {
        return   system.addSong(songDraft)
        }

    fun editUser(userId: String, image:String, password:String,name:String): User {
        return system.editUser(userId, EditUser(image, password,name))
    }

    fun getAllPlaylists():MutableList<PlaylistVM> {
        lists = system.getAllPlaylists().map{PlaylistVM(it,system)}.toMutableList()

        return  lists
    }

    fun getPlaylist(playlistId: String):PlaylistVM {
        return PlaylistVM(system.getPlaylist(playlistId),system)
    }

    fun getAllSongs(): List<Song> {
        return system.getAllSongs()
    }

    fun getUser(userId: String): User {
        return system.getUser(userId)
    }

    fun login(): User {
        return system.login(email,password)
    }

    fun modifyPlaylist(userId: String, playlistId: String, playListDraft: PlayListDraft): Playlist {
        return system.modifyPlaylist(userId, playlistId, playListDraft)
    }

    fun register(userDraft: UserDraft):User {
        return system.register(userDraft)
    }

    fun searchPlaylist(name: String): List<Playlist> {
        return system.searchPlaylist(name)
    }

    fun searchSong(name: String):List<Song> {
        return system.searchSong(name)
    }

    fun searchUser(name: String):List<User> {
        return system.searchUser(name)
    }




}