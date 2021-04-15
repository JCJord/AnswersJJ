const express = require("express");
const router = express.Router();
const Question = require("../model/questions");
const answer = require("../model/answer");

router.get("/", (req, res) => {
    Question.findAll({ raw: true, order: [["id", "DESC"]] }).then(
        (questions) => {
            res.render(__dirname + "/../views/index", {
                questions: questions,
            });
        }
    );
});

router.get("/question", (req, res) => {
    res.render(__dirname + "/../views/question");
});

router.post("/add", (req, res) => {
    var title = req.body.title;
    var desc = req.body.description;

    Question.create({
        title: title,
        description: desc,
    })
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log("cant save question" + err);
        });
});

router.get("/question/:id", (req, res) => {
    var id = req.params.id;
    Question.findOne({
        where: { id: id },
    }).then((question) => {
        if (question != undefined) {
            answer
                .findAll({
                    where: { questionId: question.id },
                })
                .then((answers) => {
                    res.render(__dirname + "/../views/ask", {
                        question: question,
                        answers: answers,
                    });
                });
        } else {
            res.redirect("/");
        }
    });
});

router.post("/answer", (req, res) => {
    var body = req.body.body;
    var questionId = req.body.questionId;

    answer
        .create({
            body: body,
            questionId: questionId,
        })
        .then(() => {
            res.redirect("/question/" + questionId);
        });
});

module.exports = router;
