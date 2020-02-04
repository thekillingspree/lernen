import {YELLOW} from '.'

export const DEF_THEME = {
    color: YELLOW,
    isDark: true
}

export const DEF_USER = {
    _id: {$oid: ""},
    username: "",
    email: "",
    current_course: {},
    fname: "",
    token: ""
}

export const DEF_ADMIN = {
    _id: {$oid: ""},
    username: "",
    email: "",
    fname: "",
    token: ""
}

export const DEF_QUIZ = [
    {
        cid: "5e38a45969c6e70d1c93b0b7",
        questions: [
            {
                question: "Inside which HTML element do we put the JavaScript?",
                option: [
                    "<script>",
                    "<link>",
                    "<a>",
                    "<javascript>"
                ],
                correct: "<script>"
            },
            {
                question: "Inside which HTML element do we put the JavaScript?",
                option: [
                    "<script>",
                    "<link>",
                    "<a>",
                    "<javascript>"
                ],
                correct: "<script>"
            },
        ]
    }
]