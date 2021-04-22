const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagtData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }]
    });

    res.status(200).json(tagData);
  } 
    catch (err) {
      res.status(500).json(err);
    }
});

  // find a single tag by its `id`
  // including its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include:[{model: Product, through: ProductTag}]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
