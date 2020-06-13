// const bsService = require('../services/businessServices');

//TODO: any data validation would happen within these functions

const getBusinessList = (request, response, next) => {
  //return bsService.getBusinessesService(request, response);
  //response.send('Test');
};

const getBusinessById = (request, response, next) => {
  //   return bsService.getBusinessByIdService(request, response);
};

const addBusiness = (request, response, next) => {
  //   return bsService.createBusinessService(request, response);
};

const updateBusiness = (request, response, next) => {
  //   return bsService.updateBusinessService(request, response);
};

const deleteBusiness = (request, response, next) => {
  //   return bsService.deleteBusinessService(request, response);
};

module.exports = {
  getBusinessList,
  getBusinessById,
  addBusiness,
  updateBusiness,
  deleteBusiness,
};
