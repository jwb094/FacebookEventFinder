let EventSearch = require("facebook-events-by-location-core");
let EventModel = require("../model/eventModel");
let ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

class FetchApiData {
    /** 
    This function calls an anpi which gather airports within a given miles radius 
    * @method doFetchSearchFlightDetails
    * @param {Array} EventLatLong - array
    * @return {Promise}  return  data called from API 
    */

    static FetchEventData(EventLatLong) {
        return new Promise(
            (resolve, reject) => {
                let eLSearch = new EventSearch({
                    "lat": EventLatLong[0],
                    "lng": EventLatLong[1],
                    accessToken: ACCESS_TOKEN
                });
                eLSearch.search().then(function (events) {
                        let result = JSON.stringify(events);
                        console.log("hello" + result);
                        resolve(result);

                    }).catch(function (error) {
                        reject(error)
                    });
            });
    }
}

module.exports = FetchApiData;