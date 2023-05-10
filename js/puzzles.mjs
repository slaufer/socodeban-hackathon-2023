export default [
    {
        filename: "HELOWRLD.INI",
        validator: (x => x.output === "Hello, World!"),
        par: 8,
        cursor_x: 30,
        cursor_y: 1,
        min_width: 0,
        script:
            "# Goal: print 'Hello, World!'\n" +
            "# This string has too many spaces!\n" +
            "print('Hello, W o r l d ! )\n" +
            "",
    },
    {
        filename: "ADDPOWER.SUM",
        validator: (x => x.output === "42"),
        par: 18,
        cursor_x: 17,
        cursor_y: 2,
        min_width: 0,
        script:
            "# Goal: print the number 42 \n" +
            "\n" +
            "print(8 + 6 * 6 * 1) \n" +
            "",
    },
]

/*
Template
    {
        filename: "",
        validator: (x => x),
        par: 0,
        cursor_x: 0,
        cursor_y: 0,
        min_width: 0,
        script:
        "\n" +
        "\n" +
        "",
    },
*/
