package application




import org.github.unqui.getSpotifyService
import org.uqbar.arena.Application
import org.uqbar.arena.windows.Window
import view.LoginWindow
import viewModel.SpotifyVM


class SpotifyApplication: Application() {
    val system = getSpotifyService()

    override fun createMainWindow(): Window<*> {

        return LoginWindow(this, SpotifyVM(system))
    }
}

fun main() {
    SpotifyApplication().start()
}
