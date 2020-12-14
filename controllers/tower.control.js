const {
  Towers
} = require('../models');
const {
  Op
} = require('sequelize');

const createTower = async (req, res) => {
  try {
    const tower = await Towers.create(req.body);
    return res.status(201).json({
      tower,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

const listAllTowers = async (req, res) => {
  try {
    const {
      page,
      size,
      title
    } = req.query;
    const {
      limit,
      offset
    } = getPagination(page, size);
    var condition = getCondition(title);
    const towers = await Towers.findAll({
      where: condition,
      limit,
      offset
    });
    const response = getPagingData(towers, page, limit);
    return res.status(200).json({
      towers
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getAllTowers = async (req, res) => {
  try {
    const {
      page,
      size,
      title
    } = req.query;
    const {
      limit,
      offset
    } = getPagination(page, size);
    const towers = await Towers.findAll({
      limit: limit,
      offset: offset
    });
    const response = getPagingData(towers, page, limit);
    return res.status(200).json({
      towers
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getTowerById = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const tower = await Towers.findOne({
      where: {
        id: id
      },
      include: [{
        model: Project
      }]
    });
    if (tower) {
      return res.status(200).json({
        tower
      });
    }
    return res.status(404).send('Towers with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateTower = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const [updated] = await Towers.update(req.body, {
      where: {
        id: id
      }
    });
    if (updated) {
      const updatedTowers = await Towers.findOne({
        where: {
          id: id
        }
      });
      return res.status(200).json({
        tower: updatedTowers
      });
    }
    throw new Error('Towers not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteTower = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const deleted = await Towers.destroy({
      where: {
        id: id
      }
    });
    if (deleted) {
      return res.status(204).send("Towers deleted");
    }
    throw new Error("Towers not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return {
    limit,
    offset
  };
};

const getPagingData = (data, page, limit) => {
  const {
    count: totalItems,
    rows: tutorials
  } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems,
    tutorials,
    totalPages,
    currentPage
  };
};

const getCondition = (title) => {

  return {
    title: {
      [Op.like]: '%' + title + '%'
    },
    description: {
      [Op.like]: '%' + title + '%'
    }
  };

};

module.exports = {
  createTower,
  getAllTowers,
  listAllTowers,
  getTowerById,
  updateTower,
  deleteTower
}
