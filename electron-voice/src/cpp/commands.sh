# compilation process: https://en.wikibooks.org/wiki/C%2B%2B_Programming/Programming_Languages/C%2B%2B/Code/Compiler/Linker
# Shared library concept: http://ehuss.com/shared/

# 1. Creating the shared library
# Command reference: https://www.oreilly.com/library/view/c-cookbook/0596007612/ch01s05.html
g++ -dynamiclib -fPIC shared.cpp -o shared.so # MacOS

# 2. Creating the main executable file
g++ main.cpp -o main.exe

# 3. Running main executable
./main.exe