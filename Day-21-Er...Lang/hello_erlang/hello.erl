-module(hello).
-export([start/0]).

start() ->
	io:fwrite("Hello, Erlang! You're a tricky one").
