module Greeting exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)

-- Main
main : Html a
main =
 view model

-- Model
model : String
model =
    "Elm World"

-- View
view : String -> Html a
view person =
    div []
        [ h2 [] [ text ("List for: " ++ person) ]
        , ul [class "listclass"] [
            li [] [text "sample item"]
        ]
        , input [
            type_ "text"
            ,placeholder "New Item"] []
        , button [] [text "Add Something"]
        ]
