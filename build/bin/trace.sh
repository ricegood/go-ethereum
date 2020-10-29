./geth --datadir "/data/archive_for_cc" --nodiscover --exec "loadScript(\"trace.js\");" console > log/trace_"$1"_"$2"
