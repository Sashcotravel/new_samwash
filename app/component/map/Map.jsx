"use client"

import {GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import {defaultTheme} from "./Theme";
import {useMemo} from "react";
import m from "./map.module.css";
import image6 from "/public/mainPage/map/mapIcon.svg";



const coordinates = [
    {
        center: {lat: 49.4042, lng: 24.6073},
        title: 'SAMWASH Ужгород',
        url: '/all-car-wash/zakarpatska-oblast/6/korytnianska'
    },
    {
        center: {lat: 49.8223, lng: 23.9562},
        title: 'SAMWASH ХУСТ',
        url: '/all-car-wash/zakarpatska-oblast/10/lvivska'
    },
    {
        center: {lat: 50.0168, lng: 32.9998},
        title: 'SAMWASH ЛУБНИ',
        url: '/all-car-wash/poltavska-oblast/7/avangardna'
    },
    {
        center: {lat: 50.7435, lng: 25.3114},
        title: 'SAMWASH ЛУЦЬК',
        url: '/all-car-wash/volynska-oblast/6/okruzhna'
    },
    {
        center: {lat: 49.2718, lng: 23.8084},
        title: 'SAMWASH СТРИЙ',
        url: '/all-car-wash/lvivska-oblast/6/promyslova-16'
    },
    {
        center: {lat: 49.8369, lng: 23.9665},
        title: 'SAMWASH ЛЬВІВ',
        url: '/all-car-wash/lvivska-oblast/6/lviv2'
    },
    {
        center: {lat: 49.8668, lng: 24.0552},
        title: 'SAMWASH ЛЬВІВ',
        url: '/all-car-wash/lvivska-oblast/6/halytska-2-h'
    },
    {
        center: {lat: 49.8042, lng: 23.9802},
        title: 'SAMWASH ЛЬВІВ',
        url: '/all-car-wash/lvivska-oblast/2/lviv1'
    },
    {
        center: {lat: 49.8679, lng: 23.9535},
        title: 'SAMWASH ЛЬВІВ',
        url: '/all-car-wash/lvivska-oblast/10/bohdan-khmelnytskyi-200'
    },
    {
        center: {lat: 50.2766, lng: 24.6230},
        title: 'SAMWASH РАДЕХІВ',
        url: '/all-car-wash/lvivska-oblast/6/halytska-2-h'
    },
    {
        center: {lat: 48.1971, lng: 22.6370},
        title: 'SAMWASH БЕРЕГОВЕ',
        url: '/all-car-wash/zakarpatska-oblast/6/lisova'
    },
    {
        center: {lat: 49.7747, lng: 23.6701},
        title: 'SAMWASH ГОРОДОК',
        url: '/all-car-wash/lvivska-oblast/5/lvivska-38'
    },
    {
        center: {lat: 49.2265, lng: 28.4850},
        title: 'SAMWASH Вінниця',
        url: '/all-car-wash/vinnytska-oblast/5/pirogov-135'
    },
    {
        center: {lat: 49.0845, lng: 28.6481},
        title: 'SAMWASH Лука-Мелешківська',
        url: '/all-car-wash/vinnytska-oblast/5/T0212'
    },
    {
        center: {lat: 51.2388, lng: 24.0355},
        title: 'SAMWASH Любомль',
        url: '/all-car-wash/volynska-oblast/4/brestska-4'
    },
    {
        center: {lat: 49.7488, lng: 24.1491},
        title: 'SAMWASH Давидів',
        url: '/all-car-wash/lvivska-oblast/4/lvivskaya'
    },
    {
        center: {lat: 49.4745, lng: 24.1290},
        title: 'SAMWASH Новий Розділ',
        url: '/all-car-wash/lvivska-oblast/4/noviy-rozdil'
    },
    {
        center: {lat: 49.9095, lng: 23.4802},
        title: 'SAMWASH Терновиця',
        url: '/all-car-wash/lvivska-oblast/4/ternovitsa'
    },
    {
        center: {lat: 49.5725, lng: 22.7788},
        title: 'SAMWASH Добромиль',
        url: '/all-car-wash/lvivska-oblast/4/khirivska-24'
    },
    {
        center: {lat: 50.9330, lng: 28.5956},
        title: 'SAMWASH Коростень',
        url: '/all-car-wash/zhitomirska-oblast/4/chelovska'
    },
    {
        center: {lat: 49.0869, lng: 29.0719},
        title: 'SAMWASH Іллінці',
        url: '/all-car-wash/vinnytska-oblast/3/T0606'
    },
    {
        center: {lat: 48.0545, lng: 24.2128},
        title: 'SAMWASH Рахів',
        url: '/all-car-wash/zakarpatska-oblast/3/myru'
    },
    {
        center: {lat: 50.6110, lng: 26.6921},
        title: 'SAMWASH Монастирське',
        url: '/all-car-wash/ternopilska-oblast/3/mykhailo-hrushevskyi-1'
    },
    {
        center: {lat: 49.4083, lng: 24.6023},
        title: 'SAMWASH Рогатин',
        url: '/all-car-wash/frankivska-oblast/3/horodetsky-27'
    },
    {
        center: {lat: 49.8223, lng: 23.9563},
        title: 'SAMWASH Львів',
        url: '/all-car-wash/lvivska-oblast/6/shevchenko-360-h'
    },
    {
        center: {lat: 49.3532, lng: 23.5169},
        title: 'SAMWASH Дрогобич',
        url: '/all-car-wash/lvivska-oblast/2/truskavets-71'
    },
    {
        center: {lat: 48.5304, lng: 25.0412},
        title: 'SAMWASH Коломия',
        url: '/all-car-wash/frankivska-oblast/4/kolomyia'
    },
    {
        center: {lat: 49.5325, lng: 25.6146},
        title: 'SAMWASH Тернопіль',
        url: '/all-car-wash/ternopilska-oblast/6/textile-22'
    },
]

function Map() {

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: 'AIzaSyD4-Ca3XmVM77RpqrahMOrkqfwhFsvUvrg'
    });

    const defaultOption = {
        panControl: true, mapTypeControl: false, scaleControl: false, streetViewControl: false,
        rotateControl: false, fullscreenControl: false, disableDoubleClickZoom: true, styles: defaultTheme
    }

    const Map = () => {
        const center = useMemo(() => ({ lat: 48.385, lng: 29.183 }), [])
        return <GoogleMap zoom={7} center={center} mapContainerClassName={m.map_container}
                          options={defaultOption}>
            { coordinates.map((item, index) => {
                let center = item.center;
                return <MarkerF position={center} icon={image6} key={index} title={item.title} />})}
        </GoogleMap>
    }

    const Home = () => {
        if(!isLoaded) return <div>Завантаження...</div>
        return <Map />
    }

    return Home()
}

export default Map;