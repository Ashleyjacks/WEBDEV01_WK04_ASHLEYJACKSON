export default [
    {
        type: 'list',
        name: 'q1',
        message: "What school is this course being taken at?",
        choices: [
            "BRCC",
            "LSU",
            "SUBR"
        ]
    },
    {
        type: 'list',
        name: "q2",
        message: "What does VS stand for in VS code?",
        choices: [
            "Video studio",
            "Visual study",
            "Visual studio"
        ]
    },
    {
        type: 'list',
        name: 'q3',
        message: "What programming language is being used?",
        choices: [
            "CSS",
            "Javascript",
            "C++"
        ]
    },
    {
        type: 'input',
        name: 'q4',
        message: "How many assingments have we completed including this one?",
        choices: [
            4,
            5,
            6,
            2
        ]
    },
]