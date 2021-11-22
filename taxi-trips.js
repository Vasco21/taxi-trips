module.exports = function(database) {

    const pool = database;



    var totalTripCount = async function () {


    }

    var findAllRegions = async function () {
        const findAll = await pool.query('SELECT * FROM region');
        return findAll.rows
        
    }

    var findTaxisForRegion = async function () {
        const findTaxi = await pool.query('SELECT reg_number FROM taxi');
        return findTaxi.rows

    }

    var findTripsByRegNumber = function () {

    }

    var findTripsByRegion = function () {

    }

    var findIncomeByRegNumber = function () {

    }
    
    var findTotalIncomePerTaxi = function () {

    }
    
    var findTotalIncome = function () {

    }

    var findTotalIncomeByRegion = function () {

    }


    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion
    }
	
}