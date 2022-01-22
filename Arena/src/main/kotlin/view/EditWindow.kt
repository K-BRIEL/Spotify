package view


import dialog.ErrorDialog
import org.uqbar.arena.kotlin.extensions.*
import org.uqbar.arena.widgets.*
import org.uqbar.arena.windows.SimpleWindow
import org.uqbar.arena.windows.WindowOwner
import org.uqbar.lacar.ui.model.Action
import viewModel.SpotifyVM
import viewModel.UserVM

class EditWindow(owner: WindowOwner, var model: UserVM): SimpleWindow<UserVM>(owner,model){

    var system: SpotifyVM=modelObject.systemVM
    override fun addActions(panelAction: Panel?) {
        Button(panelAction) with {text="Accept"
            width=150

            onClick(
                Action {
                    if(modelObject.userName =="" || modelObject.userPassword ==""|| modelObject.userImage==""){
                        ErrorDialog(this@EditWindow,system,"fill in all fields").open()
                    }else{
                        modelObject.editUser()
                        close()
                        UserWindow(this@EditWindow, modelObject).open()
                    }

                }


            )


        }


        Button(panelAction) with {
            text="Cancel"
            width=150
        onClick(Action { close()
            UserWindow(this@EditWindow, modelObject).open()
        })
        }
    }

    override fun createFormPanel(panelInput: Panel?) {
        title="Spotify"
        Label(panelInput) with {
            text="EDIT USER"
            alignLeft()
            fontSize=12
        }
        Panel(panelInput)with {
            asHorizontal()
            Label(it) with {text="Name      "}
            TextBox(it) with {width=300
                bindTo("userName")}
        }
        Panel(panelInput)with {
            asHorizontal()
            Label(it) with {text="Password"}
            PasswordField(it) with {width=300
                bindTo("userPassword")
            }
        }
        Panel(panelInput)with {
            asHorizontal()

            Label(it) with {text="Image      "}
            TextBox(it) with {width=300
                bindTo("userImage")
                alignRight()
            }
        }

    }



}