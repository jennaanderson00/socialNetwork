const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    addReaction,
    updateThought,
    removeReaction,
    removeThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought);

router
    .route('/:id')
    .get(getThoughtById)
    .post(addThought)
    .put(updateThought)
    .delete(removeThought);

router
    .route('/:id/reactions')
    .post(addReaction)
    .delete(removeReaction);

module.exports = router; 