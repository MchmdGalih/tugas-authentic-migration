const Bus = require("../models").Bus;

exports.findAllBuses = async (req, res) => {
  try {
    const buses = await Bus.findAll();
    const response = {
      status_response: true,
      message: buses.length + " buses data",
      errors: null,
      data: buses,
    };
    res.status(200).send(response);
  } catch (error) {
    const response = {
      status_response: false,
      message: error.message,
      errors: error.message,
      data: null,
    };
    res.status(500).send(response);
  }
};

exports.addBus = async (req, res) => {
  try {
    const { name, capacity, numberPlate } = req.body;
    const bus = await Bus.create({ name, capacity, number_plate: numberPlate });
    const response = {
      status_response: true,
      message: "Data bus created",
      errors: null,
      data: bus,
    };
    res.status(200).send(response);
  } catch (error) {
    const response = {
      status_response: false,
      message: error.message,
      errors: error.message,
      data: null,
    };
    res.status(500).send(response);
  }
};

exports.findOneBus = async (req, res) => {
  const { id } = req.params;
  try {
    const bus = await Bus.findOne({
      where: { id },
    });
    if (!bus) {
      const response = {
        status_response: false,
        message: "Bus not found",
        errors: "Error",
        data: null,
      };
      res.status(400).send(response);
      return;
    }
    const response = {
      status_response: true,
      message: bus.length + " bus data",
      errors: null,
      data: bus,
    };
    res.status(200).send(response);
  } catch (error) {
    const response = {
      status_response: false,
      message: error.message,
      errors: error.message,
      data: null,
    };
    res.status(500).send(response);
  }
};

exports.updateBus = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, capacity, numberPlate } = req.body;
    const bus = await Bus.findOne({
      where: { id },
    });
    if (!bus) {
      const response = {
        status_response: false,
        message: "Bus not found",
        errors: "Error",
        data: null,
      };
      res.status(400).send(response);
      return;
    }
    bus.set({
      name: name || bus.name,
      number_plate: numberPlate || bus.number_plate,
      capacity: capacity || bus.capacity,
    });
    const response = {
      status_response: true,
      message: bus.length + " bus data",
      errors: null,
      data: bus,
    };
    res.status(200).send(response);
  } catch (error) {
    const response = {
      status_response: false,
      message: error.message,
      errors: error.message,
      data: null,
    };
    res.status(500).send(response);
  }
};

exports.deleteBus = async (req, res) => {
  try {
    const { id } = req.params;
    const bus = await Bus.findOne({
      where: { id },
    });
    if (!bus) {
      const response = {
        status_response: false,
        message: "Bus not found",
        errors: "Error",
        data: null,
      };
      res.status(400).send(response);
      return;
    }
    await Bus.destroy({
      where: { id },
    });
    const response = {
      status_response: true,
      message: "Data bus has been deleted",
      errors: null,
      data: null,
    };
    res.status(200).send(response);
  } catch (error) {
    const response = {
      status_response: false,
      message: error.message,
      errors: error.message,
      data: null,
    };
    res.status(500).send(response);
  }
};
