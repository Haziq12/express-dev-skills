import * as skillsDb from "../data/skills-db.js"

function index(req, res) {
  skillsDb.find({}, function (error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
}

function show(req, res) {
  skillsDb.findById(req.params.id, function (error, skills) {
    res.render('skills/show', {
      skills: skills,
      error: error
    })
  })
}

function create(req, res) {
  // req.body - request on body means what exactly
  // from notion: The properties on req.body will always match the values of the <input>’s name attributes:
  // does that mean by setting the inputs name attribute that attribute will be the key to the input
  skillsDb.create(req.body, function(error, skill) {
    res.redirect('/skills')
  })
}

function newSkills(req, res) {
  res.render('skills/new')
}

function deleteSkill(req, res) {
  skillsDb.findByIdAndDelete(req.params.id, function(error, todo) {
    res.redirect('/skills')
  })
}

export {
  index,
  show,
  newSkills as new,
  create,
  deleteSkill as delete
}