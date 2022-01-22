package view


import dialog.ErrorDialog
import org.github.unqui.User
import org.uqbar.arena.kotlin.extensions.*
import org.uqbar.arena.widgets.*
import org.uqbar.arena.windows.SimpleWindow
import org.uqbar.arena.windows.WindowOwner
import org.uqbar.lacar.ui.model.Action
import viewModel.SpotifyVM
import viewModel.UserVM


class LoginWindow(owner: WindowOwner, var model: SpotifyVM): SimpleWindow<SpotifyVM>(owner,model){

    override fun addActions(panelAction: Panel?) {
        Button(panelAction)with {
            text="Login"
            width=300
            onClick(Action{
                if (modelObject.email.contains("@")){
                    validation()
                }else{
                    ErrorDialog(this@LoginWindow,modelObject,"email invalid").open()
                }


            })
        }
    }
    override fun createFormPanel(panelInput: Panel?) {
        title="Spotify"


        Label(panelInput) with {
            text="(((Welcome to Spotify)))"
            fontSize=12
        }

        TextBox(panelInput) with {
            width=300
            bindTo("email")
            withFilter {event -> event.potentialTextResult.matches(Regex("[A-Z.a-z0-9_@]*"))}
        }

        Label(panelInput) with {text="Email"}

        PasswordField(panelInput) with {
            width=300
            bindTo("password")
            withFilter {event -> event.potentialTextResult.matches(Regex("[A-Za-z0-9]*"))}
        }

        Label(panelInput) with {text="Password"}

    }

    fun validation(){

        try{
           var user: User = modelObject.login()
            close()
            UserWindow(this, UserVM(user,modelObject.system)).open()

        }catch (e:Exception){
            ErrorDialog(this,modelObject,"Invalid pass or email").open()
        }
    }
}