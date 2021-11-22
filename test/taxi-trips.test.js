let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/my_taxi_tests';

const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

    // beforeEach(async function(){
	
	// });


    it.skip('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.equal(0, taxiTrips.totalTripCount());
    
    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

    assert.deepStrictEqual([{"region_id": 2, "region_name": "Cape Town"}, {"region_id": 1, "region_name": "Durban"}, {"region_id": 3, "region_name": "Gauteng"}], await taxiTrips.findAllRegions());
        

    });

    it.skip('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([{"reg_number": "ND 567-123"},{"reg_number": "ND 132-121"},{"reg_number": "ND 123-111"}], await taxiTrips.findTaxisForRegion('Durban'));
        assert.deepStrictEqual([{"reg_number": "CA 123-123"},{ "reg_number": "CA 111-123"},{"reg_number": "CA 246-111"}], await taxiTrips.findTaxisForRegion('Cape Town'));
        assert.deepStrictEqual([{"reg_number": "GP 567-333"},{"reg_number": "GP 132-121"},{"reg_number": "GP 123-441"}], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it.skip('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        
        assert.deepStrictEqual([], taxiTrips.findTripsByRegNumber('...'));
        assert.deepStrictEqual([], taxiTrips.findTripsByRegNumber('***'));

    });

    it.skip('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Cape Town').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);

    });

    it.skip('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('...').length);
        assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('***').length);

    });

    it.skip('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([{}, {}, {}], taxiTrips.findTotalIncomePerTaxi());

    });

    it.skip('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(0.00, taxiTrips.findTotalIncome());
    });


    after(function () {
        pool.end();
    });

});