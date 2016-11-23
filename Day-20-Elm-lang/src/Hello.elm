module Greeting exposing (..)
import Html exposing (..)

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
        , input [] []
        , button [] [text "Add Something"]
        ]
