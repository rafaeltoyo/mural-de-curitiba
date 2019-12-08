
export default class LocationService {
    static list() {
        return require("./location_data.json");
    }

    static search(id) {
        let list = LocationService.list();
        return list[id];
    }
}
