module Greeting exposing (..)
import Html exposing (text, Html)

view : String -> Html a
view person =
    text ("Hello, " ++ person)

main : Html a
main =
 view "Elm World"
