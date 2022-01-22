package dialog



import org.uqbar.arena.kotlin.extensions.caption
import org.uqbar.arena.kotlin.extensions.text
import org.uqbar.arena.kotlin.extensions.width
import org.uqbar.arena.kotlin.extensions.with
import org.uqbar.arena.widgets.Button
import org.uqbar.arena.widgets.Label
import org.uqbar.arena.widgets.Panel
import org.uqbar.arena.windows.Dialog
import org.uqbar.arena.windows.WindowOwner
import viewModel.SpotifyVM


class ErrorDialog (owner: WindowOwner, model: SpotifyVM, var texto: String) : Dialog<SpotifyVM>(owner,model) {
    override fun createFormPanel(mainPanel: Panel?) {


        Label(mainPanel) with {
            text = texto
            width= 200
        }


        Button(mainPanel) with {
            caption = "Cancel"
            onClick {
                close()
            }
        }
    }

}

