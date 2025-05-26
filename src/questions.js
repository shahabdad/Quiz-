const questions = [
  {
    question: "Which of the following is the correct syntax to output \"Hello World\" in C++?",
    options: [
      "cout << 'Hello World';",
      "print('Hello World');",
      "Console.WriteLine('Hello World');",
      "echo 'Hello World';"
    ],
    answer: "cout << 'Hello World';"
  },
  {
    question: "Which header file is required for input/output in C++?",
    options: [
      "<iostream>",
      "<stdio.h>",
      "<conio.h>",
      "<inputoutput>"
    ],
    answer: "<iostream>"
  },
  {
    question: "What is the correct way to declare a variable in C++?",
    options: [
      "int num = 5;",
      "num = int 5;",
      "int = num 5;",
      "declare int num = 5;"
    ],
    answer: "int num = 5;"
  },
  {
    question: "Which operator is used to allocate memory dynamically in C++?",
    options: [
      "alloc",
      "malloc",
      "new",
      "create"
    ],
    answer: "new"
  },
  {
    question: "What is the size of `int` on most 64-bit compilers?",
    options: [
      "2 bytes",
      "4 bytes",
      "8 bytes",
      "Depends on compiler"
    ],
    answer: "4 bytes"
  },
  {
    question: "Which keyword is used to define a class in C++?",
    options: [
      "object",
      "define",
      "struct",
      "class"
    ],
    answer: "class"
  },
  {
    question: "How do you comment a single line in C++?",
    options: [
      "# This is a comment",
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */"
    ],
    answer: "// This is a comment"
  },
  {
    question: "Which keyword is used for inheritance in C++?",
    options: [
      "inherits",
      "extends",
      "base",
      ":"
    ],
    answer: ":"
  },
  {
    question: "Which of the following is a correct function declaration?",
    options: [
      "int add(int a, int b)",
      "function add(int a, int b)",
      "int add = function(a, b)",
      "void add = (int a, int b)"
    ],
    answer: "int add(int a, int b)"
  },
  {
    question: "What is a constructor in C++?",
    options: [
      "A function that returns a class",
      "A special function that is automatically called when an object is created",
      "A method that destroys the object",
      "A variable that holds class data"
    ],
    answer: "A special function that is automatically called when an object is created"
  },
  {
    question: "Which keyword is used to create constant variables in C++?",
    options: [
      "final",
      "const",
      "static",
      "immutable"
    ],
    answer: "const"
  },
  {
    question: "What is the correct syntax for a `for` loop?",
    options: [
      "for (int i=0; i<10; i++)",
      "loop for i=1 to 10",
      "foreach (i in 10)",
      "for (i = 0 to 10)"
    ],
    answer: "for (int i=0; i<10; i++)"
  },
  {
    question: "Which function is used to read input from the user?",
    options: [
      "input()",
      "read()",
      "cin",
      "scanf"
    ],
    answer: "cin"
  },
  {
    question: "What will `sizeof(char)` return in C++?",
    options: [
      "2",
      "4",
      "1",
      "8"
    ],
    answer: "1"
  },
  {
    question: "Which is used to prevent a class from being inherited?",
    options: [
      "static",
      "sealed",
      "final",
      "private"
    ],
    answer: "final"
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: [
      "for loop",
      "while loop",
      "do-while loop",
      "if loop"
    ],
    answer: "do-while loop"
  },
  {
    question: "Which keyword is used to release dynamically allocated memory?",
    options: [
      "delete",
      "free",
      "remove",
      "dispose"
    ],
    answer: "delete"
  },
  {
    question: "Which of the following is not a C++ data type?",
    options: [
      "float",
      "real",
      "char",
      "bool"
    ],
    answer: "real"
  },
  {
    question: "Which concept allows the same function to behave differently?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction"
    ],
    answer: "Polymorphism"
  },
  {
    question: "What is the extension of a C++ source file?",
    options: [
      ".cxx",
      ".cpp",
      ".cc",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which function ends the program in C++?",
    options: [
      "terminate()",
      "end()",
      "exit()",
      "stop()"
    ],
    answer: "exit()"
  },
  {
    question: "What is the purpose of a destructor in C++?",
    options: [
      "To allocate memory",
      "To initialize objects",
      "To deallocate memory",
      "To inherit classes"
    ],
    answer: "To deallocate memory"
  },
  {
    question: "Which symbol is used for the scope resolution operator?",
    options: [
      "::",
      "->",
      ".",
      ":"
    ],
    answer: "::"
  },
  {
    question: "Which of the following is not a valid access specifier in C++?",
    options: [
      "public",
      "protected",
      "private",
      "internal"
    ],
    answer: "internal"
  },
  {
    question: "Which standard library in C++ is used for string manipulation?",
    options: [
      "<string>",
      "<strlib>",
      "<cstring>",
      "<manip>"
    ],
    answer: "<string>"
  },
  {
    question: "Which keyword is used to handle exceptions in C++?",
    options: [
      "try",
      "catch",
      "throw",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "What is the default access specifier for members of a class in C++?",
    options: [
      "private",
      "public",
      "protected",
      "global"
    ],
    answer: "private"
  },
    // {
    //   question: "What is the output of: `cout << 5 / 2;`?",
    //   options: [
    //     "2.5",
    //     "2",
    //     "2.0",
    //     "5/2"
    //   ],
    //   answer: "2"
    // }
];

export default questions;
