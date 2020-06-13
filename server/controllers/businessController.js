// const bsService = require('../services/businessServices');

//TODO: any data validation would happen within these functions

const getBusinessList = (request, response) => {
  //   return bsService.getBusinessesService(request, response);
};

const getBusinessById = (request, response) => {
  //   return bsService.getBusinessByIdService(request, response);
};

const addBusiness = (request, response) => {
  //   return bsService.createBusinessService(request, response);
};

const updateBusiness = (request, response) => {
  //   return bsService.updateBusinessService(request, response);
};

const deleteBusiness = (request, response) => {
  //   return bsService.deleteBusinessService(request, response);
};

module.exports = {
  getBusinessList,
  getBusinessById,
  addBusiness,
  updateBusiness,
  deleteBusiness,
};
