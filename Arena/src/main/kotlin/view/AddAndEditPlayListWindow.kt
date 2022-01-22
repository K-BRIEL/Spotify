package view



import org.uqbar.arena.kotlin.extensions.*
import org.uqbar.arena.widgets.*
import org.uqbar.arena.windows.SimpleWindow
import org.uqbar.arena.windows.WindowOwner
import viewModel.PlaylistVM
import viewModel.SongVM
import viewModel.SpotifyVM
import viewModel.UserVM

class AddAndEditPlayListWindow(owner: WindowOwner, var model: PlaylistVM): SimpleWindow<PlaylistVM>(owner,model) {
     var system: SpotifyVM= SpotifyVM(modelObject.system)

    override fun createFormPanel(mainPanel: Panel?) {
        title = "Spotify"
        setMinWidth(220)

        Panel(mainPanel) with {
            width = 800

            Panel(it) with {
                asHorizontal()
                Label(it) with {

                    text = "Name:"
                    width = 60


                }
                TextBox(it) with {
                    width = 475
                    bindTo("nameList")
                }
            }

            Panel(it) with {
                asHorizontal()
                Label(it) with {


                    text = "Description"
                    width = 60

                }

                KeyWordTextArea(it) with {
                    height = 50
                    width = 480
                    bindTo("descriptionList")

                }
            }

            Panel(it) with {
                asHorizontal()
                Label(it) with {


                    text = "Image"
                    width = 60

                }
                TextBox(it) with {
                    width = 475
                    bindTo("imagenList")
                }
            }


            Panel(mainPanel) with {
                asHorizontal()

                List<SongVM>(it) with {
                    height = 400
                    width = 250
                    bindItemsTo("songsAll").adaptWithProp<SongVM>("name")
                    bindSelectedTo("selectSongAll")

                }
                Panel(it) with {
                    width = 2000
                    Button(it) with {
                        text = ">"
                        width = 30
                        onClick {
                            try {

                                add()

                            } catch (e: Exception) {

                            }


                        }
                    }
                    Button(it) with {
                        text = "<"
                        width = 30
                        onClick {
                            try {

                                edit()
                            } catch (e: Exception) {

                            }

                        }
                    }
                }
                List<SongVM>(it) with {
                    height = 400
                    width = 250

                    bindItemsTo("songVMs").adaptWithProp<SongVM>("name")
                    bindSelectedTo("selectSongMyList")


                }
            }
        }
    }
    override fun addActions(mainPanel: Panel?) {
        Button(mainPanel) with {
            text = "Aceptar"
            width = 100
            onClick {
                if(modelObject.nameList=="" || modelObject.songs.size==0 ||modelObject.descriptionList==""||modelObject.imagenList==""){
                    dialog.ErrorDialog(this@AddAndEditPlayListWindow, system, "fill in all fields and add songs").open()

                }else {
                    close()

                    if (modelObject.isEdit) {
                        modelObject.editPlaylist()

                    } else {
                        modelObject.addPlaylist()
                    }
                    openUserWindow()
                }
            }

        }

        Panel(mainPanel) with {
            width = 2000
            Button(it) with {
                text = "cancel"
                width = 100
                onClick {

                        close()
                       openUserWindow()

                }
            }
        }





    }



fun add(){
    if(modelObject.selectSongAll== null ){
        dialog.ErrorDialog(this@AddAndEditPlayListWindow, system, "select song").open()
    }else{

        modelObject.addSong()
    }
}

    fun edit(){
        if(modelObject.selectSongMyList== null ){
            dialog.ErrorDialog(this@AddAndEditPlayListWindow, system, "select song").open()
        }else{
            modelObject.deleteSong()
        }
    }

    fun openUserWindow() {
         UserWindow(this@AddAndEditPlayListWindow, UserVM(modelObject.user,system.system )).open()
    }
}


