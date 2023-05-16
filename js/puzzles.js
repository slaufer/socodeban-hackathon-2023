window.Puzzles = [
    {
        filename: "HELOWRLD.INI",
        validator: (x => x.output === "Hello, World!\n"),
        par: 12,
        cursor_x: 30,
        cursor_y: 2,
        min_width: 0,
        script:
            "# Goal: print 'Hello, World!'\n" +
            "# This string has too many spaces!\n" +
            "print('Hello, W o r l d ! ' )\n" +
            "\n\n\n\n\n\n\n",
    },
    {
        filename: "ADDPOWER.SUM",
        validator: (x => x.output === "42\n"),
        par: 25,
        cursor_x: 18,
        cursor_y: 2,
        min_width: 0,
        script:
            "# Goal: print 42 \n" +
            "\n" +
            "print(6 + 6 * 6 * 2) \n" +
            "\n\n\n\n\n",
    },
    {
        filename: "PREPWORK.EXE",
        validator: (_ => true),
        par: 1,
        cursor_x: 18,
        cursor_y: 3,
        min_width: 0,
        script:
            "# Goal: make a hackathon project \n" +
            "def prepwork():\n" +
            "    prep = [\n" +
            "        'outline ~4 puzzles',\n" +
            "        'google libraries',\n" +
            "        'skim docs',\n" +
            "      ]\n" +
            "    return prep\n" +
            "\n" +
            "print(prepwork())\n" +
            "",
    },
    {
        filename: "DICTCOMP.NOT",
        validator: (x => x.output === "{'to': 2, 'here': 4}\n"),
        par: 1000,
        cursor_x: 0,
        cursor_y: 13,
        min_width: 0,
        script:
            "#\n" +
            "# Goal: Print a dictionary mapping the provided\n" +
            "#       odd length strings to their length \n" +
            "#\n" +
            "\n" +
            "# This dictionary comprehension is malformed:\n" +
            "#    it needs 1 ocr 2 components before the 'for'\n" +
            "#    (and there's no division or modulo to be found!) \n" +
            "\n" +
            "result = { \n" +
            "    for s in 'nothing to see here'.split()\n" +
            "    if len(s) == ???\n" +
            "        \n" +
            "        \n" +
            "print(result)\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "",
    },
    {
        filename: "FUNCTION.DEF",
        validator: (x => x.sk.globals.right !== undefined),
        par: 1000,
        cursor_x: 33,
        cursor_y: 0,
        min_width: 0,
        script:
            "#\n" +
            "# Goal: define a function named 'right' \n" +
            "#\n" +
            "\n" +
            "def wrong(): \n" +
            "    return true\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "\n" +
            "",
    },
    {
        filename: "MAKEWORK.JOB",
        validator: (x => x.output === "0\n"),
        par: 1000,
        cursor_x: 0,
        cursor_y: 12,
        min_width: 0,
        script:
            "# Goal: print the number of jobs created \n" +
            "\n" +
            "class Job(): \n" +
            "    jobs = []\n" +
            "    def __init__(self, number):\n" +
            "        # HELP!\n" +
            "        self.number = number\n" +
            "        Job.jobs.append(self)\n" +
            "        # I'm stuck\n" +
            "        # in a socodeban factory!\n" +
            "\n" +
            "[Job(x) for x in range(len('options here'))\n" +
            "\n" +
            "count = # (length for job created by\n" +
            "        #  Job constructor calls here)\n" +
            "\n" +
            "print(count)",
    },
    {
        filename: "WAITWHAT.HUH",
        validator: (x => x.moves < 10 && x.output === 'Something seems wrong here.\n'),
        par: 15,
        cursor_x: 25,
        cursor_y: 3,
        min_width: 0,
        script:
            "# Goal: print starting message -- \n" +
            "#       in under 10 moves. \n" +
            "\n" +
            "    t\n" +
            "prin ('Something seems ' +\n" +
            "      'wrong here.') \n" +
            "\n\n\n\n\n",
    },
    {
        filename: "THEONLY1.BAD",
        validator: (x => x.output === "1\n"),
        par: 36,
        cursor_x: 27,
        cursor_y: 1,
        min_width: 0,
        script:
            "#\n" +
            "# Goal: print the digit one \n" +
            "#\n" +
            "print( ) \n" +
            "\n\n\n\n",
    },
];

const savedPuzzles = localStorage.puzzles;

if (savedPuzzles) {
    try {
        window.Puzzles = JSON.parse(savedPuzzles, (k,v) => k === 'validator' ? eval(v.replace('\n', '\\n').replace('\r', '\\r')) : v);
    } catch(e) {
        console.error(e);
    }    
}

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
