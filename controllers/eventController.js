const FetchEventLatLong = require("../lib/fetchEventLocationLatandLong");
const FetchEventData = require("../lib/fetchEventData");
// const FetchAirportArrivalsApiData = require("../lib/fetchAirportArrivals");
// const FetchFlightDetailsApiData = require("../lib/fetchFlightDetails");

class EventController {

    /**
    * this function get airports within a certain mile radius
    * @method search
    * @param {String} req - req.body.name string
    * @param {String} res -  string
    * @return {Promise} return JSON Object OF Airport
    */

    static search(req, res) {
       // console.log("EventController-search");
        FetchEventLatLong.doFetchData(req.body.city)
            .then(result => {
                 return FetchEventData.FetchEventData(result)
            })
            .then(result => {
                res.status(200).send(
                 result
                );
            })
            .catch(err => {
                res.status(400).send(err);
            })
    }


}
module.exports = EventController;