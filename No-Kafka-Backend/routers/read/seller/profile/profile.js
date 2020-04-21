const express = require('express');
const router = express.Router();

//GET Seller by Id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const seller = await seller.findOne({
      where: {
        id: id,
      },
    });
    if (seller === null) {
      return res.status(404).send('User not found!');
    }
    return res.status(200).send(customer);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Internal Server Error!');
  }
});

router.get('/', async (req, res) => {
    try {
        const sellers = await Seller.find();
        return res.status(200).send(sellers);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!');
    }
});

module.exports = router;
