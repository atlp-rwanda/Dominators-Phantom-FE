import { useMapEvents } from 'react-leaflet';

export default function EventComponent({props}) {
  const map = useMapEvents({
    click: (e) => {
      props.setCurrentLoc(e.latlng);
    },
    locationfound: (location) => {
      console.log('location found:', location.latlng)
    },
  })
  return null
}
