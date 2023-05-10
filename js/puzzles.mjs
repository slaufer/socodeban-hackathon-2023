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
            "print(8 + 6 * 6 * 2) \n" +
            "",
    },
    {
        filename: "PREPWORK.EXE",
        validator: (x => true),
        par: 1,
        cursor_x: 20,
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
            "print(prepwork())",
    },
    {
        filename: "MAKEWORK.JOB",
        validator: (x => x.output === "0"),
        par: 100,
        cursor_x: 0,
        cursor_y: 8,
        min_width: 0,
        script:
            "# Goal: print the number of jobs created \n" +
            "\n" +
            "class Job(): \n" +
            "    jobs = []\n" +
            "    def create():\n" +
            "        j = Job()          # Help, I'm stuck in a\n" +
            "        Job.jobs.append(j) # socodeban factory!\n" +
            "        return j\n" +
            "\n" +
            "count = # (length for job created by Job.create calls here)\n" +
            "\n" +
            "print(count)",
    },
    {
        filename: "WAITWHAT.HUH",
        validator: (x => x.moves < 10 && x.output === 'Something seems wrong here.'),
        par: 9,
        cursor_x: 17,
        cursor_y: 3,
        min_width: 0,
        script:
            "# Goal: print the starting message -- " +
            "#       in under 10 moves. \n" +
            "\n" +
            "p\n" +
            " rint('Something seems wrong here.') \n" +
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
