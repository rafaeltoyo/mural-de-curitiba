
export default class LocationService {
    static load() {
        let data = { locations: [] }
        data = require("./data.json");
        return data ? data.locations : [];
    }

    static list() {
        const list = LocationService.load();

        list.forEach(location => {
            location.img = LocationService.getImg(location.img);
        });

        return list;
    }

    static search(id) {
        const list = LocationService.load();
        
        const location = id >= 0 && list.length > id ? list[id] : null;

        location.img = LocationService.getImg(location.img);

        return location;
    }

    static getImg(id) {
        if (id == 1 || id == '1') return require('../../../assets/utfpr.jpg');
        if (id == 2 || id == '2') return require('../../../assets/Centro_Curitiba.jpg');
        if (id == 3 || id == '3') return require('../../../assets/logo.jpg');
        if (id == 3 || id == '4') return require('../../../assets/Romani.png');
        if (id == 3 || id == '5') return require('../../../assets/Museu.png');
        return require('../../../assets/icon.png');
    }
}
