
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: 'AGHDK472L60', make: 'toyota', model: 'corolla', mileage: 100000},
        {id: 2, vin: 'AG487UTR260', make: 'honda', model: 'civic', mileage: 300000},
        {id: 3, vin: 'GHJTIK47260', make: 'ford', model: 'f150', mileage: 50000},
        
      ]);
    });
};
