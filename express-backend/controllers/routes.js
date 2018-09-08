const router = require("express").Router();
const db = require("../models");

module.exports = function() {


    // TODO: 
    // A. Add passport middleware
    // B. Add more robust input validation taking the user into consideration 
    //       so that only runs associated with the user are updated or deleted

    router.post("/users", function(req, res) {
        // user registration
    });

    //add paths to login and log out


    router.post("/runs", function(req, res) {
        db.Run.create(req.body).then((newRun) => {
            res.json(newRun);
        }).catch((error) => {
            res.json({"error": error});
        });
    });

    router.get("/runs", function(req, res) {
        db.Run.findAll({where: {userId: 1}}).then((allRuns) => {
            res.json(allRuns);
        }).catch((error) => {
            res.json({"error": error});
        })
    });

    router.put("/runs/:id", function(req, res) {
        db.Run.update(req.body, {where: req.params}).then((numberOfRows, updatedRun) => {
            if (!numberOfRows) {
                res.json({"error": "Run not found"});
            } else if (numberOfRows > 1) {
                res.json({"error": "More than one row updated.  This shouldn't happen."});
            } else {
                res.json({"error": null});
            }
        }).catch((error) => {
            res.json({"error": error, "catch": "inside catch"});
        });
    });

    router.delete("/runs/:id", function(req, res) {
        db.Run.destroy({where: req.params}).then((numberOfRows) => {
            if (!numberOfRows) {
                res.json({"error": "Run not found"});
            } else if (numberOfRows > 1) {
                res.json({"error": "More than one row updated.  This shouldn't happen."});
            } else {
                res.json({"error": null});
            }
        }).catch((error) => {
            res.json({"error": error});
        });
    });

    return router;
}