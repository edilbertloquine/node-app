function autocomplete(input, latInput, lngInput) {
    if(!input) return;
    const dropdown = new google.maps.places.AutoComplete(input);

    // dropdown.addListener('place_changed', () => {
    //     const place = dropdown.getPlace();
    //     latInput = place.geometry.location.lat();
    //     lngInput = place.geometry.location.lng();
    // });

    input.on('keydown', (e) => {
        if(e.keyCode === 13) e.preventDefault();
    });
}

export default autocomplete;
