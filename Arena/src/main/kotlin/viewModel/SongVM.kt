package viewModel

import org.github.unqui.Song
import org.uqbar.commons.model.annotations.Observable

@Observable
class SongVM (var song: Song ,model: SpotifyVM){

    var id: String = ""
    var band: String = ""
    var duration: Int = 0
    var name: String = ""
    var url: String = ""

    init{
        this.id = song.id
        this.band = song.band
        this.duration = song.duration
        this.name = song.name
        this.url = song.url

    }
}