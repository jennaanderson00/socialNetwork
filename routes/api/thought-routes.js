const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    addReaction,
    removeReaction,
    removeThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .get(getThoughtById)
    .post(addThought)
    .delete(removeThought);

router
    .route('/:thoughtId/reactions')
    .put(addReaction)
    .delete(removeReaction);

module.exports = router; 