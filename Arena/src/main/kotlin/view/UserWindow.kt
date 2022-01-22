package view


import dialog.ErrorDialog
import org.github.unqui.Playlist
import org.github.unqui.Song
import org.github.unqui.User
import org.uqbar.arena.kotlin.extensions.*

import org.uqbar.arena.widgets.*
import org.uqbar.arena.windows.*
import org.uqbar.commons.model.exceptions.UserException
import org.uqbar.lacar.ui.model.Action
import viewModel.PlaylistVM
import viewModel.SpotifyVM
import viewModel.UserVM
import java.time.LocalDateTime


class UserWindow(owner: WindowOwner,  model: UserVM): SimpleWindow<UserVM>(owner, model) {

    var system:SpotifyVM=modelObject.systemVM;


    override fun createFormPanel(mainPanel: Panel?) {
        title = "Spotify"
        setMinWidth(220)


        Panel(mainPanel) with {
            width = 800


            Panel(it)with{
                asHorizontal()

                Label(it) with {
                    text = "Id : "
                    width = 35
                    align("left")
                }
                Label(it) with {
                    bindTo("id")
                    width = 220
                    align("left")
                }

            }

            Panel(it)with{
                asHorizontal()

                Label(it) with {
                    text = "Email : "
                    width = 35
                    align("left")
                }
                Label(it) with {
                    bindTo("email")
                    width = 220
                    align("left")
                }

            }

            Panel(it)with{
                asHorizontal()

                Label(it) with {
                    text = "Name : "
                    width = 35
                    align("left")
                }
                Label(it) with {
                    bindTo("userName")
                    width = 220
                    align("left")
                }

            }


            Button(it) with {
                text = "Edit User"
                width = 800
                onClick (Action{

                    close()
                    editProfile()

                } )

            }
            Label(it) with {
                text = "------------------------------------------------------------------"
                width = 220
                align("center")
            }
        }


        Panel(mainPanel) with {


            table<PlaylistVM>(it) {

                bindItemsTo("myPlaylists")
                bindSelectionTo("selected")

                width = 800
                visibleRows = 10
                column {
                    title = "id"

                    bindContentsTo("id")
                    align("center")

                }.setFixedSize(100)
                column {
                    title = "name"

                    align("left")
                    bindContentsTo("name")
                }.setFixedSize(200)

                column {
                    title = "duration (min)"

                    align("left")
                    bindContentsToProperty("durationMin")
                }.setFixedSize(200)

               column {
                    title = "Amount of song"

                    align("left")
                    bindContentsTo("cantSong")
                }.setFixedSize(200)

                column {
                    title = "Image"
                    fixedSize = 100


                    align("left")
                    bindContentsTo("image")
                }

            }
        }


    }

    override fun addActions(mailPanel: Panel?) {
        Button(mailPanel) with {
            text = "Add New playlist"
            width = 100
            onClick {
                close()
                    modelObject.leafInWhite()
                    add()



            }

        }


            Button(mailPanel) with {
                text = "Edit Playlist"
                width = 100
                onClick {
                    if(modelObject.selected==null){

                        ErrorDialog(thisWindow, system ,"select playlist" ).open()
                    }else{
                         close()
                        modelObject.leafFull()
                        edit()
                    }



            }
        }



    }

    fun editProfile(){
        close()
        EditWindow(this , modelObject).open()
    }
    fun add() {


        var songs:MutableList<Song> = mutableListOf()
        var likes:MutableList<User> = mutableListOf()
        var playlist:PlaylistVM=PlaylistVM(Playlist(modelObject.id, "","","", songs,modelObject.user, LocalDateTime.now(),likes),system.system )

        AddAndEditPlayListWindow(this, playlist).open()

    }

    fun edit() {
        try {
            modelObject.selected!!.leafFull()
            AddAndEditPlayListWindow(this, modelObject.selected!!).open()


        } catch (e: UserException) {
            throw  UserException("List not selected")

        }
    }


}

