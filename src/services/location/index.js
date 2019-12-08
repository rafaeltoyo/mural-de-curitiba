
export default class LocationService {
    static load() {
        let data = { locations: [] }
        data = require("./data.json");
        return data ? data.locations : [];
    }

    static list() {
        let list = LocationService.load();

        list.forEach(location => {
            location.img = LocationService.getImg(location.img);
        });

        return list;
    }

    static search(id) {
        let list = LocationService.load();
        
        let location = id >= 0 && list.length > id ? list[id] : null;

        if (location) {
            location.img = LocationService.getImg(location.img);
        }

        return location;
    }

    static getImg(id) {
        if (id == 1) return require('../../../assets/utfpr.jpg');
        if (id == 2) return require('../../../assets/Centro_Curitiba.jpg');
        return null;
    }
}
